import { Metadata } from "next";

import BalanceContainer from "./components/BalanceContainer/BalanceContainer";
import Game from "./components/Game/Game";

import styles from "./screen.module.scss";

export const metadata: Metadata = {
	title: "Screen - AI-Stake Coin",
};

export default function Screen() {
	return (
		<div className={styles.container}>
			<div className={styles.contentContainer}>
				<p className={styles.title}>Screen</p>
				<Game />
			</div>
			<BalanceContainer />
		</div>
	);
}
