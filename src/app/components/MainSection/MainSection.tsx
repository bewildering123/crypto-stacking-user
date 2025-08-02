"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

import useExchangeAics from "@/integrations/zustand/aics/aics";
import Button from "@/shared/components/Button/Button";
import Spinner from "@/shared/components/Spinner/Spinner";

import styles from "./MainSection.module.scss";

const MainSection = () => {
	const { data } = useSession();

	const { exchange_aics } = useExchangeAics();

	return (
		<section className={styles.container}>
			<h1 className={styles.title}>
				Empower your future with <span className="text-green">AISC</span>
			</h1>
			<div className={styles.description}>
				Innovative crypto solutions designed for forward-thinkers who build
				tomorrow — today
			</div>
			<div className={styles.bottomContainer}>
				<div className={`${styles.coinBlock} ${styles.totalCapitalization}`}>
					<div className={styles.coinBlockIcon}>
						<Image
							src="/img/icons/money-bag.svg"
							width={70}
							height={70}
							alt="icon"
						/>
					</div>
					<div className={styles.coinBlockInfo}>
						<div className={styles.coinBlockTitle}>Total Capitalization</div>
						<div className={styles.coinBlockDescription}>
							352,610 AISC = 183,357 USDT
						</div>
					</div>
				</div>
				<Image
					src="/img/pages/home/banner/coin.png"
					width={696}
					height={696}
					alt="coin"
					className={styles.mainImage}
				/>
				<div className={`${styles.coinBlock} ${styles.currentPrice}`}>
					<div className={styles.coinBlockIcon}>
						<Image
							src="/img/icons/chart-orange.svg"
							width={70}
							height={70}
							alt="icon"
						/>
					</div>
					<div className={styles.coinBlockInfo}>
						<div className={styles.coinBlockTitle}>Current AISC Price</div>
						<div className={styles.coinBlockDescription}>
							1 AISC = {exchange_aics === 0 ? <Spinner /> : exchange_aics} USDT
						</div>
					</div>
				</div>
				<div className={styles.footerContainer}>
					<div className={styles.buttonsContainer}>
						<Button
							href={(data?.user && "/deposit") || "/register"}
							color="green"
						>
							Buy now
						</Button>
						<Button href={(data?.user && "#") || "/sign-in"}>
							{data?.user ? "Profile" : "Sign in"}
						</Button>
					</div>
					<div className={styles.serviceBlock}>
						<div className={styles.serviceBlockImage}>
							<Image
								src="/img/icons/lighting.svg"
								width={24}
								height={24}
								alt="icon"
							/>
						</div>
						<div className={styles.serviceBlockTitle}>Services</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainSection;
