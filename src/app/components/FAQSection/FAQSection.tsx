"use client";

import { Collapse, CollapseProps } from "antd";
import Image from "next/image";

import Button from "@/shared/components/Button/Button";

import styles from "./FAQSection.module.scss";

const items: CollapseProps["items"] = [
	{
		key: "1",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				How to invest in the project?
			</div>
		),
		children:
			"To invest in AISC, you need to top up your account balance using USDT (TRC-20). Once the funds are credited to your account, you can exchange USDT for AISC tokens. This process allows you to start earning passive income through Proof-of-Stake mining.",
	},
	{
		key: "2",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				How to withdraw money?
			</div>
		),
		children:
			"Withdrawing funds is simple: convert your AISC tokens back into USDT within the platform. Once you have USDT in your account, you can transfer it to your personal TRC-20 wallet.",
	},
	{
		key: "3",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				How does AISC mining work?
			</div>
		),
		children:
			"AISC operates on a Proof-of-Stake (PoS) mechanism, meaning you don’t need expensive equipment or high electricity consumption to mine. Simply holding AISC in your account generates +0.2% daily. However, if you accumulate HAT tokens, you can significantly increase this percentage, maximizing your daily earnings.",
	},
	{
		key: "4",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				What is HAT, and how does it affect mining?
			</div>
		),
		children:
			"HAT (Harmonic Allocation Token) is a unique in-platform token that increases your Total Rate—the percentage of AISC you mine daily. The more HAT you hold, the higher your mining rewards. Each 1 HAT adds +0.000015% to your daily mining rate.",
	},
	{
		key: "5",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				How can I earn HAT?
			</div>
		),
		children:
			"Unlike AISC, HAT cannot be bought or sold. The only way to earn HAT is through platform activities, such as playing interactive games like Screen, Sapper, and Guess or receiving random prizes. This gamified approach encourages user engagement and offers a fun way to boost earnings.",
	},
	{
		key: "6",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				Is AISC price stable?
			</div>
		),
		children:
			"Yes, one of AISC’s key features is its price stability. Unlike many cryptocurrencies that are subject to extreme volatility, AISC maintains a nearly unchanged price, making it a reliable asset for long-term participation.",
	},
	{
		key: "7",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				Can I lose all the money invested in the project?
			</div>
		),
		children:
			"Yes, you can lose money anywhere—in a bank during a bankruptcy, in a safe during a robbery, or in the stock market during a crash. Likewise, you can lose all the money you put into an interactive financial game like this one. It’s important to understand the nature of the project before investing.",
	},
	{
		key: "8",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				Is this a serious investment opportunity?
			</div>
		),
		children:
			"No, this is not a traditional investment—it’s a game-based financial model designed to improve users' financial literacy, teach investment principles, and demonstrate the power of compound interest in a controlled environment. AISC and HAT are game currencies meant to simulate financial decision-making.",
	},
	{
		key: "9",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				Why is AISC a revolutionary project?
			</div>
		),
		children:
			"AISC represents a new era of AI-driven blockchain technology. By integrating artificial intelligence into the blockchain ecosystem, the project optimizes mining rewards, automates financial operations, and ensures fair and efficient token distribution. The combination of AISC and HAT creates an innovative and engaging way to experience decentralized finance (DeFi).",
	},
	{
		key: "10",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/question.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				What are the long-term prospects of AISC?
			</div>
		),
		children:
			"As blockchain technology continues to evolve, AI-driven solutions like AISC will become more relevant. Over the next few years, the integration of AI with blockchain is expected to enhance automation, improve security, and create more efficient decentralized systems. While AISC is currently a game-based model, its underlying technology has the potential for broader applications in the future.",
	},
];

const FAQSection = () => {
	return (
		<section className={styles.container} id="faq">
			<div className={styles.leftBlock}>
				<div className={styles.icon}>
					<Image
						src="/img/icons/question-orange.svg"
						width={24}
						height={24}
						alt="icon"
					/>
					FAQ
				</div>
				<h2 className={styles.title}>Your Questions, Answered</h2>
				<Image
					src="/img/pages/home/qa/question.png"
					width={353}
					height={404}
					alt="faq"
					className={styles.mainImg}
				/>
				<Button href="/faq" className={styles.btnMore}>
					<span>Learn more</span>
					<Image
						src="/img/icons/arrow-right-orange.svg"
						width={24}
						height={24}
						alt="icon"
					/>
				</Button>
			</div>

			<Collapse
				accordion
				expandIconPosition="end"
				className={styles.accordion}
				items={items}
			/>
			<div className={styles.mobileBlock}>
				<Image
					src="/img/pages/home/qa/question.png"
					width={353}
					height={404}
					alt="faq"
					className={styles.mainImg}
				/>
				<Button href="/faq" className={styles.btnMore}>
					<span>Learn more</span>
					<Image
						src="/img/icons/arrow-right-orange.svg"
						width={24}
						height={24}
						alt="icon"
					/>
				</Button>
			</div>
		</section>
	);
};

export default FAQSection;
