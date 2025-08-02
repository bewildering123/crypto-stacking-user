"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import { useThemeType } from "@/integrations/hooks/useThemeType";

import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
	const { setTheme } = useTheme();

	const whichTheme = useThemeType();

	return (
		<div className={styles.switchContainer}>
			<div
				className={`${styles.switchItem} ${whichTheme === "light" ? "active" : ""}`}
				onClick={() => setTheme("light")}
			>
				<Image
					src="/img/icons/brightness.svg"
					width={20}
					height={20}
					alt="sun"
				/>
			</div>
			<div
				className={`${styles.switchItem} ${whichTheme === "dark" ? "active" : ""}`}
				onClick={() => setTheme("dark")}
			>
				<Image src="/img/icons/moon.svg" width={20} height={20} alt="sun" />
			</div>
		</div>
	);
};

export default ThemeSwitcher;
