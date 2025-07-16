import { useQuery } from "@apollo/client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { client } from "@/integrations/apollo/client";
import { useLoadMore } from "@/integrations/apollo/utils/useLoadMore";
import { GetTransactionsQuery } from "@/integrations/graphql-codegen/generated/graphql";
import LoadMoreTrigger from "@/shared/components/LoadMoreTrigger/LoadMoreTrigger";
import Spinner from "@/shared/components/Spinner/Spinner";

import {
	getTransactions,
	unwappedTransactions,
} from "../../queries/getTransactions";
import TableElement from "./components/TableElement/TableElement";
import { sortingFn } from "./utils/sorting";

import styles from "./Table.module.scss";

type Props = {
	sorting: string;
	type: boolean;
	current_type: string;
	setLenght: Dispatch<SetStateAction<number>>;
	table_type: "usdt" | "aics" | "hat";
};

const TableBody = ({
	sorting,
	type,
	current_type,
	setLenght,
	table_type,
}: Props) => {
	const [fetchedData, setFetchedData] = useState<
		GetTransactionsQuery | undefined
	>(undefined);

	const { loading, data, fetchMore, refetch } = useQuery(getTransactions, {
		client,
		variables: {
			currency_type: table_type,
			page: 1,
		},
		fetchPolicy: "network-only",
	});

	useEffect(() => {
		if (data) {
			setFetchedData(data);
		}
		if (!loading && data?.getTransactions?.docs?.length === 0) {
			refetch();
		}
	}, [data]);

	const transactions = unwappedTransactions(fetchedData);

	const { hasNextPage, nextPage, page } = data?.getTransactions || {};

	const { loadMore, loading: loadMoreLoad } = useLoadMore({
		fetchMore,
		endCursor: nextPage || page || 1,
	});

	useEffect(() => {
		if (!loading) {
			setLenght(transactions.length || 0);
		}
	}, [table_type, transactions]);

	return (
		<>
			<tbody>
				{sortingFn(transactions, sorting, type)
					.filter((el) => el.amount !== 0)
					.map(({ amount, date, status, type }, i) => (
						<TableElement
							current_type={current_type}
							amount={amount}
							date={date}
							status={status}
							type={type}
							key={i}
						/>
					))}
			</tbody>
			{(loading || loadMoreLoad) && (
				<div className={styles.spinner}>
					<Spinner />
				</div>
			)}
			<LoadMoreTrigger
				hasNextPage={hasNextPage}
				isLoading={loadMoreLoad || loading}
				loadMore={loadMore}
			/>
		</>
	);
};

export default TableBody;
