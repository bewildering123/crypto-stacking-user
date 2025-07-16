"use client";

import cx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Deposit from "./icons/deposit.svg";
import Exchange from "./icons/exchange.svg";
import FreeCoin from "./icons/free-coin.svg";
import Question from "./icons/question.svg";
import Referals from "./icons/refferals.svg";
import Sapper from "./icons/sapper.svg";
import Screen from "./icons/screen.svg";
import Withdraw from "./icons/withdrawal.svg";

import styles from "./Navigation.module.scss";

const Navigation = () => {
	const navigation = usePathname();

	return (
		<div className={styles.container}>
			<div className={cx(styles.containerLinks)}>
				<div className={styles.linksContainer}>
					<Link
						href={"/deposit"}
						className={cx(
							styles.link,
							navigation === "/deposit" && styles.active,
						)}
					>
						<Deposit />
						Deposit
					</Link>
					<Link
						href={"/exchange"}
						className={cx(
							styles.link,
							navigation === "/exchange" && styles.active,
						)}
					>
						<Exchange />
						Exchange
					</Link>
					<Link
						href={"/withdraw"}
						className={cx(
							styles.link,
							navigation === "/withdraw" && styles.active,
						)}
					>
						<Withdraw />
						Withdraw
					</Link>
				</div>
				<div className={styles.line} />
				<div className={styles.linksContainer}>
					<Link
						href={"/screen"}
						className={cx(
							styles.link,
							navigation === "/screen" && styles.active,
						)}
					>
						<Screen />
						Screen
					</Link>
					<Link
						href={"/sapper"}
						className={cx(
							styles.link,
							navigation === "/sapper" && styles.active,
						)}
					>
						<Sapper />
						Sapper
					</Link>
					<Link
						href={"/guess"}
						className={cx(
							styles.link,
							navigation === "/guess" && styles.active,
						)}
					>
						<Question />
						Guess
					</Link>
				</div>
				<div className={styles.line} />
				<div className={styles.linksContainer}>
					<Link
						href={"/refferals"}
						className={cx(
							styles.link,
							navigation === "/refferals" && styles.active,
						)}
					>
						<Referals />
						Refferals
					</Link>
				</div>
				<div className={styles.line} />
				<div className={styles.linksContainer}>
					<Link
						href={"/free-coin"}
						className={cx(
							styles.link,
							navigation === "/free-coin" && styles.active,
						)}
					>
						<FreeCoin />
						Free coin
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
