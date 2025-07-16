import { graphql } from "@/integrations/graphql-codegen/generated";

export const resetCode = graphql(`
	mutation resetCode($email: String) {
		resetCode(email: $email)
	}
`);

export const verifyEmailCode = graphql(`
	mutation verifyEmailCode($email: String, $code: String, $need: Boolean) {
		verifyEmail(email: $email, code: $code, need: $need)
	}
`);
