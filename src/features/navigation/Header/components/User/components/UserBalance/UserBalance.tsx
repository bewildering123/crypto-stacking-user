import Image from "next/image";
import { HTMLProps, useState } from "react";

import useUserStore from "@/integrations/zustand/user/user";

import styles from "./UserBalance.module.scss";

const UserBalance = ({
	className = "",
	...props
}: HTMLProps<HTMLDivElement>) => {
	const [eyeActive, setEyeActive] = useState(true);
	const { user } = useUserStore();
	const getValue = (num?: number, mobile?: boolean) => {
		const number = Math.floor((num || 0) * 10000) / 10000;
		if (eyeActive) {
			return mobile ? Math.floor(number) : number;
		}
		return "*".repeat(number.toString().length);
	};
	return (
		<div className={`${styles.container} ${className}`} {...props}>
			<span className={styles.balanceText}>Balance</span>
			<Image
				src="/img/icons/wallet.svg"
				className={styles.walletIcon}
				width={25}
				height={25}
				alt="wallet"
			/>

			<Image
				src="/img/icons/usdt.svg"
				className={styles.usdtIcon}
				width={15}
				height={15}
				alt="wallet"
			/>

			<div className={styles.balanceList}>
				<div className={styles.aisc}>
					<div className={styles.balance}>{getValue(user?.aics)}</div>
					<div className={styles.currency}>AISC</div>
				</div>
				<div className={styles.hat}>
					<div className={styles.balance}>{getValue(user?.hat)}</div>
					<div className={styles.currency}>HAT</div>
				</div>
				<div className={styles.usdt}>
					<div className={styles.balance}>{getValue(user?.usdt)}</div>
					<div className={styles.currency}>USDT</div>
				</div>
			</div>
			<Image
				src="/img/icons/eye.svg"
				className={styles.eye}
				onClick={() => setEyeActive(!eyeActive)}
				alt="eye"
			/>
		</div>
	);
};

export default UserBalance;
