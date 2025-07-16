import { graphql } from "@/integrations/graphql-codegen/generated";

export const resetCode = graphql(`
	mutation resetCodeMutation($email: String, $confirm: Boolean) {
		resetCode(email: $email, confirmation: $confirm)
	}
`);

export const verifyCode = graphql(`
	mutation verifyemail($email: String, $code: String) {
		verifyEmail(email: $email, code: $code)
	}
`);
