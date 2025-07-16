import { graphql } from "@/integrations/graphql-codegen/generated";

export const sendEmailQuery = graphql(`
	mutation contactUs(
		$phone: String
		$email: String
		$message: String
		$name: String
	) {
		contactUs(phone: $phone, email: $email, message: $message, name: $name)
	}
`);
