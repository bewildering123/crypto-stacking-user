import { Dispatch, SetStateAction } from "react";

import Spinner from "@/shared/components/Spinner/Spinner";

import ChessIcon from "../../icons/chess.svg";
import LittleChess from "../../icons/littleChess.svg";
import LittleWinChess from "../../icons/littleWinChess.svg";
import WinChess from "../../icons/winChess.svg";

import styles from "./Game.module.scss";

type Props = {
	loading: boolean;
	isGameStarted: boolean;
	numbers: number[];
	setNumbers: Dispatch<SetStateAction<number[]>>;
	getWin: (num: number) => void;
};

const Game = ({
	loading,
	isGameStarted,
	numbers,
	setNumbers,
	getWin,
}: Props) => {
	const board = new Array(25).fill(0);
	return (
		<div className={styles.game}>
			{loading && (
				<div className={styles.loader}>
					<Spinner />
				</div>
			)}
			{board.map((_, i) => (
				<button
					disabled={numbers.includes(i + 1) || loading}
					onClick={() => {
						if (isGameStarted) {
							localStorage.setItem(
								"numbers",
								JSON.stringify([...numbers, i + 1]),
							);
							setNumbers([...numbers, i + 1]);
							getWin(i + 1);
						}
					}}
					key={i}
				>
					{(numbers.includes(i + 1) && (
						<div className={styles.winBackground}>
							<LittleWinChess className={styles.mobile} />
							<WinChess className={styles.desktop} />
						</div>
					)) || (
						<>
							<LittleChess className={styles.mobile} />
							<ChessIcon className={styles.desktop} />
						</>
					)}
				</button>
			))}
		</div>
	);
};

export default Game;
