"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { useThemeType } from "@/integrations/hooks/useThemeType";
import useExchangeAics from "@/integrations/zustand/aics/aics";
import Spinner from "@/shared/components/Spinner/Spinner";

import backgroundLight from "./icons/background_light.webp";
import background from "./icons/background.png";

import styles from "./MainSection.module.scss";

const MainSection = () => {
	const theme = useThemeType();

	const { data } = useSession();

	const { exchange_aics } = useExchangeAics();

	return (
		<section className={styles.container}>
			<div className={styles.contentContainer}>
				<div className={styles.text}>
					<h1>
						Invest <span className={styles.light}>in the</span>
					</h1>
					<h1 className={styles.letters}>
						<span className={styles.dark}>future</span>
						with
						<span className={styles.dark}>AISC</span>
					</h1>
				</div>
				<div className={styles.coinContainer}>
					<div className={styles.textContainer}>
						<label>
							Now 1 AISC = {exchange_aics === 0 ? <Spinner /> : exchange_aics}$
						</label>
						<p>(Min 0.2% every day)</p>
					</div>
					<div className={styles.textContainer}>
						<label>Total capitalization:</label>
						<p>352 610 AISC = 183 357$</p>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<Link
						href={(data?.user && "/profile") || "/register"}
						className={styles.buyNowButton}
					>
						{data?.user ? "Profile" : "Buy now"}
					</Link>
					{!data?.user && (
						<Link
							href={(data?.user && "#") || "/sign-in"}
							className={styles.signInButton}
						>
							Sign in
						</Link>
					)}
				</div>
			</div>

			<div className={styles.backgroundContainer}>
				<Image
					src={theme === "light" ? backgroundLight : background}
					alt="background"
					fill
				/>
			</div>
		</section>
	);
};

export default MainSection;
