"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { client } from "@/integrations/apollo/client";
import { useThemeType } from "@/integrations/hooks/useThemeType";
import Button from "@/shared/components/Button/Button";
import Spinner from "@/shared/components/Spinner/Spinner";

import { sendEmailQuery } from "./queries/sendEmail";

import styles from "./ContactUsSection.module.scss";

type FormType = { name: string; email: string; phone: string; message: string };

const ContactUsSection = () => {
	const theme = useThemeType();

	const [error, setError] = useState(false);

	const sendMail: SubmitHandler<FormType> = async (data) => {
		setLoading(true);
		const message = await client.mutate({
			mutation: sendEmailQuery,
			variables: {
				email: data.email,
				message: data.message,
				name: data.name,
				phone: data.phone,
			},
		});
		if (message.data?.contactUs === true) {
			setLoading(false);
			reset();
		} else {
			setError(true);
			setLoading(false);
		}
	};

	const [loading, setLoading] = useState(false);

	const { register, handleSubmit, reset } = useForm<FormType>();

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				setError(false);
			}, 5000);
		}
	}, [error]);

	return (
		<section className={styles.container} id="contact">
			<div className={styles.leftBlock}>
				<div className={styles.leftBlockTop}>
					<div>
						<h2 className={styles.title}>Contact Us</h2>

						<div className={styles.description}>
							Have questions or need support? We're here to help with anything
							related to AISC, HAT, or the platform
						</div>
					</div>

					<div className={styles.icon}>
						<Image
							src="/img/icons/sparkle.svg"
							alt="sparkle"
							width={24}
							height={24}
						/>
					</div>
				</div>

				<form onSubmit={handleSubmit(sendMail)} className={styles.form}>
					<div className={styles.input}>
						<Image
							src="/img/icons/user.svg"
							width={24}
							height={24}
							alt="user"
						/>
						<input
							autoComplete="off"
							placeholder="Your name"
							{...register("name")}
						/>
					</div>
					<div className={styles.input}>
						<Image
							src="/img/icons/envelope.svg"
							width={24}
							height={24}
							alt="email"
						/>
						<input
							autoComplete="off"
							placeholder="Your email"
							{...register("email")}
						/>
					</div>
					<div className={styles.input}>
						<Image
							src="/img/icons/phone.svg"
							width={24}
							height={24}
							alt="phone"
						/>
						<input
							autoComplete="off"
							placeholder="Your phone number"
							{...register("phone")}
						/>
					</div>
					<div className={styles.input}>
						<Image
							src="/img/icons/pen-to-square.svg"
							width={24}
							height={24}
							alt="phone"
						/>
						<textarea placeholder="Your message" {...register("message")} />
					</div>

					<Button
						className={styles.submitButton}
						disabled={loading}
						color="green"
					>
						{(loading && <Spinner />) || "Send message"}
					</Button>
					{error && (
						<div className={styles.formError}>Error while sending an email</div>
					)}
				</form>
			</div>
			<div className={styles.rightBlock}>
				<Image
					src="/img/pages/home/faq/wallet.png"
					className={styles.mainImg}
					width={570}
					height={541}
					alt="wallet"
				/>
				<div className={styles.contacts}>
					<a
						href="mailto:info@aisc.online"
						target="_blank"
						className={styles.contactItem}
					>
						<div className={styles.contactIcon}>
							<Image
								src="/img/icons/envelope-dot.svg"
								width={24}
								height={24}
								alt="email"
							/>
						</div>
						info@aisc.online
					</a>
					<a
						href="tel:+14168668248"
						target="_blank"
						className={styles.contactItem}
					>
						<div className={styles.contactIcon}>
							<Image
								src="/img/icons/phone-green.svg"
								width={24}
								height={24}
								alt="phone"
							/>
						</div>
						+1 416 866 8248
					</a>
					<a
						href="https://share.google/Qgvp2utq9ozHduA6a"
						target="_blank"
						className={styles.contactItem}
					>
						<div className={styles.contactIcon}>
							<Image
								src="/img/icons/location-pin.svg"
								width={24}
								height={24}
								alt="location"
							/>
						</div>
						110 Yonge Street, Suite 1400, Toronto, ON, M5C 1T4
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactUsSection;
