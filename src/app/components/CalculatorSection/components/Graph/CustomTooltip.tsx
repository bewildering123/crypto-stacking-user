import React from "react";
import { TooltipProps } from "recharts";

import { useMobileDetect } from "@/integrations/hooks/useMobile";
import { useCalculator } from "@/integrations/zustand/calculator/calculator";

import { MONTH_DATA } from "./utils/getGraphData";

import styles from "./Graph.module.scss";

interface CustomTooltipProps extends TooltipProps<number, string> {
	activePoint: { x: number; y: number } | null;
	initialHat?: number;
	initialSecondValue?: number;
}

const CustomTooltip = ({
	payload,
	activePoint,
	initialHat,
	initialSecondValue,
}: CustomTooltipProps) => {
	const {
		secondValue: value,
		hatValue: hat,
		button_value,
		selectedValue,
	} = useCalculator();
	const isMobile = useMobileDetect();
	if (!payload) return null;

	const hatValue = initialHat || hat;
	const secondValue = initialSecondValue || value;

	if (payload && payload.length !== 0 && payload[0].value === 0) return null;

	const totalRate = (0.2 + hatValue * 0.000015) / 100;

	const n = Number(payload[0]?.payload?.month) || 0;

	const a = (1 + totalRate) ** (n * MONTH_DATA.get(button_value));

	const perDay = secondValue * a * totalRate;

	const perWeek =
		secondValue *
		(1 + totalRate) ** (n * MONTH_DATA.get(button_value) - 7) *
		((1 + totalRate) ** 7 - 1);

	const perMonth =
		secondValue *
		(1 + totalRate) ** (n * MONTH_DATA.get(button_value) - 30.5) *
		((1 + totalRate) ** MONTH_DATA.get(button_value) - 1);

	const incomeValues: any = {
		day: { label: "Income per day", value: perDay },
		week: { label: "Income per week", value: perWeek },
		month: { label: "Income per month", value: perMonth },
		year: { label: "Income per year", value: perDay * 365 },
	};

	const visiblePeriods: any = {
		day: ["day"],
		week: ["day", "week"],
		month: ["day", "week", "month"],
	};

	const values: any = {
		day: {
			left: 123,
			top: 105,
			topMobile: 65,
			leftMobile: n > 5 ? 118 : 59,
		},
		week: {
			left: 132,
			top: 130,
			topMobile: 82,
			leftMobile: n > 5 ? 134 : 66,
		},
		month: {
			left: 148,
			top: 155,
			topMobile: n > 5 ? 105 : 95,
			leftMobile: n > 5 ? 144 : 72,
		},
	};

	return (
		<div
			style={{
				position: "absolute",
				left:
					(activePoint?.x || 0) -
					(isMobile
						? values[button_value.toLowerCase()].leftMobile
						: values[button_value.toLowerCase()].left),
				top:
					(activePoint?.y || 0) -
					(isMobile
						? values[button_value.toLowerCase()].topMobile
						: values[button_value.toLowerCase()].top),
				pointerEvents: "none",
				transition: "top 0.2s ease, left 0.2s ease",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div className={styles.toolTipContainer}>
				<p className={styles.topText}>
					Balance:{" "}
					{Math.floor(Number((payload || [])[0]?.value) * 1000000) / 1000000}{" "}
					{selectedValue.toUpperCase()}
				</p>
				<div className={styles.data}>
					{visiblePeriods[button_value.toLowerCase()].map((p: any) => (
						<p key={p}>
							{incomeValues[p].label}: {incomeValues[p].value.toFixed(3)}{" "}
							{selectedValue.toUpperCase()}
						</p>
					))}
				</div>
			</div>
			<div
				className={styles.toolTipDot}
				style={{
					left: isMobile && n > 5 ? "80%" : "",
				}}
			/>
		</div>
	);
};

export default CustomTooltip;
