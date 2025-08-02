import React, { useEffect, useState } from "react";

import styles from "./Inputs.module.scss";

type Props = {
	value: number;
};

const Tooltip = ({ value }: Props) => {
	const [inputValue, setInputValue] = useState(value);

	useEffect(() => {
		setInputValue(value);
	}, [value]);
	return <div className={styles.toolContainer}>{inputValue}</div>;
};

export default Tooltip;
