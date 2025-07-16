"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { client } from "@/integrations/apollo/client";
import { useThemeType } from "@/integrations/hooks/useThemeType";
import Spinner from "@/shared/components/Spinner/Spinner";

import Adress from "./icons/adress.svg";
import AdressLight from "./icons/adressLight.svg";
import Email from "./icons/email.svg";
import EmailLight from "./icons/emailLight.svg";
import Phone from "./icons/phone.svg";
import PhoneLight from "./icons/phoneLight.svg";
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
			<h2>
				Contact <span>us</span>
			</h2>
			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit(sendMail)} className={styles.form}>
					<input autoComplete="off" placeholder="Name" {...register("name")} />
					<input
						autoComplete="off"
						placeholder="Email"
						{...register("email")}
					/>
					<input
						autoComplete="off"
						placeholder="Phone"
						{...register("phone")}
					/>
					<textarea placeholder="Message" {...register("message")} />
					<button disabled={loading}>
						{(loading && <Spinner />) || "Message"}
					</button>
					{error && <p>Error while sending an email</p>}
				</form>
				<div className={styles.infoContainer}>
					<div>
						<label>
							{theme === "light" ? <EmailLight /> : <Email />}
							Email
						</label>
						<p>info@aisc.online</p>
					</div>
					<div>
						<label>
							{theme === "light" ? <PhoneLight /> : <Phone />}
							Phone
						</label>
						<p>+1 416 866 8248 </p>
					</div>
					<div>
						<label>
							{theme === "light" ? <AdressLight /> : <Adress />}
							Adress
						</label>
						<p>
							110 Yonge Street, Suite 1400, <br /> Toronto, ON, M5C 1T4, Canada
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUsSection;
