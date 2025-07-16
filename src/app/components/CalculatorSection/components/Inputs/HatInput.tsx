import { Slider } from "antd";
import React, { useEffect, useState } from "react";

import { useCalculator } from "@/integrations/zustand/calculator/calculator";

import Tooltip from "./Tooltip";

import styles from "./Inputs.module.scss";

const HatInput = () => {
	const { setHatValue } = useCalculator();

	const [value, setValue] = useState(11213);

	const [isDraggingTooltip, setIsDraggingTooltip] = useState<boolean>(false);

	const handleChange = (newValue: number) => {
		if (!isDraggingTooltip) {
			setValue(newValue);
		}
	};

	useEffect(() => {
		setHatValue(value);
	}, [value]);

	return (
		<div className={styles.hatContainer}>
			<p className={styles.text}>HAT</p>

			<Slider
				disabled={isDraggingTooltip}
				tooltip={{
					open: true,
					placement: "top",
					color: "#4F4BAD",
					overlay: (
						<Tooltip
							labelText="HAT"
							value={value}
							setIsDraggingTooltip={setIsDraggingTooltip}
							setValue={setValue}
						/>
					),
				}}
				min={0}
				max={70000}
				value={value}
				onChange={handleChange}
				defaultValue={11213}
				className={styles.slider}
				handleStyle={{
					borderColor: "#4F4BAD",
					backgroundColor: "#4F4BAD",
					borderRadius: "50%",
				}}
				marks={{
					0: "0",
					70000: "70000",
				}}
				trackStyle={{ backgroundColor: "#27256F" }}
				onAfterChange={() => setHatValue(value)}
			/>
		</div>
	);
};

export default HatInput;
