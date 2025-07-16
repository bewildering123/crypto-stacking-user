"use client";

import cx from "clsx";
import { useState } from "react";

import Table from "./components/Table/Table";

import styles from "./transactions.module.scss";

export default function TransactionPage() {
	const [current, setCurrent] = useState(0);
	const categories = ["USDT", "AISC", "HAT"];

	return (
		<div className={styles.container}>
			<p className={styles.title}>Transactions</p>
			<div className={styles.subtitle}>
				{categories.map((el, index) => (
					<>
						<button
							onClick={() => setCurrent(index)}
							key={index}
							className={cx(index === current && styles.active)}
						>
							{el}
						</button>
						{index !== categories.length - 1 && <p>/</p>}
					</>
				))}
			</div>
			<div className={styles.table}>
				<Table type={categories[current]} />
			</div>
		</div>
	);
}
