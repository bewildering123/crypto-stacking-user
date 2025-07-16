import React, { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { RegisterForm } from "@/app/(registration)/register/RegisterPage";
import Eye from "@/features/navigation/Header/components/User/icons/eye.svg";

import styles from "./InputWithLabel.module.scss";

type Props = {
	label: string;
	type?: string;
	register: UseFormRegister<any>;
	name: "name" | "login" | "password" | "email" | "confirm";
	minLength?: number;
	required?: boolean;
	errors: FieldErrors<RegisterForm>;
	disabled?: boolean;
};

const InputWithLabel = ({
	label,
	type,
	register,
	name,
	minLength,
	required = true,
	errors,
	disabled = false,
}: Props) => {
	const [view, setView] = useState(false);

	return (
		<div className={styles.container}>
			<label>{label}</label>
			<input
				autoComplete="off"
				style={
					(errors[name] && {
						border: "1px solid red",
					}) ||
					{}
				}
				{...register(name, {
					required,
					minLength: minLength,
				})}
				disabled={disabled}
				type={type === "password" && view ? "text" : type || "text"}
			/>
			{type === "password" && (
				<Eye className={styles.eye} onClick={() => setView(!view)} />
			)}
		</div>
	);
};

export default InputWithLabel;
