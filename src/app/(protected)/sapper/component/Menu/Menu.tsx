import React, { Dispatch, SetStateAction } from "react";

import LeaderBoard from "@/app/(protected)/guess/components/LeaderBoard/LeaderBoard";
import { client } from "@/integrations/apollo/client";
import useUserStore from "@/integrations/zustand/user/user";
import Button from "@/shared/components/Button/Button";
import InputWithLabelWithState from "@/shared/components/InputWithLabelWithState/InputWithLabelWithState";

import AicsIcon from "../../icons/aics.svg";
import Medal from "../../icons/medal.svg";
import { startSapperGameMutation } from "../../queries/queries";
import { aiscMultiple, hatArr } from "../../utils/multiples";

import styles from "./Menu.module.scss";

type Props = {
	bet: string;
	isGameStarted: boolean;
	setBet: Dispatch<SetStateAction<string>>;
	setIsGameStarted: Dispatch<SetStateAction<boolean>>;
	setTimeStart: Dispatch<SetStateAction<number>>;
	currentRow: number;
	setGameStatus: Dispatch<
		SetStateAction<{
			win: boolean;
			prize: number;
			hat: number;
		}>
	>;
	setIsGameFinished: Dispatch<SetStateAction<boolean>>;
	sha: string;
};

const Menu = ({
	bet,
	isGameStarted,
	setBet,
	setIsGameStarted,
	setTimeStart,
	currentRow,
	setGameStatus,
	setIsGameFinished,
	sha,
}: Props) => {
	const { user, setUser } = useUserStore();

	return (
		<div className={styles.winContainer}>
			<div className={styles.cont}>
				<div className={styles.textContainer}>
					<InputWithLabelWithState
						disable={isGameStarted}
						value={bet}
						setValue={setBet}
						label="Your bet: 10-500 AISC"
					/>
				</div>
				{isGameStarted && (
					<div className={styles.textContainer}>
						<p className={styles.titleText}>Max win:</p>
						<div className={styles.text}>
							{(Number(bet) * 8.38).toFixed(2)} AISC and {bet} HAT <AicsIcon />
						</div>
					</div>
				)}
				<Button
					disabled={
						bet.length === 0 ||
						isGameStarted ||
						Number(bet) < 10 ||
						Number(bet) > 500 ||
						(user?.aics || 0) < Number(bet)
					}
					onClick={async () => {
						const res = await client.mutate({
							mutation: startSapperGameMutation,
							variables: {
								bet: Number(bet),
							},
						});
						localStorage.setItem("sapperIsGameStarted", "true");
						if (res.data) {
							setUser({
								...user,
								aics: (user?.aics || 0) - Number(bet),
							});
							const time = Date.now();
							localStorage.setItem("sapper_time_start", String(time));
							localStorage.setItem("sapper_bet", bet);
							setIsGameStarted(true);
							setTimeStart(time);
						}
					}}
				>
					Start
				</Button>
			</div>
			{isGameStarted && currentRow !== 9 && (
				<>
					<div className={styles.cont}>
						<div className={styles.textContainer}>
							<p className={styles.titleText}>
								<Medal /> You win:
							</p>
							<div className={styles.text}>
								{(Number(bet) * aiscMultiple[currentRow + 1]).toFixed(2)} AISC
								and{" "}
								{(Number(hatArr[currentRow + 1]) * (Number(bet) / 10)).toFixed(
									2,
								)}{" "}
								HAT
							</div>
						</div>
						<Button
							disabled={!isGameStarted}
							onClick={() => {
								setGameStatus({
									hat: Number(hatArr[currentRow + 1]) * (Number(bet) / 10),
									prize: Number(bet) * aiscMultiple[currentRow + 1],
									win: true,
								});
								setIsGameFinished(true);
							}}
						>
							Get now
						</Button>
					</div>
				</>
			)}
			{sha !== "" && <p className={styles.sha}>SHA: {sha}</p>}
			<div className={styles.leaderboard}>
				<LeaderBoard />
			</div>
		</div>
	);
};

export default Menu;
