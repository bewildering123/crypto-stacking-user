import { graphql } from "@/integrations/graphql-codegen/generated";

export const exchangeMutation = graphql(`
	mutation exchangeMutation($usdt: Float!, $aics: Float!) {
		exchange(usdt: $usdt, aics: $aics) {
			aics
			usdt
		}
	}
`);
