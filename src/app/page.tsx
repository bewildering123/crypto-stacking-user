"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-hook-inview";

import Footer from "@/features/navigation/Footer/Footer";
import useView from "@/integrations/zustand/view/view";

import AboutAiscAndHat from "./components/AboutAiscAndHat/AboutAiscAndHat";
import AboutSection from "./components/AboutSection/AboutSection";
import CalculatorSection from "./components/CalculatorSection/CalculatorSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import FAQSection from "./components/FAQSection/FAQSection";
import MainSection from "./components/MainSection/MainSection";
import OurAdvantagesSection from "./components/OurAdvantagesSection/OurAdvantagesSection";
import OurPartnersSection from "./components/OurPartnersSection/OurPartnersSection";
import WhatSaySection from "./components/WhatSaySection/WhatSaySection";
import leftLine from "./icons/left_line.png";
import rightLine from "./icons/right_line.png";

import styles from "./main.module.scss";

export default function Home() {
	const [ref, isVisible] = useInView();

	const { setView } = useView();

	useEffect(() => {
		isVisible ? setView(false) : setView(true);
	}, [isVisible]);

	return (
		<>
			<div className={styles.blobOne} />
			<div className={styles.blobTwo} />
			<div className={styles.background}>
				<div ref={ref}>
					<MainSection />
				</div>
				<div className={styles.linesContainer}>
					<Image src={leftLine} alt="line" className={styles.left} />
					<Image src={rightLine} alt="line" className={styles.right} />
				</div>
				<AboutSection />
			</div>
			<OurAdvantagesSection />
			<CalculatorSection />
			<AboutAiscAndHat />
			<FAQSection />
			<WhatSaySection />
			<OurPartnersSection />
			<ContactUsSection />
			<Footer />
		</>
	);
}
