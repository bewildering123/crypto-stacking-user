import { graphql } from "@/integrations/graphql-codegen/generated";

export const loginQuery = graphql(`
	query login($email: String, $password: String) {
		login(email: $email, password: $password) {
			id
			name
			email
			country
			login
		}
	}
`);
