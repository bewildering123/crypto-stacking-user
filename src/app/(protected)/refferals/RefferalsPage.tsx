"use client";

import { useQuery } from "@apollo/client";

import { client } from "@/integrations/apollo/client";

import RefferalsContainer from "./components/RefferalsContainer/RefferalsContainer";
import {
	getRefferalTable,
	unwappedRefferalTable,
} from "./components/Table/queries/getRefferalTable";
import Table from "./components/Table/Table";

import styles from "./refferals.module.scss";

export default function RefferalsPage() {
	const { loading, data } = useQuery(getRefferalTable, {
		client,
	});

	const refferals = unwappedRefferalTable(data);

	return (
		<div className={styles.container}>
			<p className={styles.title}>Refferals</p>
			<div className={styles.contentContainer}>
				<div className={styles.table}>
					<Table loading={loading} refferals={refferals} />
				</div>
				<RefferalsContainer
					earned_aics={refferals.reduce((sum, el) => sum + el.profit, 0)}
					total={refferals.length}
				/>
			</div>
		</div>
	);
}
