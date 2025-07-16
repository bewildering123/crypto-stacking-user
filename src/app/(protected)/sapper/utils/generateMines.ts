export const generateMine = () => {
	return Array.from({ length: 10 }, () => Math.floor(Math.random() * 5) + 1);
};
