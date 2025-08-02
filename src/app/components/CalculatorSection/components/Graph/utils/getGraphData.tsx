export const MONTH_DATA = new Map()
	.set("Day", 1)
	.set("Week", 7)
	.set("Month", 30.5)
	.set("Year", 365);

export function getGraphData(
	hatValue: number,
	secondValue: number,
	button_value: string,
) {
	const arr = new Array(11).fill(null);

	const totalRate = (0.2 + hatValue * 0.000015) / 100;

	const data = arr.map((_, i) => {
		const balance =
			secondValue * (1 + totalRate) ** (i * MONTH_DATA.get(button_value));
		return {
			month: `${i + 1} ${button_value.toLowerCase()}`,
			balance:
				balance.toString().length > 6
					? Number(balance.toString().slice(0, 6))
					: balance,
		};
	});

	return data;
}
