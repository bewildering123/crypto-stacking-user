import "./globals.scss";

import clsx from "clsx";
import { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Suspense, type ReactNode } from "react";

import Header from "@/features/navigation/Header/Header";

import { ProgressBar } from "./components/ProgressBar";
import { Providers } from "./providers/Providers";
import ThemeProvider from "./providers/ThemeProvider";

export const metadata: Metadata = {
	title: "AI-Stake Coin",
	description:
		"AI-Stake Coin (AISC) is a cryptocurrency that utilizes a Proof-of-Stake (PoS) mining mechanism to support and advance artificial intelligence (AI). It aims to create a symbiotic relationship between blockchain technology and AI, fostering innovation, sustainability, and transparency.",
};

const yulong = localFont({
	variable: "--font-yulong",
	src: [
		{
			path: "../../public/fonts/Yulong.ttf",
			weight: "400",
		},
	],
});

const versus = localFont({
	variable: "--font-versus",
	src: [
		{
			path: "../../public/fonts/versus.otf",
			weight: "900",
		},
	],
});

const work_sans = Work_Sans({
	subsets: ["latin"],
	variable: "--font-work-sans",
	weight: ["600", "500", "400", "700", "900", "800"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["700", "400"],
});

export default function RootLayout({ children }: { children?: ReactNode }) {
	return (
		<Providers>
			<html lang="ru" suppressHydrationWarning>
				<body
					className={clsx(
						versus.variable,
						yulong.variable,
						work_sans.className,
						inter.variable,
					)}
				>
					<ThemeProvider>
						<Suspense>
							<ProgressBar />
						</Suspense>

						<Header />
						<main>{children}</main>
					</ThemeProvider>
				</body>
			</html>
		</Providers>
	);
}
