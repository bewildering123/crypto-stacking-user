"use client";

import { useTheme } from "next-themes";

import { useThemeType } from "@/integrations/hooks/useThemeType";

import Dark from "./icons/dark.svg";
import Light from "./icons/light.svg";

import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
	const { setTheme } = useTheme();

	const whichTheme = useThemeType();

	return (
		<div className={styles.switchContainer}>
			<div
				style={{
					marginRight: "-12px",
					paddingTop: "2px",
				}}
			>
				<Light />
			</div>
			<input
				type="checkbox"
				id="switch"
				checked={whichTheme === "dark" ? true : false}
				onChange={() => {
					if (whichTheme === "dark") {
						setTheme("light");
					} else {
						setTheme("dark");
					}
				}}
			/>
			<label htmlFor="switch">Toggle</label>
			<div className={styles.nightSvg}>
				<Dark />
			</div>
		</div>
	);
};

export default ThemeSwitcher;
