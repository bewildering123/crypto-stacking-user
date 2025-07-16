import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

import useScreen from "@/integrations/zustand/screen/screen";

import styles from "./Game.module.scss";

type Props = {
	hatBalance: number;
};

const Timer = ({ hatBalance }: Props) => {
	const { start_move, session_start } = useScreen();

	const { start, reset, seconds, minutes, pause } = useStopwatch({
		offsetTimestamp: new Date(
			Date.now() + (start_move !== 0 ? Date.now() - start_move : 0),
		),
	});

	useEffect(() => {
		if (session_start && start_move !== 0) {
			start();
		} else {
			pause();
			reset();
		}
	}, [session_start, start_move, start, reset]);

	return (
		<div className={styles.hatContainer}>
			<div>
				{session_start ? (
					<>
						{minutes < 10 ? "0" + minutes : minutes}:
						{seconds < 10 ? "0" + seconds : seconds}{" "}
					</>
				) : (
					"0 "
				)}
				min (1+HAT)
			</div>
			<div>+{hatBalance.toFixed(3)} HAT</div>
		</div>
	);
};

export default Timer;
