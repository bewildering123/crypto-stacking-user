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
		<div className={styles.itemContainer}>
			<div className={styles.title}>HAT</div>

			<Slider
				tooltip={{
					open: true,
					placement: "bottom",
					color: "linear-gradient(90deg, #1cc1ad 0%, #f3ae2e 100%)",
					overlay: <Tooltip value={value} />,
				}}
				min={0}
				max={70000}
				value={value}
				onChange={handleChange}
				defaultValue={11213}
				className={styles.slider}
				marks={{
					0: "0",
					70000: {
						style: {
							transform: "translateX(-90%)",
						},
						label: 70000,
					},
				}}
				onAfterChange={() => setHatValue(value)}
			/>
		</div>
	);
};

export default HatInput;
