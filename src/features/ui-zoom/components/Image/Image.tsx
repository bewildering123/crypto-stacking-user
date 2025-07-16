import clsx from "clsx";
import NextImage, { getImageProps } from "next/image";
import { forwardRef } from "react";

import styles from "./Image.module.scss";

const Image: typeof NextImage = forwardRef((props, ref) => {
	const { className, style } = props;

	const {
		props: { width, height },
	} = getImageProps(props);

	const responsiveStyle =
		width && height
			? {
					["--image-responsive-width" as any]: width,
					["--image-responsive-height" as any]: height,
				}
			: undefined;

	return (
		<NextImage
			{...props}
			ref={ref}
			data-responsive={responsiveStyle !== undefined ? true : undefined}
			className={
				responsiveStyle !== undefined
					? clsx(className, styles.responsiveImage)
					: className
			}
			style={style ? { ...style, ...responsiveStyle } : responsiveStyle}
		/>
	);
});

Image.displayName = "Image(Responsive)";

export default Image;
