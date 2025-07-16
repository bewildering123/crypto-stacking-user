import { ApolloProvider as Apollo } from "@apollo/client";
import { ReactNode } from "react";

import { client } from "@/integrations/apollo/client";

const ApolloProvider = ({ children }: { children?: ReactNode }) => {
	return <Apollo client={client}>{children}</Apollo>;
};

export default ApolloProvider;
