import { Metadata } from "next";

import EmailVerifyPage from "./EmailPage";

export const metadata: Metadata = {
	title: "Email Verify - AI-Stake Coin",
};

export default function EmailVerify() {
	return <EmailVerifyPage />;
}
