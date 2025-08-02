"use client";

import Image from "next/image";

import Button from "@/shared/components/Button/Button";

import styles from "./AboutSection.module.scss";

const AboutSection = () => {
	return (
		<section className={styles.container} id="about">
			<div className={styles.blockLeft}>
				<div className={styles.buttonTitle}>
					<Image
						src="/img/icons/stars.svg"
						width={24}
						height={24}
						className={styles.buttonTitleImage}
						alt="About"
					/>
					<div className={styles.buttonTitleText}>About Us</div>
				</div>
				<h2 className={styles.title}>
					Transforming Blockchain Through AI Innovation
				</h2>
				<div className={styles.description}>
					AISC is a next-generation Proof-of-Stake cryptocurrency designed not
					only to generate passive income, but also to involve holders in the
					evolution of AI-powered blockchain infrastructure. The ecosystem also
					features a complementary token — HAT. The more HAT you own, the
					greater your daily AISC mining rewards
				</div>
			</div>
			<div className={styles.blockRight}>
				<div className={styles.description}>
					One of AISC’s standout advantages is price stability, making it a
					trusted option for long-term investment and consistent earnings
				</div>
				<Button href="/faq" className={styles.btnMore}>
					<span>Learn more</span>
					<Image
						src="/img/icons/arrow-long-green.svg"
						width={24}
						height={24}
						alt="icon"
					/>
				</Button>
			</div>
		</section>
	);
};

export default AboutSection;
