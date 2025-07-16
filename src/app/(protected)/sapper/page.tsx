import { Metadata } from "next";

import SapperPage from "./SapperPage";

export const metadata: Metadata = {
	title: "Sapper - AI-Stake Coin",
};

export default async function Sapper() {
	return <SapperPage />;
}
