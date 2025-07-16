import { Metadata } from "next";

import EtherContainer from "@/shared/components/EtherContainer/EtherContainer";

import WithdrawalForm from "./components/WithdrawalForm/WithdrawalForm";

import styles from "./withdraw.module.scss";

export const metadata: Metadata = {
	title: "Withdraw - AI-Stake Coin",
};

export default function Withdraw() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>
				You can only withdraw from <span>USDT balance</span>
			</p>
			<div className={styles.contentContainer}>
				<EtherContainer />
				<WithdrawalForm />
			</div>
		</div>
	);
}
