"use client";

import clsx from "clsx";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";

import { useCalculator } from "@/integrations/zustand/calculator/calculator";

import styles from "./TotalRate.module.scss";

type Props = {
	hat?: number;
	className?: string;
};

const TotalRate = ({ className, hat }: Props) => {
	const { hatValue: initHat } = useCalculator();

	const hatValue = hat || initHat;

	const totalRate = Math.floor((0.2 + hatValue * 0.000015) * 1000000) / 1000000;

	const [animatedValue, setAnimatedValue] = useState(totalRate);

	useEffect(() => {
		const controls = animate(animatedValue, totalRate, {
			duration: 1,
			onUpdate: (v) =>
				setAnimatedValue(
					Math.floor((Math.floor(v * 1000000) / 1000000) * 1000000) / 1000000,
				),
		});
		return () => controls.stop();
	}, [totalRate, hatValue]);

	return (
		<div className={clsx(styles.totalRateContainer, className)}>
			<p>Total rate:</p>
			<motion.span>{animatedValue}%</motion.span>
		</div>
	);
};

export default TotalRate;
