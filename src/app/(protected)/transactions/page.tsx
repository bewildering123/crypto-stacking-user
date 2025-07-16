import { Metadata } from "next";

import TransactionPage from "./TransactionsPage";

export const metadata: Metadata = {
	title: "Transactions - AI-Stake Coin",
};

export default async function Transaction() {
	return <TransactionPage />;
}
