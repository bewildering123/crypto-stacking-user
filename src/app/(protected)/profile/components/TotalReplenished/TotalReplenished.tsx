"use client";

import Image from "next/image";

import useExchangeAics from "@/integrations/zustand/aics/aics";
import useUserStore from "@/integrations/zustand/user/user";
import Spinner from "@/shared/components/Spinner/Spinner";

import coinImage from "./icons/coinIcon.png";

import styles from "./TotalReplenished.module.scss";

const TotalReplenished = () => {
	const { user } = useUserStore();

	const { exchange_aics } = useExchangeAics();

	const procent = (0.000015 * (user?.hat || 0)).toFixed(6);

	const incomming_per_day =
		Math.floor((((user?.aics || 0) * (0.2 + Number(procent))) / 100) * 10000) /
		10000;
	const incomming_per_day_usdt =
		(Math.floor((((user?.aics || 0) * (0.2 + Number(procent))) / 100) * 10000) /
			10000) *
		exchange_aics;

	return (
		<div className={styles.container}>
			<p className={styles.title}>Total replenished USDT: {user?.usdt}</p>
			<div className={styles.rateContainer}>
				<div className={styles.rate}>
					<div className={styles.dataContainer}>
						<p>Prime rate:</p>
						<span>{user ? "0.2%" : <Spinner />}</span>
					</div>
					<div className={styles.dataContainer}>
						{user?.hat} HAT=
						<span>{!user ? <Spinner /> : <>+{procent}%</>}</span>
					</div>
				</div>
				<div className={styles.rate}>
					<div className={styles.dataContainer}>
						<p>Total rate:</p>
						<span>
							{!user ? (
								<Spinner />
							) : (
								<>{String(0.2 + Number(procent)).slice(0, 7)}%</>
							)}
						</span>
					</div>
					<div className={styles.dataContainer}>
						Total mined:
						<span>
							{!user ? (
								<Spinner />
							) : (
								<>
									{Math.floor((user.total_mined || 0) * 10000) / 10000} AICS ~{" "}
									{Math.floor((user.total_mined || 0) * exchange_aics * 10000) /
										10000}{" "}
									USDT
								</>
							)}
						</span>
					</div>
				</div>
				<div className={styles.rate}>
					<div className={styles.dataContainer}>
						Income per day:
						<span>
							{!user ? (
								<Spinner />
							) : (
								<>
									{Math.floor(incomming_per_day * 10000) / 10000} AICS ~{" "}
									{Math.floor(incomming_per_day_usdt * 10000) / 10000} USDT
								</>
							)}
						</span>
					</div>
				</div>
			</div>
			<Image src={coinImage} alt="coin" className={styles.coin} />
		</div>
	);
};

export default TotalReplenished;
