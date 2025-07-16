import { graphql } from "@/integrations/graphql-codegen/generated";
import { GetRefferalsQuery } from "@/integrations/graphql-codegen/generated/graphql";

export const getRefferalTable = graphql(`
	query getRefferals {
		getRefferals {
			date
			refferal_email
			reffiled
			mining
			profit
		}
	}
`);

export const unwappedRefferalTable = (data: GetRefferalsQuery | undefined) => {
	if (!data || !data.getRefferals) return [];

	return data.getRefferals.map((el) => {
		return {
			date: el?.date || "",
			refferal_email: el?.refferal_email || "",
			reffiled: el?.reffiled || 0,
			mining: el?.mining || 0,
			profit: el?.profit || 0,
		};
	});
};
