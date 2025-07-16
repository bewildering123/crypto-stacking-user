export function getRemSize() {
	return typeof document === "undefined"
		? 16
		: parseFloat(getComputedStyle(document.documentElement).fontSize);
}
