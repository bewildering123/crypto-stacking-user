import { graphql } from "@/integrations/graphql-codegen/generated";

export const changeWalletAddressMutation = graphql(`
	mutation changeWalletAddress($wallet_address: String) {
		changeWalletAddress(wallet_address: $wallet_address)
	}
`);
