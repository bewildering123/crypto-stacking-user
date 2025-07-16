"use client";

import { useState } from "react";

import TableHead from "./components/TableHead/TableHead";
import TableBody from "./TableBody";

import styles from "./Table.module.scss";

type Props = {
	type: string;
};

const Table = ({ type: current_type }: Props) => {
	const [filter, setFilter] = useState("");

	const [lenght, setLenght] = useState(0);
	const [up, setUp] = useState(true);

	const dynamicHeight = `calc(45px * ${lenght || 0} + 24px + ${(length || 0) * 2}px)`;

	return (
		<>
			<table className={styles.tabel}>
				<TableHead
					dynamicHeight={dynamicHeight}
					filter={filter}
					setFilter={setFilter}
					setUp={setUp}
					up={up}
				/>
				{current_type.toLowerCase() === "usdt" ? (
					<TableBody
						setLenght={setLenght}
						current_type={current_type}
						sorting={filter}
						type={up}
						table_type="usdt"
						key={"usdt"}
					/>
				) : current_type.toLowerCase() === "aisc" ? (
					<TableBody
						setLenght={setLenght}
						current_type={current_type}
						sorting={filter}
						type={up}
						table_type="aics"
						key={"aisc"}
					/>
				) : (
					<TableBody
						setLenght={setLenght}
						current_type={current_type}
						sorting={filter}
						type={up}
						table_type="hat"
						key={"hat"}
					/>
				)}
			</table>
		</>
	);
};

export default Table;
