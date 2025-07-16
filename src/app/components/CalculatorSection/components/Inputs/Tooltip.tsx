import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import Edit from "./edit.svg";

import styles from "./Inputs.module.scss";

type Props = {
	value: number;
	setIsDraggingTooltip: Dispatch<SetStateAction<boolean>>;
	setValue: (val: number) => void;
	labelText: string;
};

const Tooltip = ({
	value,
	setValue,
	setIsDraggingTooltip,
	labelText,
}: Props) => {
	const [inputValue, setInputValue] = useState(value);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(Number(e.target.value));
	};

	const handleBlur = () => {
		const newValue = Number(inputValue);
		if (!isNaN(newValue)) {
			setValue(newValue);
		} else {
			setInputValue(value);
		}
	};

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	return (
		<div
			className={styles.toolContainer}
			onMouseDown={(e) => {
				e.stopPropagation();
				setIsDraggingTooltip(true);
			}}
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<p>
				<input
					value={inputValue}
					onChange={handleInputChange}
					onBlur={() => {
						handleBlur();
						setIsDraggingTooltip(false);
					}}
					type="number"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleBlur();
							setIsDraggingTooltip(false);
						}
						e.stopPropagation();
					}}
					onMouseDown={(e) => e.stopPropagation()}
				/>{" "}
				{labelText}
			</p>
			<Edit />
		</div>
	);
};

export default Tooltip;
