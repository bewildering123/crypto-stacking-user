import { Metadata } from "next";

import GuessGame from "./pageGuess";

export const metadata: Metadata = {
	title: "Guess - AI-Stake Coin",
};

export default function Guess() {
	return <GuessGame />;
}
