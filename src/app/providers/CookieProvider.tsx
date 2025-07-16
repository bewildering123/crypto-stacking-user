import { ReactNode } from "react";
import { CookiesProvider as Cookie } from "react-cookie";

const CookieProvider = ({ children }: { children?: ReactNode }) => {
	return <Cookie>{children}</Cookie>;
};

export default CookieProvider;
