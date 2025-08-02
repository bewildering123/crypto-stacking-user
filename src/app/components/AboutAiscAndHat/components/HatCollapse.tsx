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
				HAT Boosts Your AISC Earnings
			</div>
		),
		children:
			"The more HAT you have, the higher your daily mining rate for AISC.",
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
				Cannot Be Bought or Sold
			</div>
		),
		children:
			"HAT is a unique token that can only be earned through platform activities, not traded.",
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
				Earn HAT by Playing Games
			</div>
		),
		children:
			"Play fun games like Screen, Sapper, and Guess to collect HAT and increase your rewards.",
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
				Fair and Rewarding System
			</div>
		),
		children:
			"The HAT distribution model ensures active users benefit the most from increased AISC earnings.",
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
				A Unique Approach to Mining Rewards
			</div>
		),
		children:
			"HAT introduces a new way to influence mining profits, making AISC mining more interactive and rewarding.",
	},
];

const HatCollapse = () => {
	return (
		<Collapse
			accordion
			expandIconPosition="end"
			className={styles.accordion}
			items={items}
		/>
	);
};

export default HatCollapse;
