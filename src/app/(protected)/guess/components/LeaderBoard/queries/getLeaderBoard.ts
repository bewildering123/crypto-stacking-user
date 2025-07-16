import { graphql } from "@/integrations/graphql-codegen/generated";
import { GetLeaderBoardQuery } from "@/integrations/graphql-codegen/generated/graphql";

export const getLeaderBoard = graphql(`
	query getLeaderBoard($prevState: [leaderboard_input]) {
		getGuessLeaderboard(prevState: $prevState) {
			name
			bet
			winning
		}
	}
`);

export const unwrappedLeaderboard = (data: GetLeaderBoardQuery | undefined) => {
	if (!data || !data.getGuessLeaderboard) return [];

	return data.getGuessLeaderboard.map((el) => {
		return {
			name: el.name || "",
			bet: el.bet || 0,
			winning: el.winning || 0,
		};
	});
};
