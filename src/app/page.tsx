"use client";

import Footer from "@/features/navigation/Footer/Footer";

import AboutAiscAndHat from "./components/AboutAiscAndHat/AboutAiscAndHat";
import AboutSection from "./components/AboutSection/AboutSection";
import CalculatorSection from "./components/CalculatorSection/CalculatorSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import FAQSection from "./components/FAQSection/FAQSection";
import MainSection from "./components/MainSection/MainSection";
import OurAdvantagesSection from "./components/OurAdvantagesSection/OurAdvantagesSection";
import OurPartnersSection from "./components/OurPartnersSection/OurPartnersSection";
import WhatSaySection from "./components/WhatSaySection/WhatSaySection";

export default function Home() {
	return (
		<>
			<MainSection />
			<AboutSection />
			<OurAdvantagesSection />
			<CalculatorSection />
			<AboutAiscAndHat />
			<OurPartnersSection />
			<ContactUsSection />
			<FAQSection />
			<WhatSaySection />

			<Footer />
		</>
	);
}
