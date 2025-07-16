import React, { Dispatch, SetStateAction } from "react";

import styles from "./Header.module.scss";

type Props = {
	menu: boolean;
	setMenu: Dispatch<SetStateAction<boolean>>;
};

const MenuIcons = ({ menu, setMenu }: Props) => {
	return (
		<>
			{menu ? (
				<svg
					width="19"
					height="18"
					viewBox="0 0 19 18"
					fill="none"
					className={styles.menuIcon}
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => setMenu(!menu)}
				>
					<line
						x1="18.1241"
						y1="0.759841"
						x2="2.15056"
						y2="16.7334"
						stroke="white"
						strokeWidth="2"
					/>
					<line
						y1="-1"
						x2="22.59"
						y2="-1"
						transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.02637 0.0527344)"
						stroke="white"
						strokeWidth="2"
					/>
				</svg>
			) : (
				<svg
					width="25"
					height="15"
					viewBox="0 0 25 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => setMenu(!menu)}
					className={styles.menuIcon}
				>
					<line
						x1="25"
						y1="1.03906"
						x2="0.40625"
						y2="1.03906"
						stroke="white"
						strokeWidth="2"
					/>
					<line
						x1="25"
						y1="7.03906"
						x2="0.40625"
						y2="7.03906"
						stroke="white"
						strokeWidth="2"
					/>
					<line
						x1="25"
						y1="13.0391"
						x2="0.40625"
						y2="13.0391"
						stroke="white"
						strokeWidth="2"
					/>
				</svg>
			)}
		</>
	);
};

export default MenuIcons;
