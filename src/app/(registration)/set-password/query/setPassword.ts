import { graphql } from "@/integrations/graphql-codegen/generated";

export const setPasswordMutation = graphql(`
	mutation setPasswordMutation($password: String!, $token: String!) {
		setPassword(password: $password, recovery_token: $token)
	}
`);
