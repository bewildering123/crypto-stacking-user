import { Metadata } from "next";

import LoginEmailVerifyPage from "./EmailPage";

export const metadata: Metadata = {
	title: "Email Verify - AI-Stake Coin",
};

export default function LoginEmailVerify() {
	return <LoginEmailVerifyPage />;
}
