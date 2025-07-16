import { graphql } from "@/integrations/graphql-codegen/generated";
import { GetMeQuery } from "@/integrations/graphql-codegen/generated/graphql";

export const getMe = graphql(`
	query getMe {
		getMe {
			id
			email
			name
			login
			country
			aics
			hat
			usdt
			total_mined
			sapper_total_time
			created_by_admin
			today_mined_screen
			total_mined_screen
			two_factor_authentification
			confirmations_by_email
			can_get_free_coin
			refferal_code
			wallet_address
			total_withdraw
			createdAt
		}
	}
`);

export const unwrappedUser = (data: GetMeQuery | undefined) => {
	if (!data || !data.getMe) return null;

	const {
		aics,
		country,
		email,
		hat,
		login,
		name,
		usdt,
		total_mined,
		created_by_admin,
		sapper_total_time,
		today_mined_screen,
		total_mined_screen,
		can_get_free_coin,
		confirmations_by_email,
		two_factor_authentification,
		refferal_code,
		wallet_address,
		id,
		total_withdraw,
		createdAt,
	} = data?.getMe;

	return {
		aics: aics || 0,
		country: country || "",
		email,
		hat: hat || 0,
		login: login || "",
		name: name || "",
		usdt: usdt || 0,
		total_mined: total_mined || 0,
		created_by_admin: created_by_admin || false,
		sapper_total_time: sapper_total_time || 0,
		today_mined_screen: today_mined_screen || 0,
		total_mined_screen: total_mined_screen || 0,
		can_get_free_coin: can_get_free_coin || false,
		confirmations_by_email: confirmations_by_email || false,
		two_factor_authentification: two_factor_authentification || false,
		refferal_code: refferal_code || "",
		wallet_address: wallet_address || "",
		id: id || 0,
		total_withdraw: total_withdraw || 0,
		createdAt: createdAt || "",
	};
};

export const getExchangeQuery = graphql(`
	query getExchange {
		getExchange {
			aics_exchange
		}
	}
`);
