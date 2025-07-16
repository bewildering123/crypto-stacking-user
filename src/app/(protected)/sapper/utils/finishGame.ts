import { client } from "@/integrations/apollo/client";
import { UserState } from "@/integrations/zustand/user/user";

import { playSapperMutation } from "../queries/queries";
import { generateMine } from "./generateMines";

export const finishGame = async (
	setCurrentRow: (value: React.SetStateAction<number>) => void,
	setSteps: (value: React.SetStateAction<number[][]>) => void,
	setMine: (value: React.SetStateAction<number[]>) => void,
	setIsGameStarted: (value: React.SetStateAction<boolean>) => void,
	setIsGameFinished: (value: React.SetStateAction<boolean>) => void,
	setUser: (user: UserState) => void,
	user: UserState | null,
	gameStatus: {
		win: boolean;
		prize: number;
		hat: number;
	},
	bet: number,
	timeStart: number,
) => {
	setIsGameStarted(false);
	setIsGameFinished(false);
	setCurrentRow(9);
	setSteps([]);
	await client.mutate({
		mutation: playSapperMutation,
		variables: {
			bet: gameStatus.win
				? (user?.aics || 0) + gameStatus.prize
				: user?.aics || 0,
			hat: gameStatus.win ? gameStatus.hat : 0,
			time: Math.floor((Date.now() - timeStart) / 1000),
		},
	});
	setUser({
		...user,
		aics: gameStatus.win
			? (user?.aics || 0) + gameStatus.prize
			: user?.aics || 0,
		hat: gameStatus.win ? (user?.hat || 0) + gameStatus.hat : user?.hat,
		sapper_total_time:
			(user?.sapper_total_time || 0) +
			Math.floor((Date.now() - timeStart) / 1000),
	});
	localStorage.setItem("sapper_current_row", "9");
	localStorage.removeItem("sapper_rows");
	const mines = generateMine();
	setMine([]);
	console.log(mines);
	localStorage.setItem("sapper_mine", JSON.stringify(mines));
	setMine(mines);
};
