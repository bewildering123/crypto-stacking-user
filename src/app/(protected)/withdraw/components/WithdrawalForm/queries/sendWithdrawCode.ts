import { graphql } from "@/integrations/graphql-codegen/generated";

export const sendWithdrawCodeMutation = graphql(`
	mutation sendWithdrawCode {
		sendWithdrawCode
	}
`);
