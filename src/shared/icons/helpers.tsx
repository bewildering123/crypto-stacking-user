import clsx from "clsx";
import { FC, memo, ReactNode, SVGProps } from "react";

import { pixelsToRemString } from "@/features/ui-zoom/utils/pixelsToRemString";

import styles from "./helpers.module.scss";

export interface IconProps extends SVGProps<SVGSVGElement> {}

export interface CreateIconOptions<T> {
	name: string;
	viewBox: {
		width: number;
		height: number;
	};
	children: ReactNode | ((props: T) => ReactNode);
}

export function createIcon<T>({
	name,
	viewBox,
	children,
}: CreateIconOptions<T>) {
	const IconComponent = memo((props: IconProps & T) => (
		<svg
			display="inline-block"
			fill="none"
			viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			className={clsx(styles.svgIcon, props.className)}
			style={{
				...props.style,
				["--svg-icon-default-width" as any]: pixelsToRemString(viewBox.width),
				["--svg-icon-default-height" as any]: pixelsToRemString(viewBox.height),
			}}
		>
			{typeof children === "function" ? children(props) : children}
		</svg>
	)) as FC<IconProps & T>;

	if (process.env.NODE_ENV !== "production") {
		IconComponent.displayName = `Icon(${name})`;
	}

	return IconComponent;
}
