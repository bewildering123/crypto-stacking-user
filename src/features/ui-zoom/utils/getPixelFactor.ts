import { getRemSize } from "./getRemSize";

export function getPixelFactor() {
	return (1 / 16) * getRemSize();
}
