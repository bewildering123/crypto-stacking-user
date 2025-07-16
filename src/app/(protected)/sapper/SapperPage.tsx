"use client";

import { useEffect, useState } from "react";

import useUserStore from "@/integrations/zustand/user/user";

import GamesStatus from "../guess/components/GameStatus/GamesStatus";
import Board from "./component/Board/Board";
import Menu from "./component/Menu/Menu";
import { finishGame } from "./utils/finishGame";
import { generateMine } from "./utils/generateMines";
import { getRandomString } from "./utils/getRandomString";
import { getSHA } from "./utils/getSHA";

import styles from "./sapper.module.scss";

export default function SapperPage() {
	const [mine, setMine] = useState(generateMine());

	const { user, setUser } = useUserStore();

	const [steps, setSteps] = useState<number[][]>([]);

	const [currentRow, setCurrentRow] = useState(9);

	const [gameStatus, setGameStatus] = useState({
		win: true,
		prize: 0,
		hat: 0,
	});

	const [bet, setBet] = useState("");

	const [isGameFinished, setIsGameFinished] = useState(false);

	const [timeStart, setTimeStart] = useState(0);

	const [isGameStarted, setIsGameStarted] = useState(false);

	const [sha, setSHA] = useState("");

	useEffect(() => {
		if (isGameStarted) {
			if (mine.length === 0) {
				setMine([]);
				const mines = generateMine();
				setMine(mines);
				console.log(mines);
				localStorage.setItem("sapper_mine", JSON.stringify(mines));
			}
			const shaString =
				mine.toString().split(",").reverse().join("") + getRandomString();
			setSHA(shaString);
			localStorage.setItem("sapper_sha", shaString);
		}
	}, [isGameStarted]);

	useEffect(() => {
		setSHA(localStorage.getItem("sapper_sha") || sha);
		setBet(localStorage.getItem("sapper_bet") || bet);
		setTimeStart(
			Number(localStorage.getItem("sapper_time_start")) || timeStart,
		);
		setSteps(JSON.parse(localStorage.getItem("sapper_rows") || "[]") ?? steps);
		setCurrentRow(
			Number(localStorage.getItem("sapper_current_row")) || currentRow,
		);
		localStorage.getItem("sapperIsGameStarted") &&
			setMine(JSON.parse(localStorage.getItem("sapper_mine") || "[]"));
		if (localStorage.getItem("sapper_rows")) {
			setIsGameStarted(true);
		}
	}, []);

	useEffect(() => {
		if (isGameStarted) {
			localStorage.setItem("sapper_mine", JSON.stringify(mine));
		}
	}, [isGameStarted, mine]);

	useEffect(() => {
		if (currentRow === -1) {
			setGameStatus({
				prize: Number(bet) * 8.38,
				hat: Number(bet),
				win: true,
			});
			setIsGameFinished(true);
		}
	}, [currentRow]);

	return (
		<div className={styles.container}>
			{isGameFinished && (
				<GamesStatus
					prize={gameStatus.prize}
					hat={gameStatus.hat}
					sha={sha}
					setOpen={async () => {
						finishGame(
							setCurrentRow,
							setSteps,
							setMine,
							setIsGameStarted,
							setIsGameFinished,
							setUser,
							user,
							gameStatus,
							Number(bet),
							timeStart,
						);
					}}
					status={gameStatus.win}
				/>
			)}
			<div className={styles.rightContainer}>
				<p className={styles.title}>Sapper</p>
				<Board
					bet={Number(bet)}
					isGameFinished={isGameFinished}
					currentRow={currentRow}
					isGameStarted={isGameStarted}
					mine={mine}
					setCurrentRow={setCurrentRow}
					setGameStatus={setGameStatus}
					setIsGameFinished={setIsGameFinished}
					setSteps={setSteps}
					steps={steps}
				/>
			</div>
			<Menu
				bet={bet}
				currentRow={currentRow}
				isGameStarted={isGameStarted}
				setBet={setBet}
				setGameStatus={setGameStatus}
				setIsGameFinished={setIsGameFinished}
				setIsGameStarted={setIsGameStarted}
				setTimeStart={setTimeStart}
				sha={isGameStarted ? getSHA(sha) : sha}
			/>
		</div>
	);
}
