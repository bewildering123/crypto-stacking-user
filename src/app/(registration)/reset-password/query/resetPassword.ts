import { graphql } from "@/integrations/graphql-codegen/generated";

export const resetPasswordMutation = graphql(`
	mutation recoveryPasswordMutation($email: String!) {
		recoveryPassword(email: $email)
	}
`);

export const confirmRecoveryMutation = graphql(`
	mutation cofirmRecovery($email: String!, $code: String!) {
		cofirmRecoveryPassword(email: $email, code: $code) {
			token
		}
	}
`);
