import { Slider } from "antd";
import React, { useState } from "react";

import SelectValues from "@/app/(protected)/profile/components/UserGraph/SelectValues/SelectValues";
import { useCalculator } from "@/integrations/zustand/calculator/calculator";

import Tooltip from "./Tooltip";

import styles from "./Inputs.module.scss";

const AiscAndUsdtInput = () => {
	const { setSecondValue, setSelectedValue, selectedValue } = useCalculator();

	const [isDraggingTooltip, setIsDraggingTooltip] = useState<boolean>(false);

	const [value, setValue] = useState(2500);

	const handleChange = (newValue: number) => {
		if (!isDraggingTooltip) {
			setValue(newValue);
		}
	};

	return (
		<div className={styles.hatAndAiscContainer}>
			{/* <p className={styles.text}>
				<span
					onClick={() => setSelectedValue("aisc")}
					className={clsx(selectedValue === "aisc" && styles.active)}
				>
					AISC
				</span>{" "}
				/{" "}
				<span
					onClick={() => setSelectedValue("usdt")}
					className={clsx(selectedValue === "usdt" && styles.active)}
				>
					USDT
				</span>
			</p> */}
			<div style={{ width: "120px" }}>
				<SelectValues
					setValue={setSelectedValue}
					value={selectedValue}
					values={["AISC", "USDT"]}
				/>
			</div>

			<Slider
				disabled={isDraggingTooltip}
				tooltip={{
					open: true,
					placement: "top",
					color: "#4F4BAD",
					overlay: (
						<Tooltip
							labelText={selectedValue.toUpperCase()}
							value={value}
							setIsDraggingTooltip={setIsDraggingTooltip}
							setValue={(val) => {
								setSecondValue(val);
								setValue(val);
							}}
						/>
					),
				}}
				min={0}
				max={selectedValue.toLowerCase() === "usdt" ? 5000 : 10000}
				value={value}
				onChange={handleChange}
				defaultValue={3400}
				className={styles.slider}
				handleStyle={{
					borderColor: "#4F4BAD",
					backgroundColor: "#4F4BAD",
					borderRadius: "50%",
				}}
				marks={
					selectedValue.toLowerCase() === "usdt"
						? {
								0: "0",
								5000: "5000",
							}
						: { 0: "0", 10000: "10000" }
				}
				trackStyle={{ backgroundColor: "#27256F" }}
				onAfterChange={() => setSecondValue(value)}
			/>
		</div>
	);
};

export default AiscAndUsdtInput;
