import { graphql } from "@/integrations/graphql-codegen/generated";

export const getFreeCoin = graphql(`
	mutation getFreeCoin {
		freeCoin {
			aics
			hat
		}
	}
`);
