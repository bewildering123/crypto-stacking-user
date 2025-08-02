"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { client } from "@/integrations/apollo/client";
import { useThemeType } from "@/integrations/hooks/useThemeType";
import BackHome from "@/shared/components/BackHome/BackHome";
import InputWithLabel from "@/shared/components/InputWithLabel/InputWithLabel";
import Notification from "@/shared/components/Notification/Notification";
import Spinner from "@/shared/components/Spinner/Spinner";

import { hasUpperAndLowerCase, RegisterForm } from "../register/RegisterPage";
import backgroundImg from "../sign-in/icons/background.png";
import { setPasswordMutation } from "./query/setPassword";

import styles from "./set-password.module.scss";

const SetPassword = () => {
	const theme = useThemeType();
	const [loading, setLoading] = useState(false);

	const [errorMsg, setErrorMsg] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError: setFormError,
	} = useForm<RegisterForm>();

	const searchParams = useSearchParams();

	const [isError, setIsError] = useState(true);

	const router = useRouter();

	const handleSetError = (msg: string) => {
		setView(true);
		setErrorMsg(msg);
		setIsError(true);
		setLoading(false);
	};

	const handleReset: SubmitHandler<RegisterForm> = async (data) => {
		setLoading(true);
		const token = searchParams.get("token");

		if (!token) {
			handleSetError("Please try again later!");
			return;
		}

		if (data.password.length < 8 || data.confirm.length < 8) {
			setFormError("password", new Error("asdasd"));
			setFormError("confirm", new Error("asdasd"));
			handleSetError("The password must be 8 characters long!");
			return;
		}
		if (data.password !== data.confirm) {
			setFormError("password", new Error("asdasd"));
			setFormError("confirm", new Error("asdasd"));
			handleSetError("Passwords dont match!");
			return;
		}

		if (!hasUpperAndLowerCase(data.password)) {
			setFormError("password", new Error("asdasd"));
			setFormError("confirm", new Error("asdasd"));
			handleSetError(
				"The password must contain 1 uppercase and one small letter!",
			);
			return;
		}

		try {
			const res = await client.mutate({
				mutation: setPasswordMutation,
				variables: {
					password: data.password,
					token: token,
				},
			});

			if (res.data) {
				setIsError(false);
				setView(true);
				router.push("/sign-in");
			}
		} catch {
			setErrorMsg("Please try again later!");
			setView(true);
		}

		setLoading(false);
	};

	const [view, setView] = useState(false);
	return (
		<div className={styles.container}>
			<BackHome />
			<Notification
				isSuccess={!isError}
				message={errorMsg}
				setView={setView}
				view={view}
			/>
			<div className={styles.formContainer}>
				<h1>
					Create new <br />
					password
				</h1>
				<form onSubmit={handleSubmit(handleReset)} className={styles.form}>
					<InputWithLabel
						label="New password:"
						type="password"
						name={"password"}
						register={register}
						errors={errors}
					/>
					<InputWithLabel
						label="Confirm password:"
						type="password"
						name={"confirm"}
						register={register}
						errors={errors}
					/>
					<button type="submit" disabled={loading}>
						{loading ? <Spinner /> : "Send code"}
					</button>
				</form>
			</div>
			<div className={styles.backgroundContainer}>
				<Image src={backgroundImg} alt="background" fill />
			</div>
		</div>
	);
};

export default SetPassword;
