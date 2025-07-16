import { ApolloLink } from "@apollo/client";

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 *
 * source: https://github.com/wp-graphql/wp-graphql-woocommerce/pull/88
 */
export const middleware = new ApolloLink((operation, forward) => {
	if (typeof localStorage !== "undefined") {
		/**
		 * If session data exist in local storage, set value as session header.
		 */
		const session = localStorage.getItem("woo-session");
		if (session) {
			operation.setContext(() => ({
				headers: {
					"woocommerce-session": `Session ${session}`,
				},
			}));
		}
	}

	return forward(operation);
});

/**
 * Afterware operation
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 *
 * source: https://github.com/wp-graphql/wp-graphql-woocommerce/pull/88
 */
export const afterware = new ApolloLink((operation, forward) => {
	return forward(operation).map((response) => {
		if (typeof localStorage !== "undefined") {
			/**
			 * Check for session header and update session in local storage accordingly.
			 */
			const context = operation.getContext();
			const {
				response: { headers },
			} = context;
			const session = headers.get("woocommerce-session");
			if (session) {
				if (localStorage.getItem("woo-session") !== session) {
					localStorage.setItem(
						"woo-session",
						headers.get("woocommerce-session"),
					);
				}
			}
		}

		return response;
	});
});