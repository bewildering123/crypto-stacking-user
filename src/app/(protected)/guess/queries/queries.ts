import { graphql } from "@/integrations/graphql-codegen/generated";

export const startGuessQuery = graphql(`
	query startGame($bet: Float!) {
		generateSHA(bet: $bet) {
			sha
			aisc
		}
	}
`);

export const finishGuessMutation = graphql(`
	mutation game($numbers: [Int], $bet: Int!, $time: Int!) {
		playGuess(numbers: $numbers, bet: $bet, time: $time) {
			win
			aics
			hat
			number
			sha
		}
	}
`);
