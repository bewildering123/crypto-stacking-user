import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import Spinner from "../Spinner/Spinner";

import styles from "./Button.module.scss";

type BaseProps = {
	loading?: boolean;
	color?: "primary" | "green";
	children: ReactNode;
	className?: string;
};

type ButtonProps = BaseProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined;
	};

type LinkProps = BaseProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		href: string;
	};

type Props = ButtonProps | LinkProps;

const Button = ({
	children,
	loading = false,
	className = "",
	color = "primary",
	href,
	...props
}: Props) => {
	const classes = `${styles.button} ${color} ${className}`;

	if (href) {
		return (
			<Link
				href={href}
				className={classes}
				{...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{loading ? <Spinner /> : children}
			</Link>
		);
	}

	return (
		<button
			className={classes}
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{loading ? <Spinner /> : children}
		</button>
	);
};

export default Button;
