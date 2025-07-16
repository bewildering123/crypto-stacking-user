"use client";

import { useEffect, useState } from "react";

export const isBrowser = typeof window !== "undefined";
export const safeWindow: (Window & typeof globalThis) | undefined = isBrowser
	? window
	: undefined;

export const useMobileDetect = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const userAgent =
			typeof window.navigator === "undefined" ? "" : navigator.userAgent;
		const mobile = Boolean(
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				userAgent,
			),
		);
		setIsMobile(mobile);
	}, []);

	return isMobile;
};
