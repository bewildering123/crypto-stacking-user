import { Metadata } from "next";

import PersonalData from "./components/PersonalData/PersonalData";
import TotalReplenished from "./components/TotalReplenished/TotalReplenished";
import TotalWithdrawn from "./components/TotalWithdrawn/TotalWithdrawn";
import UserGraph from "./components/UserGraph/UserGraph";

import styles from "./profile.module.scss";

export const metadata: Metadata = {
	title: "Profile - AI-Stake Coin",
};

export default function Profile() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>My profile</p>
			<div className={styles.contentContainer}>
				<div className={styles.content}>
					<TotalReplenished />
					<PersonalData />
				</div>
				<div className={styles.content}>
					<UserGraph />
					<TotalWithdrawn />
				</div>
			</div>
		</div>
	);
}
