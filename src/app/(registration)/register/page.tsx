import { Metadata } from "next";

import RegisterPage from "./RegisterPage";

export const metadata: Metadata = {
	title: "Registration - AI-Stake Coin",
};

export default async function Register() {
	return <RegisterPage />;
}
