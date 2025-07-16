export const sortingFn = (
	data: {
		amount: number;
		currency_type: string;
		date: any;
		status: string;
		type: string;
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
		case "amount":
			const amountArr = data.sort((a, b) => a.amount - b.amount);
			return type ? amountArr : amountArr.reverse();
		case "status":
			const statusObj: any = {
				Done: 2,
				Pending: 0,
				Rejected: 1,
			};
			const statusArr = data.sort(
				(a, b) => statusObj[b.status] - statusObj[a.status],
			);

			return !type ? statusArr : statusArr.reverse();
		case "type":
			const typeArr = data.sort((a, b) =>
				a.type.toLowerCase().localeCompare(b.type.toLowerCase()),
			);
			return type ? typeArr : typeArr.reverse();
		default:
			return data;
	}
};
