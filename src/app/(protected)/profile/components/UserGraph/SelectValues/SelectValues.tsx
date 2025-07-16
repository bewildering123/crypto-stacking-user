"use client";

import React from "react";
import Select from "react-select";

import styles from "./SelectValues.module.scss";

type Props = {
	values: string[];
	value: string;
	setValue: (value: string) => void;
};

const SelectValues = ({ setValue, value, values }: Props) => {
	const options = values.map((val) => ({ value: val, label: val }));

	return (
		<Select
			className={styles.selectContainer}
			classNamePrefix="custom"
			options={options}
			value={options.find((option) => option.value === value)}
			onChange={(selectedOption) => setValue(selectedOption?.value || "")}
			isSearchable={false}
		/>
	);
};

export default SelectValues;
