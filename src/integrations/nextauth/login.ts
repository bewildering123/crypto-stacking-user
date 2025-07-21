import ms from "ms";
import { User } from "next-auth";
import { cookies } from "next/headers";

// import { loginQuery } from "@/app/sign-in/queries/login";

// import { client } from "../apollo/client";

export const login = async (variables: {
	email: string;
	password: string;
	need: any;
}) => {
	// const user = await client.query({
	// 	query: loginQuery,
	// 	variables: variables,
	// });

	const data = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/graphql`,
		{
			referrer: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/graphql-playground`,
			referrerPolicy: "strict-origin-when-cross-origin",
			body: `{\"operationName\":\"login\",\"variables\":{},\"query\":\"query login {\\n  login(email: \\\"${variables.email}\\\", password: \\\"${variables.password}\\\") {\\n    id\\n name \\n email \\n country \\n login \\n two_factor_authentification \\n}\\n}\\n\"}`,
			method: "POST",
			mode: "cors",
			credentials: "include",
			headers: {
				accept: "*/*",
				"content-type": "application/json",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
			},
		},
	);

	const res = await data.json();

	if (res.data.login) {
		const { email, name, id, country, login, two_factor_authentification } =
			res.data.login;

		if (two_factor_authentification && variables.need === "true") {
			await Promise.all([await cookies().set("two_factor", "true")]);

			throw new Error("two factor");
		}
		const resCookies =
			data.headers
				.getSetCookie()
				.find((el) => el.split("=")[0] === "session")
				?.split("=") || [];

		(await cookies()).set(
			String(resCookies[0]) || "",
			String(resCookies[1]) || "",
			{ maxAge: ms("30 days") },
		);

		return {
			id: String(id) || "",
			email: email || "",
			name: name || "",
			country: country || "",
			login: login || "",
		} as User;
	} else {
		return null;
	}
};
