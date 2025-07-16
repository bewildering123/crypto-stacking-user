import { Dispatch, SetStateAction } from "react";

import Filter from "../../icons/filter.svg";

import styles from "./TableHead.module.scss";

type Props = {
	dynamicHeight: string;
	setFilter: Dispatch<SetStateAction<string>>;
	setUp: Dispatch<SetStateAction<boolean>>;
	filter: string;
	up: boolean;
};

const headersArr = [
	{ name: "Date", id: "date" },
	{ name: "Refferral email", id: "email" },
	{ name: "Reffiled", id: "reffiled" },
	{ name: "Mining", id: "mining" },
	{ name: "Profit", id: "profit" },
];

const TableHead = ({ dynamicHeight, filter, setFilter, setUp, up }: Props) => {
	return (
		<thead>
			<tr>
				{headersArr.map((el, i) => (
					<th
						key={i}
						className={i === 0 ? styles.first : i === 3 ? styles.last : ""}
						onClick={() => {
							if (filter === el.id) {
								setUp(!up);
							} else {
								setFilter(el.id);
								setUp(true);
							}
						}}
						style={{
							color:
								(el.id === filter.toLowerCase() && "rgb(207, 207, 207)") || "",
							width: (i === 1 && "220px") || (i !== 0 && "100px") || "",
						}}
					>
						<div
							className={(i !== 4 && styles.after) || ""}
							style={{ "--dynamic-height": dynamicHeight } as any}
						>
							{el.name}
							<div
								className={
									(el.id === filter.toLowerCase() && up && styles.reverse) || ""
								}
							>
								<Filter />
							</div>
						</div>
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHead;
