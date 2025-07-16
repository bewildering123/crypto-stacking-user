import { graphql } from "@/integrations/graphql-codegen/generated";

export const changePassword = graphql(`
	mutation changePassword($old_password: String!, $new_password: String!) {
		changePassword(new_password: $new_password, old_password: $old_password)
	}
`);
