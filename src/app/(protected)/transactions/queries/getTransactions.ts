import { graphql } from "@/integrations/graphql-codegen/generated";
import { GetTransactionsQuery } from "@/integrations/graphql-codegen/generated/graphql";

export const getTransactions = graphql(`
	query getTransactions($currency_type: String!, $page: Int!) {
		getTransactions(currency_type: $currency_type, page: $page) {
			docs {
				date
				amount
				type
				currency_type
				status
			}
			totalDocs
			hasNextPage
			limit
			offset
			pagingCounter
			totalPages
			nextPage
			page
		}
	}
`);

export const unwappedTransactions = (
	data: GetTransactionsQuery | undefined,
) => {
	if (!data || !data.getTransactions || !data.getTransactions.docs) return [];

	return data.getTransactions.docs.map((el) => {
		return {
			amount: el?.amount || 0,
			currency_type: el?.currency_type || "",
			date: el?.date || "",
			status: el?.status || "",
			type: el?.type || "",
		};
	});
};
