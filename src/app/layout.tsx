import "./globals.scss";

import clsx from "clsx";
import { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["700", "400"],
});

const space_grotec = Space_Grotesk({
	variable: "--font-space_grotesk",
	subsets: ["latin"],
	weight: ["700", "500"],
});

export default function RootLayout({ children }: { children?: ReactNode }) {
	return (
		<Providers>
			<html lang="ru" suppressHydrationWarning>
				<body className={clsx(inter.variable, space_grotec.variable)}>
					<ThemeProvider>
						<Suspense>
							<ProgressBar />
						</Suspense>
						<div className="container">
							<Header />
							<main>{children}</main>
						</div>
					</ThemeProvider>
				</body>
			</html>
		</Providers>
	);
}
