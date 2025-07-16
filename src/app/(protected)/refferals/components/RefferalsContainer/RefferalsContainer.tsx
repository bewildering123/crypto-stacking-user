"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import useUserStore from "@/integrations/zustand/user/user";

import CopyIcon from "./icons/copy.svg";
import Facebook from "./icons/facebook.svg";
import Instagram from "./icons/instagram.svg";
import Success from "./icons/success.svg";
import Telegram from "./icons/telegram.svg";
import Twitter from "./icons/twitter.svg";
import WhatsApp from "./icons/whatsapp.svg";

import styles from "./RefferalsContainer.module.scss";

type Props = {
	total: number;
	earned_aics: number;
};

const RefferalsContainer = ({ earned_aics, total }: Props) => {
	const { user } = useUserStore();

	const [successCode, setSuccessCode] = useState(false);
	const [successLink, setSuccessLink] = useState(false);

	useEffect(() => {
		if (successCode) {
			setTimeout(() => {
				setSuccessCode(false);
			}, 3000);
		}
	}, [successCode]);

	useEffect(() => {
		if (successLink) {
			setTimeout(() => {
				setSuccessLink(false);
			}, 3000);
		}
	}, [successLink]);

	const refferalLink = `${process.env.NEXT_PUBLIC_BASE_URL}/register?reffaral_code=${user?.refferal_code || ""}`;

	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<p>Total refferals:</p>
				<p className={styles.rightText}>{total}</p>
			</div>
			<div className={styles.textContainer}>
				<p>Earned:</p>
				<p className={styles.rightText}>
					{earned_aics} AISC <span>&</span> {total * 5000} HAT
				</p>
			</div>
			<div className={styles.textContainer}>
				<p>Invitation code:</p>
				<p
					className={styles.underScoreText}
					onClick={() => {
						navigator.clipboard.writeText(user?.refferal_code || "");
						setSuccessCode(true);
					}}
				>
					{successCode ? <Success /> : <CopyIcon />}
					{user?.refferal_code || ""}
				</p>
			</div>
			<div className={styles.textContainer}>
				<p>Referal link:</p>
				<p
					className={styles.underScoreText}
					onClick={() => {
						navigator.clipboard.writeText(refferalLink);
						setSuccessLink(true);
					}}
				>
					{successLink ? <Success /> : <CopyIcon />}{" "}
					{refferalLink.slice(0, 12) + "..."}
				</p>
			</div>
			<div className={styles.textContainer}>
				<p>Share:</p>
			</div>
			<div className={styles.iconsContainer}>
				<Link
					href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}/register?reffaral_code=${user?.refferal_code || ""}`}
					target="_blank"
				>
					<Facebook />
				</Link>
				<Link href={"#"}>
					<Instagram />
				</Link>
				<Link href={"#"}>
					<Twitter />
				</Link>
				<Link
					href={`https://t.me/share/url?url=${process.env.NEXT_PUBLIC_BASE_URL}/register?reffaral_code=${user?.refferal_code || ""}`}
					target="_blank"
				>
					<Telegram />
				</Link>
				<Link
					href={`https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}/register?reffaral_code=${user?.refferal_code || ""}`}
				>
					<WhatsApp />
				</Link>
			</div>
		</div>
	);
};

export default RefferalsContainer;
