"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";

import backgroundImgLight from "@/app/components/MainSection/icons/background_light.webp";
import { client } from "@/integrations/apollo/client";
import { useThemeType } from "@/integrations/hooks/useThemeType";
import BackHome from "@/shared/components/BackHome/BackHome";
import InputWithLabel from "@/shared/components/InputWithLabel/InputWithLabel";
import Notification from "@/shared/components/Notification/Notification";
import Spinner from "@/shared/components/Spinner/Spinner";

import { RegisterForm } from "../register/RegisterPage";
import backgroundImg from "./icons/background.webp";
import { resetCode, verifyCode } from "./queries/queries";

import styles from "./email-verify.module.scss";

export default function EmailVerifyPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterForm>();

	const theme = useThemeType();

	const router = useRouter();

	const [cookies, setCookie, removeCookie] = useCookies();

	const handleVerifyCode: SubmitHandler<RegisterForm> = async (data) => {
		setCookie("asd", "asd");
		setLoading(true);

		try {
			const res = await client.mutate({
				mutation: verifyCode,
				variables: {
					code: data.email,
					email: cookies.register_email,
				},
			});

			if (res.data?.verifyEmail) {
				const sessionRes = await signIn("credentials", {
					email: cookies.register_email,
					password: cookies.register_password,
					callbackUrl: "/profile",
					redirect: false,
				});

				if (sessionRes && !sessionRes.error) {
					router.push("/profile");
					removeCookie("register_email");
					removeCookie("register_password");
					removeCookie("asd");
					setView(false);
				} else {
					setError(true);
					setErrorMessage("Incorrect code!");
					setLoading(false);
					setView(true);
				}
			} else {
				setError(true);
				setView(true);
				setErrorMessage("Incorrect code!");
				setLoading(false);
			}
		} catch {
			setError(true);
			setView(true);
			setErrorMessage("Incorrect code!");
			setLoading(false);
		}
	};

	const [error, setError] = useState(false);
	const [view, setView] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleResetCode = async () => {
		if (!disable) {
			await client.mutate({
				mutation: resetCode,
				variables: {
					email: cookies.register_email,
				},
			});

			setDisable(true);
			setView(true);
			setError(false);
		} else {
			setError(true);
			setView(true);
			setErrorMessage("The code can be updated once every 60 seconds!");
		}
	};

	const [disable, setDisable] = useState(false);

	useEffect(() => {
		if (disable) {
			setTimeout(() => {
				setDisable(false);
			}, 120000);
		}
	}, [disable]);

	return (
		<div className={styles.container}>
			<BackHome />
			<Notification
				isSuccess={!error}
				message={errorMessage}
				setView={setView}
				view={view}
			/>
			<div className={styles.formContainer}>
				<h1>
					Enter the verification code <br />
					that was sent <span>to your email:</span>
				</h1>
				<form onSubmit={handleSubmit(handleVerifyCode)} className={styles.form}>
					<div className={styles.input}>
						<InputWithLabel
							errors={errors}
							label="Code:"
							name={"email"}
							register={register}
						/>
					</div>
					<div className={styles.buttonContainer}>
						<button disabled={loading} type="submit">
							{loading ? <Spinner /> : "Lets go"}
						</button>
						<p onClick={handleResetCode}>Resend code</p>
					</div>
				</form>
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
}
