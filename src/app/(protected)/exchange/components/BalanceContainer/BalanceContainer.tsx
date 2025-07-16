"use client";

import Balance from "@/app/(protected)/screen/icons/balance.svg";
import useExchangeAics from "@/integrations/zustand/aics/aics";
import useUserStore from "@/integrations/zustand/user/user";

import styles from "./BalanceContainer.module.scss";

const BalanceContainer = () => {
	const { user } = useUserStore();

	const { exchange_aics } = useExchangeAics();

	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<p>
					<Balance /> Balance
				</p>
				<span>
					{Math.floor((user?.aics || 0) * 10000) / 10000} AISC <label>&</label>{" "}
					{Math.floor((user?.usdt || 0) * 10000) / 10000} USDT
				</span>
			</div>
			<div className={styles.infoContainer}>
				<div>
					<p>1 AISC</p>
					<span>{Math.floor((exchange_aics || 0) * 10000) / 10000} USDT</span>
				</div>
			</div>
		</div>
	);
};

export default BalanceContainer;
