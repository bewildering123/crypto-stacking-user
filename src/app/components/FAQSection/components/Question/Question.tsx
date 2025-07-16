"use client";

import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";
import React from "react";

import { useThemeType } from "@/integrations/hooks/useThemeType";

import ChevronIcon from "./icons/chevron.svg";
import ChevronIconLight from "./icons/chevronLight.svg";

import styles from "./Question.module.scss";

type Props = {
	value: string;
	question: string;
	answer: string;
};

const Question = ({ question, value, answer }: Props) => {
	return (
		<Accordion.Item value={value} className={styles.container}>
			<AccordionTrigger className={styles.trigger}>{question}</AccordionTrigger>
			<AccordionContent className={styles.content}>{answer}</AccordionContent>
		</Accordion.Item>
	);
};

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof Accordion.Content>,
	React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ className, children, ...props }, ref) => (
	<Accordion.Content ref={ref} className={clsx(styles.content)} {...props}>
		<div className={clsx(className)}>{children}</div>
	</Accordion.Content>
));
AccordionContent.displayName = Accordion.Content.displayName;

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof Accordion.Trigger>,
	React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => {
	const theme = useThemeType();

	return (
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger className={className} {...props} ref={forwardedRef}>
				<p>{children}</p>
				{theme === "light" ? <ChevronIconLight /> : <ChevronIcon />}
			</Accordion.Trigger>
		</Accordion.Header>
	);
});

AccordionTrigger.displayName = Accordion.Trigger.displayName;

export default Question;
