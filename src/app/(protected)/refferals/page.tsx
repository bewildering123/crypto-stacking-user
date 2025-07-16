import { Metadata } from "next";

import RefferalsPage from "./RefferalsPage";

export const metadata: Metadata = {
	title: "Refferals - AI-Stake Coin",
};

export default async function Refferals() {
	return <RefferalsPage />;
}
