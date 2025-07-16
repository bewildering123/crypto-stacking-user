import { gql } from "@apollo/client";

import { graphql } from "@/integrations/graphql-codegen/generated";

export const createDepositMutation = graphql(`
	mutation createDeposit($amount: Float!) {
		createDeposit(amount: $amount) {
			amount
			wallet_adress
		}
	}
`);

export const confirmDepositMutation = gql(`
	mutation confirmDepositMutation {
		confirmDeposit
	}
`);

export const getMinimalDeposit = graphql(`
	query minimalDeposits {
		MinimalDeposits {
			docs {
				minimal_sum
			}
		}
	}
`);
