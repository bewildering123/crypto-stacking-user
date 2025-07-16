import Deposit from "./icons/deposit.svg";
import Exchange from "./icons/exchange.svg";
import FreeCoin from "./icons/free-coin.svg";
import Question from "./icons/question.svg";
import Referals from "./icons/refferals.svg";
import Sapper from "./icons/sapper.svg";
import Screen from "./icons/screen.svg";
import Withdraw from "./icons/withdrawal.svg";

const navigationArr = [
	[
		{ name: "Deposit", link: "#", icon: Deposit },
		{ name: "Exchange", link: "/exchange", icon: Exchange },
		{ name: "Withdraw", link: "#", icon: Withdraw },
	],
	[
		{ name: "Screen", link: "/screen", icon: Screen },
		{ name: "Sapper", link: "/sapper", icon: Sapper },
		{ name: "Guess", link: "/guess", icon: Question },
	],
	[{ name: "Referals", link: "/referals", icon: Referals }],
	[{ name: "Free coin", link: "/free-coin", icon: FreeCoin }],
];

export default navigationArr;
