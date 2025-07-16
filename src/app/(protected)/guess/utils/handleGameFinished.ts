import { Dispatch, SetStateAction } from "react";

import { client } from "@/integrations/apollo/client";

// import { ILeaderBoard } from "@/integrations/zustand/leaderboard/leaderboard";
// import { UserState } from "@/integrations/zustand/user/user";

import { finishGuessMutation } from "../queries/queries";

export const handleGameFinish = async (
	bet: string,
	numbers: number[],
	timeStart: number,
	setLoading: Dispatch<SetStateAction<boolean>>,
	setNumbers: Dispatch<SetStateAction<number[]>>,
	setSha: Dispatch<SetStateAction<string>>,
	setTimeStart: Dispatch<SetStateAction<number>>,
	// setDecodedSha: Dispatch<SetStateAction<string>>,
	setIsGameStarted: Dispatch<SetStateAction<boolean>>,
	// setResultOfGame: Dispatch<
	// 	SetStateAction<{
	// 		win: boolean;
	// 		prize: number;
	// 		number: number;
	// 		hat: number;
	// 	}>
	// >,
	// setIsGameFinshed: Dispatch<SetStateAction<boolean>>,
	// user: UserState | null,
	// setUser: (user: UserState | null) => void,
	// setLeaderBoards: (data: ILeaderBoard[]) => void,
	// leaderboard: ILeaderBoard[],
) => {
	setLoading(true);
	setNumbers([]);
	const res = await client.mutate({
		mutation: finishGuessMutation,
		variables: {
			bet: Number(bet),
			numbers: numbers,
			time: Math.ceil((Date.now() - timeStart) / 1000),
		},
		fetchPolicy: "network-only",
	});

	if (res.data?.playGuess) {
		setNumbers([]);
		setIsGameStarted(false);
		// setResultOfGame({
		// 	number: res.data.playGuess.number || 0,
		// 	prize: res.data.playGuess.aics || 0,
		// 	win: res.data.playGuess.win || false,
		// 	hat: res.data.playGuess.hat || 0,
		// });
		setLoading(false);
		setTimeStart(0);

		// if (res.data.playGuess.win) {
		// 	setLeaderBoards(
		// 		[
		// 			{
		// 				bet: 10,
		// 				winning: res.data.playGuess.aics || 0,
		// 				name: user?.name || "",
		// 			},
		// 			...leaderboard,
		// 		].slice(0, 8),
		// 	);
		// }

		localStorage.removeItem("numbers");
		localStorage.removeItem("sha");
		localStorage.removeItem("game_start");
		localStorage.removeItem("time_start");
		setSha(res?.data?.playGuess?.sha ?? "");
		// setDecodedSha(res.data.playGuess.sha || "");
		// setIsGameFinshed(true);
	}
};
