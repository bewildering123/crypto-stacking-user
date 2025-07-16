"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { ComponentProps, memo } from "react";

type AppProgressBarProps = ComponentProps<typeof AppProgressBar>;

const options: NonNullable<AppProgressBarProps["options"]> = {
	showSpinner: false,
};

const ProgressBar = memo(() => (
	<AppProgressBar
		height="3px"
		color="var(--contact-us-section-span-color)"
		options={options}
		shallowRouting
	/>
));

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
