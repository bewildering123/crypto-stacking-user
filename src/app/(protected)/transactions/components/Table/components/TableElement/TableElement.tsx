import React from "react";

import styles from "./TableElement.module.scss";

type Props = {
	date: string;
	amount: number;
	type: string;
	status: string;
	current_type: string;
};

const TableElement = ({ amount, date, status, type, current_type }: Props) => {
	const data = date.split("T");

	return (
		<tr>
			<th className={styles.first}>{data[0] + " " + data[1].split(".")[0]}</th>
			<th>
				{Math.ceil(amount * 10000) / 10000} {current_type}
			</th>
			<th>{type}</th>
			<th className={styles.last}>{status}</th>
		</tr>
	);
};

export default TableElement;
