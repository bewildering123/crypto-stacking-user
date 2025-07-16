import React from "react";

import { useMobileDetect } from "@/integrations/hooks/useMobile";

import Info from "./icon/info.svg";

import styles from "./Graph.module.scss";

const CustomYLabel = ({ viewBox, setShowTooltip, currentValue }: any) => {
	const { x, y } = viewBox;
	const isMobile = useMobileDetect();

	const labelX = x + (isMobile ? 90 : 120);
	const labelY = y + (isMobile ? 5 : 10);

	return (
		<g
			transform={`translate(${labelX},${labelY})`}
			// className={styles.yContainer}
			onMouseEnter={() => {
				setShowTooltip(true);
			}}
			onTouchMoveCapture={() => {
				setShowTooltip(true);
			}}
			onClick={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
			style={{ display: "flex", background: "red" }}
		>
			<rect
				x="52px"
				y="-20px"
				width="20"
				height="20"
				fill="#FFFFFF00"
				style={{ cursor: "pointer" }}
			/>
			<text
				x={0}
				y={0}
				dy={0}
				textAnchor="middle"
				fill="#AEACE4"
				fontSize="14"
				style={{
					fill: "var(--header-dropdown-sign-in-color)",
					textAnchor: "middle",
					fontSize: isMobile ? "10px" : "24px",
					position: "absolute",
					fontFamily: "var(--font-inter)",
					fontWeight: "600",
				}}
			>
				{currentValue.toUpperCase()}
			</text>
			<g style={{ cursor: "pointer", scale: isMobile ? "0.5" : "" }}>
				<Info x={isMobile ? 40 : 50} y={-21} className={styles.svg} />
			</g>
		</g>
	);
};

export default CustomYLabel;
