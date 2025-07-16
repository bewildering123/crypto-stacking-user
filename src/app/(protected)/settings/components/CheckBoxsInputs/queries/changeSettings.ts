import { graphql } from "@/integrations/graphql-codegen/generated";

export const changeSettings = graphql(`
	mutation changeSettings(
		$two_factor_authentification: Boolean!
		$confirmations_by_email: Boolean!
	) {
		changeSettings(
			email: $confirmations_by_email
			two_factor: $two_factor_authentification
		)
	}
`);
