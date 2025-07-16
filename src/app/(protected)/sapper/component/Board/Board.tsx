import React from "react";

import useUserStore from "@/integrations/zustand/user/user";

import Bomb from "../../icons/bomb.svg";
import { getBoard } from "../../utils/getBoard";
import { aiscMultiple, hatArr } from "../../utils/multiples";
import BombMobile from "./icons/bombMobile.svg";
import FootSvg from "./icons/foot.svg";
import FootMobile from "./icons/footMobile.svg";

import styles from "./Board.module.scss";

type Props = {
	steps: number[][];
	isGameStarted: boolean;
	setSteps: React.Dispatch<React.SetStateAction<number[][]>>;
	setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
	setGameStatus: React.Dispatch<
		React.SetStateAction<{
			win: boolean;
			prize: number;
			hat: number;
		}>
	>;
	bet: number;
	mine: number[];
	setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
	currentRow: number;
	isGameFinished: boolean;
};

const Board = ({
	steps,
	isGameStarted,
	setSteps,
	bet,
	mine,
	setCurrentRow,
	setGameStatus,
	setIsGameFinished,
	currentRow,
	isGameFinished,
}: Props) => {
	const { user } = useUserStore();

	const BombSvg = (
		<>
			<BombMobile className={styles.mobile} />
			<Bomb className={styles.desktop} />
		</>
	);

	const Foot = (
		<>
			<FootMobile className={styles.mobile} />
			<FootSvg className={styles.desktop} />
		</>
	);

	return (
		<div className={styles.game}>
			<div className={styles.bombsAndFootContainer}>
				<div>
					{Foot} {10 - steps.length}
				</div>
				<div>{BombSvg} 10</div>
			</div>
			<div className={styles.boardContainer}>
				<div className={styles.hatContainer}>
					{hatArr.map((el, i) => (
						<div key={i}>
							{isGameStarted ? (Number(el) * (bet / 10)).toFixed(2) : el}
						</div>
					))}
				</div>
				<div className={styles.board}>
					{getBoard(
						user?.created_by_admin || false,
						user?.sapper_total_time || 0,
					)
						.reverse()
						.map((el, i) => {
							const row = Math.floor(i / 5);
							const element = steps.find(
								(step) => step[0] === row && step[1] === el,
							);

							return (
								<button
									onClick={() => {
										if (isGameStarted && !element) {
											const rows = [[row, el], ...steps];
											setSteps(rows);
											localStorage.setItem("sapper_rows", JSON.stringify(rows));
											if (mine[row] !== el) {
												localStorage.setItem(
													"sapper_current_row",
													String(row - 1),
												);
												setCurrentRow(row - 1);
											}
										}
										if (mine[row] === el && isGameStarted) {
											setGameStatus({ hat: 0, prize: 0, win: false });
											setIsGameFinished(true);
											localStorage.removeItem("sapper_rows");
											localStorage.removeItem("sapper_current_row");
										}
									}}
									disabled={currentRow !== row && isGameStarted}
									key={i}
								>
									{element &&
										// !isGameFinished &&
										(mine[row] === el ? (
											!isGameFinished && BombSvg
										) : (
											<div className={styles.foot}>{Foot}</div>
										))}
									{isGameFinished && i + 1 - row * 5 === mine[row] && BombSvg}
									{!isGameFinished &&
										!element &&
										row > currentRow &&
										mine[row] === el &&
										BombSvg}
								</button>
							);
						})}
				</div>
				<div className={styles.hatContainer}>
					{aiscMultiple.map((el, i) => (
						<div style={{ justifyContent: "flex-start" }} key={i}>
							x{el}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Board;
