import { Metadata } from "next";

import DepositForm from "./components/DepositForm/DepositForm";

import styles from "./deposit.module.scss";

export const metadata: Metadata = {
	title: "Deposit - AI-Stake Coin",
};

export default async function Deposit() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>Deposit</p>
			<DepositForm />
		</div>
	);
}
