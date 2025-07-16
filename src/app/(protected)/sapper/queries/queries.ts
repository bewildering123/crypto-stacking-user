import { graphql } from "@/integrations/graphql-codegen/generated";

export const playSapperMutation = graphql(`
	mutation playSapper($bet: Float!, $time: Int!, $hat: Float!) {
		playSapper(bet: $bet, time: $time, hat: $hat)
	}
`);

export const startSapperGameMutation = graphql(`
	mutation startSapperGame($bet: Float!) {
		startPlaySapper(bet: $bet)
	}
`);
