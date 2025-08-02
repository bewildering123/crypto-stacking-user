import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

import styles from "./Graph.module.scss";

import "./Graph.scss";

import clsx from "clsx";
import { useMemo, useState } from "react";

import { useMobileDetect } from "@/integrations/hooks/useMobile";

import CustomTooltip from "./CustomTooltip";
import CustomYLabel from "./CustomYLabel";
import { getGraphData } from "./utils/getGraphData";

const data = [
	{ day: "1 day", value: 2593.5 },
	{ day: "2 day", value: 2593.52 },
	{ day: "3 day", value: 2593.48 },
	{ day: "4 day", value: 2593.57 },
	{ day: "5 day", value: 2593.46 },
	{ day: "6 day", value: 2593.5 },
	{ day: "7 day", value: 2593.49 },
	{ day: "8 day", value: 2593.47 },
	{ day: "9 day", value: 2593.53 },
	{ day: "10 day", value: 2593.54 },
];

type Props = {
	className?: string;
	sizes?: number;
	setActivePoint: (data: { x: number; y: number } | null) => void;
	activePoint: {
		x: number;
		y: number;
	} | null;
	hatValue: number;
	secondValue: number;
	button_value: string;
	currentValue: string;
};

const Graph = ({
	className,
	activePoint,
	button_value,
	hatValue,
	secondValue,
	setActivePoint,
}: Props) => {
	const data = useMemo(
		() => getGraphData(hatValue, secondValue, button_value),
		[hatValue, secondValue, button_value],
	);
	const handleMouseMove = (e: any | undefined) => {
		if (e.activeTooltipIndex !== undefined) {
			const index = e.activeTooltipIndex;

			const dots = document.querySelectorAll(".recharts-line-dots > circle");
			const activeDot = dots[index] as SVGCircleElement;
			if (activeDot) {
				const { cx, cy } = activeDot;
				const pointX = parseFloat(cx?.animVal.valueAsString || "0");
				const pointY = parseFloat(cy?.animVal.valueAsString || "0");

				setActivePoint({
					x: pointX,
					y: pointY,
				});
			}
		}
	};

	const isMobile = useMobileDetect();

	return (
		<div className={clsx(styles.container, className)}>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 40,
						bottom: 20,
					}}
					onMouseMove={handleMouseMove}
					onMouseLeave={() => setActivePoint(null)}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						stroke="#e0e0e0"
						vertical={true}
						horizontal={true}
					/>
					<XAxis
						dataKey="month"
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: isMobile ? 14 : 16, fill: "var(--primary)" }}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: isMobile ? 14 : 16, fill: "var(--primary)" }}
						tickMargin={10}
						ticks={[
							...data
								.filter((el) => el.balance !== data[0].balance)
								.map((el) => el.balance),
						]}
						domain={[data[0].balance, data[data.length - 1].balance]}
						tickFormatter={(value) => (value === 0 ? "" : value)}
					/>
					<Line
						type="monotone"
						dataKey="balance"
						stroke="var(--green)"
						strokeWidth={3}
						dot={{ fill: "var(--green)", strokeWidth: 0, r: 4 }}
						activeDot={{ r: 4, fill: "var(--green)" }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Graph;
