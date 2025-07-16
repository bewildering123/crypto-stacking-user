import { Metadata } from "next";

import BalanceContainer from "./components/BalanceContainer/BalanceContainer";
import ExchangeForm from "./components/ExchangeForm/ExchangeForm";

import styles from "./exchange.module.scss";

export const metadata: Metadata = {
	title: "Exchange - AI-Stake Coin",
};

export default function Exchange() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>Exchange</p>
			<div className={styles.formContainer}>
				<BalanceContainer />
				<ExchangeForm />
			</div>
		</div>
	);
}
