import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/shared/components/Button/Button";

import styles from "./Header.module.scss";

type Props = {
	menu: boolean;
	setMenu: Dispatch<SetStateAction<boolean>>;
};

const MenuIcons = ({ menu, setMenu }: Props) => {
	return (
		<Button
			className={styles.menuButton}
			type="button"
			onClick={() => setMenu(!menu)}
		>
			<Image
				src={menu ? "/img/icons/cancel.svg" : "/img/icons/menu.svg"}
				alt="menu"
				width={20}
				height={20}
			/>
		</Button>
	);
};

export default MenuIcons;
