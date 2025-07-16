import { Dispatch, SetStateAction } from "react";

import { client } from "@/integrations/apollo/client";
import { UserState } from "@/integrations/zustand/user/user";

import { startGuessQuery } from "../queries/queries";

export const handleStartGame = async (
	setNeededSum: Dispatch<SetStateAction<number>>,
	bet: string,
	setSha: Dispatch<SetStateAction<string>>,
	setIsGameStarted: Dispatch<SetStateAction<boolean>>,
	// setIsGameFinshed: Dispatch<SetStateAction<boolean>>,
	setLoading: Dispatch<SetStateAction<boolean>>,
	setNumbers: Dispatch<SetStateAction<number[]>>,
	setTimeStart: Dispatch<SetStateAction<number>>,
	user: UserState | null,
	setUser: (user: UserState | null) => void,
) => {
	if ((user?.aics || 0) < Number(bet)) {
		setNeededSum(Number(bet) - (user?.aics || 0));
		return null;
	}

	const game = await client.query({
		query: startGuessQuery,
		fetchPolicy: "network-only",
		variables: {
			bet: Number(bet) || 0,
		},
	});

	if (game.data.generateSHA?.sha) {
		setSha(game.data.generateSHA.sha);
		setIsGameStarted(true);
		// setIsGameFinshed(false);
		setLoading(false);
		setNumbers([]);
		setTimeStart(Date.now());
		setUser({ ...user, aics: game.data.generateSHA.aisc || 0 });

		localStorage.setItem("sha", game.data.generateSHA.sha);
		localStorage.setItem("game_start", "true");
		localStorage.setItem("time_start", Date.now().toString());
		localStorage.setItem("bet", bet);
	}
};
