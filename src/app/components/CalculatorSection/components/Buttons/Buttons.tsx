"use client";

import clsx from "clsx";

import { useCalculator } from "@/integrations/zustand/calculator/calculator";

import styles from "./Buttons.module.scss";

import "./Buttons.scss";

import SelectValues from "@/app/(protected)/profile/components/UserGraph/SelectValues/SelectValues";

import TotalRate from "../TotalRate/TotalRate";

const VALUES = ["Day", "Week", "Month"];

type Props = {
	className?: string;
	withTotalRate?: boolean;
};

const Buttons = ({ className, withTotalRate = true }: Props) => {
	const { button_value, setButtonValue } = useCalculator();

	return (
		<div className={styles.container}>
			<div className={clsx(styles.buttonContainer, className)}>
				{VALUES.map((el, i) => (
					<button
						key={i}
						className={clsx(el === button_value && styles.active)}
						onClick={() => setButtonValue(el)}
					>
						{el}
					</button>
				))}
			</div>
			<div className={styles.selectValuesContainer}>
				<SelectValues
					setValue={setButtonValue}
					value={button_value}
					values={VALUES}
				/>
			</div>
			{withTotalRate && <TotalRate />}
		</div>
	);
};

export default Buttons;
