"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import AicsIcon from "@/app/(protected)/sapper/icons/aics.svg";
import { client } from "@/integrations/apollo/client";
import { useLeaderboard } from "@/integrations/zustand/leaderboard/leaderboard";
import useUserStore from "@/integrations/zustand/user/user";
import Button from "@/shared/components/Button/Button";
import InputWithLabelWithState from "@/shared/components/InputWithLabelWithState/InputWithLabelWithState";

import Game from "./components/Game/Game";
import { getWinningGuessMutation } from "./components/Game/queries/getWinningGuess";
// import GamesStatus from "./components/GameStatus/GamesStatus";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import ShowMoneyModal from "./components/ShowMoneyModal/ShowMoneyModal";
import { handleGameFinish } from "./utils/handleGameFinished";
import { handleStartGame } from "./utils/handleGameStart";

import styles from "./guess.module.scss";

export default function GuessGame() {
	const [bet, setBet] = useState("");

	const { data } = useSession();

	const [isGameStarted, setIsGameStarted] = useState(false);
	const [timeStart, setTimeStart] = useState(0);
	const [sha, setSha] = useState("");

	const { user, setUser } = useUserStore();
	const { setLeaderBoards, leaderboard } = useLeaderboard();

	const [numbers, setNumbers] = useState<number[]>([]);

	// const [isGameFinished, setIsGameFinshed] = useState(false);

	const [loading, setLoading] = useState(false);

	// const [resultOfGame, setResultOfGame] = useState({
	// 	win: true,
	// 	prize: 0,
	// 	number: 0,
	// 	hat: 0,
	// });

	// const [decodedSha, setDecodedSha] = useState("");

	const [showModal, setShowModal] = useState(false);
	const [neededSum, setNeededSum] = useState(0);

	useEffect(() => {
		const isStart = localStorage.getItem("game_start");

		if (isStart) {
			setShowModal(false);
			setIsGameStarted(true);
			setSha(localStorage.getItem("sha") || "");
			setTimeStart(Number(localStorage.getItem("time_start") || 0));
			setBet(localStorage.getItem("bet") || "");
			const numbers = localStorage.getItem("numbers");
			if (numbers) {
				setNumbers(JSON.parse(numbers));
			}
		}
	}, []);

	const [win, setWin] = useState({ aisc: 0, hat: 0 });

	const getWin = async (number: number) => {
		const res = await client.mutate({
			mutation: getWinningGuessMutation,
			variables: {
				number,
				bet: Number(bet),
			},
		});

		if (res.data?.getWinningGuess) {
			setWin({
				aisc: res.data.getWinningGuess?.aics || 0,
				hat: res.data.getWinningGuess.hat || 0,
			});
			setUser({
				...user,
				hat: (user?.hat || 0) + (res.data.getWinningGuess.hat || 0),
				aics: res.data.getWinningGuess.aisc_balance || 0,
			});
			setShowModal(true);
			if (res.data.getWinningGuess.aics !== 0) {
				const newLeaderboard = [
					{
						bet: Number(bet),
						name: data?.user?.name || "",
						winning: res.data.getWinningGuess.aics || 0,
					},
					...leaderboard,
				].slice(0, 8);
				setLeaderBoards([]);
				setLeaderBoards(newLeaderboard);
			}
		}
	};

	useEffect(() => {
		if (numbers.length === 3) {
			setNumbers([]);
			setLoading(true);
			handleGameFinish(
				bet,
				numbers,
				timeStart,
				setLoading,
				setNumbers,
				setSha,
				setTimeStart,
				// setDecodedSha,
				setIsGameStarted,
				// setResultOfGame,
				// setIsGameFinshed,
				// user,
				// setUser,
				// setLeaderBoards,
				// leaderboard,
			);
		}
	}, [numbers]);

	useEffect(() => {
		setTimeout(() => {
			setNeededSum(0);
		}, 3000);
	}, [neededSum]);

	return (
		<div className={styles.container}>
			{/* {isGameFinished && (
				<GamesStatus
					prize={resultOfGame.prize}
					setOpen={() => setIsGameFinshed(false)}
					status={resultOfGame.win}
					hat={resultOfGame.hat}
					sha={decodedSha}
					repeat
				/>
			)} */}
			<div className={styles.leftContainer}>
				<p className={styles.title}>Guess the number</p>
				<div className={styles.gameContainer}>
					{showModal && (
						<ShowMoneyModal
							aisc={win.aisc}
							hat={win.hat}
							setShowModal={setShowModal}
						/>
					)}
					<Game
						isGameStarted={isGameStarted}
						loading={loading}
						numbers={numbers}
						setNumbers={setNumbers}
						getWin={getWin}
					/>
					<div className={styles.contentContainer}>
						<div className={styles.cont}>
							<div className={styles.textContainer}>
								<InputWithLabelWithState
									label="Your bet: 10-500 AISC"
									setValue={setBet}
									value={bet}
									disable={isGameStarted}
								/>
								{neededSum !== 0 && (
									<div className={styles.errorContainer}>
										You don&apos;t have enough: {neededSum} AICK
									</div>
								)}
							</div>
							<Button
								disabled={
									isGameStarted ||
									bet === "" ||
									Number(bet) < 10 ||
									Number(bet) > 500
								}
								handleClick={() =>
									handleStartGame(
										setNeededSum,
										bet,
										setSha,
										setIsGameStarted,
										// setIsGameFinshed,
										setLoading,
										setNumbers,
										setTimeStart,
										user,
										setUser,
									)
								}
								text="Start"
							/>
						</div>
						<div className={styles.cont}>
							<div className={styles.textCont}>
								<p className={styles.titleText}>Max win:</p>
								<div className={styles.text}>
									{Number(bet) * 20} AISC and {Number(bet) * 3} HAT
									<AicsIcon />
								</div>
							</div>
						</div>
						<p className={styles.sha}>{sha !== "" && `SHA: ${sha}`}</p>
						<LeaderBoard />
					</div>
				</div>
			</div>
		</div>
	);
}
