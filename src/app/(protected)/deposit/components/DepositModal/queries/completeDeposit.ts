import { graphql } from "@/integrations/graphql-codegen/generated";

export const completeDepositMutation = graphql(`
	mutation completeDepositMutation {
		completeDeposit {
			status
			usdt
		}
	}
`);
