"use client";

import Image from "next/image";

import Footer from "@/features/navigation/Footer/Footer";
import Button from "@/shared/components/Button/Button";

import AboutAdvantages from "../components/AboutAdvantages/AboutAdvantages";
import AboutMainSection from "../components/AboutMainSection/AboutMainSections";
import AboutMission from "../components/AboutMission/AboutMission";
import AboutSection from "../components/AboutSection/AboutSection";
import FAQSection from "../components/FAQSection/FAQSection";

import styles from "./About.module.scss";

export default function About() {
	return (
		<>
			<AboutMainSection />
			<AboutSection
				button={
					<Button href="/register" className={styles.btnMore}>
						<span>Sign Up</span>
						<Image
							src="/img/icons/arrow-right-orange.svg"
							width={24}
							height={24}
							alt="icon"
						/>
					</Button>
				}
			/>
			<AboutMission />
			<AboutAdvantages />
			<FAQSection />
			<Footer />
		</>
	);
}
