import { Collapse, CollapseProps } from "antd";
import Image from "next/image";

import styles from "../AboutAiscAndHat.module.scss";

const items: CollapseProps["items"] = [
	{
		key: "1",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/magic-wand.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				AI-Driven Blockchain
			</div>
		),
		children:
			"AISC supports the evolution of blockchain technology by integrating artificial intelligence for smarter and more efficient processes.",
	},
	{
		key: "2",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/magic-wand.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				Stable Price, Steady Growth
			</div>
		),
		children:
			"Unlike most cryptocurrencies, AISC’s price remains nearly unchanged, offering a reliable long-term investment.",
	},
	{
		key: "3",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/magic-wand.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				Daily Passive Earnings
			</div>
		),
		children:
			"Just holding AISC gives you +0.2% daily, with the potential to increase rewards through HAT tokens.",
	},
	{
		key: "4",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/magic-wand.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				Proof-of-Stake Mining
			</div>
		),
		children:
			"AISC operates on a PoS model, allowing users to earn without expensive hardware or high energy consumption.",
	},
	{
		key: "5",
		label: (
			<div className={styles.accordionTitle}>
				<div className={styles.accordionTitleIcon}>
					<Image
						src="/img/icons/magic-wand.svg"
						width={20}
						height={20}
						alt="icon"
					/>
				</div>
				Part of a Revolutionary Ecosystem
			</div>
		),
		children:
			"AISC isn’t just a coin—it’s a key player in the AI-powered blockchain revolution, shaping the future of decentralized technology.",
	},
];

const AiscCollapse = () => {
	return (
		<Collapse
			accordion
			expandIconPosition="end"
			className={styles.accordion}
			items={items}
		/>
	);
};

export default AiscCollapse;
