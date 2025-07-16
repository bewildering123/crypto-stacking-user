import { graphql } from "@/integrations/graphql-codegen/generated";

export const verifyCodeMutation = graphql(`
	mutation verifyCodeMutation($code: String!) {
		verifyCode(code: $code)
	}
`);
