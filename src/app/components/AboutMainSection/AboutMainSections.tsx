import { Breadcrumb } from "antd";
import Image from "next/image";
import Link from "next/link";

import styles from "./AboutMainSection.module.scss";

const bannerList = [
	{
		title: 74,
		description: "AISC-powered projects",
	},
	{
		title: "12,000+",
		description: "Active token holders",
	},
	{
		title: "98%",
		description: "Success rate (%)",
	},
	{
		title: "50+",
		description: "Global communities",
	},
];

const AboutMainSection = () => {
	return (
		<section className={styles.banner}>
			<Breadcrumb
				className={styles.breadcrumbs}
				items={[
					{
						title: <Link href="/">Home</Link>,
					},
					{
						title: "Abous Us",
					},
				]}
			/>
			<h1 className={styles.title}>
				Building financial confidence with&nbsp;
				<span className="text-green">AISC</span>
			</h1>
			<div className={styles.description}>
				A platform focused on long-term crypto income, price stability, and
				transparent value growth for every user.
			</div>
			<div className={styles.mainImageContainer}>
				<Image
					src="/img/pages/about/banner/image.png"
					width={696}
					height={740}
					alt="about"
					className={styles.mainImg}
				/>
			</div>

			<div className={styles.bannerList}>
				{bannerList.map((item, index) => (
					<div key={index} className={styles.bannerItem}>
						<div className={styles.bannerItemTitle}>{item.title}</div>
						<div className={styles.bannerItemDescription}>
							{item.description}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutMainSection;
