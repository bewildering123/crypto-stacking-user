"use client";

import { useMemo, type ReactNode } from "react";

import { ContextComposer } from "@/integrations/react/utils/ContextComposer/ContextComposer";

import ApolloProvider from "./ApolloProvider";
import SessionProvider from "./SessionProvider";

export function Providers({ children }: { children?: ReactNode }) {
	const contexts = useMemo(() => {
		return [ApolloProvider, SessionProvider];
	}, []);

	return <ContextComposer contexts={contexts}>{children}</ContextComposer>;
}
