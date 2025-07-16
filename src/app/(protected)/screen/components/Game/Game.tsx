"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";

import { client } from "@/integrations/apollo/client";
import { useMobileDetect } from "@/integrations/hooks/useMobile";
import useScreen from "@/integrations/zustand/screen/screen";
import useUserStore from "@/integrations/zustand/user/user";

import Head from "../../icons/head.svg";
import MobileGame from "./MobileGame";
import { setBalance } from "./queries/setBalance";
import Timer from "./Timer";

import styles from "./Game.module.scss";

const Game = () => {
	const [points, setPoints] = useState<
		{ x: number; y: number; score: number }[]
	>([]);
	const [canScore, setCanStore] = useState(true);
	const [showTimer, setShowTimer] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const {
		hatBalance,
		setHatBalance,
		last_move,
		resetBalance,
		start_move,
		setStartMove,
	} = useScreen();

	const distance = (x1: number, y1: number, x2: number, y2: number) =>
		Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

	const handleMouseMove = (
		clientX: number,
		clientY: number,
		ref?: React.RefObject<HTMLDivElement>,
	) => {
		const currentRef = ref ?? containerRef;

		const rect =
			(currentRef.current && currentRef.current.getBoundingClientRect()) ||
			null;
		const x = clientX - (rect?.left || 0);
		const y = clientY - (rect?.top || 0);

		const lastPoint = points[points.length - 1];
		setEnableScroll(true);

		if (start_move === 0) {
			setStartMove();
		}

		setShowTimer(false);

		if (!lastPoint || distance(x, y, lastPoint.x, lastPoint.y) > 10) {
			addPoint(x, y);
		}
	};

	const [enableScroll, setEnableScroll] = useState(false);

	const addPoint = async (x: number, y: number) => {
		const max = 0.075;
		const min = 0.025;
		const newScore = Number((Math.random() * (max - min) + min).toFixed(3));

		const newPoint = {
			x,
			y,
			score: canScore ? newScore : 0,
		};
		canScore && setCanStore(false);
		if (points.length === 7) {
			points.shift();
		}
		setPoints([...points, newPoint]);
		setHatBalance(canScore ? hatBalance + newScore : hatBalance);
		setHat(canScore ? newScore : 0);
		if (canScore) {
			await client.mutate({
				mutation: setBalance,
				variables: {
					score: newScore,
				},
			});
		}
	};

	const generatePath = () => {
		if (points.length < 2) return "";
		const d = points.map((p, i) => {
			return i === 0
				? `M${p.x},${p.y}`
				: ` Q${p.x},${p.y} ${(p.x + points[i - 1].x) / 2},${(p.y + points[i - 1].y) / 2}`;
		});
		return d.join(" ");
	};

	const { setHat } = useUserStore();

	useEffect(() => {
		const interval = setInterval(() => {
			setCanStore(true);
		}, 500);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (last_move + 30000 > Date.now() && points.length === 0) {
			setShowTimer(true);
			setEnableScroll(false);
		}
	}, [points]);

	useEffect(() => {
		if (points.length !== 0) {
			const timeout = setTimeout(() => {
				setPoints(points.slice(1, points.length));
			}, 600);

			return () => clearTimeout(timeout);
		}
	}, [points]);

	useEffect(() => {
		if (points.length > 1) {
			const timer = setTimeout(() => {
				points.shift();
			}, 300);

			return () => clearTimeout(timer);
		}
	}, [points]);

	const getRotationAngle = () => {
		if (points.length < 2) return 0;
		const dx = points[points.length - 1].x - points[points.length - 2].x;
		const dy = points[points.length - 1].y - points[points.length - 2].y;
		return Math.atan2(dy, dx) * (180 / Math.PI);
	};

	const isMobile = useMobileDetect();

	return (
		<div className={styles.gameContainer}>
			<Timer hatBalance={hatBalance} />
			{!isMobile ? (
				<div
					ref={containerRef}
					className={clsx(styles.container, styles.desktopContainer)}
					onMouseMove={(e) => {
						handleMouseMove(e.clientX, e.clientY);
					}}
				>
					{showTimer ? (
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
					) : (
						<>
							<svg
								width="100%"
								height="100%"
								style={{
									position: "absolute",
									paddingLeft: "38px",
									paddingTop: "28px",
								}}
							>
								<motion.path
									d={generatePath()}
									stroke="url(#gradient)"
									strokeWidth={10}
									strokeLinecap="round"
									fill="none"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{ duration: 0.2 }}
								/>
								<defs>
									<linearGradient
										id="gradient"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
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
										top: points[points.length - 1].y + 28,
										left: points[points.length - 1].x + 38,
										scale: "1",
										transform: `translate(-50%, -50%) rotate(${getRotationAngle() + 90}deg)`,
										zIndex: "2",
									}}
									transition={{ type: "inertia", stiffness: 100, damping: 10 }}
								/>
							)}
						</>
					)}
				</div>
			) : (
				<MobileGame
					enableScroll={enableScroll}
					handleMouseMove={handleMouseMove}
					points={points}
					setShowTimer={setShowTimer}
					showTimer={showTimer}
				/>
			)}
		</div>
	);
};

export default Game;
