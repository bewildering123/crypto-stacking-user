"use client";

import { Suspense, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { client } from "@/integrations/apollo/client";
import useUserStore from "@/integrations/zustand/user/user";
import Button from "@/shared/components/Button/Button";
import Notification from "@/shared/components/Notification/Notification";
import Spinner from "@/shared/components/Spinner/Spinner";

import { getFreeCoin } from "./queries/getFreeCoin";

import styles from "./freeCoin.module.scss";

export default function FreeCoinPage() {
	const { user, setUser, setFreeCoin } = useUserStore();

	const [view, setView] = useState(false);
	const [error, setError] = useState(false);

	const [result, setResult] = useState({ aisc: 0, hat: 0, show: false });

	const handleGetFreeCoin = async () => {
		const res = await client.mutate({
			mutation: getFreeCoin,
		});

		if (res.data?.freeCoin?.aics && res.data.freeCoin.hat) {
			setView(true);
			setError(false);
			setResult({
				aisc:
					Math.floor(
						(res.data.freeCoin.aics - (user?.aics || 0) || 0) * 10000,
					) / 10000,
				hat:
					Math.floor((res.data.freeCoin.hat - (user?.hat || 0) || 0) * 10000) /
					10000,
				show: true,
			});
			setUser({
				...user,
				aics: res.data.freeCoin.aics,
				hat: res.data.freeCoin.hat,
				can_get_free_coin: false,
			});
			setFreeCoin();
		} else {
			setView(true);
			setError(true);
		}
	};

	const [captchaValue, setCaptchaValue] = useState<any>(null);

	return (
		<div className={styles.container}>
			<Notification
				isSuccess={!error}
				setView={setView}
				view={view}
				message="Something went wrong!"
			/>
			<p className={styles.title}>free coin</p>
			<p className={styles.text}>
				You can get from 0.1 AISC to 10 AISC and some amount HAT for free every
				day
			</p>

			{!user?.can_get_free_coin || result.aisc !== 0 ? (
				<p className={styles.text}>
					You can&apos;t get the coins yet, come back later!
				</p>
			) : (
				<Suspense fallback={<Spinner />}>
					<ReCAPTCHA
						sitekey="6LdI49IqAAAAAASgZJsCxBlPih6aW6yazX0jknDv"
						onChange={setCaptchaValue}
						style={{ border: "none" }}
					/>
				</Suspense>
			)}

			<Button
				handleClick={handleGetFreeCoin}
				disabled={
					!user?.can_get_free_coin || captchaValue === null || result.aisc !== 0
				}
				text="Get"
			/>
			{result.show && (
				<p className={styles.text}>
					You get {result.aisc} AISC and {result.hat} HAT
				</p>
			)}
		</div>
	);
}
