import { graphql } from "@/integrations/graphql-codegen/generated";

export const setBalance = graphql(`
	mutation playScreen($score: Float!) {
		playScreen(score: $score)
	}
`);
