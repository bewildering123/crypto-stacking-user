"use client";

import Image from "next/image";
import Link from "next/link";

import image from "./icon/image.png";

import styles from "./AboutSection.module.scss";

const AboutSection = () => {
	return (
		<section className={styles.container} id="about">
			<h2>
				About <span>aisc</span>
			</h2>
			<div className={styles.aboutContainer}>
				<div className={styles.textContainer}>
					<p>
						Revolutionizing Blockchain with <span>AI AISC</span> merges
						artificial intelligence with blockchain technology, creating a
						stable, rewarding, and innovative financial ecosystem. <br /> <br />{" "}
						<span>
							AISC (AI Stake Coin) – Your Path to Earnings and AI-Powered
							Blockchain Development
						</span>{" "}
						<br />
						<br /> AISC is a Proof-of-Stake cryptocurrency that allows you not
						only to earn but also to participate in the development of
						cutting-edge blockchain technology powered by artificial
						intelligence. The project ecosystem includes an additional token –
						HAT. The more HAT you have, the more AISC you receive daily from
						mining. <br />
						<br /> One of AISC’s key features is its stability: its price
						remains nearly unchanged, making it a reliable tool for long-term
						earnings. By investing in AISC, you become part of the AI blockchain
						revolution!
					</p>
					<Link href={"/about"}>Learn More</Link>
				</div>
				<Image src={image} alt="logo" />
			</div>
		</section>
	);
};

export default AboutSection;
