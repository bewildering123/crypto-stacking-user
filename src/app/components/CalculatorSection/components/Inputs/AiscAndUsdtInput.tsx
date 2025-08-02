import { Select, Slider } from "antd";
import Image from "next/image";
import React, { useState } from "react";

import { useCalculator } from "@/integrations/zustand/calculator/calculator";

import Tooltip from "./Tooltip";

import styles from "./Inputs.module.scss";

const AiscAndUsdtInput = () => {
	const { setSecondValue, setSelectedValue, selectedValue } = useCalculator();

	const [isDraggingTooltip, setIsDraggingTooltip] = useState<boolean>(false);

	const [value, setValue] = useState(2500);
	const [open, setOpen] = useState(false);

	const handleChange = (newValue: number) => {
		if (!isDraggingTooltip) {
			setValue(newValue);
		}
	};

	return (
		<div className={styles.itemContainer}>
			<Select
				className={styles.select}
				value={selectedValue}
				onChange={setSelectedValue}
				open={open}
				dropdownClassName={styles.selectDropdown}
				onDropdownVisibleChange={(visible) => setOpen(visible)}
				suffixIcon={
					<Image
						src="/img/icons/chevron-left.svg"
						width={20}
						height={20}
						alt="usdt"
						style={{
							transition: "transform 0.3s",
							transform: open ? "rotate(90deg)" : "rotate(-90deg)",
						}}
					/>
				}
				options={[
					{
						value: "USDT",
						label: (
							<div className={styles.usdt}>
								<Image
									src="/img/icons/usdt.svg"
									width={20}
									height={20}
									alt="usdt"
								/>
								USDT
							</div>
						),
					},
					{ value: "AISC", label: "AISC" },
				]}
			/>

			<Slider
				tooltip={{
					open: true,
					placement: "bottom",
					color: "linear-gradient(90deg, #1cc1ad 0%, #f3ae2e 100%)",
					overlay: <Tooltip value={value} />,
				}}
				min={0}
				max={selectedValue.toLowerCase() === "usdt" ? 5000 : 10000}
				value={value}
				onChange={handleChange}
				defaultValue={3400}
				className={styles.slider}
				marks={
					selectedValue.toLowerCase() === "usdt"
						? {
								0: "0",
								5000: {
									style: {
										transform: "translateX(-90%)",
									},
									label: 5000,
								},
							}
						: {
								0: "0",
								10000: {
									style: {
										transform: "translateX(-90%)",
									},
									label: 10000,
								},
							}
				}
				onAfterChange={() => setSecondValue(value)}
			/>
		</div>
	);
};

export default AiscAndUsdtInput;
