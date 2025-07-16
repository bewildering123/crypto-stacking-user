"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import backgroundImgLight from "@/app/components/MainSection/icons/background_light.webp";
import { client } from "@/integrations/apollo/client";
import { useThemeType } from "@/integrations/hooks/useThemeType";
import BackHome from "@/shared/components/BackHome/BackHome";
import InputWithLabel from "@/shared/components/InputWithLabel/InputWithLabel";
import Notification from "@/shared/components/Notification/Notification";
import Spinner from "@/shared/components/Spinner/Spinner";

import backgroundImg from "../sign-in/icons/background.png";
import { LoginForm } from "../sign-in/SignInPage";
import {
	confirmRecoveryMutation,
	resetPasswordMutation,
} from "./query/resetPassword";

import styles from "./reset-password.module.scss";

const ResetPassword = () => {
	const theme = useThemeType();
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError: setFieldError,
		reset,
	} = useForm<LoginForm>();

	const [email, setEmail] = useState("");

	const handleReset: SubmitHandler<LoginForm> = async (data) => {
		setLoading(true);
		try {
			const res = await client.mutate({
				mutation: resetPasswordMutation,
				variables: {
					email: data.email,
				},
			});

			if (res.data) {
				setEmail(data.email);
				setIsNextStep(true);
				reset();
			} else {
				setError(true);
				setFieldError("email", { message: "error" });
			}
		} catch {
			setError(true);
			setFieldError("email", { message: "error" });
		}
		setLoading(false);
	};

	const router = useRouter();

	const handleGetToken: SubmitHandler<LoginForm> = async (data) => {
		const code = data.password;
		setLoading(true);

		try {
			const res = await client.mutate({
				mutation: confirmRecoveryMutation,
				variables: {
					email,
					code,
				},
			});

			if (res.data?.cofirmRecoveryPassword) {
				const token = res.data.cofirmRecoveryPassword.token ?? "";
				router.push(`/set-password?token=${token}`);
			} else {
				setError(true);
				setFieldError("password", { message: "error" });
			}
		} catch {
			setError(true);
			setFieldError("password", { message: "error" });
		}

		setLoading(false);
	};

	const [isNextStep, setIsNextStep] = useState(false);

	const [error, setError] = useState(false);
	return (
		<div className={styles.container}>
			<BackHome />
			<Notification
				isSuccess={false}
				message="Some error, please try again!"
				setView={setError}
				view={error}
			/>
			<div className={styles.formContainer}>
				{isNextStep ? (
					<>
						<h1>
							Enter the verification code that was sent{" "}
							<span>to your email:</span>
						</h1>
						<form
							className={styles.form}
							onSubmit={handleSubmit(handleGetToken)}
						>
							<InputWithLabel
								label="Code:"
								type="text"
								errors={errors}
								register={register}
								name="password"
							/>
							<button type="submit" disabled={loading}>
								{loading ? <Spinner /> : "Recovery password"}
							</button>
						</form>
					</>
				) : (
					<>
						<h1>Enter your E-mail</h1>
						<form onSubmit={handleSubmit(handleReset)} className={styles.form}>
							<InputWithLabel
								label="Email:"
								type="email"
								name={"email"}
								register={register}
								errors={errors}
							/>
							<button type="submit" disabled={loading}>
								{loading ? <Spinner /> : "Send code"}
							</button>
						</form>
					</>
				)}
			</div>
			<div className={styles.backgroundContainer}>
				<Image
					src={theme === "light" ? backgroundImgLight : backgroundImg}
					alt="background"
					fill
				/>
			</div>
		</div>
	);
};

export default ResetPassword;
