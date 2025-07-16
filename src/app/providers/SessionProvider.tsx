"use client";

import { SessionProvider as Session } from "next-auth/react";
import React, { ReactNode } from "react";

const SessionProvider = ({ children }: { children?: ReactNode }) => {
	return <Session>{children}</Session>;
};

export default SessionProvider;
