"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
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

import SelectInput from "./components/SelectInput/SelectInput";
import backgroundImg from "./icons/background.png";
import { registrationMutation } from "./queries/register";

import styles from "./register.module.scss";

export function hasUpperAndLowerCase(str: string) {
	const hasUpperCase = /[A-Z]/.test(str);
	const hasLowerCase = /[a-z]/.test(str);
	return hasUpperCase && hasLowerCase;
}

export type RegisterForm = {
	name: string;
	login?: string;
	password: string;
	email: string;
	confirm: string;
};

export default function RegisterPage() {
	const theme = useThemeType();

	const [cookie, setCookie] = useCookies();

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
		setError: setFormError,
	} = useForm<RegisterForm>();

	const [country, setCountry] = useState("");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [countryError, setCountryError] = useState(false);
	const router = useRouter();

	const handleSetError = (message: string) => {
		cookie.any;
		setError(true);
		setErrorMessage(message);
		setLoading(false);
	};

	const pathname = useSearchParams();

	const [referalInputDisable, setReferalInputDisable] = useState(false);

	useEffect(() => {
		if (pathname.get("reffaral_code")) {
			setValue("login", pathname.get("reffaral_code") || "");
			setReferalInputDisable(true);
		}
	}, []);

	useEffect(() => {
		setCountryError(false);
	}, [country]);

	const handleRegister: SubmitHandler<RegisterForm> = async (data) => {
		setLoading(true);

		if (country.length === 0) {
			setCountryError(true);
			setLoading(false);
			return;
		}

		if (!/^[a-zA-Z0-9_]+$/.test(data.name)) {
			setFormError("name", new Error("asdasd"));
			handleSetError("Acceptable characters: A-Z and 0-9!");
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

		if (
			!data.email.match(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			)
		) {
			setFormError("email", new Error("asdasd"));
			handleSetError("Wrong email!");
			return;
		}
		try {
			const reg = await client.mutate({
				mutation: registrationMutation,
				variables: {
					country,
					email: data.email,
					name: data.name,
					password: data.password,
					refferal_code: data.login,
				},
			});
			if (!reg.errors && reg.data?.registration) {
				setCookie("register_email", data.email);
				setCookie("register_password", data.password);

				router.push("/email-verify");
			} else {
				handleSetError("The user with the same email is already registered!");
				reset();
			}
		} catch (err) {
			handleSetError("The user with the same email is already registered!");
			reset();
		}
	};

	return (
		<div className={styles.container}>
			<BackHome />
			<Notification
				isSuccess={false}
				message={errorMessage}
				setView={setError}
				view={error}
			/>
			<div className={styles.formContainer}>
				<h1>
					Register <span>to buy</span>
				</h1>
				<form onSubmit={handleSubmit(handleRegister)}>
					<div className={styles.inputsContainer}>
						<div className={styles.input}>
							<SelectInput
								label="Country:"
								setValue={setCountry}
								value={country}
								isError={countryError}
							/>
							<InputWithLabel
								errors={errors}
								label="Login:"
								register={register}
								name="name"
							/>

							<InputWithLabel
								errors={errors}
								label="Email:"
								register={register}
								name="email"
							/>
						</div>
						<div className={styles.input}>
							<InputWithLabel
								errors={errors}
								label="Refferal code:"
								register={register}
								name="login"
								disabled={referalInputDisable}
								required={false}
							/>
							<InputWithLabel
								errors={errors}
								label="Password:"
								type="password"
								register={register}
								name="password"
							/>
							<InputWithLabel
								errors={errors}
								label="Confirm password:"
								register={register}
								name="confirm"
								type="password"
							/>
						</div>
					</div>
					<button disabled={loading}>
						{loading ? <Spinner /> : "Register"}
					</button>
					<Link className={styles.link} href={"/sign-in"}>
						Log in
					</Link>
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
