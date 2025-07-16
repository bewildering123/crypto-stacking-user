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
					<Link href={"/"} className={styles.logoContainer}>
						<Logo />
						<div className={styles.textContainer}>
							<p className={styles.logoText}>Ai-Stake Coin</p>
							{/* <p className={styles.text}>{linksMap.get(path)}</p> */}
						</div>
					</Link>
					<div className={styles.sectionContainer}>
						<Link href={"/#about"}>About</Link>
						<Link href={"/#faq"}>FAQ</Link>
						<Link href={"/#contact"}>Contact us</Link>
					</div>
					<div className={styles.theme}>
						<ThemeSwitcher />
					</div>
					<MenuIcons menu={menu} setMenu={setMenu} />
				</div>

				<User need setMenu={setMenu} />
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
