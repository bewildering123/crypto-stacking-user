import { countries } from "../../../data/counties";

function SortArray(
	x: {
		label: string;
		value: string;
	},
	y: {
		label: string;
		value: string;
	},
) {
	if (x.value < y.value) {
		return -1;
	}
	if (x.value > y.value) {
		return 1;
	}
	return 0;
}

export function getCountryList() {
	const data = countries?.map((el: any) => {
		return {
			label: String(el.name.common) || "",
			value: String(el.name.common.toLowerCase().split(" ").join("-")) || "",
		};
	});

	return data.sort(SortArray);
}
