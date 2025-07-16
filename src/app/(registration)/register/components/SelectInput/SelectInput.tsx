import { Select } from "antd";
import { Dispatch, SetStateAction } from "react";

import { getCountryList } from "./utils/getCountyList";

import styles from "./SelectInput.module.scss";

type Props = {
	label: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	isError: boolean;
};

const SelectInput = ({ label, isError, setValue, value }: Props) => {
	return (
		<div className={styles.container}>
			<label>{label}</label>
			<Select
				style={
					(isError && {
						border: "1px solid red",
					}) ||
					{}
				}
				value={value}
				onChange={(e) => {
					setValue(e);
				}}
				className={styles.select}
				options={getCountryList()}
			/>
		</div>
	);
};

export default SelectInput;
