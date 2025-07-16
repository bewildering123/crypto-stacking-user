import { Dispatch, SetStateAction } from "react";

import Filter from "../../../../icons/filter.svg";

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
	{ name: "Amount", id: "amount" },
	{ name: "Type", id: "type" },
	{ name: "Status", id: "status" },
];

const TableHead = ({ dynamicHeight, filter, setFilter, setUp, up }: Props) => {
	return (
		<thead>
			<tr>
				{headersArr.map((el, i) => (
					<th
						className={i === 0 ? styles.first : i === 3 ? styles.last : ""}
						onClick={() => {
							if (filter === el.name) {
								setUp(!up);
							} else {
								setFilter(el.name);
								setUp(true);
							}
						}}
						style={{
							color:
								(el.id === filter.toLowerCase() && "rgb(207, 207, 207)") || "",
							width: i === 2 || i === 1 ? "230px" : "",
						}}
						key={i}
					>
						<div
							className={(i !== 3 && styles.after) || ""}
							style={{ "--dynamic-height": dynamicHeight } as any}
						>
							{el.name}{" "}
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
