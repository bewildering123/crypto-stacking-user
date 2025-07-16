"use client";

import Image from "next/image";
import Link from "next/link";

import useUserStore from "@/integrations/zustand/user/user";

import coinIcon from "./icons/coinIcon.png";
import Exchange from "./icons/exchange.svg";
import mobileCoin from "./icons/mobileCoin.png";
import Withdraw from "./icons/withdraw.svg";

import styles from "./TotalWithdrawn.module.scss";

const TotalWithdrawn = () => {
	const { user } = useUserStore();

	return (
		<div className={styles.container}>
			<p className={styles.title}>
				Total withdrawn USDT: {user?.total_withdraw}
			</p>

			<Image src={coinIcon} alt="coin" className={styles.coin} />
			<Image src={coinIcon} alt="coin" className={styles.secondCoin} />
			<Image src={mobileCoin} alt="coin" className={styles.mobileCoin} />

			<div className={styles.contentContainer}>
				<Link href={"/exchange"}>
					<Exchange />
					Exchange
				</Link>
				<Link href={"/withdraw"}>
					<Withdraw />
					Withdraw
				</Link>
				<Link href={"/deposit"}>
					<svg
						width="33"
						height="32"
						viewBox="0 0 33 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_119_11377)">
							<path
								d="M13.5244 13.1556C13.5244 13.7359 13.804 14.2523 14.2355 14.5769V11.7344C13.804 12.059 13.5244 12.5752 13.5244 13.1556Z"
								fill="#8F8DE1"
							/>
							<path
								d="M14.2353 9.39391V7.17578C9.83509 7.70441 6.41309 11.4601 6.41309 16.0005C6.41309 20.5408 9.83509 24.2965 14.2353 24.8252V22.607C12.5957 22.1414 11.3909 20.6317 11.3909 18.8449H13.5242C13.5242 19.4252 13.8038 19.9415 14.2353 20.2662V16.918C12.5957 16.4525 11.3909 14.9428 11.3909 13.156C11.3909 11.3692 12.5957 9.85953 14.2353 9.39391Z"
								fill="#8F8DE1"
							/>
							<path
								d="M16.3687 17.4229V20.2654C16.8002 19.9407 17.0798 19.4245 17.0798 18.8441C17.0798 18.2637 16.8002 17.7475 16.3687 17.4229Z"
								fill="#8F8DE1"
							/>
							<path
								d="M18.502 17.7773V31.2885H32.0131V17.7773H18.502ZM28.0589 25.9625L26.3957 24.2993V27.3773H24.2624V24.2279L22.5277 25.9625L21.0192 24.454L25.2933 20.18L29.5673 24.454L28.0589 25.9625Z"
								fill="#8F8DE1"
							/>
							<path
								d="M16.3687 7.17578V9.39397C18.0083 9.85953 19.2131 11.3692 19.2131 13.156H17.0798C17.0798 12.5757 16.8002 12.0594 16.3687 11.7348V15.0829C16.795 15.204 17.1915 15.3962 17.5455 15.645H18.502H24.1833C24.0101 11.2655 20.6535 7.69059 16.3687 7.17578Z"
								fill="#8F8DE1"
							/>
							<path
								d="M26.1129 5.18894C23.2252 2.30125 19.3859 0.710938 15.3021 0.710938C11.2182 0.710938 7.37887 2.30125 4.49118 5.18894C1.6035 8.07662 0.0131836 11.916 0.0131836 15.9998C0.0131836 20.0836 1.6035 23.923 4.49118 26.8107C7.37887 29.6984 11.2182 31.2887 15.3021 31.2887C15.6587 31.2887 16.0144 31.2764 16.3687 31.2519V26.9711C16.0161 27.0048 15.6603 27.0221 15.3021 27.0221C9.22443 27.0221 4.27981 22.0775 4.27981 15.9998C4.27981 9.92212 9.22443 4.97756 15.3021 4.97756C21.2607 4.97756 26.1295 9.7305 26.3179 15.6442H30.5866C30.4971 11.6936 28.9167 7.99263 26.1129 5.18894Z"
								fill="#8F8DE1"
							/>
						</g>
						<defs>
							<clipPath id="clip0_119_11377">
								<rect
									width="32"
									height="32"
									fill="white"
									transform="translate(0.0131836)"
								/>
							</clipPath>
						</defs>
					</svg>
					Deposit
				</Link>
			</div>
		</div>
	);
};

export default TotalWithdrawn;
