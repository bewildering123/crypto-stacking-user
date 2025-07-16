export const sortingFn = (
	data: {
		date: string;
		refferal_email: string;
		reffiled: number;
		mining: number;
		profit: number;
	}[],
	sorting: string,
	type: boolean,
) => {
	switch (sorting.toLowerCase()) {
		case "date":
			const arr = data.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
			);
			return type ? arr : arr.reverse();
		case "mining":
			const amountArr = data.sort((a, b) => a.mining - b.mining);
			return type ? amountArr : amountArr.reverse();
		case "reffiled":
			const reffiledArr = data.sort((a, b) => a.mining - b.mining);
			return type ? reffiledArr : reffiledArr.reverse();
		case "profit":
			const profitArr = data.sort((a, b) => a.profit - b.profit);
			return type ? profitArr : profitArr.reverse();
		case "email":
			const emailArr = data.sort((a, b) =>
				a.refferal_email
					.toLowerCase()
					.localeCompare(b.refferal_email.toLowerCase()),
			);
			return type ? emailArr : emailArr.reverse();
		default:
			return data;
	}
};
