"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { client } from "@/integrations/apollo/client";
import { useMobileDetect } from "@/integrations/hooks/useMobile";
import useExchangeAics from "@/integrations/zustand/aics/aics";
import useUserStore from "@/integrations/zustand/user/user";
import useView from "@/integrations/zustand/view/view";

import Logo from "./components/Logo/Logo";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { getExchangeQuery } from "./components/User/queries/queries";
import User from "./components/User/User";
import MenuIcons from "./MenuIcons";

import styles from "./Header.module.scss";

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
		key: "faq",
		title: "FAQ",
		path: "/faq",
	},
	{
		key: "contact",
		title: "Contact us",
		path: "/contact",
	},
];

const Header = () => {
	const [menu, setMenu] = useState(false);

	const path = usePathname();

	const { user } = useUserStore();

	const { setView } = useView();

	const isMobile = useMobileDetect();

	useEffect(() => {
		if (path !== "/" && user) {
			setView(true);
		}
	}, [path]);

	useEffect(() => {
		if (!isMobile) {
			setMenu(false);
		}
	}, [isMobile]);

	const { setExhange, exchange_aics } = useExchangeAics();

	const getExhange = useCallback(async () => {
		const exhange = await client.query({
			query: getExchangeQuery,
		});
		setExhange(exhange.data.getExchange?.aics_exchange || 0);
	}, []);

	useEffect(() => {
		if (exchange_aics === 0) {
			getExhange();
		}
	}, [exchange_aics]);

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.leftContainer}>
					<MenuIcons menu={menu} setMenu={setMenu} />
					<Link href={"/"} className={styles.logoContainer}>
						<Logo />
						<div className={styles.logoText}>Ai-Stake Coin</div>
					</Link>
				</div>

				<div className={styles.sectionContainer}>
					{menuList.map((item) => (
						<Link
							key={item.key}
							href={item.path}
							className={`${styles.sectionItem} ${path === item.path ? "active" : ""}`}
						>
							{item.title}
						</Link>
					))}
				</div>
				<div className={styles.rightContainer}>
					<div className={styles.theme}>
						<ThemeSwitcher />
					</div>

					<User need setMenu={setMenu} />
				</div>
			</div>
			{menu &&
				(user ? (
					<MobileMenu setView={setMenu} />
				) : (
					<div className={styles.menuContainerLayout}>
						<div className={styles.menuContainer}>
							<ThemeSwitcher />
							<div className={styles.linksContainer}>
								<Link href={"/#about"} onClick={() => setMenu(false)}>
									About
								</Link>
								<Link href={"/#faq"} onClick={() => setMenu(false)}>
									FAQ
								</Link>
								<Link href={"/#contact"} onClick={() => setMenu(false)}>
									Contact us
								</Link>
							</div>
							<Link
								href={"/sign-in"}
								onClick={() => setMenu(false)}
								className={styles.signInButton}
							>
								Sign in
							</Link>
						</div>
					</div>
				))}
		</header>
	);
};

export default Header;
