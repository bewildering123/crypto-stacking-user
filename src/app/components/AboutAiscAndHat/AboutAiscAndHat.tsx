import { Tabs, TabsProps } from "antd";
import Image from "next/image";

import AiscCollapse from "./components/AiscCollapse";
import HatCollapse from "./components/HatCollapse";

import styles from "./AboutAiscAndHat.module.scss";

const items: TabsProps["items"] = [
	{
		key: "1",
		label: "AISC",
		children: <AiscCollapse />,
	},
	{
		key: "2",
		label: "HAT",
		children: <HatCollapse />,
	},
];

const AboutAiscAndHat = () => {
	return (
		<section className={styles.container}>
			<div className={styles.leftBlock}>
				<Image
					src="/img/pages/home/faq/wallet.png"
					className={styles.mainImg}
					width={554}
					height={554}
					alt="wallet"
				/>
				<div className={styles.description}>
					AISC uses AI to ensure stable growth and transparent profit
					distribution, while HAT tokens — earned through in-platform activity —
					increase your mining rate without additional investment. The more HAT
					you collect, the higher your daily earnings, making the system both
					fair and rewarding
				</div>
			</div>
			<div className={styles.rightBlock}>
				<div className={styles.subtitle}>
					<Image
						src="/img/icons/stars.svg"
						className={styles.subtitleImg}
						width={24}
						height={24}
						alt="wallet"
					/>
					<div>Start Earning</div>
				</div>
				<h2 className={styles.title}>
					AISC & HAT — Smarter Mining, Greater Rewards
				</h2>
				<Tabs
					defaultActiveKey="1"
					centered
					items={items}
					className={styles.tabs}
				/>
				;
			</div>
		</section>
	);
};

export default AboutAiscAndHat;
