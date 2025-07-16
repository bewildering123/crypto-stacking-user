import { ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/public/createUploadLink";

import { safeWindow } from "../hooks/useMobile";
import { customFetch } from "./customFetch";
import * as upload from "./uploadMiddleware";

const httpLink = createUploadLink({
	fetch: customFetch as any,
	uri:
		typeof safeWindow === "undefined"
			? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/graphql`
			: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
});

export const client = new ApolloClient({
	link: upload.middleware.concat(upload.afterware.concat(httpLink as any)),

	cache: new InMemoryCache(),

	defaultOptions: {
		query: {
			fetchPolicy: "cache-first",
		},
	},
});
