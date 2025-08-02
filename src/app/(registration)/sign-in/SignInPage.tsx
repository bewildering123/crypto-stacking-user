"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";

import { client } from "@/integrations/apollo/client";
import { useThemeType } from "@/integrations/hooks/useThemeType";
import BackHome from "@/shared/components/BackHome/BackHome";
import InputWithLabel from "@/shared/components/InputWithLabel/InputWithLabel";
import Notification from "@/shared/components/Notification/Notification";
import Spinner from "@/shared/components/Spinner/Spinner";

import { resetCode } from "./email-verify/queries/queries";
import backgroundImg from "./icons/background.png";

import styles from "./sign-in.module.scss";

export type LoginForm = {
	email: string;
	password: string;
};

export default function SignInPage() {
	const theme = useThemeType();

	const router = useRouter();

	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm<LoginForm>();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const [cookies, setCookie, removeCookie] = useCookies();
	cookies.any;

	const handleLogin: SubmitHandler<LoginForm> = async (data) => {
		setLoading(true);
		if (
			!data.email.match(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			) &&
			data.password.length < 8
		) {
			setLoading(false);
			setError(true);
			resetField("password");
			return;
		}
		removeCookie("two_factor");

		const res = await signIn("credentials", {
			email: data.email,
			password: data.password,
			callbackUrl: "/profile",
			need: "true",
			redirect: false,
		});

		if (res && !res.error) {
			router.push("/profile");
		} else {
			if (res?.error === "two factor") {
				setCookie("email", data.email);
				setCookie("password", data.password);
				await client.mutate({
					mutation: resetCode,
					variables: {
						email: data.email,
					},
				});
				router.push("/sign-in/email-verify");
				return;
			}

			setError(true);
			setLoading(false);
			resetField("password");
		}
	};

	return (
		<div className={styles.container}>
			<BackHome />
			<Notification
				isSuccess={false}
				message="Wrong login or password to log in, please try again!"
				setView={setError}
				view={error}
			/>
			<div className={styles.formContainer}>
				<h1>
					Hey there,<span>Lets</span> <br />
					<span>collaborate!</span>
				</h1>
				<form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
					<InputWithLabel
						label="Email:"
						type="email"
						name={"email"}
						register={register}
						errors={errors}
					/>
					<InputWithLabel
						label="Password:"
						name="password"
						register={register}
						type="password"
						errors={errors}
					/>
					<button type="submit" disabled={loading}>
						{loading ? <Spinner /> : "Lets go"}
					</button>
					<Link href={"/reset-password"} className={styles.link}>
						Reset password
					</Link>
					<Link href={"/register"} className={styles.link}>
						Registration
					</Link>
				</form>
			</div>
			<div className={styles.backgroundContainer}>
				<Image src={backgroundImg} alt="background" fill />
			</div>
		</div>
	);
}
