import clsx from "clsx";
import { motion } from "motion/react";
import React, { useRef } from "react";
import Countdown from "react-countdown";
import { RemoveScroll } from "react-remove-scroll";

import { safeWindow } from "@/integrations/hooks/useMobile";
import useScreen from "@/integrations/zustand/screen/screen";

import Head from "../../icons/head.svg";

import styles from "./Game.module.scss";

type Props = {
	handleMouseMove: (x: number, y: number) => void;
	enableScroll: boolean;
	points: { x: number; y: number; score: number }[];
	setShowTimer: React.Dispatch<React.SetStateAction<boolean>>;
	showTimer: boolean;
};

const MobileGame = ({
	enableScroll,
	handleMouseMove,
	points,
	setShowTimer,
	showTimer,
}: Props) => {
	const { resetBalance, last_move } = useScreen();
	const generatePath = () => {
		if (points.length < 2) return "";
		const d = points.map((p, i) => {
			return i === 0
				? `M${p.x},${p.y}`
				: ` Q${p.x},${p.y} ${(p.x + points[i - 1].x) / 2},${(p.y + points[i - 1].y) / 2}`;
		});
		return d.join(" ");
	};
	const getRotationAngle = () => {
		if (points.length < 2) return 0;
		const dx = points[points.length - 1].x - points[points.length - 2].x;
		const dy = points[points.length - 1].y - points[points.length - 2].y;
		return Math.atan2(dy, dx) * (180 / Math.PI);
	};

	const ref = useRef<HTMLDivElement>(null);

	return (
		<RemoveScroll enabled={enableScroll}>
			<div
				className={clsx(styles.container, styles.mobileContainer)}
				ref={ref}
				onTouchMove={(e) => {
					const { touches } = e;
					const { clientX, clientY } = touches[0];
					const rect = e.currentTarget.getBoundingClientRect();
					const x = clientX - rect.left - (safeWindow?.scrollX || 0);
					const y = clientY - rect.top - (safeWindow?.scrollY || 0) + 13;
					handleMouseMove(x, y);
				}}
			>
				{showTimer && (
					<>
						<p className={styles.time}>The session will end in</p>
						<Countdown
							date={last_move + 30000 - (Date.now() - last_move)}
							autoStart={true}
							onComplete={() => {
								setShowTimer(false);
								resetBalance();
							}}
							renderer={(props) => (
								<p className={styles.time}>
									00:
									{props.seconds < 10 ? "0" + props.seconds : props.seconds}
								</p>
							)}
						/>
					</>
				)}
				<svg
					width="100%"
					height="100%"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						// paddingTop: "10px",
					}}
				>
					<motion.path
						d={generatePath()}
						stroke="url(#gradient)"
						strokeWidth={10}
						strokeLinecap="round"
						fill="none"
						style={{ position: "absolute" }}
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 0.2 }}
					/>
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="1%" stopColor="#26254A" />
							<stop offset="100%" stopColor="#4F4BAD" />
						</linearGradient>
					</defs>
				</svg>
				{points.length > 0 && points[points.length - 1].score !== 0 && (
					<p
						style={{
							width: 15,
							height: 15,
							borderRadius: "50%",
							background:
								"linear-gradient(163.66deg, #4F4BAD 1.28%, #26254A 100.81%)",
							position: "absolute",
							top: points[points.length - 1].y - 16,
							left: points[points.length - 1].x - 10,
							color: "#4F4BAD",
							opacity: "0.6",
						}}
					>
						{points[points.length - 1].score}
					</p>
				)}
				{points.length > 0 && (
					<Head
						style={{
							position: "absolute",
							top: points[points.length - 1].y - 15,
							left: points[points.length - 1].x - 9,
							scale: "1",
							transform: `rotate(${getRotationAngle() + 90}deg)`,
							zIndex: "2",
						}}
						transition={{ type: "inertia", stiffness: 100, damping: 10 }}
					/>
				)}
			</div>
		</RemoveScroll>
	);
};

export default MobileGame;
