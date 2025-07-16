"use client";

import { useThemeType } from "@/integrations/hooks/useThemeType";

import LogoBlack from "../../icons/logo.svg";
import LogoWhite from "../../icons/logoWhite.svg";

const Logo = () => {
	const theme = useThemeType();

	return <>{theme === "light" ? <LogoWhite /> : <LogoBlack />}</>;
};

export default Logo;
