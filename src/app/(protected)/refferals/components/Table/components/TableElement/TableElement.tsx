import React from "react";

import styles from "./TableElement.module.scss";

type Props = {
	date: string;
	refferal_email: string;
	reffiled: number;
	mining: number;
	profit: number;
};

const TableElement = ({
	date,
	mining,
	profit,
	refferal_email,
	reffiled,
}: Props) => {
	const data = date.split("T");
	const emailSplit = refferal_email.split("@");

	return (
		<tr>
			<th className={styles.first}>{data[0] + " " + data[1].split(".")[0]}</th>
			<th>{emailSplit[0].slice(0, 5) + "...@" + emailSplit[1]}</th>
			<th>{reffiled} USDT</th>
			<th>{Math.floor(mining * 10000) / 10000} AICS</th>
			<th className={styles.last}>{profit.toFixed(4)} AICS</th>
		</tr>
	);
};

export default TableElement;
