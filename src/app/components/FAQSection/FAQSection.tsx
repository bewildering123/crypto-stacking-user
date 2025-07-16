"use client";

import { Root } from "@radix-ui/react-accordion";
import cx from "clsx";
import Image from "next/image";

import { useThemeType } from "@/integrations/hooks/useThemeType";

import Question from "./components/Question/Question";
import faqIcon from "./icons/faqIcon.png";
import faqIconLight from "./icons/faqIconLight.png";
import { firstArr, secondArr } from "./mockdata";

import styles from "./FAQSection.module.scss";

const FAQSection = () => {
	const theme = useThemeType();

	return (
		<section className={styles.container} id="faq">
			<div className={styles.textContainer}>
				<h2>
					<span>FAQ</span> – Everything <br />
					You Need to Know
				</h2>
				<p className={styles.text}>
					Your Questions, Answered <br /> Explore the details of AISC, HAT,
					mining, withdrawals, and how this innovative system works
				</p>
			</div>
			<div className={styles.faqContainer}>
				<Root type="single" collapsible className={styles.questionsContainer}>
					{firstArr.map((el, index) => (
						<Question
							key={index}
							value={`${index}`}
							question={el.question}
							answer={el.answer}
						/>
					))}
				</Root>
				<div className={styles.imageContainer}>
					<Image
						src={theme === "light" ? faqIconLight : faqIcon}
						alt="icon"
						width={363}
						height={339}
					/>
				</div>
				<Root
					type="single"
					collapsible
					className={cx(styles.questionsContainer, styles.paddingTop)}
				>
					{secondArr.map((el, index) => (
						<Question
							key={index}
							value={`${index}`}
							question={el.question}
							answer={el.answer}
						/>
					))}
				</Root>
			</div>
		</section>
	);
};

export default FAQSection;
