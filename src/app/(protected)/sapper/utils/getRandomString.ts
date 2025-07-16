export function getRandomString(length = 7) {
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";
	let result = "";

	while (result.length < length) {
		const char = chars[Math.floor(Math.random() * chars.length)];
		if (!result.includes(char)) {
			result += char;
		}
	}

	return result;
}
