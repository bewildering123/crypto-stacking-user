"use client";

import Link from "next/link";
import React from "react";

import Logo from "./icons/logo.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.topContainer}>
				<div className={styles.logo}>
					<Logo />
					<p>Ai stake coin</p>
				</div>
				<div className={styles.docsContainer}>
					<Link href={"/privacy-policy"}>Privacy policy</Link>
					<Link href={"/terms-condition"}>Terms & Conditional</Link>
				</div>
			</div>
			<p className={styles.bottomText}>
				Copyright © 2010-{new Date().getFullYear()} AISC All rights reserved.
			</p>
			<div className={styles.blob} />
		</footer>
	);
};

export default Footer;
