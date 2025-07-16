"use client";

import { useState } from "react";

import Spinner from "@/shared/components/Spinner/Spinner";

import TableElement from "./components/TableElement/TableElement";
import TableHead from "./components/TableHead/TableHead";
import { sortingFn } from "./utils/sorting";

import styles from "./Table.module.scss";

type Props = {
	refferals: {
		date: string;
		refferal_email: string;
		reffiled: number;
		mining: number;
		profit: number;
	}[];
	loading: boolean;
};

const Table = ({ loading, refferals }: Props) => {
	const [filter, setFilter] = useState("");
	const [up, setUp] = useState(true);

	const dynamicHeight = `calc(45px * ${
		refferals.length
	} + 24px + ${refferals.length * 2}px)`;

	return (
		<>
			{loading ? (
				<div className={styles.spinning}>
					<Spinner />
				</div>
			) : (
				<>
					{refferals.length === 0 ? (
						<p className={styles.text}>
							There are no invited users. <br /> Copy the code and invite your
							friends!
						</p>
					) : (
						<table
							className={styles.tabel}
							style={{ height: `${refferals.length * 80 + 30}px` }}
						>
							<TableHead
								dynamicHeight={dynamicHeight}
								filter={filter}
								setFilter={setFilter}
								setUp={setUp}
								up={up}
							/>
							<tbody>
								{sortingFn(refferals, filter, up).map((el, i) => (
									<TableElement {...el} key={i} />
								))}
							</tbody>
						</table>
					)}
				</>
			)}
		</>
	);
};

export default Table;
