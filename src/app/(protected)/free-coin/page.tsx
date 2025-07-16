import { Metadata } from "next";

import FreeCoinPage from "./FreeCoinPage";

export const metadata: Metadata = {
	title: "Free Coin - AI-Stake Coin",
};

export default function FreeCoin() {
	return <FreeCoinPage />;
}
