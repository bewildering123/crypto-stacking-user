import Link from "next/link";
import { HTMLProps } from "react";

import Spinner from "../Spinner/Spinner";

import styles from "./Button.module.scss";

type Props = {
	loading?: boolean;
	color?: "primary" | "green";
	href?: string;
};

const Button = ({
	children,
	loading = false,
	className = "",
	color = "primary",
	href,
	...props
}: Props & HTMLProps<HTMLButtonElement | HTMLLinkElement>) => {
	return href ? (
		<Link
			href={href}
			className={`${styles.button} ${color} ${className}`}
			{...props}
		>
			{loading ? <Spinner /> : children}
		</Link>
	) : (
		<button className={`${styles.button} ${color} ${className}`} {...props}>
			{loading ? <Spinner /> : children}
		</button>
	);
};

export default Button;
