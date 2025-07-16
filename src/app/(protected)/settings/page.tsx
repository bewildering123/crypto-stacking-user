import { Metadata } from "next";

import ChangePassword from "./components/ChangePassword/ChangePassword";
import CheckBoxsInputs from "./components/CheckBoxsInputs/CheckBoxsInputs";
import WithdrawalDetails from "./components/WithdrawalDetails/WithdrawalDetails";

import styles from "./settings.module.scss";

export const metadata: Metadata = {
	title: "Settings - AI-Stake Coin",
};

export default function Settings() {
	return (
		<div className={styles.container}>
			<ChangePassword />
			<div className={styles.input}>
				<WithdrawalDetails />
				<CheckBoxsInputs />
			</div>
		</div>
	);
}
