import Image from "next/image";

import styles from "./AboutAdvantages.module.scss";

const advantagesList = [
	{
		title: "Easy Passive Income",
		description:
			"Earn daily rewards by simply holding AISC — no trading, no stress, just automated profit",
	},
	{
		title: "Stable, Predictable Value",
		description:
			"AISC offers a stable token model built to protect your funds from unpredictable market swings",
	},
	{
		title: "Secure Staking",
		description:
			"Grow your capital through our secure and transparent Proof-of-Stake mechanism",
	},
	{
		title: "AI-Powered Efficiency",
		description:
			"Our ecosystem uses AI to optimize processes, reduce costs, and improve transaction speed",
	},
	{
		title: "For Long-Term Holders",
		description:
			"AISC is built for users who value steady growth and consistent earnings. It's a platform designed to reward long-term participation, not short-term speculation",
	},
	{
		title: "Full Transparency",
		description:
			"Monitor your rewards, staking progress, and ecosystem changes in real time. AISC ensures full visibility, clear data, and no hidden mechanisms — so you always know how the system works and where your value comes from",
	},
];

const AboutAdvantages = () => {
	return (
		<section className={styles.container}>
			<div className={styles.top}>
				<div className={styles.icon}>
					<Image
						src="/img/icons/circuit.svg"
						width={24}
						height={24}
						alt="icon"
					/>
				</div>
				<div className={styles.topContent}>
					<h2 className={styles.title}>Why Users Trust AISC</h2>
					<div className={styles.description}>
						Explore the key benefits that make AISC a reliable choice for
						investors, builders, and long-term holders
					</div>
				</div>
			</div>
			<div className={styles.advantages}>
				{advantagesList.map((item, index) => (
					<div key={index} className={styles.advantagesItem}>
						<div className={styles.advantagesIcon}>
							<Image
								src="/img/icons/generate-file.svg"
								width={24}
								height={24}
								alt="icon"
							/>
						</div>
						<h4 className={styles.advantagesTitle}>{item.title}</h4>
						<div className={styles.advantagesDescription}>
							{item.description}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutAdvantages;
