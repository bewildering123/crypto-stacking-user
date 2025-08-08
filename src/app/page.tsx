"use client";

import Image from "next/image";

import Footer from "@/features/navigation/Footer/Footer";
import Button from "@/shared/components/Button/Button";

import AboutAiscAndHat from "./components/AboutAiscAndHat/AboutAiscAndHat";
import AboutSection from "./components/AboutSection/AboutSection";
import CalculatorSection from "./components/CalculatorSection/CalculatorSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import FAQSection from "./components/FAQSection/FAQSection";
import MainSection from "./components/MainSection/MainSection";
import OurAdvantagesSection from "./components/OurAdvantagesSection/OurAdvantagesSection";
import OurPartnersSection from "./components/OurPartnersSection/OurPartnersSection";
import WhatSaySection from "./components/WhatSaySection/WhatSaySection";

import styles from "./main.module.scss";

export default function Home() {
	return (
		<>
			<MainSection />
			<AboutSection
				button={
					<Button href="/about" className={styles.btnMore}>
						<span>Learn more</span>
						<Image
							src="/img/icons/arrow-long-green.svg"
							width={24}
							height={24}
							alt="icon"
						/>
					</Button>
				}
			/>
			<OurAdvantagesSection />
			<CalculatorSection />
			<AboutAiscAndHat />
			<OurPartnersSection />
			<ContactUsSection />
			<WhatSaySection />
			<FAQSection />

			<Footer />
		</>
	);
}
