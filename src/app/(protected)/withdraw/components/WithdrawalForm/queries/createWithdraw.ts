import { gql } from "@apollo/client";

export const createWithdrawMutation = gql(`
	mutation createWithdraw($amount: Float!, $code: String) {
		createWithdraw(amount: $amount, code: $code)
	}
`);
