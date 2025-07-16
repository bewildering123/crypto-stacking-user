import { useEffect, useState } from "react";

import { safeWindow } from "@/integrations/hooks/useMobile";

import { getPixelFactor } from "./getPixelFactor";

export function usePixelFactor() {
	const [pixelFactor, setPixelFactor] = useState(getPixelFactor);

	useEffect(() => {
		const onResize = () => {
			setPixelFactor(getPixelFactor());
		};

		safeWindow?.addEventListener("resize", onResize);

		return () => {
			safeWindow?.removeEventListener("resize", onResize);
		};
	}, []);

	return pixelFactor;
}
