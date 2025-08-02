"use client";

import { useQuery } from "@apollo/client";
import Image from "next/image";
import React, { useState } from "react";

import { client } from "@/integrations/apollo/client";
import { safeWindow } from "@/integrations/hooks/useMobile";
import useUserStore from "@/integrations/zustand/user/user";

import Button from "../Button/Button";
import FreeHatIcon from "./icons/freeHat.png";
import image from "./icons/image.png";
import { canGetFreeHat } from "./query/canGetFreeHat";
import { getFreeHatMutation } from "./query/getFreeHat";

import styles from "./FreeHat.module.scss";

const FreeHat = () => {
	const getRandomPosition = () => {
		if (safeWindow) {
			const maxX = safeWindow.innerWidth - 100;
			const maxY = safeWindow.innerHeight - 100;

			const randomX = Math.floor(Math.random() * maxX);
			const randomY = Math.floor(Math.random() * maxY);

			return { top: randomY, left: randomX };
		}
		return { top: 100, left: 50 };
	};
	const [position, setPosition] = useState(getRandomPosition());

	const [view, setView] = useState(false);

	const [hat, setHat] = useState(0);

	const { setUser, user } = useUserStore();

	const { data, refetch } = useQuery(canGetFreeHat, {
		pollInterval: 600000,
	});

	const monetStyles: React.CSSProperties = {
		position: "absolute",
		zIndex: "5000",
		top: `${position.top}px`,
		left: `${position.left}px`,
		cursor: "pointer",
	};

	return (
		<>
			{view && (
				<div className={styles.modalContainer}>
					<div className={styles.container}>
						<div>
							<Image src={image} alt="image" />
							<div className={styles.winning}>
								<div
									className={styles.line}
									style={{ transform: "rotate(180deg)" }}
								/>
								<p>+{hat} HAT!</p>
								<div className={styles.line} />
							</div>
						</div>
						<Button
							disabled={false}
							onClick={() => {
								refetch();
								setPosition(getRandomPosition());
								setView(false);
							}}
						>
							Claim Reward
						</Button>
					</div>
				</div>
			)}
			{data?.canGetFreeHat && !view && (
				<Image
					src={FreeHatIcon}
					width={100}
					alt="coin"
					style={monetStyles}
					onClick={async () => {
						const res = await client.mutate({ mutation: getFreeHatMutation });
						if (res.data?.getFreeHat?.can_get) {
							setView(true);
							refetch();
							setHat(res.data.getFreeHat.hat || 0);
							setUser({
								...user,
								hat: (user?.hat || 0) + (res.data.getFreeHat.hat || 0),
							});
						} else {
						}
					}}
				/>
			)}
		</>
	);
};

export default FreeHat;
