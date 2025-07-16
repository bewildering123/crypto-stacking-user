import { ThemeProvider as Theme } from "next-themes";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children?: ReactNode }) => {
	return <Theme defaultTheme="dark">{children}</Theme>;
};

export default ThemeProvider;
