"use client";

import React from "react";

import useUserStore from "@/integrations/zustand/user/user";

import Balance from "../../icons/balance.svg";

import styles from "./BalanceContainer.module.scss";

const BalanceContainer = () => {
	const { user } = useUserStore();

	const procent = (0.000015 * (user?.hat || 0)).toFixed(6);

	return (
		<div className={styles.balanceContainer}>
			<div className={styles.forTodayContainer}>
				<div className={styles.titleContainer}>
					<p>
						<Balance /> Balance
					</p>
					<span>{Math.floor((user?.hat || 0) * 10000) / 10000} HAT</span>
				</div>
				<div className={styles.infoContainer}>
					<div>
						<p>For today:</p>
						<span>{user?.today_mined_screen?.toFixed(3)} HAT</span>
					</div>
					<div>
						<p>In all the time:</p>
						<span>{user?.total_mined_screen?.toFixed(3)} HAT</span>
					</div>
				</div>
			</div>
			<div className={styles.bonusContainer}>
				<div className={styles.titleContainer}>
					<p>
						<Balance /> Bonus per session:
					</p>
				</div>
				<div className={styles.darkContainer}>
					<div>
						<p>{user?.hat} HAT=</p>
						<span>+{procent}%</span>
					</div>
					<div>
						<p>Total rate:</p>
						<span>{String(0.2 + Number(procent)).slice(0, 7)}%</span>
					</div>
				</div>
				<div className={styles.darkContainer}>
					<div>
						<p>1 min:</p>
						<span>+1HAT</span>
					</div>
					<div>
						<p>10 min:</p>
						<span>+15HAT</span>
					</div>
					<div>
						<p>30min:</p>
						<span>+70HAT</span>
					</div>
					<div>
						<p>60 min:</p>
						<span>+200HAT</span>
					</div>
					<div>
						<p> 60 min:</p>
						<span>take a break</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BalanceContainer;
