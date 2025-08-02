"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Logo from "../Header/components/Logo/Logo";

import styles from "./Footer.module.scss";

const menuList = [
	{
		key: "home",
		title: "Home",
		path: "/",
	},
	{
		key: "about",
		title: "About Us",
		path: "/about",
	},
	{
		key: "blog",
		title: "Blog",
		path: "/blog",
	},
	{
		key: "contact",
		title: "Contact us",
		path: "/contact",
	},
];

const Footer = () => {
	const path = usePathname();
	return (
		<footer className={styles.container}>
			<div className={styles.leftBlock}>
				<Link href={"/"} className={styles.logoContainer}>
					<Logo />
					<div className={styles.logoText}>Ai-Stake Coin</div>
				</Link>
				<div className={styles.description}>
					Building AI tools and systems that empower anyone to launch and scale
					intelligent solutions — anytime, anywhere
				</div>
				<div className={styles.copyright}>
					Copyright © 2010-{new Date().getFullYear()} AISC All rights reserved.
				</div>
			</div>
			<div className={styles.rightBlock}>
				<div>
					<h4 className={styles.menuTitle}>Company</h4>
					<div className={styles.menu}>
						{menuList.map((item) => (
							<Link
								key={item.key}
								href={item.path}
								className={`${styles.menuItem} ${path === item.path ? "active" : ""}`}
							>
								{item.title}
							</Link>
						))}
					</div>
				</div>
				<div>
					<h4 className={styles.menuTitle}>Legal</h4>
					<div className={styles.menu}>
						<Link
							href="/privacy-policy"
							className={`${styles.menuItem} ${path === "/privacy-policy" ? "active" : ""}`}
						>
							Privacy policy
						</Link>
						<Link
							href="/faq"
							className={`${styles.menuItem} ${path === "/faq" ? "active" : ""}`}
						>
							FAQ
						</Link>
						<Link
							href="/terms-condition"
							className={`${styles.menuItem} ${path === "/terms-condition" ? "active" : ""}`}
						>
							Terms & Conditional
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.mobileBlock}>
				<div className={styles.description}>
					Building AI tools and systems that empower anyone to launch and scale
					intelligent solutions — anytime, anywhere
				</div>
				<div className={styles.copyright}>
					Copyright © 2010-{new Date().getFullYear()} AISC All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
