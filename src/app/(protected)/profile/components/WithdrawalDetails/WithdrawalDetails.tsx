"use client";

import useUserStore from "@/integrations/zustand/user/user";

import TetherIcon from "./icons/tether.svg";

import styles from "./WithdrawalDetails.module.scss";

const WithdrawalDetails = () => {
	const { user } = useUserStore();

	const wallet = user?.wallet_address || "";

	return (
		<div className={styles.container}>
			<p className={styles.title}>Withdrawal details</p>
			<div>
				<TetherIcon />
				Tether USDT20:
				<span>
					{wallet.slice(0, 4) +
						"..." +
						wallet.slice(wallet.length - 2, wallet.length)}
				</span>
			</div>
		</div>
	);
};

export default WithdrawalDetails;
