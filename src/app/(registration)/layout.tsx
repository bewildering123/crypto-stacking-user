import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import Footer from "@/features/navigation/Footer/Footer";
import { authOptions } from "@/integrations/nextauth/authOptions";

export default async function AuthLayout({
	children,
}: {
	children?: ReactNode;
}) {
	const session = await getServerSession(authOptions);

	if (session?.user) redirect("/profile");
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
