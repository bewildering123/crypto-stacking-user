import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./OurAdvantagesSection.module.scss";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Button from "@/shared/components/Button/Button";

const slidersList = [
	{
		icon: <Image src="/img/icons/ai.svg" width={24} height={24} alt="AI" />,
		title: "AI-Driven Blockchain Technology",
		text: "AISC brings together AI and blockchain to create a smart, fast, and efficient ecosystem",
	},
	{
		icon: (
			<Image
				src="/img/icons/charts.svg"
				width={24}
				height={24}
				alt="Reliable and Stable Growth"
			/>
		),
		title: "Reliable and Stable Growth",
		text: "AISC's price stays nearly constant, making it a secure choice for long-term gains",
	},
	{
		icon: (
			<Image
				src="/img/icons/circle-dollar.svg"
				width={24}
				height={24}
				alt="Daily Rewards with Proof-of-Stake"
			/>
		),
		title: "Daily Rewards with Proof-of-Stake",
		text: "Earn +0.2% daily just by holding AISC — and boost it further by collecting HAT tokens",
	},
	{
		icon: (
			<Image
				src="/img/icons/goal.svg"
				width={24}
				height={24}
				alt="HAT — Earn More Without Spending"
			/>
		),
		title: "HAT — Earn More Without Spending",
		text: "Get more mining rewards with HAT tokens. They’re earned through activity, not purchased",
	},
];

const OurAdvantagesSection = () => {
	return (
		<section className={styles.container} id="aboutaiscandhat">
			<div className={styles.top}>
				<div className={styles.topIcon}>
					<Image
						src="/img/icons/circuit.svg"
						width={24}
						height={24}
						alt="Why Our AI Blockchain Stands Out"
					/>
				</div>
				<div className={styles.topText}>
					<h2 className={styles.title}>Why Our AI Blockchain Stands Out</h2>
					<div className={styles.description}>
						Experience stable growth and real rewards powered by AI and
						blockchain
					</div>
				</div>
			</div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={3.5}
				breakpoints={{
					320: {
						slidesPerView: 1.2,
						spaceBetween: 16,
					},
					768: {
						slidesPerView: 2.2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3.5,
						spaceBetween: 24,
					},
				}}
				navigation={{
					nextEl: ".advantages-button-next",
					prevEl: ".advantages-button-prev",
				}}
				className={styles.sliderContainer}
			>
				{slidersList.map((el, i) => (
					<SwiperSlide key={i}>
						<div className={styles.sliderItem}>
							<div className={styles.sliderIcon}>{el.icon}</div>
							<h4 className={styles.sliderTitle}>{el.title}</h4>
							<div className={styles.sliderText}>{el.text}</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.sliderButtons}>
				<Button className={`${styles.sliderButton} advantages-button-prev`}>
					<Image
						src="/img/icons/chevron-left.svg"
						width={24}
						height={24}
						alt="left"
					/>
				</Button>
				<Button className={`${styles.sliderButton} advantages-button-next`}>
					<Image
						src="/img/icons/chevron-left.svg"
						width={24}
						height={24}
						alt="right"
					/>
				</Button>
				<Button href="/terms-condition" color="green">
					Terms & Conditions
				</Button>
			</div>
		</section>
	);
};

export default OurAdvantagesSection;
