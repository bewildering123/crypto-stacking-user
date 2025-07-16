import { graphql } from "@/integrations/graphql-codegen/generated";

export const registrationMutation = graphql(`
	mutation reg(
		$country: String
		$email: String
		$password: String
		$name: String
		$login: String
		$refferal_code: String
	) {
		registration(
			country: $country
			email: $email
			password: $password
			name: $name
			login: $login
			refferal_code: $refferal_code
		) {
			id
			name
			email
			country
		}
	}
`);
