import { graphql } from "@/integrations/graphql-codegen/generated";

export const getFreeHatMutation = graphql(`
	mutation getFreeHat {
		getFreeHat {
			can_get
			hat
		}
	}
`);
