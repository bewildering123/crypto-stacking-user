import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import Footer from "@/features/navigation/Footer/Footer";
import { authOptions } from "@/integrations/nextauth/authOptions";
import FreeHat from "@/shared/components/FreeHat/FreeHat";

import Navigation from "./components/Navigation/Navigation";

import styles from "./layout.module.scss";

export default async function RegisteredLayout({
	children,
}: {
	children?: ReactNode;
}) {
	const session = await getServerSession(authOptions);

	if (!session?.user) redirect("/");

	return (
		<>
			<div className={styles.container}>
				<div className={styles.navigationContainer}>
					<Navigation />
				</div>
				<div className={styles.mainContent}>
					<div className={styles.content}>{children}</div>
				</div>
				<div className={styles.blob} />
			</div>
			<FreeHat />
			<Footer />
		</>
	);
}
