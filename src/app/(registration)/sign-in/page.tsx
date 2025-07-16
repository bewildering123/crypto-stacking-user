import { Metadata } from "next";

import SignInPage from "./SignInPage";

export const metadata: Metadata = {
	title: "Sign In - AI-Stake Coin",
};

export default async function SignIn() {
	return <SignInPage />;
}
