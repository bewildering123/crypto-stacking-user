import ms from "ms";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { login } from "./login";

declare module "next-auth" {
	interface User {
		country?: string;
		login?: string;
		name?: string;
		email?: string;
	}
}

export const authOptions: AuthOptions = {
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { type: "text" },
				password: { type: "text" },
				need: { type: "text" },
			},
			async authorize(credentials) {
				const email = credentials?.email as string;
				const password = credentials?.password as string;
				const need = credentials?.need;

				if (!email || !password) return null;

				return await login({ email, password, need: need });
			},
		}),
	],
	pages: {
		signIn: "/sign-in",
		error: "#",
	},
	session: {
		maxAge: ms("30 days"),
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				return { ...token, user };
			}

			return token;
		},
		async session({ session }) {
			return {
				...session,
			};
		},
	},
};
