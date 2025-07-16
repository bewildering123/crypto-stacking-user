"use client";

import Image from "next/image";

import useUserStore from "@/integrations/zustand/user/user";
import Spinner from "@/shared/components/Spinner/Spinner";

import coinsIcons from "./icons/coinsIcon.png";

import styles from "./PersonalData.module.scss";

const PersonalData = () => {
	const { user } = useUserStore();

	const countrySplit = (user?.country?.split("-") || []).map(
		(el) => el.charAt(0).toUpperCase() + el.slice(1),
	);

	return (
		<div className={styles.container}>
			<p className={styles.title}>Personal data:</p>

			<div className={styles.userData}>
				<p className={styles.text}>
					Date of registration:{" "}
					{(user?.createdAt as string)
						?.split("T")[0]
						?.split("-")
						?.reverse()
						?.join(".") || ""}
				</p>
				<div className={styles.dataContainer}>
					Login:{" "}
					<span className={styles.span}>{user ? user.name : <Spinner />}</span>
				</div>
				<div className={styles.dataContainer}>
					Email:{" "}
					<span className={styles.span}>{user ? user.email : <Spinner />}</span>
				</div>
				<div className={styles.dataContainer}>
					Country:
					<span className={styles.span}>
						{user ? countrySplit.join(" ") : <Spinner />}{" "}
					</span>
				</div>
				<div className={styles.dataContainer}>
					Wallet:
					<span className={styles.span}>
						{user ? (
							user.wallet_address?.slice(0, 5) +
							"..." +
							user.wallet_address?.slice(
								user.wallet_address.length - 5,
								user.wallet_address.length,
							)
						) : (
							<Spinner />
						)}{" "}
					</span>
				</div>
			</div>
			<Image src={coinsIcons} alt="coins" className={styles.coins} />
		</div>
	);
};

export default PersonalData;
