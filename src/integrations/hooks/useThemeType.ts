import { useTheme } from "next-themes";

export const useThemeType = () => {
	const { systemTheme, theme } = useTheme();

	return theme === "system" ? systemTheme : theme;
};
