import { graphql } from "@/integrations/graphql-codegen/generated";

export const getWinningGuessMutation = graphql(`
	mutation getWinningGuessMutation($number: Float!, $bet: Float!) {
		getWinningGuess(number: $number, bet: $bet) {
			aics
			hat
			aisc_balance
		}
	}
`);
