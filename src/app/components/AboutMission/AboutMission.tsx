import Image from "next/image";

import styles from "./AboutMission.module.scss";

const AboutMission = () => {
	return (
		<section className={styles.container}>
			<div className={styles.topContainer}>
				<div className={styles.icon}>
					<Image
						src="/img/icons/sparkle.svg"
						width={24}
						height={24}
						alt="icon"
					/>
				</div>
				<h2 className={styles.title}>Our Mission & Philosophy</h2>
			</div>
			<div className={styles.advantages}>
				<div className={styles.advantagesItem}>
					<div className={styles.advantagesContent}>
						<h4 className={styles.advantagesTitle}>
							Real Utility, Real Results
						</h4>
						<div className={styles.advantagesDescription}>
							We create solutions with real-world value. AISC helps users grow
							capital with ease and confidence
						</div>
					</div>
					<Image
						src="/img/pages/about/mission/1.png"
						width={140}
						height={140}
						alt="Real Utility, Real Results"
					/>
				</div>
				<div className={styles.advantagesItem}>
					<div className={styles.advantagesContent}>
						<h4 className={styles.advantagesTitle}>Community at the Core</h4>
						<div className={styles.advantagesDescription}>
							Our platform evolves through feedback and trust. AISC grows
							stronger with every active user
						</div>
					</div>
					<Image
						src="/img/pages/about/mission/2.png"
						width={140}
						height={140}
						alt="Real Utility, Real Results"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutMission;
