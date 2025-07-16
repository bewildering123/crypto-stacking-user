import {
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
	sizes,
	activePoint,
	button_value,
	currentValue,
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

	const [showTooltip, setShowTooltip] = useState(false);

	const isMobile = useMobileDetect();

	return (
		<div className={clsx(styles.container, className)}>
			{showTooltip && (
				<div className={styles.infoContainer}>
					Calculation is made according to
					<br />
					the current exchange rate AISC
				</div>
			)}
			<ResponsiveContainer
				width={isMobile ? "100%" : "93%"}
				height={sizes || (isMobile && 200) || 400}
				style={{ position: "relative" }}
			>
				<LineChart
					data={data || []}
					onMouseMove={handleMouseMove}
					onMouseLeave={() => setActivePoint(null)}
				>
					<XAxis
						dataKey="month"
						stroke="#4F4BAD"
						strokeWidth={3}
						tick={{ fill: "#AEACE4", fontSize: isMobile ? "10px" : "17px" }}
						tickMargin={10}
						ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
						tickFormatter={(value) => (value === 0 ? "" : value)}
						tickLine={{
							stroke: "#4F4BAD",
							strokeWidth: 2,
						}}
						label={{
							value: button_value,
							position: "right",
							style: {
								fill: "var(--header-dropdown-sign-in-color)",
								textAnchor: "middle",
								fontSize: isMobile ? "10px" : "24px",
								position: "absolute",
								fontFamily: "var(--font-inter)",
								fontWeight: "600",
							},
							dy: isMobile ? -35 : -15,
							dx: !isMobile ? 55 : 0,
						}}
					/>
					<YAxis
						stroke="#4F4BAD"
						strokeWidth={3}
						tick={{ fill: "#AEACE4", fontSize: isMobile ? "10px" : "17px" }}
						tickMargin={10}
						ticks={[
							...data
								.filter((el) => el.balance !== data[0].balance)
								.map((el) => el.balance),
						]}
						domain={[data[0].balance, data[data.length - 1].balance]}
						tickFormatter={(value) => (value === 0 ? "" : value)}
						tickLine={{ stroke: "#4F4BAD", strokeWidth: 2 }}
						label={
							<CustomYLabel
								currentValue={currentValue}
								setShowTooltip={setShowTooltip}
							/>
						}
					/>
					<Line
						type="monotone"
						activeDot={false}
						dataKey="balance"
						stroke="#27256F"
						strokeWidth={3}
						dot={(props) => {
							if (props.payload.balance === 0) {
								return (
									<circle
										cx={props.cx}
										cy={props.cy}
										r={0}
										fill="#none"
										stroke=""
										style={{ zIndex: "-1" }}
									/>
								);
							}
							return (
								<circle
									cx={props.cx}
									cy={props.cy}
									r={5}
									fill="#4F4BAD"
									stroke=""
									style={{ zIndex: "-1" }}
								/>
							);
						}}
					/>
					<Tooltip
						content={
							<CustomTooltip
								initialSecondValue={secondValue}
								initialHat={hatValue}
								activePoint={activePoint}
							/>
						}
						cursor={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Graph;
