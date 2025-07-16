/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: { input: any; output: any };
	/** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
	EmailAddress: { input: any; output: any };
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: { input: any; output: any };
	/** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSONObject: { input: any; output: any };
};

export type About = {
	__typename?: "About";
	content?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	id: Scalars["Int"]["output"];
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AboutCreateAccess = {
	__typename?: "AboutCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type AboutCreateDocAccess = {
	__typename?: "AboutCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type AboutDeleteAccess = {
	__typename?: "AboutDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type AboutDeleteDocAccess = {
	__typename?: "AboutDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type AboutDocAccessFields = {
	__typename?: "AboutDocAccessFields";
	content?: Maybe<AboutDocAccessFields_Content>;
	createdAt?: Maybe<AboutDocAccessFields_CreatedAt>;
	updatedAt?: Maybe<AboutDocAccessFields_UpdatedAt>;
};

export type AboutDocAccessFields_Content = {
	__typename?: "AboutDocAccessFields_content";
	create?: Maybe<AboutDocAccessFields_Content_Create>;
	delete?: Maybe<AboutDocAccessFields_Content_Delete>;
	read?: Maybe<AboutDocAccessFields_Content_Read>;
	update?: Maybe<AboutDocAccessFields_Content_Update>;
};

export type AboutDocAccessFields_Content_Create = {
	__typename?: "AboutDocAccessFields_content_Create";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_Content_Delete = {
	__typename?: "AboutDocAccessFields_content_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_Content_Read = {
	__typename?: "AboutDocAccessFields_content_Read";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_Content_Update = {
	__typename?: "AboutDocAccessFields_content_Update";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_CreatedAt = {
	__typename?: "AboutDocAccessFields_createdAt";
	create?: Maybe<AboutDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<AboutDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<AboutDocAccessFields_CreatedAt_Read>;
	update?: Maybe<AboutDocAccessFields_CreatedAt_Update>;
};

export type AboutDocAccessFields_CreatedAt_Create = {
	__typename?: "AboutDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_CreatedAt_Delete = {
	__typename?: "AboutDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_CreatedAt_Read = {
	__typename?: "AboutDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_CreatedAt_Update = {
	__typename?: "AboutDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_UpdatedAt = {
	__typename?: "AboutDocAccessFields_updatedAt";
	create?: Maybe<AboutDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<AboutDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<AboutDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<AboutDocAccessFields_UpdatedAt_Update>;
};

export type AboutDocAccessFields_UpdatedAt_Create = {
	__typename?: "AboutDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_UpdatedAt_Delete = {
	__typename?: "AboutDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_UpdatedAt_Read = {
	__typename?: "AboutDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type AboutDocAccessFields_UpdatedAt_Update = {
	__typename?: "AboutDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields = {
	__typename?: "AboutFields";
	content?: Maybe<AboutFields_Content>;
	createdAt?: Maybe<AboutFields_CreatedAt>;
	updatedAt?: Maybe<AboutFields_UpdatedAt>;
};

export type AboutFields_Content = {
	__typename?: "AboutFields_content";
	create?: Maybe<AboutFields_Content_Create>;
	delete?: Maybe<AboutFields_Content_Delete>;
	read?: Maybe<AboutFields_Content_Read>;
	update?: Maybe<AboutFields_Content_Update>;
};

export type AboutFields_Content_Create = {
	__typename?: "AboutFields_content_Create";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_Content_Delete = {
	__typename?: "AboutFields_content_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_Content_Read = {
	__typename?: "AboutFields_content_Read";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_Content_Update = {
	__typename?: "AboutFields_content_Update";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_CreatedAt = {
	__typename?: "AboutFields_createdAt";
	create?: Maybe<AboutFields_CreatedAt_Create>;
	delete?: Maybe<AboutFields_CreatedAt_Delete>;
	read?: Maybe<AboutFields_CreatedAt_Read>;
	update?: Maybe<AboutFields_CreatedAt_Update>;
};

export type AboutFields_CreatedAt_Create = {
	__typename?: "AboutFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_CreatedAt_Delete = {
	__typename?: "AboutFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_CreatedAt_Read = {
	__typename?: "AboutFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_CreatedAt_Update = {
	__typename?: "AboutFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_UpdatedAt = {
	__typename?: "AboutFields_updatedAt";
	create?: Maybe<AboutFields_UpdatedAt_Create>;
	delete?: Maybe<AboutFields_UpdatedAt_Delete>;
	read?: Maybe<AboutFields_UpdatedAt_Read>;
	update?: Maybe<AboutFields_UpdatedAt_Update>;
};

export type AboutFields_UpdatedAt_Create = {
	__typename?: "AboutFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_UpdatedAt_Delete = {
	__typename?: "AboutFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_UpdatedAt_Read = {
	__typename?: "AboutFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type AboutFields_UpdatedAt_Update = {
	__typename?: "AboutFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type AboutReadAccess = {
	__typename?: "AboutReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type AboutReadDocAccess = {
	__typename?: "AboutReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type AboutUpdateAccess = {
	__typename?: "AboutUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type AboutUpdateDocAccess = {
	__typename?: "AboutUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type About_Content_Operator = {
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
};

export type About_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type About_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type About_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type About_Where = {
	AND?: InputMaybe<Array<InputMaybe<About_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<About_Where_Or>>>;
	content?: InputMaybe<About_Content_Operator>;
	createdAt?: InputMaybe<About_CreatedAt_Operator>;
	id?: InputMaybe<About_Id_Operator>;
	updatedAt?: InputMaybe<About_UpdatedAt_Operator>;
};

export type About_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<About_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<About_Where_Or>>>;
	content?: InputMaybe<About_Content_Operator>;
	createdAt?: InputMaybe<About_CreatedAt_Operator>;
	id?: InputMaybe<About_Id_Operator>;
	updatedAt?: InputMaybe<About_UpdatedAt_Operator>;
};

export type About_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<About_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<About_Where_Or>>>;
	content?: InputMaybe<About_Content_Operator>;
	createdAt?: InputMaybe<About_CreatedAt_Operator>;
	id?: InputMaybe<About_Id_Operator>;
	updatedAt?: InputMaybe<About_UpdatedAt_Operator>;
};

export type Abouts = {
	__typename?: "Abouts";
	docs?: Maybe<Array<Maybe<About>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type Access = {
	__typename?: "Access";
	about?: Maybe<AboutAccess>;
	canAccessAdmin: Scalars["Boolean"]["output"];
	deposit?: Maybe<DepositAccess>;
	exchange_rate?: Maybe<Exchange_RateAccess>;
	feedback?: Maybe<FeedbackAccess>;
	leaderboards?: Maybe<LeaderboardsAccess>;
	media?: Maybe<MediaAccess>;
	minimal_deposit?: Maybe<Minimal_DepositAccess>;
	payload_preferences?: Maybe<Payload_PreferencesAccess>;
	player?: Maybe<PlayerAccess>;
	saved_transactions?: Maybe<Saved_TransactionsAccess>;
	transactions?: Maybe<TransactionsAccess>;
	users?: Maybe<UsersAccess>;
	wallets?: Maybe<WalletsAccess>;
	withdrawal?: Maybe<WithdrawalAccess>;
};

export type DepositCreateAccess = {
	__typename?: "DepositCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type DepositCreateDocAccess = {
	__typename?: "DepositCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type DepositDeleteAccess = {
	__typename?: "DepositDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type DepositDeleteDocAccess = {
	__typename?: "DepositDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type DepositDocAccessFields = {
	__typename?: "DepositDocAccessFields";
	amount?: Maybe<DepositDocAccessFields_Amount>;
	createdAt?: Maybe<DepositDocAccessFields_CreatedAt>;
	owner_adress?: Maybe<DepositDocAccessFields_Owner_Adress>;
	status?: Maybe<DepositDocAccessFields_Status>;
	updatedAt?: Maybe<DepositDocAccessFields_UpdatedAt>;
	user_email?: Maybe<DepositDocAccessFields_User_Email>;
	wallet_address?: Maybe<DepositDocAccessFields_Wallet_Address>;
};

export type DepositDocAccessFields_Amount = {
	__typename?: "DepositDocAccessFields_amount";
	create?: Maybe<DepositDocAccessFields_Amount_Create>;
	delete?: Maybe<DepositDocAccessFields_Amount_Delete>;
	read?: Maybe<DepositDocAccessFields_Amount_Read>;
	update?: Maybe<DepositDocAccessFields_Amount_Update>;
};

export type DepositDocAccessFields_Amount_Create = {
	__typename?: "DepositDocAccessFields_amount_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Amount_Delete = {
	__typename?: "DepositDocAccessFields_amount_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Amount_Read = {
	__typename?: "DepositDocAccessFields_amount_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Amount_Update = {
	__typename?: "DepositDocAccessFields_amount_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_CreatedAt = {
	__typename?: "DepositDocAccessFields_createdAt";
	create?: Maybe<DepositDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<DepositDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<DepositDocAccessFields_CreatedAt_Read>;
	update?: Maybe<DepositDocAccessFields_CreatedAt_Update>;
};

export type DepositDocAccessFields_CreatedAt_Create = {
	__typename?: "DepositDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_CreatedAt_Delete = {
	__typename?: "DepositDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_CreatedAt_Read = {
	__typename?: "DepositDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_CreatedAt_Update = {
	__typename?: "DepositDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Owner_Adress = {
	__typename?: "DepositDocAccessFields_owner_adress";
	create?: Maybe<DepositDocAccessFields_Owner_Adress_Create>;
	delete?: Maybe<DepositDocAccessFields_Owner_Adress_Delete>;
	read?: Maybe<DepositDocAccessFields_Owner_Adress_Read>;
	update?: Maybe<DepositDocAccessFields_Owner_Adress_Update>;
};

export type DepositDocAccessFields_Owner_Adress_Create = {
	__typename?: "DepositDocAccessFields_owner_adress_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Owner_Adress_Delete = {
	__typename?: "DepositDocAccessFields_owner_adress_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Owner_Adress_Read = {
	__typename?: "DepositDocAccessFields_owner_adress_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Owner_Adress_Update = {
	__typename?: "DepositDocAccessFields_owner_adress_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Status = {
	__typename?: "DepositDocAccessFields_status";
	create?: Maybe<DepositDocAccessFields_Status_Create>;
	delete?: Maybe<DepositDocAccessFields_Status_Delete>;
	read?: Maybe<DepositDocAccessFields_Status_Read>;
	update?: Maybe<DepositDocAccessFields_Status_Update>;
};

export type DepositDocAccessFields_Status_Create = {
	__typename?: "DepositDocAccessFields_status_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Status_Delete = {
	__typename?: "DepositDocAccessFields_status_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Status_Read = {
	__typename?: "DepositDocAccessFields_status_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Status_Update = {
	__typename?: "DepositDocAccessFields_status_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_UpdatedAt = {
	__typename?: "DepositDocAccessFields_updatedAt";
	create?: Maybe<DepositDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<DepositDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<DepositDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<DepositDocAccessFields_UpdatedAt_Update>;
};

export type DepositDocAccessFields_UpdatedAt_Create = {
	__typename?: "DepositDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_UpdatedAt_Delete = {
	__typename?: "DepositDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_UpdatedAt_Read = {
	__typename?: "DepositDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_UpdatedAt_Update = {
	__typename?: "DepositDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_User_Email = {
	__typename?: "DepositDocAccessFields_user_email";
	create?: Maybe<DepositDocAccessFields_User_Email_Create>;
	delete?: Maybe<DepositDocAccessFields_User_Email_Delete>;
	read?: Maybe<DepositDocAccessFields_User_Email_Read>;
	update?: Maybe<DepositDocAccessFields_User_Email_Update>;
};

export type DepositDocAccessFields_User_Email_Create = {
	__typename?: "DepositDocAccessFields_user_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_User_Email_Delete = {
	__typename?: "DepositDocAccessFields_user_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_User_Email_Read = {
	__typename?: "DepositDocAccessFields_user_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_User_Email_Update = {
	__typename?: "DepositDocAccessFields_user_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Wallet_Address = {
	__typename?: "DepositDocAccessFields_wallet_address";
	create?: Maybe<DepositDocAccessFields_Wallet_Address_Create>;
	delete?: Maybe<DepositDocAccessFields_Wallet_Address_Delete>;
	read?: Maybe<DepositDocAccessFields_Wallet_Address_Read>;
	update?: Maybe<DepositDocAccessFields_Wallet_Address_Update>;
};

export type DepositDocAccessFields_Wallet_Address_Create = {
	__typename?: "DepositDocAccessFields_wallet_address_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Wallet_Address_Delete = {
	__typename?: "DepositDocAccessFields_wallet_address_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Wallet_Address_Read = {
	__typename?: "DepositDocAccessFields_wallet_address_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositDocAccessFields_Wallet_Address_Update = {
	__typename?: "DepositDocAccessFields_wallet_address_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields = {
	__typename?: "DepositFields";
	amount?: Maybe<DepositFields_Amount>;
	createdAt?: Maybe<DepositFields_CreatedAt>;
	owner_adress?: Maybe<DepositFields_Owner_Adress>;
	status?: Maybe<DepositFields_Status>;
	updatedAt?: Maybe<DepositFields_UpdatedAt>;
	user_email?: Maybe<DepositFields_User_Email>;
	wallet_address?: Maybe<DepositFields_Wallet_Address>;
};

export type DepositFields_Amount = {
	__typename?: "DepositFields_amount";
	create?: Maybe<DepositFields_Amount_Create>;
	delete?: Maybe<DepositFields_Amount_Delete>;
	read?: Maybe<DepositFields_Amount_Read>;
	update?: Maybe<DepositFields_Amount_Update>;
};

export type DepositFields_Amount_Create = {
	__typename?: "DepositFields_amount_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Amount_Delete = {
	__typename?: "DepositFields_amount_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Amount_Read = {
	__typename?: "DepositFields_amount_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Amount_Update = {
	__typename?: "DepositFields_amount_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_CreatedAt = {
	__typename?: "DepositFields_createdAt";
	create?: Maybe<DepositFields_CreatedAt_Create>;
	delete?: Maybe<DepositFields_CreatedAt_Delete>;
	read?: Maybe<DepositFields_CreatedAt_Read>;
	update?: Maybe<DepositFields_CreatedAt_Update>;
};

export type DepositFields_CreatedAt_Create = {
	__typename?: "DepositFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_CreatedAt_Delete = {
	__typename?: "DepositFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_CreatedAt_Read = {
	__typename?: "DepositFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_CreatedAt_Update = {
	__typename?: "DepositFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Owner_Adress = {
	__typename?: "DepositFields_owner_adress";
	create?: Maybe<DepositFields_Owner_Adress_Create>;
	delete?: Maybe<DepositFields_Owner_Adress_Delete>;
	read?: Maybe<DepositFields_Owner_Adress_Read>;
	update?: Maybe<DepositFields_Owner_Adress_Update>;
};

export type DepositFields_Owner_Adress_Create = {
	__typename?: "DepositFields_owner_adress_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Owner_Adress_Delete = {
	__typename?: "DepositFields_owner_adress_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Owner_Adress_Read = {
	__typename?: "DepositFields_owner_adress_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Owner_Adress_Update = {
	__typename?: "DepositFields_owner_adress_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Status = {
	__typename?: "DepositFields_status";
	create?: Maybe<DepositFields_Status_Create>;
	delete?: Maybe<DepositFields_Status_Delete>;
	read?: Maybe<DepositFields_Status_Read>;
	update?: Maybe<DepositFields_Status_Update>;
};

export type DepositFields_Status_Create = {
	__typename?: "DepositFields_status_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Status_Delete = {
	__typename?: "DepositFields_status_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Status_Read = {
	__typename?: "DepositFields_status_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Status_Update = {
	__typename?: "DepositFields_status_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_UpdatedAt = {
	__typename?: "DepositFields_updatedAt";
	create?: Maybe<DepositFields_UpdatedAt_Create>;
	delete?: Maybe<DepositFields_UpdatedAt_Delete>;
	read?: Maybe<DepositFields_UpdatedAt_Read>;
	update?: Maybe<DepositFields_UpdatedAt_Update>;
};

export type DepositFields_UpdatedAt_Create = {
	__typename?: "DepositFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_UpdatedAt_Delete = {
	__typename?: "DepositFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_UpdatedAt_Read = {
	__typename?: "DepositFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_UpdatedAt_Update = {
	__typename?: "DepositFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_User_Email = {
	__typename?: "DepositFields_user_email";
	create?: Maybe<DepositFields_User_Email_Create>;
	delete?: Maybe<DepositFields_User_Email_Delete>;
	read?: Maybe<DepositFields_User_Email_Read>;
	update?: Maybe<DepositFields_User_Email_Update>;
};

export type DepositFields_User_Email_Create = {
	__typename?: "DepositFields_user_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_User_Email_Delete = {
	__typename?: "DepositFields_user_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_User_Email_Read = {
	__typename?: "DepositFields_user_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_User_Email_Update = {
	__typename?: "DepositFields_user_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Wallet_Address = {
	__typename?: "DepositFields_wallet_address";
	create?: Maybe<DepositFields_Wallet_Address_Create>;
	delete?: Maybe<DepositFields_Wallet_Address_Delete>;
	read?: Maybe<DepositFields_Wallet_Address_Read>;
	update?: Maybe<DepositFields_Wallet_Address_Update>;
};

export type DepositFields_Wallet_Address_Create = {
	__typename?: "DepositFields_wallet_address_Create";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Wallet_Address_Delete = {
	__typename?: "DepositFields_wallet_address_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Wallet_Address_Read = {
	__typename?: "DepositFields_wallet_address_Read";
	permission: Scalars["Boolean"]["output"];
};

export type DepositFields_Wallet_Address_Update = {
	__typename?: "DepositFields_wallet_address_Update";
	permission: Scalars["Boolean"]["output"];
};

export type DepositReadAccess = {
	__typename?: "DepositReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type DepositReadDocAccess = {
	__typename?: "DepositReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type DepositUpdateAccess = {
	__typename?: "DepositUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type DepositUpdateDocAccess = {
	__typename?: "DepositUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Deposit_Amount_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Deposit_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Deposit_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Deposit_Owner_Adress_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Deposit_Status_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Deposit_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Deposit_User_Email_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	contains?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	like?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
};

export type Deposit_Wallet_Address_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Deposit_Where = {
	AND?: InputMaybe<Array<InputMaybe<Deposit_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Deposit_Where_Or>>>;
	amount?: InputMaybe<Deposit_Amount_Operator>;
	createdAt?: InputMaybe<Deposit_CreatedAt_Operator>;
	id?: InputMaybe<Deposit_Id_Operator>;
	owner_adress?: InputMaybe<Deposit_Owner_Adress_Operator>;
	status?: InputMaybe<Deposit_Status_Operator>;
	updatedAt?: InputMaybe<Deposit_UpdatedAt_Operator>;
	user_email?: InputMaybe<Deposit_User_Email_Operator>;
	wallet_address?: InputMaybe<Deposit_Wallet_Address_Operator>;
};

export type Deposit_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Deposit_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Deposit_Where_Or>>>;
	amount?: InputMaybe<Deposit_Amount_Operator>;
	createdAt?: InputMaybe<Deposit_CreatedAt_Operator>;
	id?: InputMaybe<Deposit_Id_Operator>;
	owner_adress?: InputMaybe<Deposit_Owner_Adress_Operator>;
	status?: InputMaybe<Deposit_Status_Operator>;
	updatedAt?: InputMaybe<Deposit_UpdatedAt_Operator>;
	user_email?: InputMaybe<Deposit_User_Email_Operator>;
	wallet_address?: InputMaybe<Deposit_Wallet_Address_Operator>;
};

export type Deposit_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Deposit_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Deposit_Where_Or>>>;
	amount?: InputMaybe<Deposit_Amount_Operator>;
	createdAt?: InputMaybe<Deposit_CreatedAt_Operator>;
	id?: InputMaybe<Deposit_Id_Operator>;
	owner_adress?: InputMaybe<Deposit_Owner_Adress_Operator>;
	status?: InputMaybe<Deposit_Status_Operator>;
	updatedAt?: InputMaybe<Deposit_UpdatedAt_Operator>;
	user_email?: InputMaybe<Deposit_User_Email_Operator>;
	wallet_address?: InputMaybe<Deposit_Wallet_Address_Operator>;
};

export type Deposits = {
	__typename?: "Deposits";
	docs?: Maybe<Array<Maybe<Deposit>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type ExchangeRate = {
	__typename?: "ExchangeRate";
	aics_exchange?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	id: Scalars["Int"]["output"];
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ExchangeRateCreateAccess = {
	__typename?: "ExchangeRateCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type ExchangeRateCreateDocAccess = {
	__typename?: "ExchangeRateCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type ExchangeRateDeleteAccess = {
	__typename?: "ExchangeRateDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type ExchangeRateDeleteDocAccess = {
	__typename?: "ExchangeRateDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type ExchangeRateDocAccessFields = {
	__typename?: "ExchangeRateDocAccessFields";
	aics_exchange?: Maybe<ExchangeRateDocAccessFields_Aics_Exchange>;
	createdAt?: Maybe<ExchangeRateDocAccessFields_CreatedAt>;
	updatedAt?: Maybe<ExchangeRateDocAccessFields_UpdatedAt>;
};

export type ExchangeRateDocAccessFields_Aics_Exchange = {
	__typename?: "ExchangeRateDocAccessFields_aics_exchange";
	create?: Maybe<ExchangeRateDocAccessFields_Aics_Exchange_Create>;
	delete?: Maybe<ExchangeRateDocAccessFields_Aics_Exchange_Delete>;
	read?: Maybe<ExchangeRateDocAccessFields_Aics_Exchange_Read>;
	update?: Maybe<ExchangeRateDocAccessFields_Aics_Exchange_Update>;
};

export type ExchangeRateDocAccessFields_Aics_Exchange_Create = {
	__typename?: "ExchangeRateDocAccessFields_aics_exchange_Create";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_Aics_Exchange_Delete = {
	__typename?: "ExchangeRateDocAccessFields_aics_exchange_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_Aics_Exchange_Read = {
	__typename?: "ExchangeRateDocAccessFields_aics_exchange_Read";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_Aics_Exchange_Update = {
	__typename?: "ExchangeRateDocAccessFields_aics_exchange_Update";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_CreatedAt = {
	__typename?: "ExchangeRateDocAccessFields_createdAt";
	create?: Maybe<ExchangeRateDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<ExchangeRateDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<ExchangeRateDocAccessFields_CreatedAt_Read>;
	update?: Maybe<ExchangeRateDocAccessFields_CreatedAt_Update>;
};

export type ExchangeRateDocAccessFields_CreatedAt_Create = {
	__typename?: "ExchangeRateDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_CreatedAt_Delete = {
	__typename?: "ExchangeRateDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_CreatedAt_Read = {
	__typename?: "ExchangeRateDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_CreatedAt_Update = {
	__typename?: "ExchangeRateDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_UpdatedAt = {
	__typename?: "ExchangeRateDocAccessFields_updatedAt";
	create?: Maybe<ExchangeRateDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<ExchangeRateDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<ExchangeRateDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<ExchangeRateDocAccessFields_UpdatedAt_Update>;
};

export type ExchangeRateDocAccessFields_UpdatedAt_Create = {
	__typename?: "ExchangeRateDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_UpdatedAt_Delete = {
	__typename?: "ExchangeRateDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_UpdatedAt_Read = {
	__typename?: "ExchangeRateDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateDocAccessFields_UpdatedAt_Update = {
	__typename?: "ExchangeRateDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields = {
	__typename?: "ExchangeRateFields";
	aics_exchange?: Maybe<ExchangeRateFields_Aics_Exchange>;
	createdAt?: Maybe<ExchangeRateFields_CreatedAt>;
	updatedAt?: Maybe<ExchangeRateFields_UpdatedAt>;
};

export type ExchangeRateFields_Aics_Exchange = {
	__typename?: "ExchangeRateFields_aics_exchange";
	create?: Maybe<ExchangeRateFields_Aics_Exchange_Create>;
	delete?: Maybe<ExchangeRateFields_Aics_Exchange_Delete>;
	read?: Maybe<ExchangeRateFields_Aics_Exchange_Read>;
	update?: Maybe<ExchangeRateFields_Aics_Exchange_Update>;
};

export type ExchangeRateFields_Aics_Exchange_Create = {
	__typename?: "ExchangeRateFields_aics_exchange_Create";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_Aics_Exchange_Delete = {
	__typename?: "ExchangeRateFields_aics_exchange_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_Aics_Exchange_Read = {
	__typename?: "ExchangeRateFields_aics_exchange_Read";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_Aics_Exchange_Update = {
	__typename?: "ExchangeRateFields_aics_exchange_Update";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_CreatedAt = {
	__typename?: "ExchangeRateFields_createdAt";
	create?: Maybe<ExchangeRateFields_CreatedAt_Create>;
	delete?: Maybe<ExchangeRateFields_CreatedAt_Delete>;
	read?: Maybe<ExchangeRateFields_CreatedAt_Read>;
	update?: Maybe<ExchangeRateFields_CreatedAt_Update>;
};

export type ExchangeRateFields_CreatedAt_Create = {
	__typename?: "ExchangeRateFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_CreatedAt_Delete = {
	__typename?: "ExchangeRateFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_CreatedAt_Read = {
	__typename?: "ExchangeRateFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_CreatedAt_Update = {
	__typename?: "ExchangeRateFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_UpdatedAt = {
	__typename?: "ExchangeRateFields_updatedAt";
	create?: Maybe<ExchangeRateFields_UpdatedAt_Create>;
	delete?: Maybe<ExchangeRateFields_UpdatedAt_Delete>;
	read?: Maybe<ExchangeRateFields_UpdatedAt_Read>;
	update?: Maybe<ExchangeRateFields_UpdatedAt_Update>;
};

export type ExchangeRateFields_UpdatedAt_Create = {
	__typename?: "ExchangeRateFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_UpdatedAt_Delete = {
	__typename?: "ExchangeRateFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_UpdatedAt_Read = {
	__typename?: "ExchangeRateFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateFields_UpdatedAt_Update = {
	__typename?: "ExchangeRateFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type ExchangeRateReadAccess = {
	__typename?: "ExchangeRateReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type ExchangeRateReadDocAccess = {
	__typename?: "ExchangeRateReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type ExchangeRateUpdateAccess = {
	__typename?: "ExchangeRateUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type ExchangeRateUpdateDocAccess = {
	__typename?: "ExchangeRateUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type ExchangeRate_Aics_Exchange_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ExchangeRate_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ExchangeRate_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ExchangeRate_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ExchangeRate_Where = {
	AND?: InputMaybe<Array<InputMaybe<ExchangeRate_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<ExchangeRate_Where_Or>>>;
	aics_exchange?: InputMaybe<ExchangeRate_Aics_Exchange_Operator>;
	createdAt?: InputMaybe<ExchangeRate_CreatedAt_Operator>;
	id?: InputMaybe<ExchangeRate_Id_Operator>;
	updatedAt?: InputMaybe<ExchangeRate_UpdatedAt_Operator>;
};

export type ExchangeRate_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<ExchangeRate_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<ExchangeRate_Where_Or>>>;
	aics_exchange?: InputMaybe<ExchangeRate_Aics_Exchange_Operator>;
	createdAt?: InputMaybe<ExchangeRate_CreatedAt_Operator>;
	id?: InputMaybe<ExchangeRate_Id_Operator>;
	updatedAt?: InputMaybe<ExchangeRate_UpdatedAt_Operator>;
};

export type ExchangeRate_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<ExchangeRate_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<ExchangeRate_Where_Or>>>;
	aics_exchange?: InputMaybe<ExchangeRate_Aics_Exchange_Operator>;
	createdAt?: InputMaybe<ExchangeRate_CreatedAt_Operator>;
	id?: InputMaybe<ExchangeRate_Id_Operator>;
	updatedAt?: InputMaybe<ExchangeRate_UpdatedAt_Operator>;
};

export type ExchangeRates = {
	__typename?: "ExchangeRates";
	docs?: Maybe<Array<Maybe<ExchangeRate>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type Feedback = {
	__typename?: "Feedback";
	age?: Maybe<Scalars["Float"]["output"]>;
	avatar: Media;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	feedback?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["Int"]["output"];
	name?: Maybe<Scalars["String"]["output"]>;
	town?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type FeedbackCreateAccess = {
	__typename?: "FeedbackCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type FeedbackCreateDocAccess = {
	__typename?: "FeedbackCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type FeedbackDeleteAccess = {
	__typename?: "FeedbackDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type FeedbackDeleteDocAccess = {
	__typename?: "FeedbackDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type FeedbackDocAccessFields = {
	__typename?: "FeedbackDocAccessFields";
	age?: Maybe<FeedbackDocAccessFields_Age>;
	avatar?: Maybe<FeedbackDocAccessFields_Avatar>;
	createdAt?: Maybe<FeedbackDocAccessFields_CreatedAt>;
	feedback?: Maybe<FeedbackDocAccessFields_Feedback>;
	name?: Maybe<FeedbackDocAccessFields_Name>;
	town?: Maybe<FeedbackDocAccessFields_Town>;
	updatedAt?: Maybe<FeedbackDocAccessFields_UpdatedAt>;
};

export type FeedbackDocAccessFields_Age = {
	__typename?: "FeedbackDocAccessFields_age";
	create?: Maybe<FeedbackDocAccessFields_Age_Create>;
	delete?: Maybe<FeedbackDocAccessFields_Age_Delete>;
	read?: Maybe<FeedbackDocAccessFields_Age_Read>;
	update?: Maybe<FeedbackDocAccessFields_Age_Update>;
};

export type FeedbackDocAccessFields_Age_Create = {
	__typename?: "FeedbackDocAccessFields_age_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Age_Delete = {
	__typename?: "FeedbackDocAccessFields_age_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Age_Read = {
	__typename?: "FeedbackDocAccessFields_age_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Age_Update = {
	__typename?: "FeedbackDocAccessFields_age_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Avatar = {
	__typename?: "FeedbackDocAccessFields_avatar";
	create?: Maybe<FeedbackDocAccessFields_Avatar_Create>;
	delete?: Maybe<FeedbackDocAccessFields_Avatar_Delete>;
	read?: Maybe<FeedbackDocAccessFields_Avatar_Read>;
	update?: Maybe<FeedbackDocAccessFields_Avatar_Update>;
};

export type FeedbackDocAccessFields_Avatar_Create = {
	__typename?: "FeedbackDocAccessFields_avatar_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Avatar_Delete = {
	__typename?: "FeedbackDocAccessFields_avatar_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Avatar_Read = {
	__typename?: "FeedbackDocAccessFields_avatar_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Avatar_Update = {
	__typename?: "FeedbackDocAccessFields_avatar_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_CreatedAt = {
	__typename?: "FeedbackDocAccessFields_createdAt";
	create?: Maybe<FeedbackDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<FeedbackDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<FeedbackDocAccessFields_CreatedAt_Read>;
	update?: Maybe<FeedbackDocAccessFields_CreatedAt_Update>;
};

export type FeedbackDocAccessFields_CreatedAt_Create = {
	__typename?: "FeedbackDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_CreatedAt_Delete = {
	__typename?: "FeedbackDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_CreatedAt_Read = {
	__typename?: "FeedbackDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_CreatedAt_Update = {
	__typename?: "FeedbackDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Feedback = {
	__typename?: "FeedbackDocAccessFields_feedback";
	create?: Maybe<FeedbackDocAccessFields_Feedback_Create>;
	delete?: Maybe<FeedbackDocAccessFields_Feedback_Delete>;
	read?: Maybe<FeedbackDocAccessFields_Feedback_Read>;
	update?: Maybe<FeedbackDocAccessFields_Feedback_Update>;
};

export type FeedbackDocAccessFields_Feedback_Create = {
	__typename?: "FeedbackDocAccessFields_feedback_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Feedback_Delete = {
	__typename?: "FeedbackDocAccessFields_feedback_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Feedback_Read = {
	__typename?: "FeedbackDocAccessFields_feedback_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Feedback_Update = {
	__typename?: "FeedbackDocAccessFields_feedback_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Name = {
	__typename?: "FeedbackDocAccessFields_name";
	create?: Maybe<FeedbackDocAccessFields_Name_Create>;
	delete?: Maybe<FeedbackDocAccessFields_Name_Delete>;
	read?: Maybe<FeedbackDocAccessFields_Name_Read>;
	update?: Maybe<FeedbackDocAccessFields_Name_Update>;
};

export type FeedbackDocAccessFields_Name_Create = {
	__typename?: "FeedbackDocAccessFields_name_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Name_Delete = {
	__typename?: "FeedbackDocAccessFields_name_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Name_Read = {
	__typename?: "FeedbackDocAccessFields_name_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Name_Update = {
	__typename?: "FeedbackDocAccessFields_name_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Town = {
	__typename?: "FeedbackDocAccessFields_town";
	create?: Maybe<FeedbackDocAccessFields_Town_Create>;
	delete?: Maybe<FeedbackDocAccessFields_Town_Delete>;
	read?: Maybe<FeedbackDocAccessFields_Town_Read>;
	update?: Maybe<FeedbackDocAccessFields_Town_Update>;
};

export type FeedbackDocAccessFields_Town_Create = {
	__typename?: "FeedbackDocAccessFields_town_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Town_Delete = {
	__typename?: "FeedbackDocAccessFields_town_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Town_Read = {
	__typename?: "FeedbackDocAccessFields_town_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_Town_Update = {
	__typename?: "FeedbackDocAccessFields_town_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_UpdatedAt = {
	__typename?: "FeedbackDocAccessFields_updatedAt";
	create?: Maybe<FeedbackDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<FeedbackDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<FeedbackDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<FeedbackDocAccessFields_UpdatedAt_Update>;
};

export type FeedbackDocAccessFields_UpdatedAt_Create = {
	__typename?: "FeedbackDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_UpdatedAt_Delete = {
	__typename?: "FeedbackDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_UpdatedAt_Read = {
	__typename?: "FeedbackDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackDocAccessFields_UpdatedAt_Update = {
	__typename?: "FeedbackDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields = {
	__typename?: "FeedbackFields";
	age?: Maybe<FeedbackFields_Age>;
	avatar?: Maybe<FeedbackFields_Avatar>;
	createdAt?: Maybe<FeedbackFields_CreatedAt>;
	feedback?: Maybe<FeedbackFields_Feedback>;
	name?: Maybe<FeedbackFields_Name>;
	town?: Maybe<FeedbackFields_Town>;
	updatedAt?: Maybe<FeedbackFields_UpdatedAt>;
};

export type FeedbackFields_Age = {
	__typename?: "FeedbackFields_age";
	create?: Maybe<FeedbackFields_Age_Create>;
	delete?: Maybe<FeedbackFields_Age_Delete>;
	read?: Maybe<FeedbackFields_Age_Read>;
	update?: Maybe<FeedbackFields_Age_Update>;
};

export type FeedbackFields_Age_Create = {
	__typename?: "FeedbackFields_age_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Age_Delete = {
	__typename?: "FeedbackFields_age_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Age_Read = {
	__typename?: "FeedbackFields_age_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Age_Update = {
	__typename?: "FeedbackFields_age_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Avatar = {
	__typename?: "FeedbackFields_avatar";
	create?: Maybe<FeedbackFields_Avatar_Create>;
	delete?: Maybe<FeedbackFields_Avatar_Delete>;
	read?: Maybe<FeedbackFields_Avatar_Read>;
	update?: Maybe<FeedbackFields_Avatar_Update>;
};

export type FeedbackFields_Avatar_Create = {
	__typename?: "FeedbackFields_avatar_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Avatar_Delete = {
	__typename?: "FeedbackFields_avatar_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Avatar_Read = {
	__typename?: "FeedbackFields_avatar_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Avatar_Update = {
	__typename?: "FeedbackFields_avatar_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_CreatedAt = {
	__typename?: "FeedbackFields_createdAt";
	create?: Maybe<FeedbackFields_CreatedAt_Create>;
	delete?: Maybe<FeedbackFields_CreatedAt_Delete>;
	read?: Maybe<FeedbackFields_CreatedAt_Read>;
	update?: Maybe<FeedbackFields_CreatedAt_Update>;
};

export type FeedbackFields_CreatedAt_Create = {
	__typename?: "FeedbackFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_CreatedAt_Delete = {
	__typename?: "FeedbackFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_CreatedAt_Read = {
	__typename?: "FeedbackFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_CreatedAt_Update = {
	__typename?: "FeedbackFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Feedback = {
	__typename?: "FeedbackFields_feedback";
	create?: Maybe<FeedbackFields_Feedback_Create>;
	delete?: Maybe<FeedbackFields_Feedback_Delete>;
	read?: Maybe<FeedbackFields_Feedback_Read>;
	update?: Maybe<FeedbackFields_Feedback_Update>;
};

export type FeedbackFields_Feedback_Create = {
	__typename?: "FeedbackFields_feedback_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Feedback_Delete = {
	__typename?: "FeedbackFields_feedback_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Feedback_Read = {
	__typename?: "FeedbackFields_feedback_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Feedback_Update = {
	__typename?: "FeedbackFields_feedback_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Name = {
	__typename?: "FeedbackFields_name";
	create?: Maybe<FeedbackFields_Name_Create>;
	delete?: Maybe<FeedbackFields_Name_Delete>;
	read?: Maybe<FeedbackFields_Name_Read>;
	update?: Maybe<FeedbackFields_Name_Update>;
};

export type FeedbackFields_Name_Create = {
	__typename?: "FeedbackFields_name_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Name_Delete = {
	__typename?: "FeedbackFields_name_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Name_Read = {
	__typename?: "FeedbackFields_name_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Name_Update = {
	__typename?: "FeedbackFields_name_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Town = {
	__typename?: "FeedbackFields_town";
	create?: Maybe<FeedbackFields_Town_Create>;
	delete?: Maybe<FeedbackFields_Town_Delete>;
	read?: Maybe<FeedbackFields_Town_Read>;
	update?: Maybe<FeedbackFields_Town_Update>;
};

export type FeedbackFields_Town_Create = {
	__typename?: "FeedbackFields_town_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Town_Delete = {
	__typename?: "FeedbackFields_town_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Town_Read = {
	__typename?: "FeedbackFields_town_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_Town_Update = {
	__typename?: "FeedbackFields_town_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_UpdatedAt = {
	__typename?: "FeedbackFields_updatedAt";
	create?: Maybe<FeedbackFields_UpdatedAt_Create>;
	delete?: Maybe<FeedbackFields_UpdatedAt_Delete>;
	read?: Maybe<FeedbackFields_UpdatedAt_Read>;
	update?: Maybe<FeedbackFields_UpdatedAt_Update>;
};

export type FeedbackFields_UpdatedAt_Create = {
	__typename?: "FeedbackFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_UpdatedAt_Delete = {
	__typename?: "FeedbackFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_UpdatedAt_Read = {
	__typename?: "FeedbackFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackFields_UpdatedAt_Update = {
	__typename?: "FeedbackFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type FeedbackReadAccess = {
	__typename?: "FeedbackReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type FeedbackReadDocAccess = {
	__typename?: "FeedbackReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type FeedbackUpdateAccess = {
	__typename?: "FeedbackUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type FeedbackUpdateDocAccess = {
	__typename?: "FeedbackUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Feedback_Age_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Feedback_Avatar_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	equals?: InputMaybe<Scalars["JSON"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	not_equals?: InputMaybe<Scalars["JSON"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
};

export type Feedback_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Feedback_Feedback_Operator = {
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
};

export type Feedback_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Feedback_Name_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Feedback_Town_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Feedback_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Feedback_Where = {
	AND?: InputMaybe<Array<InputMaybe<Feedback_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Feedback_Where_Or>>>;
	age?: InputMaybe<Feedback_Age_Operator>;
	avatar?: InputMaybe<Feedback_Avatar_Operator>;
	createdAt?: InputMaybe<Feedback_CreatedAt_Operator>;
	feedback?: InputMaybe<Feedback_Feedback_Operator>;
	id?: InputMaybe<Feedback_Id_Operator>;
	name?: InputMaybe<Feedback_Name_Operator>;
	town?: InputMaybe<Feedback_Town_Operator>;
	updatedAt?: InputMaybe<Feedback_UpdatedAt_Operator>;
};

export type Feedback_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Feedback_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Feedback_Where_Or>>>;
	age?: InputMaybe<Feedback_Age_Operator>;
	avatar?: InputMaybe<Feedback_Avatar_Operator>;
	createdAt?: InputMaybe<Feedback_CreatedAt_Operator>;
	feedback?: InputMaybe<Feedback_Feedback_Operator>;
	id?: InputMaybe<Feedback_Id_Operator>;
	name?: InputMaybe<Feedback_Name_Operator>;
	town?: InputMaybe<Feedback_Town_Operator>;
	updatedAt?: InputMaybe<Feedback_UpdatedAt_Operator>;
};

export type Feedback_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Feedback_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Feedback_Where_Or>>>;
	age?: InputMaybe<Feedback_Age_Operator>;
	avatar?: InputMaybe<Feedback_Avatar_Operator>;
	createdAt?: InputMaybe<Feedback_CreatedAt_Operator>;
	feedback?: InputMaybe<Feedback_Feedback_Operator>;
	id?: InputMaybe<Feedback_Id_Operator>;
	name?: InputMaybe<Feedback_Name_Operator>;
	town?: InputMaybe<Feedback_Town_Operator>;
	updatedAt?: InputMaybe<Feedback_UpdatedAt_Operator>;
};

export type Feedbacks = {
	__typename?: "Feedbacks";
	docs?: Maybe<Array<Maybe<Feedback>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type Leaderboard_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Leaderboard_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Leaderboard_Name_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Leaderboard_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Leaderboard_Where = {
	AND?: InputMaybe<Array<InputMaybe<Leaderboard_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Leaderboard_Where_Or>>>;
	createdAt?: InputMaybe<Leaderboard_CreatedAt_Operator>;
	id?: InputMaybe<Leaderboard_Id_Operator>;
	name?: InputMaybe<Leaderboard_Name_Operator>;
	updatedAt?: InputMaybe<Leaderboard_UpdatedAt_Operator>;
};

export type Leaderboard_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Leaderboard_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Leaderboard_Where_Or>>>;
	createdAt?: InputMaybe<Leaderboard_CreatedAt_Operator>;
	id?: InputMaybe<Leaderboard_Id_Operator>;
	name?: InputMaybe<Leaderboard_Name_Operator>;
	updatedAt?: InputMaybe<Leaderboard_UpdatedAt_Operator>;
};

export type Leaderboard_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Leaderboard_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Leaderboard_Where_Or>>>;
	createdAt?: InputMaybe<Leaderboard_CreatedAt_Operator>;
	id?: InputMaybe<Leaderboard_Id_Operator>;
	name?: InputMaybe<Leaderboard_Name_Operator>;
	updatedAt?: InputMaybe<Leaderboard_UpdatedAt_Operator>;
};

export type Leaderboards = {
	__typename?: "Leaderboards";
	docs?: Maybe<Array<Maybe<Leaderboard>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type LeaderboardsCreateAccess = {
	__typename?: "LeaderboardsCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type LeaderboardsCreateDocAccess = {
	__typename?: "LeaderboardsCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type LeaderboardsDeleteAccess = {
	__typename?: "LeaderboardsDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type LeaderboardsDeleteDocAccess = {
	__typename?: "LeaderboardsDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type LeaderboardsDocAccessFields = {
	__typename?: "LeaderboardsDocAccessFields";
	createdAt?: Maybe<LeaderboardsDocAccessFields_CreatedAt>;
	name?: Maybe<LeaderboardsDocAccessFields_Name>;
	updatedAt?: Maybe<LeaderboardsDocAccessFields_UpdatedAt>;
};

export type LeaderboardsDocAccessFields_CreatedAt = {
	__typename?: "LeaderboardsDocAccessFields_createdAt";
	create?: Maybe<LeaderboardsDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<LeaderboardsDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<LeaderboardsDocAccessFields_CreatedAt_Read>;
	update?: Maybe<LeaderboardsDocAccessFields_CreatedAt_Update>;
};

export type LeaderboardsDocAccessFields_CreatedAt_Create = {
	__typename?: "LeaderboardsDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_CreatedAt_Delete = {
	__typename?: "LeaderboardsDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_CreatedAt_Read = {
	__typename?: "LeaderboardsDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_CreatedAt_Update = {
	__typename?: "LeaderboardsDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_Name = {
	__typename?: "LeaderboardsDocAccessFields_name";
	create?: Maybe<LeaderboardsDocAccessFields_Name_Create>;
	delete?: Maybe<LeaderboardsDocAccessFields_Name_Delete>;
	read?: Maybe<LeaderboardsDocAccessFields_Name_Read>;
	update?: Maybe<LeaderboardsDocAccessFields_Name_Update>;
};

export type LeaderboardsDocAccessFields_Name_Create = {
	__typename?: "LeaderboardsDocAccessFields_name_Create";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_Name_Delete = {
	__typename?: "LeaderboardsDocAccessFields_name_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_Name_Read = {
	__typename?: "LeaderboardsDocAccessFields_name_Read";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_Name_Update = {
	__typename?: "LeaderboardsDocAccessFields_name_Update";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_UpdatedAt = {
	__typename?: "LeaderboardsDocAccessFields_updatedAt";
	create?: Maybe<LeaderboardsDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<LeaderboardsDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<LeaderboardsDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<LeaderboardsDocAccessFields_UpdatedAt_Update>;
};

export type LeaderboardsDocAccessFields_UpdatedAt_Create = {
	__typename?: "LeaderboardsDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_UpdatedAt_Delete = {
	__typename?: "LeaderboardsDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_UpdatedAt_Read = {
	__typename?: "LeaderboardsDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsDocAccessFields_UpdatedAt_Update = {
	__typename?: "LeaderboardsDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields = {
	__typename?: "LeaderboardsFields";
	createdAt?: Maybe<LeaderboardsFields_CreatedAt>;
	name?: Maybe<LeaderboardsFields_Name>;
	updatedAt?: Maybe<LeaderboardsFields_UpdatedAt>;
};

export type LeaderboardsFields_CreatedAt = {
	__typename?: "LeaderboardsFields_createdAt";
	create?: Maybe<LeaderboardsFields_CreatedAt_Create>;
	delete?: Maybe<LeaderboardsFields_CreatedAt_Delete>;
	read?: Maybe<LeaderboardsFields_CreatedAt_Read>;
	update?: Maybe<LeaderboardsFields_CreatedAt_Update>;
};

export type LeaderboardsFields_CreatedAt_Create = {
	__typename?: "LeaderboardsFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_CreatedAt_Delete = {
	__typename?: "LeaderboardsFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_CreatedAt_Read = {
	__typename?: "LeaderboardsFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_CreatedAt_Update = {
	__typename?: "LeaderboardsFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_Name = {
	__typename?: "LeaderboardsFields_name";
	create?: Maybe<LeaderboardsFields_Name_Create>;
	delete?: Maybe<LeaderboardsFields_Name_Delete>;
	read?: Maybe<LeaderboardsFields_Name_Read>;
	update?: Maybe<LeaderboardsFields_Name_Update>;
};

export type LeaderboardsFields_Name_Create = {
	__typename?: "LeaderboardsFields_name_Create";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_Name_Delete = {
	__typename?: "LeaderboardsFields_name_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_Name_Read = {
	__typename?: "LeaderboardsFields_name_Read";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_Name_Update = {
	__typename?: "LeaderboardsFields_name_Update";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_UpdatedAt = {
	__typename?: "LeaderboardsFields_updatedAt";
	create?: Maybe<LeaderboardsFields_UpdatedAt_Create>;
	delete?: Maybe<LeaderboardsFields_UpdatedAt_Delete>;
	read?: Maybe<LeaderboardsFields_UpdatedAt_Read>;
	update?: Maybe<LeaderboardsFields_UpdatedAt_Update>;
};

export type LeaderboardsFields_UpdatedAt_Create = {
	__typename?: "LeaderboardsFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_UpdatedAt_Delete = {
	__typename?: "LeaderboardsFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_UpdatedAt_Read = {
	__typename?: "LeaderboardsFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsFields_UpdatedAt_Update = {
	__typename?: "LeaderboardsFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type LeaderboardsReadAccess = {
	__typename?: "LeaderboardsReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type LeaderboardsReadDocAccess = {
	__typename?: "LeaderboardsReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type LeaderboardsUpdateAccess = {
	__typename?: "LeaderboardsUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type LeaderboardsUpdateDocAccess = {
	__typename?: "LeaderboardsUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Media = {
	__typename?: "Media";
	alt?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	filename?: Maybe<Scalars["String"]["output"]>;
	filesize?: Maybe<Scalars["Float"]["output"]>;
	focalX?: Maybe<Scalars["Float"]["output"]>;
	focalY?: Maybe<Scalars["Float"]["output"]>;
	height?: Maybe<Scalars["Float"]["output"]>;
	id: Scalars["Int"]["output"];
	mimeType?: Maybe<Scalars["String"]["output"]>;
	sizes?: Maybe<Media_Sizes>;
	thumbnailURL?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	url?: Maybe<Scalars["String"]["output"]>;
	width?: Maybe<Scalars["Float"]["output"]>;
};

export type MediaCreateAccess = {
	__typename?: "MediaCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MediaCreateDocAccess = {
	__typename?: "MediaCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MediaDeleteAccess = {
	__typename?: "MediaDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MediaDeleteDocAccess = {
	__typename?: "MediaDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MediaDocAccessFields = {
	__typename?: "MediaDocAccessFields";
	alt?: Maybe<MediaDocAccessFields_Alt>;
	createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
	filename?: Maybe<MediaDocAccessFields_Filename>;
	filesize?: Maybe<MediaDocAccessFields_Filesize>;
	focalX?: Maybe<MediaDocAccessFields_FocalX>;
	focalY?: Maybe<MediaDocAccessFields_FocalY>;
	height?: Maybe<MediaDocAccessFields_Height>;
	mimeType?: Maybe<MediaDocAccessFields_MimeType>;
	sizes?: Maybe<MediaDocAccessFields_Sizes>;
	thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
	updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
	url?: Maybe<MediaDocAccessFields_Url>;
	width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
	__typename?: "MediaDocAccessFields_alt";
	create?: Maybe<MediaDocAccessFields_Alt_Create>;
	delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
	read?: Maybe<MediaDocAccessFields_Alt_Read>;
	update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
	__typename?: "MediaDocAccessFields_alt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Alt_Delete = {
	__typename?: "MediaDocAccessFields_alt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Alt_Read = {
	__typename?: "MediaDocAccessFields_alt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Alt_Update = {
	__typename?: "MediaDocAccessFields_alt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_CreatedAt = {
	__typename?: "MediaDocAccessFields_createdAt";
	create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
	update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
	__typename?: "MediaDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
	__typename?: "MediaDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_CreatedAt_Read = {
	__typename?: "MediaDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_CreatedAt_Update = {
	__typename?: "MediaDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Filename = {
	__typename?: "MediaDocAccessFields_filename";
	create?: Maybe<MediaDocAccessFields_Filename_Create>;
	delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
	read?: Maybe<MediaDocAccessFields_Filename_Read>;
	update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
	__typename?: "MediaDocAccessFields_filename_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Filename_Delete = {
	__typename?: "MediaDocAccessFields_filename_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Filename_Read = {
	__typename?: "MediaDocAccessFields_filename_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Filename_Update = {
	__typename?: "MediaDocAccessFields_filename_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Filesize = {
	__typename?: "MediaDocAccessFields_filesize";
	create?: Maybe<MediaDocAccessFields_Filesize_Create>;
	delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
	read?: Maybe<MediaDocAccessFields_Filesize_Read>;
	update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
	__typename?: "MediaDocAccessFields_filesize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Filesize_Delete = {
	__typename?: "MediaDocAccessFields_filesize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Filesize_Read = {
	__typename?: "MediaDocAccessFields_filesize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Filesize_Update = {
	__typename?: "MediaDocAccessFields_filesize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_FocalX = {
	__typename?: "MediaDocAccessFields_focalX";
	create?: Maybe<MediaDocAccessFields_FocalX_Create>;
	delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
	read?: Maybe<MediaDocAccessFields_FocalX_Read>;
	update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
	__typename?: "MediaDocAccessFields_focalX_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_FocalX_Delete = {
	__typename?: "MediaDocAccessFields_focalX_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_FocalX_Read = {
	__typename?: "MediaDocAccessFields_focalX_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_FocalX_Update = {
	__typename?: "MediaDocAccessFields_focalX_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_FocalY = {
	__typename?: "MediaDocAccessFields_focalY";
	create?: Maybe<MediaDocAccessFields_FocalY_Create>;
	delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
	read?: Maybe<MediaDocAccessFields_FocalY_Read>;
	update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
	__typename?: "MediaDocAccessFields_focalY_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_FocalY_Delete = {
	__typename?: "MediaDocAccessFields_focalY_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_FocalY_Read = {
	__typename?: "MediaDocAccessFields_focalY_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_FocalY_Update = {
	__typename?: "MediaDocAccessFields_focalY_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Height = {
	__typename?: "MediaDocAccessFields_height";
	create?: Maybe<MediaDocAccessFields_Height_Create>;
	delete?: Maybe<MediaDocAccessFields_Height_Delete>;
	read?: Maybe<MediaDocAccessFields_Height_Read>;
	update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
	__typename?: "MediaDocAccessFields_height_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Height_Delete = {
	__typename?: "MediaDocAccessFields_height_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Height_Read = {
	__typename?: "MediaDocAccessFields_height_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Height_Update = {
	__typename?: "MediaDocAccessFields_height_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_MimeType = {
	__typename?: "MediaDocAccessFields_mimeType";
	create?: Maybe<MediaDocAccessFields_MimeType_Create>;
	delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
	read?: Maybe<MediaDocAccessFields_MimeType_Read>;
	update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
	__typename?: "MediaDocAccessFields_mimeType_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_MimeType_Delete = {
	__typename?: "MediaDocAccessFields_mimeType_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_MimeType_Read = {
	__typename?: "MediaDocAccessFields_mimeType_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_MimeType_Update = {
	__typename?: "MediaDocAccessFields_mimeType_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes = {
	__typename?: "MediaDocAccessFields_sizes";
	create?: Maybe<MediaDocAccessFields_Sizes_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
	fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
	read?: Maybe<MediaDocAccessFields_Sizes_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
	__typename?: "MediaDocAccessFields_sizes_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Delete = {
	__typename?: "MediaDocAccessFields_sizes_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Fields = {
	__typename?: "MediaDocAccessFields_sizes_Fields";
	card?: Maybe<MediaDocAccessFields_Sizes_Card>;
	default?: Maybe<MediaDocAccessFields_Sizes_Default>;
	thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
	__typename?: "MediaDocAccessFields_sizes_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Update = {
	__typename?: "MediaDocAccessFields_sizes_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card = {
	__typename?: "MediaDocAccessFields_sizes_card";
	create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
	fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
	read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
	__typename?: "MediaDocAccessFields_sizes_card_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
	__typename?: "MediaDocAccessFields_sizes_card_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
	__typename?: "MediaDocAccessFields_sizes_card_Fields";
	filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
	filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
	height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
	mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
	url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
	width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
	__typename?: "MediaDocAccessFields_sizes_card_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
	__typename?: "MediaDocAccessFields_sizes_card_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
	__typename?: "MediaDocAccessFields_sizes_card_filename";
	create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
	__typename?: "MediaDocAccessFields_sizes_card_filename_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
	__typename?: "MediaDocAccessFields_sizes_card_filename_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
	__typename?: "MediaDocAccessFields_sizes_card_filename_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
	__typename?: "MediaDocAccessFields_sizes_card_filename_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
	__typename?: "MediaDocAccessFields_sizes_card_filesize";
	create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
	__typename?: "MediaDocAccessFields_sizes_card_filesize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
	__typename?: "MediaDocAccessFields_sizes_card_filesize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
	__typename?: "MediaDocAccessFields_sizes_card_filesize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
	__typename?: "MediaDocAccessFields_sizes_card_filesize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
	__typename?: "MediaDocAccessFields_sizes_card_height";
	create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
	__typename?: "MediaDocAccessFields_sizes_card_height_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
	__typename?: "MediaDocAccessFields_sizes_card_height_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
	__typename?: "MediaDocAccessFields_sizes_card_height_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
	__typename?: "MediaDocAccessFields_sizes_card_height_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
	__typename?: "MediaDocAccessFields_sizes_card_mimeType";
	create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
	__typename?: "MediaDocAccessFields_sizes_card_mimeType_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
	__typename?: "MediaDocAccessFields_sizes_card_mimeType_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
	__typename?: "MediaDocAccessFields_sizes_card_mimeType_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
	__typename?: "MediaDocAccessFields_sizes_card_mimeType_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
	__typename?: "MediaDocAccessFields_sizes_card_url";
	create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
	__typename?: "MediaDocAccessFields_sizes_card_url_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
	__typename?: "MediaDocAccessFields_sizes_card_url_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
	__typename?: "MediaDocAccessFields_sizes_card_url_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
	__typename?: "MediaDocAccessFields_sizes_card_url_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
	__typename?: "MediaDocAccessFields_sizes_card_width";
	create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
	__typename?: "MediaDocAccessFields_sizes_card_width_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
	__typename?: "MediaDocAccessFields_sizes_card_width_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
	__typename?: "MediaDocAccessFields_sizes_card_width_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
	__typename?: "MediaDocAccessFields_sizes_card_width_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default = {
	__typename?: "MediaDocAccessFields_sizes_default";
	create?: Maybe<MediaDocAccessFields_Sizes_Default_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Default_Delete>;
	fields?: Maybe<MediaDocAccessFields_Sizes_Default_Fields>;
	read?: Maybe<MediaDocAccessFields_Sizes_Default_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Default_Update>;
};

export type MediaDocAccessFields_Sizes_Default_Create = {
	__typename?: "MediaDocAccessFields_sizes_default_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Delete = {
	__typename?: "MediaDocAccessFields_sizes_default_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Fields = {
	__typename?: "MediaDocAccessFields_sizes_default_Fields";
	filename?: Maybe<MediaDocAccessFields_Sizes_Default_Filename>;
	filesize?: Maybe<MediaDocAccessFields_Sizes_Default_Filesize>;
	height?: Maybe<MediaDocAccessFields_Sizes_Default_Height>;
	mimeType?: Maybe<MediaDocAccessFields_Sizes_Default_MimeType>;
	url?: Maybe<MediaDocAccessFields_Sizes_Default_Url>;
	width?: Maybe<MediaDocAccessFields_Sizes_Default_Width>;
};

export type MediaDocAccessFields_Sizes_Default_Read = {
	__typename?: "MediaDocAccessFields_sizes_default_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Update = {
	__typename?: "MediaDocAccessFields_sizes_default_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Filename = {
	__typename?: "MediaDocAccessFields_sizes_default_filename";
	create?: Maybe<MediaDocAccessFields_Sizes_Default_Filename_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Default_Filename_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Default_Filename_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Default_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Default_Filename_Create = {
	__typename?: "MediaDocAccessFields_sizes_default_filename_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Filename_Delete = {
	__typename?: "MediaDocAccessFields_sizes_default_filename_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Filename_Read = {
	__typename?: "MediaDocAccessFields_sizes_default_filename_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Filename_Update = {
	__typename?: "MediaDocAccessFields_sizes_default_filename_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Filesize = {
	__typename?: "MediaDocAccessFields_sizes_default_filesize";
	create?: Maybe<MediaDocAccessFields_Sizes_Default_Filesize_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Default_Filesize_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Default_Filesize_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Default_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Default_Filesize_Create = {
	__typename?: "MediaDocAccessFields_sizes_default_filesize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Filesize_Delete = {
	__typename?: "MediaDocAccessFields_sizes_default_filesize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Filesize_Read = {
	__typename?: "MediaDocAccessFields_sizes_default_filesize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Filesize_Update = {
	__typename?: "MediaDocAccessFields_sizes_default_filesize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Height = {
	__typename?: "MediaDocAccessFields_sizes_default_height";
	create?: Maybe<MediaDocAccessFields_Sizes_Default_Height_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Default_Height_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Default_Height_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Default_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Default_Height_Create = {
	__typename?: "MediaDocAccessFields_sizes_default_height_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Height_Delete = {
	__typename?: "MediaDocAccessFields_sizes_default_height_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Height_Read = {
	__typename?: "MediaDocAccessFields_sizes_default_height_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Height_Update = {
	__typename?: "MediaDocAccessFields_sizes_default_height_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_MimeType = {
	__typename?: "MediaDocAccessFields_sizes_default_mimeType";
	create?: Maybe<MediaDocAccessFields_Sizes_Default_MimeType_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Default_MimeType_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Default_MimeType_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Default_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Default_MimeType_Create = {
	__typename?: "MediaDocAccessFields_sizes_default_mimeType_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_MimeType_Delete = {
	__typename?: "MediaDocAccessFields_sizes_default_mimeType_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_MimeType_Read = {
	__typename?: "MediaDocAccessFields_sizes_default_mimeType_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_MimeType_Update = {
	__typename?: "MediaDocAccessFields_sizes_default_mimeType_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Url = {
	__typename?: "MediaDocAccessFields_sizes_default_url";
	create?: Maybe<MediaDocAccessFields_Sizes_Default_Url_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Default_Url_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Default_Url_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Default_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Default_Url_Create = {
	__typename?: "MediaDocAccessFields_sizes_default_url_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Url_Delete = {
	__typename?: "MediaDocAccessFields_sizes_default_url_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Url_Read = {
	__typename?: "MediaDocAccessFields_sizes_default_url_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Url_Update = {
	__typename?: "MediaDocAccessFields_sizes_default_url_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Width = {
	__typename?: "MediaDocAccessFields_sizes_default_width";
	create?: Maybe<MediaDocAccessFields_Sizes_Default_Width_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Default_Width_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Default_Width_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Default_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Default_Width_Create = {
	__typename?: "MediaDocAccessFields_sizes_default_width_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Width_Delete = {
	__typename?: "MediaDocAccessFields_sizes_default_width_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Width_Read = {
	__typename?: "MediaDocAccessFields_sizes_default_width_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Default_Width_Update = {
	__typename?: "MediaDocAccessFields_sizes_default_width_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail";
	create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
	fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
	read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_Fields";
	filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
	filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
	height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
	mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
	url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
	width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filename";
	create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filename_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filename_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filename_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filename_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filesize";
	create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filesize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filesize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filesize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_filesize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_height";
	create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_height_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_height_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_height_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_height_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_mimeType";
	create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_mimeType_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_mimeType_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_mimeType_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_mimeType_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_url";
	create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_url_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_url_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_url_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_url_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_width";
	create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
	delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
	read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
	update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_width_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_width_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_width_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
	__typename?: "MediaDocAccessFields_sizes_thumbnail_width_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_ThumbnailUrl = {
	__typename?: "MediaDocAccessFields_thumbnailURL";
	create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
	delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
	read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
	update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
	__typename?: "MediaDocAccessFields_thumbnailURL_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
	__typename?: "MediaDocAccessFields_thumbnailURL_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
	__typename?: "MediaDocAccessFields_thumbnailURL_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
	__typename?: "MediaDocAccessFields_thumbnailURL_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_UpdatedAt = {
	__typename?: "MediaDocAccessFields_updatedAt";
	create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
	__typename?: "MediaDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
	__typename?: "MediaDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
	__typename?: "MediaDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
	__typename?: "MediaDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Url = {
	__typename?: "MediaDocAccessFields_url";
	create?: Maybe<MediaDocAccessFields_Url_Create>;
	delete?: Maybe<MediaDocAccessFields_Url_Delete>;
	read?: Maybe<MediaDocAccessFields_Url_Read>;
	update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
	__typename?: "MediaDocAccessFields_url_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Url_Delete = {
	__typename?: "MediaDocAccessFields_url_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Url_Read = {
	__typename?: "MediaDocAccessFields_url_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Url_Update = {
	__typename?: "MediaDocAccessFields_url_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Width = {
	__typename?: "MediaDocAccessFields_width";
	create?: Maybe<MediaDocAccessFields_Width_Create>;
	delete?: Maybe<MediaDocAccessFields_Width_Delete>;
	read?: Maybe<MediaDocAccessFields_Width_Read>;
	update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
	__typename?: "MediaDocAccessFields_width_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Width_Delete = {
	__typename?: "MediaDocAccessFields_width_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Width_Read = {
	__typename?: "MediaDocAccessFields_width_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaDocAccessFields_Width_Update = {
	__typename?: "MediaDocAccessFields_width_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields = {
	__typename?: "MediaFields";
	alt?: Maybe<MediaFields_Alt>;
	createdAt?: Maybe<MediaFields_CreatedAt>;
	filename?: Maybe<MediaFields_Filename>;
	filesize?: Maybe<MediaFields_Filesize>;
	focalX?: Maybe<MediaFields_FocalX>;
	focalY?: Maybe<MediaFields_FocalY>;
	height?: Maybe<MediaFields_Height>;
	mimeType?: Maybe<MediaFields_MimeType>;
	sizes?: Maybe<MediaFields_Sizes>;
	thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
	updatedAt?: Maybe<MediaFields_UpdatedAt>;
	url?: Maybe<MediaFields_Url>;
	width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
	__typename?: "MediaFields_alt";
	create?: Maybe<MediaFields_Alt_Create>;
	delete?: Maybe<MediaFields_Alt_Delete>;
	read?: Maybe<MediaFields_Alt_Read>;
	update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
	__typename?: "MediaFields_alt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Alt_Delete = {
	__typename?: "MediaFields_alt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Alt_Read = {
	__typename?: "MediaFields_alt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Alt_Update = {
	__typename?: "MediaFields_alt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_CreatedAt = {
	__typename?: "MediaFields_createdAt";
	create?: Maybe<MediaFields_CreatedAt_Create>;
	delete?: Maybe<MediaFields_CreatedAt_Delete>;
	read?: Maybe<MediaFields_CreatedAt_Read>;
	update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
	__typename?: "MediaFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_CreatedAt_Delete = {
	__typename?: "MediaFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_CreatedAt_Read = {
	__typename?: "MediaFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_CreatedAt_Update = {
	__typename?: "MediaFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Filename = {
	__typename?: "MediaFields_filename";
	create?: Maybe<MediaFields_Filename_Create>;
	delete?: Maybe<MediaFields_Filename_Delete>;
	read?: Maybe<MediaFields_Filename_Read>;
	update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
	__typename?: "MediaFields_filename_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Filename_Delete = {
	__typename?: "MediaFields_filename_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Filename_Read = {
	__typename?: "MediaFields_filename_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Filename_Update = {
	__typename?: "MediaFields_filename_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Filesize = {
	__typename?: "MediaFields_filesize";
	create?: Maybe<MediaFields_Filesize_Create>;
	delete?: Maybe<MediaFields_Filesize_Delete>;
	read?: Maybe<MediaFields_Filesize_Read>;
	update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
	__typename?: "MediaFields_filesize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Filesize_Delete = {
	__typename?: "MediaFields_filesize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Filesize_Read = {
	__typename?: "MediaFields_filesize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Filesize_Update = {
	__typename?: "MediaFields_filesize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_FocalX = {
	__typename?: "MediaFields_focalX";
	create?: Maybe<MediaFields_FocalX_Create>;
	delete?: Maybe<MediaFields_FocalX_Delete>;
	read?: Maybe<MediaFields_FocalX_Read>;
	update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
	__typename?: "MediaFields_focalX_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_FocalX_Delete = {
	__typename?: "MediaFields_focalX_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_FocalX_Read = {
	__typename?: "MediaFields_focalX_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_FocalX_Update = {
	__typename?: "MediaFields_focalX_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_FocalY = {
	__typename?: "MediaFields_focalY";
	create?: Maybe<MediaFields_FocalY_Create>;
	delete?: Maybe<MediaFields_FocalY_Delete>;
	read?: Maybe<MediaFields_FocalY_Read>;
	update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
	__typename?: "MediaFields_focalY_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_FocalY_Delete = {
	__typename?: "MediaFields_focalY_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_FocalY_Read = {
	__typename?: "MediaFields_focalY_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_FocalY_Update = {
	__typename?: "MediaFields_focalY_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Height = {
	__typename?: "MediaFields_height";
	create?: Maybe<MediaFields_Height_Create>;
	delete?: Maybe<MediaFields_Height_Delete>;
	read?: Maybe<MediaFields_Height_Read>;
	update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
	__typename?: "MediaFields_height_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Height_Delete = {
	__typename?: "MediaFields_height_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Height_Read = {
	__typename?: "MediaFields_height_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Height_Update = {
	__typename?: "MediaFields_height_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_MimeType = {
	__typename?: "MediaFields_mimeType";
	create?: Maybe<MediaFields_MimeType_Create>;
	delete?: Maybe<MediaFields_MimeType_Delete>;
	read?: Maybe<MediaFields_MimeType_Read>;
	update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
	__typename?: "MediaFields_mimeType_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_MimeType_Delete = {
	__typename?: "MediaFields_mimeType_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_MimeType_Read = {
	__typename?: "MediaFields_mimeType_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_MimeType_Update = {
	__typename?: "MediaFields_mimeType_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes = {
	__typename?: "MediaFields_sizes";
	create?: Maybe<MediaFields_Sizes_Create>;
	delete?: Maybe<MediaFields_Sizes_Delete>;
	fields?: Maybe<MediaFields_Sizes_Fields>;
	read?: Maybe<MediaFields_Sizes_Read>;
	update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
	__typename?: "MediaFields_sizes_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Delete = {
	__typename?: "MediaFields_sizes_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Fields = {
	__typename?: "MediaFields_sizes_Fields";
	card?: Maybe<MediaFields_Sizes_Card>;
	default?: Maybe<MediaFields_Sizes_Default>;
	thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
	__typename?: "MediaFields_sizes_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Update = {
	__typename?: "MediaFields_sizes_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card = {
	__typename?: "MediaFields_sizes_card";
	create?: Maybe<MediaFields_Sizes_Card_Create>;
	delete?: Maybe<MediaFields_Sizes_Card_Delete>;
	fields?: Maybe<MediaFields_Sizes_Card_Fields>;
	read?: Maybe<MediaFields_Sizes_Card_Read>;
	update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
	__typename?: "MediaFields_sizes_card_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Delete = {
	__typename?: "MediaFields_sizes_card_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Fields = {
	__typename?: "MediaFields_sizes_card_Fields";
	filename?: Maybe<MediaFields_Sizes_Card_Filename>;
	filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
	height?: Maybe<MediaFields_Sizes_Card_Height>;
	mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
	url?: Maybe<MediaFields_Sizes_Card_Url>;
	width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
	__typename?: "MediaFields_sizes_card_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Update = {
	__typename?: "MediaFields_sizes_card_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Filename = {
	__typename?: "MediaFields_sizes_card_filename";
	create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
	delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
	read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
	update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
	__typename?: "MediaFields_sizes_card_filename_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
	__typename?: "MediaFields_sizes_card_filename_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Filename_Read = {
	__typename?: "MediaFields_sizes_card_filename_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Filename_Update = {
	__typename?: "MediaFields_sizes_card_filename_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Filesize = {
	__typename?: "MediaFields_sizes_card_filesize";
	create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
	delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
	read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
	update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
	__typename?: "MediaFields_sizes_card_filesize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
	__typename?: "MediaFields_sizes_card_filesize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
	__typename?: "MediaFields_sizes_card_filesize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
	__typename?: "MediaFields_sizes_card_filesize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Height = {
	__typename?: "MediaFields_sizes_card_height";
	create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
	delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
	read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
	update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
	__typename?: "MediaFields_sizes_card_height_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Height_Delete = {
	__typename?: "MediaFields_sizes_card_height_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Height_Read = {
	__typename?: "MediaFields_sizes_card_height_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Height_Update = {
	__typename?: "MediaFields_sizes_card_height_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_MimeType = {
	__typename?: "MediaFields_sizes_card_mimeType";
	create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
	delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
	read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
	update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
	__typename?: "MediaFields_sizes_card_mimeType_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
	__typename?: "MediaFields_sizes_card_mimeType_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
	__typename?: "MediaFields_sizes_card_mimeType_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
	__typename?: "MediaFields_sizes_card_mimeType_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Url = {
	__typename?: "MediaFields_sizes_card_url";
	create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
	delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
	read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
	update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
	__typename?: "MediaFields_sizes_card_url_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Url_Delete = {
	__typename?: "MediaFields_sizes_card_url_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Url_Read = {
	__typename?: "MediaFields_sizes_card_url_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Url_Update = {
	__typename?: "MediaFields_sizes_card_url_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Width = {
	__typename?: "MediaFields_sizes_card_width";
	create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
	delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
	read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
	update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
	__typename?: "MediaFields_sizes_card_width_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Width_Delete = {
	__typename?: "MediaFields_sizes_card_width_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Width_Read = {
	__typename?: "MediaFields_sizes_card_width_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Card_Width_Update = {
	__typename?: "MediaFields_sizes_card_width_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default = {
	__typename?: "MediaFields_sizes_default";
	create?: Maybe<MediaFields_Sizes_Default_Create>;
	delete?: Maybe<MediaFields_Sizes_Default_Delete>;
	fields?: Maybe<MediaFields_Sizes_Default_Fields>;
	read?: Maybe<MediaFields_Sizes_Default_Read>;
	update?: Maybe<MediaFields_Sizes_Default_Update>;
};

export type MediaFields_Sizes_Default_Create = {
	__typename?: "MediaFields_sizes_default_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Delete = {
	__typename?: "MediaFields_sizes_default_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Fields = {
	__typename?: "MediaFields_sizes_default_Fields";
	filename?: Maybe<MediaFields_Sizes_Default_Filename>;
	filesize?: Maybe<MediaFields_Sizes_Default_Filesize>;
	height?: Maybe<MediaFields_Sizes_Default_Height>;
	mimeType?: Maybe<MediaFields_Sizes_Default_MimeType>;
	url?: Maybe<MediaFields_Sizes_Default_Url>;
	width?: Maybe<MediaFields_Sizes_Default_Width>;
};

export type MediaFields_Sizes_Default_Read = {
	__typename?: "MediaFields_sizes_default_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Update = {
	__typename?: "MediaFields_sizes_default_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Filename = {
	__typename?: "MediaFields_sizes_default_filename";
	create?: Maybe<MediaFields_Sizes_Default_Filename_Create>;
	delete?: Maybe<MediaFields_Sizes_Default_Filename_Delete>;
	read?: Maybe<MediaFields_Sizes_Default_Filename_Read>;
	update?: Maybe<MediaFields_Sizes_Default_Filename_Update>;
};

export type MediaFields_Sizes_Default_Filename_Create = {
	__typename?: "MediaFields_sizes_default_filename_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Filename_Delete = {
	__typename?: "MediaFields_sizes_default_filename_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Filename_Read = {
	__typename?: "MediaFields_sizes_default_filename_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Filename_Update = {
	__typename?: "MediaFields_sizes_default_filename_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Filesize = {
	__typename?: "MediaFields_sizes_default_filesize";
	create?: Maybe<MediaFields_Sizes_Default_Filesize_Create>;
	delete?: Maybe<MediaFields_Sizes_Default_Filesize_Delete>;
	read?: Maybe<MediaFields_Sizes_Default_Filesize_Read>;
	update?: Maybe<MediaFields_Sizes_Default_Filesize_Update>;
};

export type MediaFields_Sizes_Default_Filesize_Create = {
	__typename?: "MediaFields_sizes_default_filesize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Filesize_Delete = {
	__typename?: "MediaFields_sizes_default_filesize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Filesize_Read = {
	__typename?: "MediaFields_sizes_default_filesize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Filesize_Update = {
	__typename?: "MediaFields_sizes_default_filesize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Height = {
	__typename?: "MediaFields_sizes_default_height";
	create?: Maybe<MediaFields_Sizes_Default_Height_Create>;
	delete?: Maybe<MediaFields_Sizes_Default_Height_Delete>;
	read?: Maybe<MediaFields_Sizes_Default_Height_Read>;
	update?: Maybe<MediaFields_Sizes_Default_Height_Update>;
};

export type MediaFields_Sizes_Default_Height_Create = {
	__typename?: "MediaFields_sizes_default_height_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Height_Delete = {
	__typename?: "MediaFields_sizes_default_height_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Height_Read = {
	__typename?: "MediaFields_sizes_default_height_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Height_Update = {
	__typename?: "MediaFields_sizes_default_height_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_MimeType = {
	__typename?: "MediaFields_sizes_default_mimeType";
	create?: Maybe<MediaFields_Sizes_Default_MimeType_Create>;
	delete?: Maybe<MediaFields_Sizes_Default_MimeType_Delete>;
	read?: Maybe<MediaFields_Sizes_Default_MimeType_Read>;
	update?: Maybe<MediaFields_Sizes_Default_MimeType_Update>;
};

export type MediaFields_Sizes_Default_MimeType_Create = {
	__typename?: "MediaFields_sizes_default_mimeType_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_MimeType_Delete = {
	__typename?: "MediaFields_sizes_default_mimeType_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_MimeType_Read = {
	__typename?: "MediaFields_sizes_default_mimeType_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_MimeType_Update = {
	__typename?: "MediaFields_sizes_default_mimeType_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Url = {
	__typename?: "MediaFields_sizes_default_url";
	create?: Maybe<MediaFields_Sizes_Default_Url_Create>;
	delete?: Maybe<MediaFields_Sizes_Default_Url_Delete>;
	read?: Maybe<MediaFields_Sizes_Default_Url_Read>;
	update?: Maybe<MediaFields_Sizes_Default_Url_Update>;
};

export type MediaFields_Sizes_Default_Url_Create = {
	__typename?: "MediaFields_sizes_default_url_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Url_Delete = {
	__typename?: "MediaFields_sizes_default_url_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Url_Read = {
	__typename?: "MediaFields_sizes_default_url_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Url_Update = {
	__typename?: "MediaFields_sizes_default_url_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Width = {
	__typename?: "MediaFields_sizes_default_width";
	create?: Maybe<MediaFields_Sizes_Default_Width_Create>;
	delete?: Maybe<MediaFields_Sizes_Default_Width_Delete>;
	read?: Maybe<MediaFields_Sizes_Default_Width_Read>;
	update?: Maybe<MediaFields_Sizes_Default_Width_Update>;
};

export type MediaFields_Sizes_Default_Width_Create = {
	__typename?: "MediaFields_sizes_default_width_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Width_Delete = {
	__typename?: "MediaFields_sizes_default_width_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Width_Read = {
	__typename?: "MediaFields_sizes_default_width_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Default_Width_Update = {
	__typename?: "MediaFields_sizes_default_width_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail = {
	__typename?: "MediaFields_sizes_thumbnail";
	create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
	delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
	fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
	read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
	update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
	__typename?: "MediaFields_sizes_thumbnail_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
	__typename?: "MediaFields_sizes_thumbnail_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
	__typename?: "MediaFields_sizes_thumbnail_Fields";
	filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
	filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
	height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
	mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
	url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
	width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
	__typename?: "MediaFields_sizes_thumbnail_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Update = {
	__typename?: "MediaFields_sizes_thumbnail_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
	__typename?: "MediaFields_sizes_thumbnail_filename";
	create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
	delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
	read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
	update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
	__typename?: "MediaFields_sizes_thumbnail_filename_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
	__typename?: "MediaFields_sizes_thumbnail_filename_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
	__typename?: "MediaFields_sizes_thumbnail_filename_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
	__typename?: "MediaFields_sizes_thumbnail_filename_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
	__typename?: "MediaFields_sizes_thumbnail_filesize";
	create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
	delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
	read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
	update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
	__typename?: "MediaFields_sizes_thumbnail_filesize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
	__typename?: "MediaFields_sizes_thumbnail_filesize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
	__typename?: "MediaFields_sizes_thumbnail_filesize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
	__typename?: "MediaFields_sizes_thumbnail_filesize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Height = {
	__typename?: "MediaFields_sizes_thumbnail_height";
	create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
	delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
	read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
	update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
	__typename?: "MediaFields_sizes_thumbnail_height_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
	__typename?: "MediaFields_sizes_thumbnail_height_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
	__typename?: "MediaFields_sizes_thumbnail_height_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
	__typename?: "MediaFields_sizes_thumbnail_height_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
	__typename?: "MediaFields_sizes_thumbnail_mimeType";
	create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
	delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
	read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
	update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
	__typename?: "MediaFields_sizes_thumbnail_mimeType_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
	__typename?: "MediaFields_sizes_thumbnail_mimeType_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
	__typename?: "MediaFields_sizes_thumbnail_mimeType_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
	__typename?: "MediaFields_sizes_thumbnail_mimeType_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Url = {
	__typename?: "MediaFields_sizes_thumbnail_url";
	create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
	delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
	read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
	update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
	__typename?: "MediaFields_sizes_thumbnail_url_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
	__typename?: "MediaFields_sizes_thumbnail_url_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
	__typename?: "MediaFields_sizes_thumbnail_url_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
	__typename?: "MediaFields_sizes_thumbnail_url_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Width = {
	__typename?: "MediaFields_sizes_thumbnail_width";
	create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
	delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
	read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
	update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
	__typename?: "MediaFields_sizes_thumbnail_width_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
	__typename?: "MediaFields_sizes_thumbnail_width_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
	__typename?: "MediaFields_sizes_thumbnail_width_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
	__typename?: "MediaFields_sizes_thumbnail_width_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_ThumbnailUrl = {
	__typename?: "MediaFields_thumbnailURL";
	create?: Maybe<MediaFields_ThumbnailUrl_Create>;
	delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
	read?: Maybe<MediaFields_ThumbnailUrl_Read>;
	update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
	__typename?: "MediaFields_thumbnailURL_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_ThumbnailUrl_Delete = {
	__typename?: "MediaFields_thumbnailURL_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_ThumbnailUrl_Read = {
	__typename?: "MediaFields_thumbnailURL_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_ThumbnailUrl_Update = {
	__typename?: "MediaFields_thumbnailURL_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_UpdatedAt = {
	__typename?: "MediaFields_updatedAt";
	create?: Maybe<MediaFields_UpdatedAt_Create>;
	delete?: Maybe<MediaFields_UpdatedAt_Delete>;
	read?: Maybe<MediaFields_UpdatedAt_Read>;
	update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
	__typename?: "MediaFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_UpdatedAt_Delete = {
	__typename?: "MediaFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_UpdatedAt_Read = {
	__typename?: "MediaFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_UpdatedAt_Update = {
	__typename?: "MediaFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Url = {
	__typename?: "MediaFields_url";
	create?: Maybe<MediaFields_Url_Create>;
	delete?: Maybe<MediaFields_Url_Delete>;
	read?: Maybe<MediaFields_Url_Read>;
	update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
	__typename?: "MediaFields_url_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Url_Delete = {
	__typename?: "MediaFields_url_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Url_Read = {
	__typename?: "MediaFields_url_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Url_Update = {
	__typename?: "MediaFields_url_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Width = {
	__typename?: "MediaFields_width";
	create?: Maybe<MediaFields_Width_Create>;
	delete?: Maybe<MediaFields_Width_Delete>;
	read?: Maybe<MediaFields_Width_Read>;
	update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
	__typename?: "MediaFields_width_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Width_Delete = {
	__typename?: "MediaFields_width_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Width_Read = {
	__typename?: "MediaFields_width_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MediaFields_Width_Update = {
	__typename?: "MediaFields_width_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MediaReadAccess = {
	__typename?: "MediaReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MediaReadDocAccess = {
	__typename?: "MediaReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MediaUpdateAccess = {
	__typename?: "MediaUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MediaUpdateDocAccess = {
	__typename?: "MediaUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Media_Sizes = {
	__typename?: "Media_Sizes";
	card?: Maybe<Media_Sizes_Card>;
	default?: Maybe<Media_Sizes_Default>;
	thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Card = {
	__typename?: "Media_Sizes_Card";
	filename?: Maybe<Scalars["String"]["output"]>;
	filesize?: Maybe<Scalars["Float"]["output"]>;
	height?: Maybe<Scalars["Float"]["output"]>;
	mimeType?: Maybe<Scalars["String"]["output"]>;
	url?: Maybe<Scalars["String"]["output"]>;
	width?: Maybe<Scalars["Float"]["output"]>;
};

export type Media_Sizes_Default = {
	__typename?: "Media_Sizes_Default";
	filename?: Maybe<Scalars["String"]["output"]>;
	filesize?: Maybe<Scalars["Float"]["output"]>;
	height?: Maybe<Scalars["Float"]["output"]>;
	mimeType?: Maybe<Scalars["String"]["output"]>;
	url?: Maybe<Scalars["String"]["output"]>;
	width?: Maybe<Scalars["Float"]["output"]>;
};

export type Media_Sizes_Thumbnail = {
	__typename?: "Media_Sizes_Thumbnail";
	filename?: Maybe<Scalars["String"]["output"]>;
	filesize?: Maybe<Scalars["Float"]["output"]>;
	height?: Maybe<Scalars["Float"]["output"]>;
	mimeType?: Maybe<Scalars["String"]["output"]>;
	url?: Maybe<Scalars["String"]["output"]>;
	width?: Maybe<Scalars["Float"]["output"]>;
};

export type Media_Alt_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Media_Filename_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Filesize_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_FocalX_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_FocalY_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Height_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Media_MimeType_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Sizes__Card__Height_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Sizes__Card__MimeType_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Card__Url_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Card__Width_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Sizes__Default__Filename_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Default__Filesize_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Sizes__Default__Height_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Sizes__Default__MimeType_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Default__Url_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Default__Width_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Media_ThumbnailUrl_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Media_Url_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Media_Where = {
	AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
	alt?: InputMaybe<Media_Alt_Operator>;
	createdAt?: InputMaybe<Media_CreatedAt_Operator>;
	filename?: InputMaybe<Media_Filename_Operator>;
	filesize?: InputMaybe<Media_Filesize_Operator>;
	focalX?: InputMaybe<Media_FocalX_Operator>;
	focalY?: InputMaybe<Media_FocalY_Operator>;
	height?: InputMaybe<Media_Height_Operator>;
	id?: InputMaybe<Media_Id_Operator>;
	mimeType?: InputMaybe<Media_MimeType_Operator>;
	sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
	sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
	sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
	sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
	sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
	sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
	sizes__default__filename?: InputMaybe<Media_Sizes__Default__Filename_Operator>;
	sizes__default__filesize?: InputMaybe<Media_Sizes__Default__Filesize_Operator>;
	sizes__default__height?: InputMaybe<Media_Sizes__Default__Height_Operator>;
	sizes__default__mimeType?: InputMaybe<Media_Sizes__Default__MimeType_Operator>;
	sizes__default__url?: InputMaybe<Media_Sizes__Default__Url_Operator>;
	sizes__default__width?: InputMaybe<Media_Sizes__Default__Width_Operator>;
	sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
	sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
	sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
	sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
	sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
	sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
	thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
	updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
	url?: InputMaybe<Media_Url_Operator>;
	width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
	alt?: InputMaybe<Media_Alt_Operator>;
	createdAt?: InputMaybe<Media_CreatedAt_Operator>;
	filename?: InputMaybe<Media_Filename_Operator>;
	filesize?: InputMaybe<Media_Filesize_Operator>;
	focalX?: InputMaybe<Media_FocalX_Operator>;
	focalY?: InputMaybe<Media_FocalY_Operator>;
	height?: InputMaybe<Media_Height_Operator>;
	id?: InputMaybe<Media_Id_Operator>;
	mimeType?: InputMaybe<Media_MimeType_Operator>;
	sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
	sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
	sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
	sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
	sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
	sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
	sizes__default__filename?: InputMaybe<Media_Sizes__Default__Filename_Operator>;
	sizes__default__filesize?: InputMaybe<Media_Sizes__Default__Filesize_Operator>;
	sizes__default__height?: InputMaybe<Media_Sizes__Default__Height_Operator>;
	sizes__default__mimeType?: InputMaybe<Media_Sizes__Default__MimeType_Operator>;
	sizes__default__url?: InputMaybe<Media_Sizes__Default__Url_Operator>;
	sizes__default__width?: InputMaybe<Media_Sizes__Default__Width_Operator>;
	sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
	sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
	sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
	sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
	sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
	sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
	thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
	updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
	url?: InputMaybe<Media_Url_Operator>;
	width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
	alt?: InputMaybe<Media_Alt_Operator>;
	createdAt?: InputMaybe<Media_CreatedAt_Operator>;
	filename?: InputMaybe<Media_Filename_Operator>;
	filesize?: InputMaybe<Media_Filesize_Operator>;
	focalX?: InputMaybe<Media_FocalX_Operator>;
	focalY?: InputMaybe<Media_FocalY_Operator>;
	height?: InputMaybe<Media_Height_Operator>;
	id?: InputMaybe<Media_Id_Operator>;
	mimeType?: InputMaybe<Media_MimeType_Operator>;
	sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
	sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
	sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
	sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
	sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
	sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
	sizes__default__filename?: InputMaybe<Media_Sizes__Default__Filename_Operator>;
	sizes__default__filesize?: InputMaybe<Media_Sizes__Default__Filesize_Operator>;
	sizes__default__height?: InputMaybe<Media_Sizes__Default__Height_Operator>;
	sizes__default__mimeType?: InputMaybe<Media_Sizes__Default__MimeType_Operator>;
	sizes__default__url?: InputMaybe<Media_Sizes__Default__Url_Operator>;
	sizes__default__width?: InputMaybe<Media_Sizes__Default__Width_Operator>;
	sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
	sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
	sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
	sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
	sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
	sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
	thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
	updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
	url?: InputMaybe<Media_Url_Operator>;
	width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MinimalDeposit = {
	__typename?: "MinimalDeposit";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	id: Scalars["Int"]["output"];
	minimal_sum?: Maybe<Scalars["Float"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type MinimalDepositCreateAccess = {
	__typename?: "MinimalDepositCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MinimalDepositCreateDocAccess = {
	__typename?: "MinimalDepositCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MinimalDepositDeleteAccess = {
	__typename?: "MinimalDepositDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MinimalDepositDeleteDocAccess = {
	__typename?: "MinimalDepositDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MinimalDepositDocAccessFields = {
	__typename?: "MinimalDepositDocAccessFields";
	createdAt?: Maybe<MinimalDepositDocAccessFields_CreatedAt>;
	minimal_sum?: Maybe<MinimalDepositDocAccessFields_Minimal_Sum>;
	updatedAt?: Maybe<MinimalDepositDocAccessFields_UpdatedAt>;
};

export type MinimalDepositDocAccessFields_CreatedAt = {
	__typename?: "MinimalDepositDocAccessFields_createdAt";
	create?: Maybe<MinimalDepositDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<MinimalDepositDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<MinimalDepositDocAccessFields_CreatedAt_Read>;
	update?: Maybe<MinimalDepositDocAccessFields_CreatedAt_Update>;
};

export type MinimalDepositDocAccessFields_CreatedAt_Create = {
	__typename?: "MinimalDepositDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_CreatedAt_Delete = {
	__typename?: "MinimalDepositDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_CreatedAt_Read = {
	__typename?: "MinimalDepositDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_CreatedAt_Update = {
	__typename?: "MinimalDepositDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_Minimal_Sum = {
	__typename?: "MinimalDepositDocAccessFields_minimal_sum";
	create?: Maybe<MinimalDepositDocAccessFields_Minimal_Sum_Create>;
	delete?: Maybe<MinimalDepositDocAccessFields_Minimal_Sum_Delete>;
	read?: Maybe<MinimalDepositDocAccessFields_Minimal_Sum_Read>;
	update?: Maybe<MinimalDepositDocAccessFields_Minimal_Sum_Update>;
};

export type MinimalDepositDocAccessFields_Minimal_Sum_Create = {
	__typename?: "MinimalDepositDocAccessFields_minimal_sum_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_Minimal_Sum_Delete = {
	__typename?: "MinimalDepositDocAccessFields_minimal_sum_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_Minimal_Sum_Read = {
	__typename?: "MinimalDepositDocAccessFields_minimal_sum_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_Minimal_Sum_Update = {
	__typename?: "MinimalDepositDocAccessFields_minimal_sum_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_UpdatedAt = {
	__typename?: "MinimalDepositDocAccessFields_updatedAt";
	create?: Maybe<MinimalDepositDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<MinimalDepositDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<MinimalDepositDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<MinimalDepositDocAccessFields_UpdatedAt_Update>;
};

export type MinimalDepositDocAccessFields_UpdatedAt_Create = {
	__typename?: "MinimalDepositDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_UpdatedAt_Delete = {
	__typename?: "MinimalDepositDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_UpdatedAt_Read = {
	__typename?: "MinimalDepositDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositDocAccessFields_UpdatedAt_Update = {
	__typename?: "MinimalDepositDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields = {
	__typename?: "MinimalDepositFields";
	createdAt?: Maybe<MinimalDepositFields_CreatedAt>;
	minimal_sum?: Maybe<MinimalDepositFields_Minimal_Sum>;
	updatedAt?: Maybe<MinimalDepositFields_UpdatedAt>;
};

export type MinimalDepositFields_CreatedAt = {
	__typename?: "MinimalDepositFields_createdAt";
	create?: Maybe<MinimalDepositFields_CreatedAt_Create>;
	delete?: Maybe<MinimalDepositFields_CreatedAt_Delete>;
	read?: Maybe<MinimalDepositFields_CreatedAt_Read>;
	update?: Maybe<MinimalDepositFields_CreatedAt_Update>;
};

export type MinimalDepositFields_CreatedAt_Create = {
	__typename?: "MinimalDepositFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_CreatedAt_Delete = {
	__typename?: "MinimalDepositFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_CreatedAt_Read = {
	__typename?: "MinimalDepositFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_CreatedAt_Update = {
	__typename?: "MinimalDepositFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_Minimal_Sum = {
	__typename?: "MinimalDepositFields_minimal_sum";
	create?: Maybe<MinimalDepositFields_Minimal_Sum_Create>;
	delete?: Maybe<MinimalDepositFields_Minimal_Sum_Delete>;
	read?: Maybe<MinimalDepositFields_Minimal_Sum_Read>;
	update?: Maybe<MinimalDepositFields_Minimal_Sum_Update>;
};

export type MinimalDepositFields_Minimal_Sum_Create = {
	__typename?: "MinimalDepositFields_minimal_sum_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_Minimal_Sum_Delete = {
	__typename?: "MinimalDepositFields_minimal_sum_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_Minimal_Sum_Read = {
	__typename?: "MinimalDepositFields_minimal_sum_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_Minimal_Sum_Update = {
	__typename?: "MinimalDepositFields_minimal_sum_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_UpdatedAt = {
	__typename?: "MinimalDepositFields_updatedAt";
	create?: Maybe<MinimalDepositFields_UpdatedAt_Create>;
	delete?: Maybe<MinimalDepositFields_UpdatedAt_Delete>;
	read?: Maybe<MinimalDepositFields_UpdatedAt_Read>;
	update?: Maybe<MinimalDepositFields_UpdatedAt_Update>;
};

export type MinimalDepositFields_UpdatedAt_Create = {
	__typename?: "MinimalDepositFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_UpdatedAt_Delete = {
	__typename?: "MinimalDepositFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_UpdatedAt_Read = {
	__typename?: "MinimalDepositFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositFields_UpdatedAt_Update = {
	__typename?: "MinimalDepositFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type MinimalDepositReadAccess = {
	__typename?: "MinimalDepositReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MinimalDepositReadDocAccess = {
	__typename?: "MinimalDepositReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MinimalDepositUpdateAccess = {
	__typename?: "MinimalDepositUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MinimalDepositUpdateDocAccess = {
	__typename?: "MinimalDepositUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type MinimalDeposit_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MinimalDeposit_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MinimalDeposit_Minimal_Sum_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MinimalDeposit_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MinimalDeposit_Where = {
	AND?: InputMaybe<Array<InputMaybe<MinimalDeposit_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<MinimalDeposit_Where_Or>>>;
	createdAt?: InputMaybe<MinimalDeposit_CreatedAt_Operator>;
	id?: InputMaybe<MinimalDeposit_Id_Operator>;
	minimal_sum?: InputMaybe<MinimalDeposit_Minimal_Sum_Operator>;
	updatedAt?: InputMaybe<MinimalDeposit_UpdatedAt_Operator>;
};

export type MinimalDeposit_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<MinimalDeposit_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<MinimalDeposit_Where_Or>>>;
	createdAt?: InputMaybe<MinimalDeposit_CreatedAt_Operator>;
	id?: InputMaybe<MinimalDeposit_Id_Operator>;
	minimal_sum?: InputMaybe<MinimalDeposit_Minimal_Sum_Operator>;
	updatedAt?: InputMaybe<MinimalDeposit_UpdatedAt_Operator>;
};

export type MinimalDeposit_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<MinimalDeposit_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<MinimalDeposit_Where_Or>>>;
	createdAt?: InputMaybe<MinimalDeposit_CreatedAt_Operator>;
	id?: InputMaybe<MinimalDeposit_Id_Operator>;
	minimal_sum?: InputMaybe<MinimalDeposit_Minimal_Sum_Operator>;
	updatedAt?: InputMaybe<MinimalDeposit_UpdatedAt_Operator>;
};

export type MinimalDeposits = {
	__typename?: "MinimalDeposits";
	docs?: Maybe<Array<Maybe<MinimalDeposit>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type Mutation = {
	__typename?: "Mutation";
	changeAics: Scalars["Boolean"]["output"];
	changePassword: Scalars["Boolean"]["output"];
	changeSettings: Scalars["Boolean"]["output"];
	changeTime: Scalars["Boolean"]["output"];
	changeWalletAddress: Scalars["Boolean"]["output"];
	cofirmRecoveryPassword?: Maybe<Recovery_Confirmation>;
	completeDeposit?: Maybe<Result_Of_Check>;
	completeWithdraw: Scalars["Boolean"]["output"];
	confirmDeposit: Scalars["Boolean"]["output"];
	contactUs: Scalars["Boolean"]["output"];
	createAbout?: Maybe<About>;
	createDeposit?: Maybe<Deposit>;
	createExchangeRate?: Maybe<ExchangeRate>;
	createFeedback?: Maybe<Feedback>;
	createLeaderboard?: Maybe<Leaderboard>;
	createMedia?: Maybe<Media>;
	createMinimalDeposit?: Maybe<MinimalDeposit>;
	createPayloadPreference?: Maybe<PayloadPreference>;
	createPlayer?: Maybe<Player>;
	createSaved_transaction?: Maybe<Saved_Transaction>;
	createTransaction?: Maybe<Transaction>;
	createUser?: Maybe<User>;
	createWallet?: Maybe<Wallet>;
	createWithdraw: Scalars["Boolean"]["output"];
	createWithdrawal?: Maybe<Withdrawal>;
	deleteAbout?: Maybe<About>;
	deleteDeposit?: Maybe<Deposit>;
	deleteExchangeRate?: Maybe<ExchangeRate>;
	deleteFeedback?: Maybe<Feedback>;
	deleteLeaderboard?: Maybe<Leaderboard>;
	deleteMedia?: Maybe<Media>;
	deleteMinimalDeposit?: Maybe<MinimalDeposit>;
	deletePayloadPreference?: Maybe<PayloadPreference>;
	deletePlayer?: Maybe<Player>;
	deleteSaved_transaction?: Maybe<Saved_Transaction>;
	deleteTransaction?: Maybe<Transaction>;
	deleteUser?: Maybe<User>;
	deleteWallet?: Maybe<Wallet>;
	deleteWithdrawal?: Maybe<Withdrawal>;
	duplicateAbout?: Maybe<About>;
	duplicateDeposit?: Maybe<Deposit>;
	duplicateExchangeRate?: Maybe<ExchangeRate>;
	duplicateFeedback?: Maybe<Feedback>;
	duplicateLeaderboard?: Maybe<Leaderboard>;
	duplicateMinimalDeposit?: Maybe<MinimalDeposit>;
	duplicatePayloadPreference?: Maybe<PayloadPreference>;
	duplicatePlayer?: Maybe<Player>;
	duplicateSaved_transaction?: Maybe<Saved_Transaction>;
	duplicateTransaction?: Maybe<Transaction>;
	duplicateWallet?: Maybe<Wallet>;
	duplicateWithdrawal?: Maybe<Withdrawal>;
	exchange?: Maybe<Status>;
	forgotPasswordUser: Scalars["Boolean"]["output"];
	freeCoin?: Maybe<Free_Coins_Winning>;
	getFreeHat?: Maybe<Get_Free_Hat>;
	getWinningGuess?: Maybe<Guess_Status>;
	loginUser?: Maybe<UsersLoginResult>;
	logoutUser?: Maybe<Scalars["String"]["output"]>;
	playGuess?: Maybe<Game>;
	playSapper: Scalars["Boolean"]["output"];
	playScreen: Scalars["Float"]["output"];
	recoveryPassword: Scalars["Boolean"]["output"];
	refreshTokenUser?: Maybe<UsersRefreshedUser>;
	registration?: Maybe<Player>;
	resetCode: Scalars["Boolean"]["output"];
	resetPasswordUser?: Maybe<UsersResetPassword>;
	sendWithdrawCode: Scalars["Boolean"]["output"];
	setPassword: Scalars["Boolean"]["output"];
	startPlaySapper: Scalars["Boolean"]["output"];
	unlockUser: Scalars["Boolean"]["output"];
	updateAbout?: Maybe<About>;
	updateDeposit?: Maybe<Deposit>;
	updateExchangeRate?: Maybe<ExchangeRate>;
	updateFeedback?: Maybe<Feedback>;
	updateLeaderboard?: Maybe<Leaderboard>;
	updateMedia?: Maybe<Media>;
	updateMinimalDeposit?: Maybe<MinimalDeposit>;
	updatePayloadPreference?: Maybe<PayloadPreference>;
	updatePlayer?: Maybe<Player>;
	updateSaved_transaction?: Maybe<Saved_Transaction>;
	updateTransaction?: Maybe<Transaction>;
	updateUser?: Maybe<User>;
	updateUserBalance: Scalars["Boolean"]["output"];
	updateWallet?: Maybe<Wallet>;
	updateWithdrawal?: Maybe<Withdrawal>;
	verifyCode: Scalars["Boolean"]["output"];
	verifyEmail: Scalars["Boolean"]["output"];
	verifyEmailUser?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MutationChangePasswordArgs = {
	new_password: Scalars["String"]["input"];
	old_password: Scalars["String"]["input"];
};

export type MutationChangeSettingsArgs = {
	email: Scalars["Boolean"]["input"];
	two_factor: Scalars["Boolean"]["input"];
};

export type MutationChangeTimeArgs = {
	new_date?: InputMaybe<Scalars["String"]["input"]>;
	withdraw_id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationChangeWalletAddressArgs = {
	wallet_address?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCofirmRecoveryPasswordArgs = {
	code?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCompleteWithdrawArgs = {
	id?: InputMaybe<Scalars["Int"]["input"]>;
	status_code?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationContactUsArgs = {
	email?: InputMaybe<Scalars["String"]["input"]>;
	message?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateAboutArgs = {
	data: MutationAboutInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateDepositArgs = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationCreateExchangeRateArgs = {
	data: MutationExchangeRateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateFeedbackArgs = {
	data: MutationFeedbackInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateLeaderboardArgs = {
	data: MutationLeaderboardInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateMediaArgs = {
	data: MutationMediaInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateMinimalDepositArgs = {
	data: MutationMinimalDepositInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreatePayloadPreferenceArgs = {
	data: MutationPayloadPreferenceInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreatePlayerArgs = {
	data: MutationPlayerInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateSaved_TransactionArgs = {
	data: MutationSaved_TransactionInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateTransactionArgs = {
	data: MutationTransactionInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateUserArgs = {
	data: MutationUserInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateWalletArgs = {
	data: MutationWalletInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateWithdrawArgs = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	code?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateWithdrawalArgs = {
	data: MutationWithdrawalInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationDeleteAboutArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteDepositArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteExchangeRateArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteFeedbackArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteLeaderboardArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteMediaArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteMinimalDepositArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeletePayloadPreferenceArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeletePlayerArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteSaved_TransactionArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteTransactionArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteUserArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteWalletArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDeleteWithdrawalArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateAboutArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateDepositArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateExchangeRateArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateFeedbackArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateLeaderboardArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateMinimalDepositArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicatePayloadPreferenceArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicatePlayerArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateSaved_TransactionArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateTransactionArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateWalletArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationDuplicateWithdrawalArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationExchangeArgs = {
	aics: Scalars["Float"]["input"];
	usdt: Scalars["Float"]["input"];
};

export type MutationForgotPasswordUserArgs = {
	disableEmail?: InputMaybe<Scalars["Boolean"]["input"]>;
	email: Scalars["String"]["input"];
	expiration?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationGetWinningGuessArgs = {
	bet: Scalars["Float"]["input"];
	number: Scalars["Float"]["input"];
};

export type MutationLoginUserArgs = {
	email: Scalars["String"]["input"];
	password?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationPlayGuessArgs = {
	bet: Scalars["Int"]["input"];
	numbers?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	time: Scalars["Int"]["input"];
};

export type MutationPlaySapperArgs = {
	bet: Scalars["Float"]["input"];
	hat: Scalars["Float"]["input"];
	time: Scalars["Int"]["input"];
};

export type MutationPlayScreenArgs = {
	score: Scalars["Float"]["input"];
};

export type MutationRecoveryPasswordArgs = {
	email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationRegistrationArgs = {
	country?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	login?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	refferal_code?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationResetCodeArgs = {
	confirmation?: InputMaybe<Scalars["Boolean"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationResetPasswordUserArgs = {
	password?: InputMaybe<Scalars["String"]["input"]>;
	token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSetPasswordArgs = {
	password?: InputMaybe<Scalars["String"]["input"]>;
	recovery_token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationStartPlaySapperArgs = {
	bet?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationUnlockUserArgs = {
	email: Scalars["String"]["input"];
};

export type MutationUpdateAboutArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationAboutUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateDepositArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationDepositUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateExchangeRateArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationExchangeRateUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateFeedbackArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationFeedbackUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateLeaderboardArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationLeaderboardUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateMediaArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationMediaUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateMinimalDepositArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationMinimalDepositUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdatePayloadPreferenceArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationPayloadPreferenceUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdatePlayerArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationPlayerUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateSaved_TransactionArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationSaved_TransactionUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateTransactionArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationTransactionUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateUserArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationUserUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateWalletArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationWalletUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationUpdateWithdrawalArgs = {
	autosave?: InputMaybe<Scalars["Boolean"]["input"]>;
	data: MutationWithdrawalUpdateInput;
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type MutationVerifyCodeArgs = {
	code?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationVerifyEmailArgs = {
	code?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	need?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationVerifyEmailUserArgs = {
	token?: InputMaybe<Scalars["String"]["input"]>;
};

export type PayloadPreference = {
	__typename?: "PayloadPreference";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	id: Scalars["Int"]["output"];
	key?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	user: PayloadPreference_User_Relationship;
	value?: Maybe<Scalars["JSON"]["output"]>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
	relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
	value?: InputMaybe<Scalars["JSON"]["input"]>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
	Users = "users",
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
	relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
	value?: InputMaybe<Scalars["JSON"]["input"]>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
	Users = "users",
}

export enum PayloadPreference_User_RelationTo {
	Users = "users",
}

export type PayloadPreference_User_Relationship = {
	__typename?: "PayloadPreference_User_Relationship";
	relationTo?: Maybe<PayloadPreference_User_RelationTo>;
	value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PayloadPreference_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PayloadPreference_Key_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PayloadPreference_User_Relation = {
	relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
	value?: InputMaybe<Scalars["JSON"]["input"]>;
};

export enum PayloadPreference_User_Relation_RelationTo {
	Users = "users",
}

export type PayloadPreference_Value_Operator = {
	contains?: InputMaybe<Scalars["JSON"]["input"]>;
	equals?: InputMaybe<Scalars["JSON"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	intersects?: InputMaybe<Scalars["JSON"]["input"]>;
	like?: InputMaybe<Scalars["JSON"]["input"]>;
	not_equals?: InputMaybe<Scalars["JSON"]["input"]>;
	within?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type PayloadPreference_Where = {
	AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
	createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
	id?: InputMaybe<PayloadPreference_Id_Operator>;
	key?: InputMaybe<PayloadPreference_Key_Operator>;
	updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
	user?: InputMaybe<PayloadPreference_User_Relation>;
	value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
	createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
	id?: InputMaybe<PayloadPreference_Id_Operator>;
	key?: InputMaybe<PayloadPreference_Key_Operator>;
	updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
	user?: InputMaybe<PayloadPreference_User_Relation>;
	value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
	createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
	id?: InputMaybe<PayloadPreference_Id_Operator>;
	key?: InputMaybe<PayloadPreference_Key_Operator>;
	updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
	user?: InputMaybe<PayloadPreference_User_Relation>;
	value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
	__typename?: "PayloadPreferences";
	docs?: Maybe<Array<Maybe<PayloadPreference>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type PayloadPreferencesCreateAccess = {
	__typename?: "PayloadPreferencesCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PayloadPreferencesCreateDocAccess = {
	__typename?: "PayloadPreferencesCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PayloadPreferencesDeleteAccess = {
	__typename?: "PayloadPreferencesDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PayloadPreferencesDeleteDocAccess = {
	__typename?: "PayloadPreferencesDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PayloadPreferencesDocAccessFields = {
	__typename?: "PayloadPreferencesDocAccessFields";
	createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
	key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
	updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
	user?: Maybe<PayloadPreferencesDocAccessFields_User>;
	value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
	__typename?: "PayloadPreferencesDocAccessFields_createdAt";
	create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
	update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
	__typename?: "PayloadPreferencesDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
	__typename?: "PayloadPreferencesDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
	__typename?: "PayloadPreferencesDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
	__typename?: "PayloadPreferencesDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_Key = {
	__typename?: "PayloadPreferencesDocAccessFields_key";
	create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
	delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
	read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
	update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
	__typename?: "PayloadPreferencesDocAccessFields_key_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
	__typename?: "PayloadPreferencesDocAccessFields_key_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
	__typename?: "PayloadPreferencesDocAccessFields_key_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
	__typename?: "PayloadPreferencesDocAccessFields_key_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
	__typename?: "PayloadPreferencesDocAccessFields_updatedAt";
	create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
	__typename?: "PayloadPreferencesDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
	__typename?: "PayloadPreferencesDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
	__typename?: "PayloadPreferencesDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
	__typename?: "PayloadPreferencesDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_User = {
	__typename?: "PayloadPreferencesDocAccessFields_user";
	create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
	delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
	read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
	update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
	__typename?: "PayloadPreferencesDocAccessFields_user_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
	__typename?: "PayloadPreferencesDocAccessFields_user_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
	__typename?: "PayloadPreferencesDocAccessFields_user_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
	__typename?: "PayloadPreferencesDocAccessFields_user_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_Value = {
	__typename?: "PayloadPreferencesDocAccessFields_value";
	create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
	delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
	read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
	update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
	__typename?: "PayloadPreferencesDocAccessFields_value_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
	__typename?: "PayloadPreferencesDocAccessFields_value_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
	__typename?: "PayloadPreferencesDocAccessFields_value_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
	__typename?: "PayloadPreferencesDocAccessFields_value_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields = {
	__typename?: "PayloadPreferencesFields";
	createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
	key?: Maybe<PayloadPreferencesFields_Key>;
	updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
	user?: Maybe<PayloadPreferencesFields_User>;
	value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
	__typename?: "PayloadPreferencesFields_createdAt";
	create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
	delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
	read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
	update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
	__typename?: "PayloadPreferencesFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
	__typename?: "PayloadPreferencesFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
	__typename?: "PayloadPreferencesFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
	__typename?: "PayloadPreferencesFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_Key = {
	__typename?: "PayloadPreferencesFields_key";
	create?: Maybe<PayloadPreferencesFields_Key_Create>;
	delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
	read?: Maybe<PayloadPreferencesFields_Key_Read>;
	update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
	__typename?: "PayloadPreferencesFields_key_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_Key_Delete = {
	__typename?: "PayloadPreferencesFields_key_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_Key_Read = {
	__typename?: "PayloadPreferencesFields_key_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_Key_Update = {
	__typename?: "PayloadPreferencesFields_key_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_UpdatedAt = {
	__typename?: "PayloadPreferencesFields_updatedAt";
	create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
	delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
	read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
	update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
	__typename?: "PayloadPreferencesFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
	__typename?: "PayloadPreferencesFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
	__typename?: "PayloadPreferencesFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
	__typename?: "PayloadPreferencesFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_User = {
	__typename?: "PayloadPreferencesFields_user";
	create?: Maybe<PayloadPreferencesFields_User_Create>;
	delete?: Maybe<PayloadPreferencesFields_User_Delete>;
	read?: Maybe<PayloadPreferencesFields_User_Read>;
	update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
	__typename?: "PayloadPreferencesFields_user_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_User_Delete = {
	__typename?: "PayloadPreferencesFields_user_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_User_Read = {
	__typename?: "PayloadPreferencesFields_user_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_User_Update = {
	__typename?: "PayloadPreferencesFields_user_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_Value = {
	__typename?: "PayloadPreferencesFields_value";
	create?: Maybe<PayloadPreferencesFields_Value_Create>;
	delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
	read?: Maybe<PayloadPreferencesFields_Value_Read>;
	update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
	__typename?: "PayloadPreferencesFields_value_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_Value_Delete = {
	__typename?: "PayloadPreferencesFields_value_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_Value_Read = {
	__typename?: "PayloadPreferencesFields_value_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesFields_Value_Update = {
	__typename?: "PayloadPreferencesFields_value_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PayloadPreferencesReadAccess = {
	__typename?: "PayloadPreferencesReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PayloadPreferencesReadDocAccess = {
	__typename?: "PayloadPreferencesReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PayloadPreferencesUpdateAccess = {
	__typename?: "PayloadPreferencesUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PayloadPreferencesUpdateDocAccess = {
	__typename?: "PayloadPreferencesUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Player = {
	__typename?: "Player";
	aics?: Maybe<Scalars["Float"]["output"]>;
	aics_mined?: Maybe<Scalars["Float"]["output"]>;
	assignedAgent?: Maybe<User>;
	can_get_free_coin?: Maybe<Scalars["Boolean"]["output"]>;
	can_get_free_hat?: Maybe<Scalars["Boolean"]["output"]>;
	code?: Maybe<Scalars["String"]["output"]>;
	confirmations_by_email?: Maybe<Scalars["Boolean"]["output"]>;
	country?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	created_by_admin?: Maybe<Scalars["Boolean"]["output"]>;
	email?: Maybe<Scalars["EmailAddress"]["output"]>;
	email_verify?: Maybe<Scalars["Boolean"]["output"]>;
	guess_games_played?: Maybe<Scalars["Float"]["output"]>;
	guess_last_prize?: Maybe<Scalars["Float"]["output"]>;
	guess_time_finish?: Maybe<Scalars["Float"]["output"]>;
	guess_time_start?: Maybe<Scalars["Float"]["output"]>;
	guess_total_time?: Maybe<Scalars["Float"]["output"]>;
	hat?: Maybe<Scalars["Float"]["output"]>;
	id: Scalars["Int"]["output"];
	last_free_hat?: Maybe<Scalars["Float"]["output"]>;
	login?: Maybe<Scalars["String"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	number_combination?: Maybe<Scalars["String"]["output"]>;
	number_to_guess?: Maybe<Scalars["Float"]["output"]>;
	password?: Maybe<Scalars["String"]["output"]>;
	recovery_token?: Maybe<Scalars["String"]["output"]>;
	refferal_code?: Maybe<Scalars["String"]["output"]>;
	reffered_by?: Maybe<Scalars["String"]["output"]>;
	reffered_users?: Maybe<Array<Player_Reffered_Users>>;
	reffiled?: Maybe<Scalars["Float"]["output"]>;
	sapper_total_time?: Maybe<Scalars["Float"]["output"]>;
	today_mined_screen?: Maybe<Scalars["Float"]["output"]>;
	total_mined?: Maybe<Scalars["Float"]["output"]>;
	total_mined_screen?: Maybe<Scalars["Float"]["output"]>;
	total_withdraw?: Maybe<Scalars["Float"]["output"]>;
	two_factor_authentification?: Maybe<Scalars["Boolean"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	usdt?: Maybe<Scalars["Float"]["output"]>;
	wallet_address?: Maybe<Scalars["String"]["output"]>;
};

export type PlayerCreateAccess = {
	__typename?: "PlayerCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PlayerCreateDocAccess = {
	__typename?: "PlayerCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PlayerDeleteAccess = {
	__typename?: "PlayerDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PlayerDeleteDocAccess = {
	__typename?: "PlayerDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PlayerDocAccessFields = {
	__typename?: "PlayerDocAccessFields";
	aics?: Maybe<PlayerDocAccessFields_Aics>;
	aics_mined?: Maybe<PlayerDocAccessFields_Aics_Mined>;
	assignedAgent?: Maybe<PlayerDocAccessFields_AssignedAgent>;
	can_get_free_coin?: Maybe<PlayerDocAccessFields_Can_Get_Free_Coin>;
	can_get_free_hat?: Maybe<PlayerDocAccessFields_Can_Get_Free_Hat>;
	code?: Maybe<PlayerDocAccessFields_Code>;
	confirmations_by_email?: Maybe<PlayerDocAccessFields_Confirmations_By_Email>;
	country?: Maybe<PlayerDocAccessFields_Country>;
	createdAt?: Maybe<PlayerDocAccessFields_CreatedAt>;
	created_by_admin?: Maybe<PlayerDocAccessFields_Created_By_Admin>;
	email?: Maybe<PlayerDocAccessFields_Email>;
	email_verify?: Maybe<PlayerDocAccessFields_Email_Verify>;
	guess_games_played?: Maybe<PlayerDocAccessFields_Guess_Games_Played>;
	guess_last_prize?: Maybe<PlayerDocAccessFields_Guess_Last_Prize>;
	guess_time_finish?: Maybe<PlayerDocAccessFields_Guess_Time_Finish>;
	guess_time_start?: Maybe<PlayerDocAccessFields_Guess_Time_Start>;
	guess_total_time?: Maybe<PlayerDocAccessFields_Guess_Total_Time>;
	hat?: Maybe<PlayerDocAccessFields_Hat>;
	last_free_hat?: Maybe<PlayerDocAccessFields_Last_Free_Hat>;
	login?: Maybe<PlayerDocAccessFields_Login>;
	name?: Maybe<PlayerDocAccessFields_Name>;
	number_combination?: Maybe<PlayerDocAccessFields_Number_Combination>;
	number_to_guess?: Maybe<PlayerDocAccessFields_Number_To_Guess>;
	password?: Maybe<PlayerDocAccessFields_Password>;
	recovery_token?: Maybe<PlayerDocAccessFields_Recovery_Token>;
	refferal_code?: Maybe<PlayerDocAccessFields_Refferal_Code>;
	reffered_by?: Maybe<PlayerDocAccessFields_Reffered_By>;
	reffered_users?: Maybe<PlayerDocAccessFields_Reffered_Users>;
	reffiled?: Maybe<PlayerDocAccessFields_Reffiled>;
	sapper_total_time?: Maybe<PlayerDocAccessFields_Sapper_Total_Time>;
	today_mined_screen?: Maybe<PlayerDocAccessFields_Today_Mined_Screen>;
	total_mined?: Maybe<PlayerDocAccessFields_Total_Mined>;
	total_mined_screen?: Maybe<PlayerDocAccessFields_Total_Mined_Screen>;
	total_withdraw?: Maybe<PlayerDocAccessFields_Total_Withdraw>;
	two_factor_authentification?: Maybe<PlayerDocAccessFields_Two_Factor_Authentification>;
	updatedAt?: Maybe<PlayerDocAccessFields_UpdatedAt>;
	usdt?: Maybe<PlayerDocAccessFields_Usdt>;
	wallet_address?: Maybe<PlayerDocAccessFields_Wallet_Address>;
};

export type PlayerDocAccessFields_Aics = {
	__typename?: "PlayerDocAccessFields_aics";
	create?: Maybe<PlayerDocAccessFields_Aics_Create>;
	delete?: Maybe<PlayerDocAccessFields_Aics_Delete>;
	read?: Maybe<PlayerDocAccessFields_Aics_Read>;
	update?: Maybe<PlayerDocAccessFields_Aics_Update>;
};

export type PlayerDocAccessFields_Aics_Create = {
	__typename?: "PlayerDocAccessFields_aics_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Aics_Delete = {
	__typename?: "PlayerDocAccessFields_aics_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Aics_Read = {
	__typename?: "PlayerDocAccessFields_aics_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Aics_Update = {
	__typename?: "PlayerDocAccessFields_aics_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Aics_Mined = {
	__typename?: "PlayerDocAccessFields_aics_mined";
	create?: Maybe<PlayerDocAccessFields_Aics_Mined_Create>;
	delete?: Maybe<PlayerDocAccessFields_Aics_Mined_Delete>;
	read?: Maybe<PlayerDocAccessFields_Aics_Mined_Read>;
	update?: Maybe<PlayerDocAccessFields_Aics_Mined_Update>;
};

export type PlayerDocAccessFields_Aics_Mined_Create = {
	__typename?: "PlayerDocAccessFields_aics_mined_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Aics_Mined_Delete = {
	__typename?: "PlayerDocAccessFields_aics_mined_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Aics_Mined_Read = {
	__typename?: "PlayerDocAccessFields_aics_mined_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Aics_Mined_Update = {
	__typename?: "PlayerDocAccessFields_aics_mined_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_AssignedAgent = {
	__typename?: "PlayerDocAccessFields_assignedAgent";
	create?: Maybe<PlayerDocAccessFields_AssignedAgent_Create>;
	delete?: Maybe<PlayerDocAccessFields_AssignedAgent_Delete>;
	read?: Maybe<PlayerDocAccessFields_AssignedAgent_Read>;
	update?: Maybe<PlayerDocAccessFields_AssignedAgent_Update>;
};

export type PlayerDocAccessFields_AssignedAgent_Create = {
	__typename?: "PlayerDocAccessFields_assignedAgent_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_AssignedAgent_Delete = {
	__typename?: "PlayerDocAccessFields_assignedAgent_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_AssignedAgent_Read = {
	__typename?: "PlayerDocAccessFields_assignedAgent_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_AssignedAgent_Update = {
	__typename?: "PlayerDocAccessFields_assignedAgent_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Can_Get_Free_Coin = {
	__typename?: "PlayerDocAccessFields_can_get_free_coin";
	create?: Maybe<PlayerDocAccessFields_Can_Get_Free_Coin_Create>;
	delete?: Maybe<PlayerDocAccessFields_Can_Get_Free_Coin_Delete>;
	read?: Maybe<PlayerDocAccessFields_Can_Get_Free_Coin_Read>;
	update?: Maybe<PlayerDocAccessFields_Can_Get_Free_Coin_Update>;
};

export type PlayerDocAccessFields_Can_Get_Free_Coin_Create = {
	__typename?: "PlayerDocAccessFields_can_get_free_coin_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Can_Get_Free_Coin_Delete = {
	__typename?: "PlayerDocAccessFields_can_get_free_coin_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Can_Get_Free_Coin_Read = {
	__typename?: "PlayerDocAccessFields_can_get_free_coin_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Can_Get_Free_Coin_Update = {
	__typename?: "PlayerDocAccessFields_can_get_free_coin_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Can_Get_Free_Hat = {
	__typename?: "PlayerDocAccessFields_can_get_free_hat";
	create?: Maybe<PlayerDocAccessFields_Can_Get_Free_Hat_Create>;
	delete?: Maybe<PlayerDocAccessFields_Can_Get_Free_Hat_Delete>;
	read?: Maybe<PlayerDocAccessFields_Can_Get_Free_Hat_Read>;
	update?: Maybe<PlayerDocAccessFields_Can_Get_Free_Hat_Update>;
};

export type PlayerDocAccessFields_Can_Get_Free_Hat_Create = {
	__typename?: "PlayerDocAccessFields_can_get_free_hat_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Can_Get_Free_Hat_Delete = {
	__typename?: "PlayerDocAccessFields_can_get_free_hat_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Can_Get_Free_Hat_Read = {
	__typename?: "PlayerDocAccessFields_can_get_free_hat_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Can_Get_Free_Hat_Update = {
	__typename?: "PlayerDocAccessFields_can_get_free_hat_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Code = {
	__typename?: "PlayerDocAccessFields_code";
	create?: Maybe<PlayerDocAccessFields_Code_Create>;
	delete?: Maybe<PlayerDocAccessFields_Code_Delete>;
	read?: Maybe<PlayerDocAccessFields_Code_Read>;
	update?: Maybe<PlayerDocAccessFields_Code_Update>;
};

export type PlayerDocAccessFields_Code_Create = {
	__typename?: "PlayerDocAccessFields_code_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Code_Delete = {
	__typename?: "PlayerDocAccessFields_code_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Code_Read = {
	__typename?: "PlayerDocAccessFields_code_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Code_Update = {
	__typename?: "PlayerDocAccessFields_code_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Confirmations_By_Email = {
	__typename?: "PlayerDocAccessFields_confirmations_by_email";
	create?: Maybe<PlayerDocAccessFields_Confirmations_By_Email_Create>;
	delete?: Maybe<PlayerDocAccessFields_Confirmations_By_Email_Delete>;
	read?: Maybe<PlayerDocAccessFields_Confirmations_By_Email_Read>;
	update?: Maybe<PlayerDocAccessFields_Confirmations_By_Email_Update>;
};

export type PlayerDocAccessFields_Confirmations_By_Email_Create = {
	__typename?: "PlayerDocAccessFields_confirmations_by_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Confirmations_By_Email_Delete = {
	__typename?: "PlayerDocAccessFields_confirmations_by_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Confirmations_By_Email_Read = {
	__typename?: "PlayerDocAccessFields_confirmations_by_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Confirmations_By_Email_Update = {
	__typename?: "PlayerDocAccessFields_confirmations_by_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Country = {
	__typename?: "PlayerDocAccessFields_country";
	create?: Maybe<PlayerDocAccessFields_Country_Create>;
	delete?: Maybe<PlayerDocAccessFields_Country_Delete>;
	read?: Maybe<PlayerDocAccessFields_Country_Read>;
	update?: Maybe<PlayerDocAccessFields_Country_Update>;
};

export type PlayerDocAccessFields_Country_Create = {
	__typename?: "PlayerDocAccessFields_country_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Country_Delete = {
	__typename?: "PlayerDocAccessFields_country_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Country_Read = {
	__typename?: "PlayerDocAccessFields_country_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Country_Update = {
	__typename?: "PlayerDocAccessFields_country_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_CreatedAt = {
	__typename?: "PlayerDocAccessFields_createdAt";
	create?: Maybe<PlayerDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<PlayerDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<PlayerDocAccessFields_CreatedAt_Read>;
	update?: Maybe<PlayerDocAccessFields_CreatedAt_Update>;
};

export type PlayerDocAccessFields_CreatedAt_Create = {
	__typename?: "PlayerDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_CreatedAt_Delete = {
	__typename?: "PlayerDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_CreatedAt_Read = {
	__typename?: "PlayerDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_CreatedAt_Update = {
	__typename?: "PlayerDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Created_By_Admin = {
	__typename?: "PlayerDocAccessFields_created_by_admin";
	create?: Maybe<PlayerDocAccessFields_Created_By_Admin_Create>;
	delete?: Maybe<PlayerDocAccessFields_Created_By_Admin_Delete>;
	read?: Maybe<PlayerDocAccessFields_Created_By_Admin_Read>;
	update?: Maybe<PlayerDocAccessFields_Created_By_Admin_Update>;
};

export type PlayerDocAccessFields_Created_By_Admin_Create = {
	__typename?: "PlayerDocAccessFields_created_by_admin_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Created_By_Admin_Delete = {
	__typename?: "PlayerDocAccessFields_created_by_admin_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Created_By_Admin_Read = {
	__typename?: "PlayerDocAccessFields_created_by_admin_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Created_By_Admin_Update = {
	__typename?: "PlayerDocAccessFields_created_by_admin_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Email = {
	__typename?: "PlayerDocAccessFields_email";
	create?: Maybe<PlayerDocAccessFields_Email_Create>;
	delete?: Maybe<PlayerDocAccessFields_Email_Delete>;
	read?: Maybe<PlayerDocAccessFields_Email_Read>;
	update?: Maybe<PlayerDocAccessFields_Email_Update>;
};

export type PlayerDocAccessFields_Email_Create = {
	__typename?: "PlayerDocAccessFields_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Email_Delete = {
	__typename?: "PlayerDocAccessFields_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Email_Read = {
	__typename?: "PlayerDocAccessFields_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Email_Update = {
	__typename?: "PlayerDocAccessFields_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Email_Verify = {
	__typename?: "PlayerDocAccessFields_email_verify";
	create?: Maybe<PlayerDocAccessFields_Email_Verify_Create>;
	delete?: Maybe<PlayerDocAccessFields_Email_Verify_Delete>;
	read?: Maybe<PlayerDocAccessFields_Email_Verify_Read>;
	update?: Maybe<PlayerDocAccessFields_Email_Verify_Update>;
};

export type PlayerDocAccessFields_Email_Verify_Create = {
	__typename?: "PlayerDocAccessFields_email_verify_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Email_Verify_Delete = {
	__typename?: "PlayerDocAccessFields_email_verify_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Email_Verify_Read = {
	__typename?: "PlayerDocAccessFields_email_verify_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Email_Verify_Update = {
	__typename?: "PlayerDocAccessFields_email_verify_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Games_Played = {
	__typename?: "PlayerDocAccessFields_guess_games_played";
	create?: Maybe<PlayerDocAccessFields_Guess_Games_Played_Create>;
	delete?: Maybe<PlayerDocAccessFields_Guess_Games_Played_Delete>;
	read?: Maybe<PlayerDocAccessFields_Guess_Games_Played_Read>;
	update?: Maybe<PlayerDocAccessFields_Guess_Games_Played_Update>;
};

export type PlayerDocAccessFields_Guess_Games_Played_Create = {
	__typename?: "PlayerDocAccessFields_guess_games_played_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Games_Played_Delete = {
	__typename?: "PlayerDocAccessFields_guess_games_played_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Games_Played_Read = {
	__typename?: "PlayerDocAccessFields_guess_games_played_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Games_Played_Update = {
	__typename?: "PlayerDocAccessFields_guess_games_played_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Last_Prize = {
	__typename?: "PlayerDocAccessFields_guess_last_prize";
	create?: Maybe<PlayerDocAccessFields_Guess_Last_Prize_Create>;
	delete?: Maybe<PlayerDocAccessFields_Guess_Last_Prize_Delete>;
	read?: Maybe<PlayerDocAccessFields_Guess_Last_Prize_Read>;
	update?: Maybe<PlayerDocAccessFields_Guess_Last_Prize_Update>;
};

export type PlayerDocAccessFields_Guess_Last_Prize_Create = {
	__typename?: "PlayerDocAccessFields_guess_last_prize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Last_Prize_Delete = {
	__typename?: "PlayerDocAccessFields_guess_last_prize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Last_Prize_Read = {
	__typename?: "PlayerDocAccessFields_guess_last_prize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Last_Prize_Update = {
	__typename?: "PlayerDocAccessFields_guess_last_prize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Time_Finish = {
	__typename?: "PlayerDocAccessFields_guess_time_finish";
	create?: Maybe<PlayerDocAccessFields_Guess_Time_Finish_Create>;
	delete?: Maybe<PlayerDocAccessFields_Guess_Time_Finish_Delete>;
	read?: Maybe<PlayerDocAccessFields_Guess_Time_Finish_Read>;
	update?: Maybe<PlayerDocAccessFields_Guess_Time_Finish_Update>;
};

export type PlayerDocAccessFields_Guess_Time_Finish_Create = {
	__typename?: "PlayerDocAccessFields_guess_time_finish_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Time_Finish_Delete = {
	__typename?: "PlayerDocAccessFields_guess_time_finish_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Time_Finish_Read = {
	__typename?: "PlayerDocAccessFields_guess_time_finish_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Time_Finish_Update = {
	__typename?: "PlayerDocAccessFields_guess_time_finish_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Time_Start = {
	__typename?: "PlayerDocAccessFields_guess_time_start";
	create?: Maybe<PlayerDocAccessFields_Guess_Time_Start_Create>;
	delete?: Maybe<PlayerDocAccessFields_Guess_Time_Start_Delete>;
	read?: Maybe<PlayerDocAccessFields_Guess_Time_Start_Read>;
	update?: Maybe<PlayerDocAccessFields_Guess_Time_Start_Update>;
};

export type PlayerDocAccessFields_Guess_Time_Start_Create = {
	__typename?: "PlayerDocAccessFields_guess_time_start_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Time_Start_Delete = {
	__typename?: "PlayerDocAccessFields_guess_time_start_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Time_Start_Read = {
	__typename?: "PlayerDocAccessFields_guess_time_start_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Time_Start_Update = {
	__typename?: "PlayerDocAccessFields_guess_time_start_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Total_Time = {
	__typename?: "PlayerDocAccessFields_guess_total_time";
	create?: Maybe<PlayerDocAccessFields_Guess_Total_Time_Create>;
	delete?: Maybe<PlayerDocAccessFields_Guess_Total_Time_Delete>;
	read?: Maybe<PlayerDocAccessFields_Guess_Total_Time_Read>;
	update?: Maybe<PlayerDocAccessFields_Guess_Total_Time_Update>;
};

export type PlayerDocAccessFields_Guess_Total_Time_Create = {
	__typename?: "PlayerDocAccessFields_guess_total_time_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Total_Time_Delete = {
	__typename?: "PlayerDocAccessFields_guess_total_time_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Total_Time_Read = {
	__typename?: "PlayerDocAccessFields_guess_total_time_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Guess_Total_Time_Update = {
	__typename?: "PlayerDocAccessFields_guess_total_time_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Hat = {
	__typename?: "PlayerDocAccessFields_hat";
	create?: Maybe<PlayerDocAccessFields_Hat_Create>;
	delete?: Maybe<PlayerDocAccessFields_Hat_Delete>;
	read?: Maybe<PlayerDocAccessFields_Hat_Read>;
	update?: Maybe<PlayerDocAccessFields_Hat_Update>;
};

export type PlayerDocAccessFields_Hat_Create = {
	__typename?: "PlayerDocAccessFields_hat_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Hat_Delete = {
	__typename?: "PlayerDocAccessFields_hat_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Hat_Read = {
	__typename?: "PlayerDocAccessFields_hat_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Hat_Update = {
	__typename?: "PlayerDocAccessFields_hat_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Last_Free_Hat = {
	__typename?: "PlayerDocAccessFields_last_free_hat";
	create?: Maybe<PlayerDocAccessFields_Last_Free_Hat_Create>;
	delete?: Maybe<PlayerDocAccessFields_Last_Free_Hat_Delete>;
	read?: Maybe<PlayerDocAccessFields_Last_Free_Hat_Read>;
	update?: Maybe<PlayerDocAccessFields_Last_Free_Hat_Update>;
};

export type PlayerDocAccessFields_Last_Free_Hat_Create = {
	__typename?: "PlayerDocAccessFields_last_free_hat_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Last_Free_Hat_Delete = {
	__typename?: "PlayerDocAccessFields_last_free_hat_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Last_Free_Hat_Read = {
	__typename?: "PlayerDocAccessFields_last_free_hat_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Last_Free_Hat_Update = {
	__typename?: "PlayerDocAccessFields_last_free_hat_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Login = {
	__typename?: "PlayerDocAccessFields_login";
	create?: Maybe<PlayerDocAccessFields_Login_Create>;
	delete?: Maybe<PlayerDocAccessFields_Login_Delete>;
	read?: Maybe<PlayerDocAccessFields_Login_Read>;
	update?: Maybe<PlayerDocAccessFields_Login_Update>;
};

export type PlayerDocAccessFields_Login_Create = {
	__typename?: "PlayerDocAccessFields_login_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Login_Delete = {
	__typename?: "PlayerDocAccessFields_login_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Login_Read = {
	__typename?: "PlayerDocAccessFields_login_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Login_Update = {
	__typename?: "PlayerDocAccessFields_login_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Name = {
	__typename?: "PlayerDocAccessFields_name";
	create?: Maybe<PlayerDocAccessFields_Name_Create>;
	delete?: Maybe<PlayerDocAccessFields_Name_Delete>;
	read?: Maybe<PlayerDocAccessFields_Name_Read>;
	update?: Maybe<PlayerDocAccessFields_Name_Update>;
};

export type PlayerDocAccessFields_Name_Create = {
	__typename?: "PlayerDocAccessFields_name_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Name_Delete = {
	__typename?: "PlayerDocAccessFields_name_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Name_Read = {
	__typename?: "PlayerDocAccessFields_name_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Name_Update = {
	__typename?: "PlayerDocAccessFields_name_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Number_Combination = {
	__typename?: "PlayerDocAccessFields_number_combination";
	create?: Maybe<PlayerDocAccessFields_Number_Combination_Create>;
	delete?: Maybe<PlayerDocAccessFields_Number_Combination_Delete>;
	read?: Maybe<PlayerDocAccessFields_Number_Combination_Read>;
	update?: Maybe<PlayerDocAccessFields_Number_Combination_Update>;
};

export type PlayerDocAccessFields_Number_Combination_Create = {
	__typename?: "PlayerDocAccessFields_number_combination_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Number_Combination_Delete = {
	__typename?: "PlayerDocAccessFields_number_combination_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Number_Combination_Read = {
	__typename?: "PlayerDocAccessFields_number_combination_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Number_Combination_Update = {
	__typename?: "PlayerDocAccessFields_number_combination_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Number_To_Guess = {
	__typename?: "PlayerDocAccessFields_number_to_guess";
	create?: Maybe<PlayerDocAccessFields_Number_To_Guess_Create>;
	delete?: Maybe<PlayerDocAccessFields_Number_To_Guess_Delete>;
	read?: Maybe<PlayerDocAccessFields_Number_To_Guess_Read>;
	update?: Maybe<PlayerDocAccessFields_Number_To_Guess_Update>;
};

export type PlayerDocAccessFields_Number_To_Guess_Create = {
	__typename?: "PlayerDocAccessFields_number_to_guess_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Number_To_Guess_Delete = {
	__typename?: "PlayerDocAccessFields_number_to_guess_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Number_To_Guess_Read = {
	__typename?: "PlayerDocAccessFields_number_to_guess_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Number_To_Guess_Update = {
	__typename?: "PlayerDocAccessFields_number_to_guess_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Password = {
	__typename?: "PlayerDocAccessFields_password";
	create?: Maybe<PlayerDocAccessFields_Password_Create>;
	delete?: Maybe<PlayerDocAccessFields_Password_Delete>;
	read?: Maybe<PlayerDocAccessFields_Password_Read>;
	update?: Maybe<PlayerDocAccessFields_Password_Update>;
};

export type PlayerDocAccessFields_Password_Create = {
	__typename?: "PlayerDocAccessFields_password_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Password_Delete = {
	__typename?: "PlayerDocAccessFields_password_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Password_Read = {
	__typename?: "PlayerDocAccessFields_password_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Password_Update = {
	__typename?: "PlayerDocAccessFields_password_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Recovery_Token = {
	__typename?: "PlayerDocAccessFields_recovery_token";
	create?: Maybe<PlayerDocAccessFields_Recovery_Token_Create>;
	delete?: Maybe<PlayerDocAccessFields_Recovery_Token_Delete>;
	read?: Maybe<PlayerDocAccessFields_Recovery_Token_Read>;
	update?: Maybe<PlayerDocAccessFields_Recovery_Token_Update>;
};

export type PlayerDocAccessFields_Recovery_Token_Create = {
	__typename?: "PlayerDocAccessFields_recovery_token_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Recovery_Token_Delete = {
	__typename?: "PlayerDocAccessFields_recovery_token_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Recovery_Token_Read = {
	__typename?: "PlayerDocAccessFields_recovery_token_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Recovery_Token_Update = {
	__typename?: "PlayerDocAccessFields_recovery_token_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Refferal_Code = {
	__typename?: "PlayerDocAccessFields_refferal_code";
	create?: Maybe<PlayerDocAccessFields_Refferal_Code_Create>;
	delete?: Maybe<PlayerDocAccessFields_Refferal_Code_Delete>;
	read?: Maybe<PlayerDocAccessFields_Refferal_Code_Read>;
	update?: Maybe<PlayerDocAccessFields_Refferal_Code_Update>;
};

export type PlayerDocAccessFields_Refferal_Code_Create = {
	__typename?: "PlayerDocAccessFields_refferal_code_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Refferal_Code_Delete = {
	__typename?: "PlayerDocAccessFields_refferal_code_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Refferal_Code_Read = {
	__typename?: "PlayerDocAccessFields_refferal_code_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Refferal_Code_Update = {
	__typename?: "PlayerDocAccessFields_refferal_code_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_By = {
	__typename?: "PlayerDocAccessFields_reffered_by";
	create?: Maybe<PlayerDocAccessFields_Reffered_By_Create>;
	delete?: Maybe<PlayerDocAccessFields_Reffered_By_Delete>;
	read?: Maybe<PlayerDocAccessFields_Reffered_By_Read>;
	update?: Maybe<PlayerDocAccessFields_Reffered_By_Update>;
};

export type PlayerDocAccessFields_Reffered_By_Create = {
	__typename?: "PlayerDocAccessFields_reffered_by_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_By_Delete = {
	__typename?: "PlayerDocAccessFields_reffered_by_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_By_Read = {
	__typename?: "PlayerDocAccessFields_reffered_by_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_By_Update = {
	__typename?: "PlayerDocAccessFields_reffered_by_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users = {
	__typename?: "PlayerDocAccessFields_reffered_users";
	create?: Maybe<PlayerDocAccessFields_Reffered_Users_Create>;
	delete?: Maybe<PlayerDocAccessFields_Reffered_Users_Delete>;
	fields?: Maybe<PlayerDocAccessFields_Reffered_Users_Fields>;
	read?: Maybe<PlayerDocAccessFields_Reffered_Users_Read>;
	update?: Maybe<PlayerDocAccessFields_Reffered_Users_Update>;
};

export type PlayerDocAccessFields_Reffered_Users_Create = {
	__typename?: "PlayerDocAccessFields_reffered_users_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Delete = {
	__typename?: "PlayerDocAccessFields_reffered_users_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Fields = {
	__typename?: "PlayerDocAccessFields_reffered_users_Fields";
	date?: Maybe<PlayerDocAccessFields_Reffered_Users_Date>;
	id?: Maybe<PlayerDocAccessFields_Reffered_Users_Id>;
	reffered_email?: Maybe<PlayerDocAccessFields_Reffered_Users_Reffered_Email>;
};

export type PlayerDocAccessFields_Reffered_Users_Read = {
	__typename?: "PlayerDocAccessFields_reffered_users_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Update = {
	__typename?: "PlayerDocAccessFields_reffered_users_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Date = {
	__typename?: "PlayerDocAccessFields_reffered_users_date";
	create?: Maybe<PlayerDocAccessFields_Reffered_Users_Date_Create>;
	delete?: Maybe<PlayerDocAccessFields_Reffered_Users_Date_Delete>;
	read?: Maybe<PlayerDocAccessFields_Reffered_Users_Date_Read>;
	update?: Maybe<PlayerDocAccessFields_Reffered_Users_Date_Update>;
};

export type PlayerDocAccessFields_Reffered_Users_Date_Create = {
	__typename?: "PlayerDocAccessFields_reffered_users_date_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Date_Delete = {
	__typename?: "PlayerDocAccessFields_reffered_users_date_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Date_Read = {
	__typename?: "PlayerDocAccessFields_reffered_users_date_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Date_Update = {
	__typename?: "PlayerDocAccessFields_reffered_users_date_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Id = {
	__typename?: "PlayerDocAccessFields_reffered_users_id";
	create?: Maybe<PlayerDocAccessFields_Reffered_Users_Id_Create>;
	delete?: Maybe<PlayerDocAccessFields_Reffered_Users_Id_Delete>;
	read?: Maybe<PlayerDocAccessFields_Reffered_Users_Id_Read>;
	update?: Maybe<PlayerDocAccessFields_Reffered_Users_Id_Update>;
};

export type PlayerDocAccessFields_Reffered_Users_Id_Create = {
	__typename?: "PlayerDocAccessFields_reffered_users_id_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Id_Delete = {
	__typename?: "PlayerDocAccessFields_reffered_users_id_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Id_Read = {
	__typename?: "PlayerDocAccessFields_reffered_users_id_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Id_Update = {
	__typename?: "PlayerDocAccessFields_reffered_users_id_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Reffered_Email = {
	__typename?: "PlayerDocAccessFields_reffered_users_reffered_email";
	create?: Maybe<PlayerDocAccessFields_Reffered_Users_Reffered_Email_Create>;
	delete?: Maybe<PlayerDocAccessFields_Reffered_Users_Reffered_Email_Delete>;
	read?: Maybe<PlayerDocAccessFields_Reffered_Users_Reffered_Email_Read>;
	update?: Maybe<PlayerDocAccessFields_Reffered_Users_Reffered_Email_Update>;
};

export type PlayerDocAccessFields_Reffered_Users_Reffered_Email_Create = {
	__typename?: "PlayerDocAccessFields_reffered_users_reffered_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Reffered_Email_Delete = {
	__typename?: "PlayerDocAccessFields_reffered_users_reffered_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Reffered_Email_Read = {
	__typename?: "PlayerDocAccessFields_reffered_users_reffered_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffered_Users_Reffered_Email_Update = {
	__typename?: "PlayerDocAccessFields_reffered_users_reffered_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffiled = {
	__typename?: "PlayerDocAccessFields_reffiled";
	create?: Maybe<PlayerDocAccessFields_Reffiled_Create>;
	delete?: Maybe<PlayerDocAccessFields_Reffiled_Delete>;
	read?: Maybe<PlayerDocAccessFields_Reffiled_Read>;
	update?: Maybe<PlayerDocAccessFields_Reffiled_Update>;
};

export type PlayerDocAccessFields_Reffiled_Create = {
	__typename?: "PlayerDocAccessFields_reffiled_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffiled_Delete = {
	__typename?: "PlayerDocAccessFields_reffiled_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffiled_Read = {
	__typename?: "PlayerDocAccessFields_reffiled_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Reffiled_Update = {
	__typename?: "PlayerDocAccessFields_reffiled_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Sapper_Total_Time = {
	__typename?: "PlayerDocAccessFields_sapper_total_time";
	create?: Maybe<PlayerDocAccessFields_Sapper_Total_Time_Create>;
	delete?: Maybe<PlayerDocAccessFields_Sapper_Total_Time_Delete>;
	read?: Maybe<PlayerDocAccessFields_Sapper_Total_Time_Read>;
	update?: Maybe<PlayerDocAccessFields_Sapper_Total_Time_Update>;
};

export type PlayerDocAccessFields_Sapper_Total_Time_Create = {
	__typename?: "PlayerDocAccessFields_sapper_total_time_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Sapper_Total_Time_Delete = {
	__typename?: "PlayerDocAccessFields_sapper_total_time_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Sapper_Total_Time_Read = {
	__typename?: "PlayerDocAccessFields_sapper_total_time_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Sapper_Total_Time_Update = {
	__typename?: "PlayerDocAccessFields_sapper_total_time_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Today_Mined_Screen = {
	__typename?: "PlayerDocAccessFields_today_mined_screen";
	create?: Maybe<PlayerDocAccessFields_Today_Mined_Screen_Create>;
	delete?: Maybe<PlayerDocAccessFields_Today_Mined_Screen_Delete>;
	read?: Maybe<PlayerDocAccessFields_Today_Mined_Screen_Read>;
	update?: Maybe<PlayerDocAccessFields_Today_Mined_Screen_Update>;
};

export type PlayerDocAccessFields_Today_Mined_Screen_Create = {
	__typename?: "PlayerDocAccessFields_today_mined_screen_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Today_Mined_Screen_Delete = {
	__typename?: "PlayerDocAccessFields_today_mined_screen_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Today_Mined_Screen_Read = {
	__typename?: "PlayerDocAccessFields_today_mined_screen_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Today_Mined_Screen_Update = {
	__typename?: "PlayerDocAccessFields_today_mined_screen_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Mined = {
	__typename?: "PlayerDocAccessFields_total_mined";
	create?: Maybe<PlayerDocAccessFields_Total_Mined_Create>;
	delete?: Maybe<PlayerDocAccessFields_Total_Mined_Delete>;
	read?: Maybe<PlayerDocAccessFields_Total_Mined_Read>;
	update?: Maybe<PlayerDocAccessFields_Total_Mined_Update>;
};

export type PlayerDocAccessFields_Total_Mined_Create = {
	__typename?: "PlayerDocAccessFields_total_mined_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Mined_Delete = {
	__typename?: "PlayerDocAccessFields_total_mined_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Mined_Read = {
	__typename?: "PlayerDocAccessFields_total_mined_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Mined_Update = {
	__typename?: "PlayerDocAccessFields_total_mined_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Mined_Screen = {
	__typename?: "PlayerDocAccessFields_total_mined_screen";
	create?: Maybe<PlayerDocAccessFields_Total_Mined_Screen_Create>;
	delete?: Maybe<PlayerDocAccessFields_Total_Mined_Screen_Delete>;
	read?: Maybe<PlayerDocAccessFields_Total_Mined_Screen_Read>;
	update?: Maybe<PlayerDocAccessFields_Total_Mined_Screen_Update>;
};

export type PlayerDocAccessFields_Total_Mined_Screen_Create = {
	__typename?: "PlayerDocAccessFields_total_mined_screen_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Mined_Screen_Delete = {
	__typename?: "PlayerDocAccessFields_total_mined_screen_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Mined_Screen_Read = {
	__typename?: "PlayerDocAccessFields_total_mined_screen_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Mined_Screen_Update = {
	__typename?: "PlayerDocAccessFields_total_mined_screen_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Withdraw = {
	__typename?: "PlayerDocAccessFields_total_withdraw";
	create?: Maybe<PlayerDocAccessFields_Total_Withdraw_Create>;
	delete?: Maybe<PlayerDocAccessFields_Total_Withdraw_Delete>;
	read?: Maybe<PlayerDocAccessFields_Total_Withdraw_Read>;
	update?: Maybe<PlayerDocAccessFields_Total_Withdraw_Update>;
};

export type PlayerDocAccessFields_Total_Withdraw_Create = {
	__typename?: "PlayerDocAccessFields_total_withdraw_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Withdraw_Delete = {
	__typename?: "PlayerDocAccessFields_total_withdraw_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Withdraw_Read = {
	__typename?: "PlayerDocAccessFields_total_withdraw_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Total_Withdraw_Update = {
	__typename?: "PlayerDocAccessFields_total_withdraw_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Two_Factor_Authentification = {
	__typename?: "PlayerDocAccessFields_two_factor_authentification";
	create?: Maybe<PlayerDocAccessFields_Two_Factor_Authentification_Create>;
	delete?: Maybe<PlayerDocAccessFields_Two_Factor_Authentification_Delete>;
	read?: Maybe<PlayerDocAccessFields_Two_Factor_Authentification_Read>;
	update?: Maybe<PlayerDocAccessFields_Two_Factor_Authentification_Update>;
};

export type PlayerDocAccessFields_Two_Factor_Authentification_Create = {
	__typename?: "PlayerDocAccessFields_two_factor_authentification_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Two_Factor_Authentification_Delete = {
	__typename?: "PlayerDocAccessFields_two_factor_authentification_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Two_Factor_Authentification_Read = {
	__typename?: "PlayerDocAccessFields_two_factor_authentification_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Two_Factor_Authentification_Update = {
	__typename?: "PlayerDocAccessFields_two_factor_authentification_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_UpdatedAt = {
	__typename?: "PlayerDocAccessFields_updatedAt";
	create?: Maybe<PlayerDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<PlayerDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<PlayerDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<PlayerDocAccessFields_UpdatedAt_Update>;
};

export type PlayerDocAccessFields_UpdatedAt_Create = {
	__typename?: "PlayerDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_UpdatedAt_Delete = {
	__typename?: "PlayerDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_UpdatedAt_Read = {
	__typename?: "PlayerDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_UpdatedAt_Update = {
	__typename?: "PlayerDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Usdt = {
	__typename?: "PlayerDocAccessFields_usdt";
	create?: Maybe<PlayerDocAccessFields_Usdt_Create>;
	delete?: Maybe<PlayerDocAccessFields_Usdt_Delete>;
	read?: Maybe<PlayerDocAccessFields_Usdt_Read>;
	update?: Maybe<PlayerDocAccessFields_Usdt_Update>;
};

export type PlayerDocAccessFields_Usdt_Create = {
	__typename?: "PlayerDocAccessFields_usdt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Usdt_Delete = {
	__typename?: "PlayerDocAccessFields_usdt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Usdt_Read = {
	__typename?: "PlayerDocAccessFields_usdt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Usdt_Update = {
	__typename?: "PlayerDocAccessFields_usdt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Wallet_Address = {
	__typename?: "PlayerDocAccessFields_wallet_address";
	create?: Maybe<PlayerDocAccessFields_Wallet_Address_Create>;
	delete?: Maybe<PlayerDocAccessFields_Wallet_Address_Delete>;
	read?: Maybe<PlayerDocAccessFields_Wallet_Address_Read>;
	update?: Maybe<PlayerDocAccessFields_Wallet_Address_Update>;
};

export type PlayerDocAccessFields_Wallet_Address_Create = {
	__typename?: "PlayerDocAccessFields_wallet_address_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Wallet_Address_Delete = {
	__typename?: "PlayerDocAccessFields_wallet_address_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Wallet_Address_Read = {
	__typename?: "PlayerDocAccessFields_wallet_address_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerDocAccessFields_Wallet_Address_Update = {
	__typename?: "PlayerDocAccessFields_wallet_address_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields = {
	__typename?: "PlayerFields";
	aics?: Maybe<PlayerFields_Aics>;
	aics_mined?: Maybe<PlayerFields_Aics_Mined>;
	assignedAgent?: Maybe<PlayerFields_AssignedAgent>;
	can_get_free_coin?: Maybe<PlayerFields_Can_Get_Free_Coin>;
	can_get_free_hat?: Maybe<PlayerFields_Can_Get_Free_Hat>;
	code?: Maybe<PlayerFields_Code>;
	confirmations_by_email?: Maybe<PlayerFields_Confirmations_By_Email>;
	country?: Maybe<PlayerFields_Country>;
	createdAt?: Maybe<PlayerFields_CreatedAt>;
	created_by_admin?: Maybe<PlayerFields_Created_By_Admin>;
	email?: Maybe<PlayerFields_Email>;
	email_verify?: Maybe<PlayerFields_Email_Verify>;
	guess_games_played?: Maybe<PlayerFields_Guess_Games_Played>;
	guess_last_prize?: Maybe<PlayerFields_Guess_Last_Prize>;
	guess_time_finish?: Maybe<PlayerFields_Guess_Time_Finish>;
	guess_time_start?: Maybe<PlayerFields_Guess_Time_Start>;
	guess_total_time?: Maybe<PlayerFields_Guess_Total_Time>;
	hat?: Maybe<PlayerFields_Hat>;
	last_free_hat?: Maybe<PlayerFields_Last_Free_Hat>;
	login?: Maybe<PlayerFields_Login>;
	name?: Maybe<PlayerFields_Name>;
	number_combination?: Maybe<PlayerFields_Number_Combination>;
	number_to_guess?: Maybe<PlayerFields_Number_To_Guess>;
	password?: Maybe<PlayerFields_Password>;
	recovery_token?: Maybe<PlayerFields_Recovery_Token>;
	refferal_code?: Maybe<PlayerFields_Refferal_Code>;
	reffered_by?: Maybe<PlayerFields_Reffered_By>;
	reffered_users?: Maybe<PlayerFields_Reffered_Users>;
	reffiled?: Maybe<PlayerFields_Reffiled>;
	sapper_total_time?: Maybe<PlayerFields_Sapper_Total_Time>;
	today_mined_screen?: Maybe<PlayerFields_Today_Mined_Screen>;
	total_mined?: Maybe<PlayerFields_Total_Mined>;
	total_mined_screen?: Maybe<PlayerFields_Total_Mined_Screen>;
	total_withdraw?: Maybe<PlayerFields_Total_Withdraw>;
	two_factor_authentification?: Maybe<PlayerFields_Two_Factor_Authentification>;
	updatedAt?: Maybe<PlayerFields_UpdatedAt>;
	usdt?: Maybe<PlayerFields_Usdt>;
	wallet_address?: Maybe<PlayerFields_Wallet_Address>;
};

export type PlayerFields_Aics = {
	__typename?: "PlayerFields_aics";
	create?: Maybe<PlayerFields_Aics_Create>;
	delete?: Maybe<PlayerFields_Aics_Delete>;
	read?: Maybe<PlayerFields_Aics_Read>;
	update?: Maybe<PlayerFields_Aics_Update>;
};

export type PlayerFields_Aics_Create = {
	__typename?: "PlayerFields_aics_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Aics_Delete = {
	__typename?: "PlayerFields_aics_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Aics_Read = {
	__typename?: "PlayerFields_aics_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Aics_Update = {
	__typename?: "PlayerFields_aics_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Aics_Mined = {
	__typename?: "PlayerFields_aics_mined";
	create?: Maybe<PlayerFields_Aics_Mined_Create>;
	delete?: Maybe<PlayerFields_Aics_Mined_Delete>;
	read?: Maybe<PlayerFields_Aics_Mined_Read>;
	update?: Maybe<PlayerFields_Aics_Mined_Update>;
};

export type PlayerFields_Aics_Mined_Create = {
	__typename?: "PlayerFields_aics_mined_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Aics_Mined_Delete = {
	__typename?: "PlayerFields_aics_mined_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Aics_Mined_Read = {
	__typename?: "PlayerFields_aics_mined_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Aics_Mined_Update = {
	__typename?: "PlayerFields_aics_mined_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_AssignedAgent = {
	__typename?: "PlayerFields_assignedAgent";
	create?: Maybe<PlayerFields_AssignedAgent_Create>;
	delete?: Maybe<PlayerFields_AssignedAgent_Delete>;
	read?: Maybe<PlayerFields_AssignedAgent_Read>;
	update?: Maybe<PlayerFields_AssignedAgent_Update>;
};

export type PlayerFields_AssignedAgent_Create = {
	__typename?: "PlayerFields_assignedAgent_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_AssignedAgent_Delete = {
	__typename?: "PlayerFields_assignedAgent_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_AssignedAgent_Read = {
	__typename?: "PlayerFields_assignedAgent_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_AssignedAgent_Update = {
	__typename?: "PlayerFields_assignedAgent_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Can_Get_Free_Coin = {
	__typename?: "PlayerFields_can_get_free_coin";
	create?: Maybe<PlayerFields_Can_Get_Free_Coin_Create>;
	delete?: Maybe<PlayerFields_Can_Get_Free_Coin_Delete>;
	read?: Maybe<PlayerFields_Can_Get_Free_Coin_Read>;
	update?: Maybe<PlayerFields_Can_Get_Free_Coin_Update>;
};

export type PlayerFields_Can_Get_Free_Coin_Create = {
	__typename?: "PlayerFields_can_get_free_coin_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Can_Get_Free_Coin_Delete = {
	__typename?: "PlayerFields_can_get_free_coin_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Can_Get_Free_Coin_Read = {
	__typename?: "PlayerFields_can_get_free_coin_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Can_Get_Free_Coin_Update = {
	__typename?: "PlayerFields_can_get_free_coin_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Can_Get_Free_Hat = {
	__typename?: "PlayerFields_can_get_free_hat";
	create?: Maybe<PlayerFields_Can_Get_Free_Hat_Create>;
	delete?: Maybe<PlayerFields_Can_Get_Free_Hat_Delete>;
	read?: Maybe<PlayerFields_Can_Get_Free_Hat_Read>;
	update?: Maybe<PlayerFields_Can_Get_Free_Hat_Update>;
};

export type PlayerFields_Can_Get_Free_Hat_Create = {
	__typename?: "PlayerFields_can_get_free_hat_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Can_Get_Free_Hat_Delete = {
	__typename?: "PlayerFields_can_get_free_hat_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Can_Get_Free_Hat_Read = {
	__typename?: "PlayerFields_can_get_free_hat_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Can_Get_Free_Hat_Update = {
	__typename?: "PlayerFields_can_get_free_hat_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Code = {
	__typename?: "PlayerFields_code";
	create?: Maybe<PlayerFields_Code_Create>;
	delete?: Maybe<PlayerFields_Code_Delete>;
	read?: Maybe<PlayerFields_Code_Read>;
	update?: Maybe<PlayerFields_Code_Update>;
};

export type PlayerFields_Code_Create = {
	__typename?: "PlayerFields_code_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Code_Delete = {
	__typename?: "PlayerFields_code_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Code_Read = {
	__typename?: "PlayerFields_code_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Code_Update = {
	__typename?: "PlayerFields_code_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Confirmations_By_Email = {
	__typename?: "PlayerFields_confirmations_by_email";
	create?: Maybe<PlayerFields_Confirmations_By_Email_Create>;
	delete?: Maybe<PlayerFields_Confirmations_By_Email_Delete>;
	read?: Maybe<PlayerFields_Confirmations_By_Email_Read>;
	update?: Maybe<PlayerFields_Confirmations_By_Email_Update>;
};

export type PlayerFields_Confirmations_By_Email_Create = {
	__typename?: "PlayerFields_confirmations_by_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Confirmations_By_Email_Delete = {
	__typename?: "PlayerFields_confirmations_by_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Confirmations_By_Email_Read = {
	__typename?: "PlayerFields_confirmations_by_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Confirmations_By_Email_Update = {
	__typename?: "PlayerFields_confirmations_by_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Country = {
	__typename?: "PlayerFields_country";
	create?: Maybe<PlayerFields_Country_Create>;
	delete?: Maybe<PlayerFields_Country_Delete>;
	read?: Maybe<PlayerFields_Country_Read>;
	update?: Maybe<PlayerFields_Country_Update>;
};

export type PlayerFields_Country_Create = {
	__typename?: "PlayerFields_country_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Country_Delete = {
	__typename?: "PlayerFields_country_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Country_Read = {
	__typename?: "PlayerFields_country_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Country_Update = {
	__typename?: "PlayerFields_country_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_CreatedAt = {
	__typename?: "PlayerFields_createdAt";
	create?: Maybe<PlayerFields_CreatedAt_Create>;
	delete?: Maybe<PlayerFields_CreatedAt_Delete>;
	read?: Maybe<PlayerFields_CreatedAt_Read>;
	update?: Maybe<PlayerFields_CreatedAt_Update>;
};

export type PlayerFields_CreatedAt_Create = {
	__typename?: "PlayerFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_CreatedAt_Delete = {
	__typename?: "PlayerFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_CreatedAt_Read = {
	__typename?: "PlayerFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_CreatedAt_Update = {
	__typename?: "PlayerFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Created_By_Admin = {
	__typename?: "PlayerFields_created_by_admin";
	create?: Maybe<PlayerFields_Created_By_Admin_Create>;
	delete?: Maybe<PlayerFields_Created_By_Admin_Delete>;
	read?: Maybe<PlayerFields_Created_By_Admin_Read>;
	update?: Maybe<PlayerFields_Created_By_Admin_Update>;
};

export type PlayerFields_Created_By_Admin_Create = {
	__typename?: "PlayerFields_created_by_admin_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Created_By_Admin_Delete = {
	__typename?: "PlayerFields_created_by_admin_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Created_By_Admin_Read = {
	__typename?: "PlayerFields_created_by_admin_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Created_By_Admin_Update = {
	__typename?: "PlayerFields_created_by_admin_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Email = {
	__typename?: "PlayerFields_email";
	create?: Maybe<PlayerFields_Email_Create>;
	delete?: Maybe<PlayerFields_Email_Delete>;
	read?: Maybe<PlayerFields_Email_Read>;
	update?: Maybe<PlayerFields_Email_Update>;
};

export type PlayerFields_Email_Create = {
	__typename?: "PlayerFields_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Email_Delete = {
	__typename?: "PlayerFields_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Email_Read = {
	__typename?: "PlayerFields_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Email_Update = {
	__typename?: "PlayerFields_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Email_Verify = {
	__typename?: "PlayerFields_email_verify";
	create?: Maybe<PlayerFields_Email_Verify_Create>;
	delete?: Maybe<PlayerFields_Email_Verify_Delete>;
	read?: Maybe<PlayerFields_Email_Verify_Read>;
	update?: Maybe<PlayerFields_Email_Verify_Update>;
};

export type PlayerFields_Email_Verify_Create = {
	__typename?: "PlayerFields_email_verify_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Email_Verify_Delete = {
	__typename?: "PlayerFields_email_verify_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Email_Verify_Read = {
	__typename?: "PlayerFields_email_verify_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Email_Verify_Update = {
	__typename?: "PlayerFields_email_verify_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Games_Played = {
	__typename?: "PlayerFields_guess_games_played";
	create?: Maybe<PlayerFields_Guess_Games_Played_Create>;
	delete?: Maybe<PlayerFields_Guess_Games_Played_Delete>;
	read?: Maybe<PlayerFields_Guess_Games_Played_Read>;
	update?: Maybe<PlayerFields_Guess_Games_Played_Update>;
};

export type PlayerFields_Guess_Games_Played_Create = {
	__typename?: "PlayerFields_guess_games_played_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Games_Played_Delete = {
	__typename?: "PlayerFields_guess_games_played_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Games_Played_Read = {
	__typename?: "PlayerFields_guess_games_played_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Games_Played_Update = {
	__typename?: "PlayerFields_guess_games_played_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Last_Prize = {
	__typename?: "PlayerFields_guess_last_prize";
	create?: Maybe<PlayerFields_Guess_Last_Prize_Create>;
	delete?: Maybe<PlayerFields_Guess_Last_Prize_Delete>;
	read?: Maybe<PlayerFields_Guess_Last_Prize_Read>;
	update?: Maybe<PlayerFields_Guess_Last_Prize_Update>;
};

export type PlayerFields_Guess_Last_Prize_Create = {
	__typename?: "PlayerFields_guess_last_prize_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Last_Prize_Delete = {
	__typename?: "PlayerFields_guess_last_prize_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Last_Prize_Read = {
	__typename?: "PlayerFields_guess_last_prize_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Last_Prize_Update = {
	__typename?: "PlayerFields_guess_last_prize_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Time_Finish = {
	__typename?: "PlayerFields_guess_time_finish";
	create?: Maybe<PlayerFields_Guess_Time_Finish_Create>;
	delete?: Maybe<PlayerFields_Guess_Time_Finish_Delete>;
	read?: Maybe<PlayerFields_Guess_Time_Finish_Read>;
	update?: Maybe<PlayerFields_Guess_Time_Finish_Update>;
};

export type PlayerFields_Guess_Time_Finish_Create = {
	__typename?: "PlayerFields_guess_time_finish_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Time_Finish_Delete = {
	__typename?: "PlayerFields_guess_time_finish_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Time_Finish_Read = {
	__typename?: "PlayerFields_guess_time_finish_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Time_Finish_Update = {
	__typename?: "PlayerFields_guess_time_finish_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Time_Start = {
	__typename?: "PlayerFields_guess_time_start";
	create?: Maybe<PlayerFields_Guess_Time_Start_Create>;
	delete?: Maybe<PlayerFields_Guess_Time_Start_Delete>;
	read?: Maybe<PlayerFields_Guess_Time_Start_Read>;
	update?: Maybe<PlayerFields_Guess_Time_Start_Update>;
};

export type PlayerFields_Guess_Time_Start_Create = {
	__typename?: "PlayerFields_guess_time_start_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Time_Start_Delete = {
	__typename?: "PlayerFields_guess_time_start_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Time_Start_Read = {
	__typename?: "PlayerFields_guess_time_start_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Time_Start_Update = {
	__typename?: "PlayerFields_guess_time_start_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Total_Time = {
	__typename?: "PlayerFields_guess_total_time";
	create?: Maybe<PlayerFields_Guess_Total_Time_Create>;
	delete?: Maybe<PlayerFields_Guess_Total_Time_Delete>;
	read?: Maybe<PlayerFields_Guess_Total_Time_Read>;
	update?: Maybe<PlayerFields_Guess_Total_Time_Update>;
};

export type PlayerFields_Guess_Total_Time_Create = {
	__typename?: "PlayerFields_guess_total_time_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Total_Time_Delete = {
	__typename?: "PlayerFields_guess_total_time_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Total_Time_Read = {
	__typename?: "PlayerFields_guess_total_time_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Guess_Total_Time_Update = {
	__typename?: "PlayerFields_guess_total_time_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Hat = {
	__typename?: "PlayerFields_hat";
	create?: Maybe<PlayerFields_Hat_Create>;
	delete?: Maybe<PlayerFields_Hat_Delete>;
	read?: Maybe<PlayerFields_Hat_Read>;
	update?: Maybe<PlayerFields_Hat_Update>;
};

export type PlayerFields_Hat_Create = {
	__typename?: "PlayerFields_hat_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Hat_Delete = {
	__typename?: "PlayerFields_hat_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Hat_Read = {
	__typename?: "PlayerFields_hat_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Hat_Update = {
	__typename?: "PlayerFields_hat_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Last_Free_Hat = {
	__typename?: "PlayerFields_last_free_hat";
	create?: Maybe<PlayerFields_Last_Free_Hat_Create>;
	delete?: Maybe<PlayerFields_Last_Free_Hat_Delete>;
	read?: Maybe<PlayerFields_Last_Free_Hat_Read>;
	update?: Maybe<PlayerFields_Last_Free_Hat_Update>;
};

export type PlayerFields_Last_Free_Hat_Create = {
	__typename?: "PlayerFields_last_free_hat_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Last_Free_Hat_Delete = {
	__typename?: "PlayerFields_last_free_hat_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Last_Free_Hat_Read = {
	__typename?: "PlayerFields_last_free_hat_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Last_Free_Hat_Update = {
	__typename?: "PlayerFields_last_free_hat_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Login = {
	__typename?: "PlayerFields_login";
	create?: Maybe<PlayerFields_Login_Create>;
	delete?: Maybe<PlayerFields_Login_Delete>;
	read?: Maybe<PlayerFields_Login_Read>;
	update?: Maybe<PlayerFields_Login_Update>;
};

export type PlayerFields_Login_Create = {
	__typename?: "PlayerFields_login_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Login_Delete = {
	__typename?: "PlayerFields_login_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Login_Read = {
	__typename?: "PlayerFields_login_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Login_Update = {
	__typename?: "PlayerFields_login_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Name = {
	__typename?: "PlayerFields_name";
	create?: Maybe<PlayerFields_Name_Create>;
	delete?: Maybe<PlayerFields_Name_Delete>;
	read?: Maybe<PlayerFields_Name_Read>;
	update?: Maybe<PlayerFields_Name_Update>;
};

export type PlayerFields_Name_Create = {
	__typename?: "PlayerFields_name_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Name_Delete = {
	__typename?: "PlayerFields_name_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Name_Read = {
	__typename?: "PlayerFields_name_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Name_Update = {
	__typename?: "PlayerFields_name_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Number_Combination = {
	__typename?: "PlayerFields_number_combination";
	create?: Maybe<PlayerFields_Number_Combination_Create>;
	delete?: Maybe<PlayerFields_Number_Combination_Delete>;
	read?: Maybe<PlayerFields_Number_Combination_Read>;
	update?: Maybe<PlayerFields_Number_Combination_Update>;
};

export type PlayerFields_Number_Combination_Create = {
	__typename?: "PlayerFields_number_combination_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Number_Combination_Delete = {
	__typename?: "PlayerFields_number_combination_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Number_Combination_Read = {
	__typename?: "PlayerFields_number_combination_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Number_Combination_Update = {
	__typename?: "PlayerFields_number_combination_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Number_To_Guess = {
	__typename?: "PlayerFields_number_to_guess";
	create?: Maybe<PlayerFields_Number_To_Guess_Create>;
	delete?: Maybe<PlayerFields_Number_To_Guess_Delete>;
	read?: Maybe<PlayerFields_Number_To_Guess_Read>;
	update?: Maybe<PlayerFields_Number_To_Guess_Update>;
};

export type PlayerFields_Number_To_Guess_Create = {
	__typename?: "PlayerFields_number_to_guess_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Number_To_Guess_Delete = {
	__typename?: "PlayerFields_number_to_guess_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Number_To_Guess_Read = {
	__typename?: "PlayerFields_number_to_guess_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Number_To_Guess_Update = {
	__typename?: "PlayerFields_number_to_guess_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Password = {
	__typename?: "PlayerFields_password";
	create?: Maybe<PlayerFields_Password_Create>;
	delete?: Maybe<PlayerFields_Password_Delete>;
	read?: Maybe<PlayerFields_Password_Read>;
	update?: Maybe<PlayerFields_Password_Update>;
};

export type PlayerFields_Password_Create = {
	__typename?: "PlayerFields_password_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Password_Delete = {
	__typename?: "PlayerFields_password_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Password_Read = {
	__typename?: "PlayerFields_password_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Password_Update = {
	__typename?: "PlayerFields_password_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Recovery_Token = {
	__typename?: "PlayerFields_recovery_token";
	create?: Maybe<PlayerFields_Recovery_Token_Create>;
	delete?: Maybe<PlayerFields_Recovery_Token_Delete>;
	read?: Maybe<PlayerFields_Recovery_Token_Read>;
	update?: Maybe<PlayerFields_Recovery_Token_Update>;
};

export type PlayerFields_Recovery_Token_Create = {
	__typename?: "PlayerFields_recovery_token_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Recovery_Token_Delete = {
	__typename?: "PlayerFields_recovery_token_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Recovery_Token_Read = {
	__typename?: "PlayerFields_recovery_token_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Recovery_Token_Update = {
	__typename?: "PlayerFields_recovery_token_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Refferal_Code = {
	__typename?: "PlayerFields_refferal_code";
	create?: Maybe<PlayerFields_Refferal_Code_Create>;
	delete?: Maybe<PlayerFields_Refferal_Code_Delete>;
	read?: Maybe<PlayerFields_Refferal_Code_Read>;
	update?: Maybe<PlayerFields_Refferal_Code_Update>;
};

export type PlayerFields_Refferal_Code_Create = {
	__typename?: "PlayerFields_refferal_code_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Refferal_Code_Delete = {
	__typename?: "PlayerFields_refferal_code_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Refferal_Code_Read = {
	__typename?: "PlayerFields_refferal_code_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Refferal_Code_Update = {
	__typename?: "PlayerFields_refferal_code_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_By = {
	__typename?: "PlayerFields_reffered_by";
	create?: Maybe<PlayerFields_Reffered_By_Create>;
	delete?: Maybe<PlayerFields_Reffered_By_Delete>;
	read?: Maybe<PlayerFields_Reffered_By_Read>;
	update?: Maybe<PlayerFields_Reffered_By_Update>;
};

export type PlayerFields_Reffered_By_Create = {
	__typename?: "PlayerFields_reffered_by_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_By_Delete = {
	__typename?: "PlayerFields_reffered_by_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_By_Read = {
	__typename?: "PlayerFields_reffered_by_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_By_Update = {
	__typename?: "PlayerFields_reffered_by_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users = {
	__typename?: "PlayerFields_reffered_users";
	create?: Maybe<PlayerFields_Reffered_Users_Create>;
	delete?: Maybe<PlayerFields_Reffered_Users_Delete>;
	fields?: Maybe<PlayerFields_Reffered_Users_Fields>;
	read?: Maybe<PlayerFields_Reffered_Users_Read>;
	update?: Maybe<PlayerFields_Reffered_Users_Update>;
};

export type PlayerFields_Reffered_Users_Create = {
	__typename?: "PlayerFields_reffered_users_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Delete = {
	__typename?: "PlayerFields_reffered_users_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Fields = {
	__typename?: "PlayerFields_reffered_users_Fields";
	date?: Maybe<PlayerFields_Reffered_Users_Date>;
	id?: Maybe<PlayerFields_Reffered_Users_Id>;
	reffered_email?: Maybe<PlayerFields_Reffered_Users_Reffered_Email>;
};

export type PlayerFields_Reffered_Users_Read = {
	__typename?: "PlayerFields_reffered_users_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Update = {
	__typename?: "PlayerFields_reffered_users_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Date = {
	__typename?: "PlayerFields_reffered_users_date";
	create?: Maybe<PlayerFields_Reffered_Users_Date_Create>;
	delete?: Maybe<PlayerFields_Reffered_Users_Date_Delete>;
	read?: Maybe<PlayerFields_Reffered_Users_Date_Read>;
	update?: Maybe<PlayerFields_Reffered_Users_Date_Update>;
};

export type PlayerFields_Reffered_Users_Date_Create = {
	__typename?: "PlayerFields_reffered_users_date_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Date_Delete = {
	__typename?: "PlayerFields_reffered_users_date_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Date_Read = {
	__typename?: "PlayerFields_reffered_users_date_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Date_Update = {
	__typename?: "PlayerFields_reffered_users_date_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Id = {
	__typename?: "PlayerFields_reffered_users_id";
	create?: Maybe<PlayerFields_Reffered_Users_Id_Create>;
	delete?: Maybe<PlayerFields_Reffered_Users_Id_Delete>;
	read?: Maybe<PlayerFields_Reffered_Users_Id_Read>;
	update?: Maybe<PlayerFields_Reffered_Users_Id_Update>;
};

export type PlayerFields_Reffered_Users_Id_Create = {
	__typename?: "PlayerFields_reffered_users_id_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Id_Delete = {
	__typename?: "PlayerFields_reffered_users_id_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Id_Read = {
	__typename?: "PlayerFields_reffered_users_id_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Id_Update = {
	__typename?: "PlayerFields_reffered_users_id_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Reffered_Email = {
	__typename?: "PlayerFields_reffered_users_reffered_email";
	create?: Maybe<PlayerFields_Reffered_Users_Reffered_Email_Create>;
	delete?: Maybe<PlayerFields_Reffered_Users_Reffered_Email_Delete>;
	read?: Maybe<PlayerFields_Reffered_Users_Reffered_Email_Read>;
	update?: Maybe<PlayerFields_Reffered_Users_Reffered_Email_Update>;
};

export type PlayerFields_Reffered_Users_Reffered_Email_Create = {
	__typename?: "PlayerFields_reffered_users_reffered_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Reffered_Email_Delete = {
	__typename?: "PlayerFields_reffered_users_reffered_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Reffered_Email_Read = {
	__typename?: "PlayerFields_reffered_users_reffered_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffered_Users_Reffered_Email_Update = {
	__typename?: "PlayerFields_reffered_users_reffered_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffiled = {
	__typename?: "PlayerFields_reffiled";
	create?: Maybe<PlayerFields_Reffiled_Create>;
	delete?: Maybe<PlayerFields_Reffiled_Delete>;
	read?: Maybe<PlayerFields_Reffiled_Read>;
	update?: Maybe<PlayerFields_Reffiled_Update>;
};

export type PlayerFields_Reffiled_Create = {
	__typename?: "PlayerFields_reffiled_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffiled_Delete = {
	__typename?: "PlayerFields_reffiled_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffiled_Read = {
	__typename?: "PlayerFields_reffiled_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Reffiled_Update = {
	__typename?: "PlayerFields_reffiled_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Sapper_Total_Time = {
	__typename?: "PlayerFields_sapper_total_time";
	create?: Maybe<PlayerFields_Sapper_Total_Time_Create>;
	delete?: Maybe<PlayerFields_Sapper_Total_Time_Delete>;
	read?: Maybe<PlayerFields_Sapper_Total_Time_Read>;
	update?: Maybe<PlayerFields_Sapper_Total_Time_Update>;
};

export type PlayerFields_Sapper_Total_Time_Create = {
	__typename?: "PlayerFields_sapper_total_time_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Sapper_Total_Time_Delete = {
	__typename?: "PlayerFields_sapper_total_time_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Sapper_Total_Time_Read = {
	__typename?: "PlayerFields_sapper_total_time_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Sapper_Total_Time_Update = {
	__typename?: "PlayerFields_sapper_total_time_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Today_Mined_Screen = {
	__typename?: "PlayerFields_today_mined_screen";
	create?: Maybe<PlayerFields_Today_Mined_Screen_Create>;
	delete?: Maybe<PlayerFields_Today_Mined_Screen_Delete>;
	read?: Maybe<PlayerFields_Today_Mined_Screen_Read>;
	update?: Maybe<PlayerFields_Today_Mined_Screen_Update>;
};

export type PlayerFields_Today_Mined_Screen_Create = {
	__typename?: "PlayerFields_today_mined_screen_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Today_Mined_Screen_Delete = {
	__typename?: "PlayerFields_today_mined_screen_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Today_Mined_Screen_Read = {
	__typename?: "PlayerFields_today_mined_screen_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Today_Mined_Screen_Update = {
	__typename?: "PlayerFields_today_mined_screen_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Mined = {
	__typename?: "PlayerFields_total_mined";
	create?: Maybe<PlayerFields_Total_Mined_Create>;
	delete?: Maybe<PlayerFields_Total_Mined_Delete>;
	read?: Maybe<PlayerFields_Total_Mined_Read>;
	update?: Maybe<PlayerFields_Total_Mined_Update>;
};

export type PlayerFields_Total_Mined_Create = {
	__typename?: "PlayerFields_total_mined_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Mined_Delete = {
	__typename?: "PlayerFields_total_mined_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Mined_Read = {
	__typename?: "PlayerFields_total_mined_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Mined_Update = {
	__typename?: "PlayerFields_total_mined_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Mined_Screen = {
	__typename?: "PlayerFields_total_mined_screen";
	create?: Maybe<PlayerFields_Total_Mined_Screen_Create>;
	delete?: Maybe<PlayerFields_Total_Mined_Screen_Delete>;
	read?: Maybe<PlayerFields_Total_Mined_Screen_Read>;
	update?: Maybe<PlayerFields_Total_Mined_Screen_Update>;
};

export type PlayerFields_Total_Mined_Screen_Create = {
	__typename?: "PlayerFields_total_mined_screen_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Mined_Screen_Delete = {
	__typename?: "PlayerFields_total_mined_screen_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Mined_Screen_Read = {
	__typename?: "PlayerFields_total_mined_screen_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Mined_Screen_Update = {
	__typename?: "PlayerFields_total_mined_screen_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Withdraw = {
	__typename?: "PlayerFields_total_withdraw";
	create?: Maybe<PlayerFields_Total_Withdraw_Create>;
	delete?: Maybe<PlayerFields_Total_Withdraw_Delete>;
	read?: Maybe<PlayerFields_Total_Withdraw_Read>;
	update?: Maybe<PlayerFields_Total_Withdraw_Update>;
};

export type PlayerFields_Total_Withdraw_Create = {
	__typename?: "PlayerFields_total_withdraw_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Withdraw_Delete = {
	__typename?: "PlayerFields_total_withdraw_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Withdraw_Read = {
	__typename?: "PlayerFields_total_withdraw_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Total_Withdraw_Update = {
	__typename?: "PlayerFields_total_withdraw_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Two_Factor_Authentification = {
	__typename?: "PlayerFields_two_factor_authentification";
	create?: Maybe<PlayerFields_Two_Factor_Authentification_Create>;
	delete?: Maybe<PlayerFields_Two_Factor_Authentification_Delete>;
	read?: Maybe<PlayerFields_Two_Factor_Authentification_Read>;
	update?: Maybe<PlayerFields_Two_Factor_Authentification_Update>;
};

export type PlayerFields_Two_Factor_Authentification_Create = {
	__typename?: "PlayerFields_two_factor_authentification_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Two_Factor_Authentification_Delete = {
	__typename?: "PlayerFields_two_factor_authentification_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Two_Factor_Authentification_Read = {
	__typename?: "PlayerFields_two_factor_authentification_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Two_Factor_Authentification_Update = {
	__typename?: "PlayerFields_two_factor_authentification_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_UpdatedAt = {
	__typename?: "PlayerFields_updatedAt";
	create?: Maybe<PlayerFields_UpdatedAt_Create>;
	delete?: Maybe<PlayerFields_UpdatedAt_Delete>;
	read?: Maybe<PlayerFields_UpdatedAt_Read>;
	update?: Maybe<PlayerFields_UpdatedAt_Update>;
};

export type PlayerFields_UpdatedAt_Create = {
	__typename?: "PlayerFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_UpdatedAt_Delete = {
	__typename?: "PlayerFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_UpdatedAt_Read = {
	__typename?: "PlayerFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_UpdatedAt_Update = {
	__typename?: "PlayerFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Usdt = {
	__typename?: "PlayerFields_usdt";
	create?: Maybe<PlayerFields_Usdt_Create>;
	delete?: Maybe<PlayerFields_Usdt_Delete>;
	read?: Maybe<PlayerFields_Usdt_Read>;
	update?: Maybe<PlayerFields_Usdt_Update>;
};

export type PlayerFields_Usdt_Create = {
	__typename?: "PlayerFields_usdt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Usdt_Delete = {
	__typename?: "PlayerFields_usdt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Usdt_Read = {
	__typename?: "PlayerFields_usdt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Usdt_Update = {
	__typename?: "PlayerFields_usdt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Wallet_Address = {
	__typename?: "PlayerFields_wallet_address";
	create?: Maybe<PlayerFields_Wallet_Address_Create>;
	delete?: Maybe<PlayerFields_Wallet_Address_Delete>;
	read?: Maybe<PlayerFields_Wallet_Address_Read>;
	update?: Maybe<PlayerFields_Wallet_Address_Update>;
};

export type PlayerFields_Wallet_Address_Create = {
	__typename?: "PlayerFields_wallet_address_Create";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Wallet_Address_Delete = {
	__typename?: "PlayerFields_wallet_address_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Wallet_Address_Read = {
	__typename?: "PlayerFields_wallet_address_Read";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerFields_Wallet_Address_Update = {
	__typename?: "PlayerFields_wallet_address_Update";
	permission: Scalars["Boolean"]["output"];
};

export type PlayerReadAccess = {
	__typename?: "PlayerReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PlayerReadDocAccess = {
	__typename?: "PlayerReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PlayerUpdateAccess = {
	__typename?: "PlayerUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type PlayerUpdateDocAccess = {
	__typename?: "PlayerUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Player_Reffered_Users = {
	__typename?: "Player_Reffered_users";
	date?: Maybe<Scalars["DateTime"]["output"]>;
	id?: Maybe<Scalars["String"]["output"]>;
	reffered_email?: Maybe<Scalars["EmailAddress"]["output"]>;
};

export type Player_Aics_Mined_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Aics_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_AssignedAgent_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	equals?: InputMaybe<Scalars["JSON"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	not_equals?: InputMaybe<Scalars["JSON"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
};

export type Player_Can_Get_Free_Coin_Operator = {
	equals?: InputMaybe<Scalars["Boolean"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	not_equals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Player_Can_Get_Free_Hat_Operator = {
	equals?: InputMaybe<Scalars["Boolean"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	not_equals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Player_Code_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Confirmations_By_Email_Operator = {
	equals?: InputMaybe<Scalars["Boolean"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	not_equals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Player_Country_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Player_Created_By_Admin_Operator = {
	equals?: InputMaybe<Scalars["Boolean"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	not_equals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Player_Email_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	contains?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	like?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
};

export type Player_Email_Verify_Operator = {
	equals?: InputMaybe<Scalars["Boolean"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	not_equals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Player_Guess_Games_Played_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Guess_Last_Prize_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Guess_Time_Finish_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Guess_Time_Start_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Guess_Total_Time_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Hat_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Player_Last_Free_Hat_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Login_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Name_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Number_Combination_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Number_To_Guess_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Password_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Recovery_Token_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Refferal_Code_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Reffered_By_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Reffered_Users__Date_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Player_Reffered_Users__Id_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Reffered_Users__Reffered_Email_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	contains?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	like?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
};

export type Player_Reffiled_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Sapper_Total_Time_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Today_Mined_Screen_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Total_Mined_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Total_Mined_Screen_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Total_Withdraw_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Two_Factor_Authentification_Operator = {
	equals?: InputMaybe<Scalars["Boolean"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	not_equals?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Player_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Player_Usdt_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Player_Wallet_Address_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Player_Where = {
	AND?: InputMaybe<Array<InputMaybe<Player_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Player_Where_Or>>>;
	aics?: InputMaybe<Player_Aics_Operator>;
	aics_mined?: InputMaybe<Player_Aics_Mined_Operator>;
	assignedAgent?: InputMaybe<Player_AssignedAgent_Operator>;
	can_get_free_coin?: InputMaybe<Player_Can_Get_Free_Coin_Operator>;
	can_get_free_hat?: InputMaybe<Player_Can_Get_Free_Hat_Operator>;
	code?: InputMaybe<Player_Code_Operator>;
	confirmations_by_email?: InputMaybe<Player_Confirmations_By_Email_Operator>;
	country?: InputMaybe<Player_Country_Operator>;
	createdAt?: InputMaybe<Player_CreatedAt_Operator>;
	created_by_admin?: InputMaybe<Player_Created_By_Admin_Operator>;
	email?: InputMaybe<Player_Email_Operator>;
	email_verify?: InputMaybe<Player_Email_Verify_Operator>;
	guess_games_played?: InputMaybe<Player_Guess_Games_Played_Operator>;
	guess_last_prize?: InputMaybe<Player_Guess_Last_Prize_Operator>;
	guess_time_finish?: InputMaybe<Player_Guess_Time_Finish_Operator>;
	guess_time_start?: InputMaybe<Player_Guess_Time_Start_Operator>;
	guess_total_time?: InputMaybe<Player_Guess_Total_Time_Operator>;
	hat?: InputMaybe<Player_Hat_Operator>;
	id?: InputMaybe<Player_Id_Operator>;
	last_free_hat?: InputMaybe<Player_Last_Free_Hat_Operator>;
	login?: InputMaybe<Player_Login_Operator>;
	name?: InputMaybe<Player_Name_Operator>;
	number_combination?: InputMaybe<Player_Number_Combination_Operator>;
	number_to_guess?: InputMaybe<Player_Number_To_Guess_Operator>;
	password?: InputMaybe<Player_Password_Operator>;
	recovery_token?: InputMaybe<Player_Recovery_Token_Operator>;
	refferal_code?: InputMaybe<Player_Refferal_Code_Operator>;
	reffered_by?: InputMaybe<Player_Reffered_By_Operator>;
	reffered_users__date?: InputMaybe<Player_Reffered_Users__Date_Operator>;
	reffered_users__id?: InputMaybe<Player_Reffered_Users__Id_Operator>;
	reffered_users__reffered_email?: InputMaybe<Player_Reffered_Users__Reffered_Email_Operator>;
	reffiled?: InputMaybe<Player_Reffiled_Operator>;
	sapper_total_time?: InputMaybe<Player_Sapper_Total_Time_Operator>;
	today_mined_screen?: InputMaybe<Player_Today_Mined_Screen_Operator>;
	total_mined?: InputMaybe<Player_Total_Mined_Operator>;
	total_mined_screen?: InputMaybe<Player_Total_Mined_Screen_Operator>;
	total_withdraw?: InputMaybe<Player_Total_Withdraw_Operator>;
	two_factor_authentification?: InputMaybe<Player_Two_Factor_Authentification_Operator>;
	updatedAt?: InputMaybe<Player_UpdatedAt_Operator>;
	usdt?: InputMaybe<Player_Usdt_Operator>;
	wallet_address?: InputMaybe<Player_Wallet_Address_Operator>;
};

export type Player_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Player_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Player_Where_Or>>>;
	aics?: InputMaybe<Player_Aics_Operator>;
	aics_mined?: InputMaybe<Player_Aics_Mined_Operator>;
	assignedAgent?: InputMaybe<Player_AssignedAgent_Operator>;
	can_get_free_coin?: InputMaybe<Player_Can_Get_Free_Coin_Operator>;
	can_get_free_hat?: InputMaybe<Player_Can_Get_Free_Hat_Operator>;
	code?: InputMaybe<Player_Code_Operator>;
	confirmations_by_email?: InputMaybe<Player_Confirmations_By_Email_Operator>;
	country?: InputMaybe<Player_Country_Operator>;
	createdAt?: InputMaybe<Player_CreatedAt_Operator>;
	created_by_admin?: InputMaybe<Player_Created_By_Admin_Operator>;
	email?: InputMaybe<Player_Email_Operator>;
	email_verify?: InputMaybe<Player_Email_Verify_Operator>;
	guess_games_played?: InputMaybe<Player_Guess_Games_Played_Operator>;
	guess_last_prize?: InputMaybe<Player_Guess_Last_Prize_Operator>;
	guess_time_finish?: InputMaybe<Player_Guess_Time_Finish_Operator>;
	guess_time_start?: InputMaybe<Player_Guess_Time_Start_Operator>;
	guess_total_time?: InputMaybe<Player_Guess_Total_Time_Operator>;
	hat?: InputMaybe<Player_Hat_Operator>;
	id?: InputMaybe<Player_Id_Operator>;
	last_free_hat?: InputMaybe<Player_Last_Free_Hat_Operator>;
	login?: InputMaybe<Player_Login_Operator>;
	name?: InputMaybe<Player_Name_Operator>;
	number_combination?: InputMaybe<Player_Number_Combination_Operator>;
	number_to_guess?: InputMaybe<Player_Number_To_Guess_Operator>;
	password?: InputMaybe<Player_Password_Operator>;
	recovery_token?: InputMaybe<Player_Recovery_Token_Operator>;
	refferal_code?: InputMaybe<Player_Refferal_Code_Operator>;
	reffered_by?: InputMaybe<Player_Reffered_By_Operator>;
	reffered_users__date?: InputMaybe<Player_Reffered_Users__Date_Operator>;
	reffered_users__id?: InputMaybe<Player_Reffered_Users__Id_Operator>;
	reffered_users__reffered_email?: InputMaybe<Player_Reffered_Users__Reffered_Email_Operator>;
	reffiled?: InputMaybe<Player_Reffiled_Operator>;
	sapper_total_time?: InputMaybe<Player_Sapper_Total_Time_Operator>;
	today_mined_screen?: InputMaybe<Player_Today_Mined_Screen_Operator>;
	total_mined?: InputMaybe<Player_Total_Mined_Operator>;
	total_mined_screen?: InputMaybe<Player_Total_Mined_Screen_Operator>;
	total_withdraw?: InputMaybe<Player_Total_Withdraw_Operator>;
	two_factor_authentification?: InputMaybe<Player_Two_Factor_Authentification_Operator>;
	updatedAt?: InputMaybe<Player_UpdatedAt_Operator>;
	usdt?: InputMaybe<Player_Usdt_Operator>;
	wallet_address?: InputMaybe<Player_Wallet_Address_Operator>;
};

export type Player_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Player_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Player_Where_Or>>>;
	aics?: InputMaybe<Player_Aics_Operator>;
	aics_mined?: InputMaybe<Player_Aics_Mined_Operator>;
	assignedAgent?: InputMaybe<Player_AssignedAgent_Operator>;
	can_get_free_coin?: InputMaybe<Player_Can_Get_Free_Coin_Operator>;
	can_get_free_hat?: InputMaybe<Player_Can_Get_Free_Hat_Operator>;
	code?: InputMaybe<Player_Code_Operator>;
	confirmations_by_email?: InputMaybe<Player_Confirmations_By_Email_Operator>;
	country?: InputMaybe<Player_Country_Operator>;
	createdAt?: InputMaybe<Player_CreatedAt_Operator>;
	created_by_admin?: InputMaybe<Player_Created_By_Admin_Operator>;
	email?: InputMaybe<Player_Email_Operator>;
	email_verify?: InputMaybe<Player_Email_Verify_Operator>;
	guess_games_played?: InputMaybe<Player_Guess_Games_Played_Operator>;
	guess_last_prize?: InputMaybe<Player_Guess_Last_Prize_Operator>;
	guess_time_finish?: InputMaybe<Player_Guess_Time_Finish_Operator>;
	guess_time_start?: InputMaybe<Player_Guess_Time_Start_Operator>;
	guess_total_time?: InputMaybe<Player_Guess_Total_Time_Operator>;
	hat?: InputMaybe<Player_Hat_Operator>;
	id?: InputMaybe<Player_Id_Operator>;
	last_free_hat?: InputMaybe<Player_Last_Free_Hat_Operator>;
	login?: InputMaybe<Player_Login_Operator>;
	name?: InputMaybe<Player_Name_Operator>;
	number_combination?: InputMaybe<Player_Number_Combination_Operator>;
	number_to_guess?: InputMaybe<Player_Number_To_Guess_Operator>;
	password?: InputMaybe<Player_Password_Operator>;
	recovery_token?: InputMaybe<Player_Recovery_Token_Operator>;
	refferal_code?: InputMaybe<Player_Refferal_Code_Operator>;
	reffered_by?: InputMaybe<Player_Reffered_By_Operator>;
	reffered_users__date?: InputMaybe<Player_Reffered_Users__Date_Operator>;
	reffered_users__id?: InputMaybe<Player_Reffered_Users__Id_Operator>;
	reffered_users__reffered_email?: InputMaybe<Player_Reffered_Users__Reffered_Email_Operator>;
	reffiled?: InputMaybe<Player_Reffiled_Operator>;
	sapper_total_time?: InputMaybe<Player_Sapper_Total_Time_Operator>;
	today_mined_screen?: InputMaybe<Player_Today_Mined_Screen_Operator>;
	total_mined?: InputMaybe<Player_Total_Mined_Operator>;
	total_mined_screen?: InputMaybe<Player_Total_Mined_Screen_Operator>;
	total_withdraw?: InputMaybe<Player_Total_Withdraw_Operator>;
	two_factor_authentification?: InputMaybe<Player_Two_Factor_Authentification_Operator>;
	updatedAt?: InputMaybe<Player_UpdatedAt_Operator>;
	usdt?: InputMaybe<Player_Usdt_Operator>;
	wallet_address?: InputMaybe<Player_Wallet_Address_Operator>;
};

export type Players = {
	__typename?: "Players";
	docs?: Maybe<Array<Maybe<Player>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type Query = {
	__typename?: "Query";
	About?: Maybe<About>;
	Abouts?: Maybe<Abouts>;
	Access?: Maybe<Access>;
	Deposit?: Maybe<Deposit>;
	Deposits?: Maybe<Deposits>;
	ExchangeRate?: Maybe<ExchangeRate>;
	ExchangeRates?: Maybe<ExchangeRates>;
	Feedback?: Maybe<Feedback>;
	Feedbacks?: Maybe<Feedbacks>;
	Leaderboard?: Maybe<Leaderboard>;
	Leaderboards?: Maybe<Leaderboards>;
	Media?: Maybe<Media>;
	MinimalDeposit?: Maybe<MinimalDeposit>;
	MinimalDeposits?: Maybe<MinimalDeposits>;
	PayloadPreference?: Maybe<PayloadPreference>;
	PayloadPreferences?: Maybe<PayloadPreferences>;
	Player?: Maybe<Player>;
	Players?: Maybe<Players>;
	Saved_transaction?: Maybe<Saved_Transaction>;
	Saved_transactions?: Maybe<Saved_Transactions>;
	Transaction?: Maybe<Transaction>;
	Transactions?: Maybe<Transactions>;
	User?: Maybe<User>;
	Users?: Maybe<Users>;
	Wallet?: Maybe<Wallet>;
	Wallets?: Maybe<Wallets>;
	Withdrawal?: Maybe<Withdrawal>;
	Withdrawals?: Maybe<Withdrawals>;
	allMedia?: Maybe<AllMedia>;
	canGetFreeHat: Scalars["Boolean"]["output"];
	countAbouts?: Maybe<CountAbouts>;
	countDeposits?: Maybe<CountDeposits>;
	countExchangeRates?: Maybe<CountExchangeRates>;
	countFeedbacks?: Maybe<CountFeedbacks>;
	countLeaderboards?: Maybe<CountLeaderboards>;
	countMinimalDeposits?: Maybe<CountMinimalDeposits>;
	countPayloadPreferences?: Maybe<CountPayloadPreferences>;
	countPlayers?: Maybe<CountPlayers>;
	countSaved_transactions?: Maybe<CountSaved_Transactions>;
	countTransactions?: Maybe<CountTransactions>;
	countUsers?: Maybe<CountUsers>;
	countWallets?: Maybe<CountWallets>;
	countWithdrawals?: Maybe<CountWithdrawals>;
	countallMedia?: Maybe<CountallMedia>;
	docAccessAbout?: Maybe<AboutDocAccess>;
	docAccessDeposit?: Maybe<DepositDocAccess>;
	docAccessExchangeRate?: Maybe<Exchange_RateDocAccess>;
	docAccessFeedback?: Maybe<FeedbackDocAccess>;
	docAccessLeaderboard?: Maybe<LeaderboardsDocAccess>;
	docAccessMedia?: Maybe<MediaDocAccess>;
	docAccessMinimalDeposit?: Maybe<Minimal_DepositDocAccess>;
	docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
	docAccessPlayer?: Maybe<PlayerDocAccess>;
	docAccessSaved_transaction?: Maybe<Saved_TransactionsDocAccess>;
	docAccessTransaction?: Maybe<TransactionsDocAccess>;
	docAccessUser?: Maybe<UsersDocAccess>;
	docAccessWallet?: Maybe<WalletsDocAccess>;
	docAccessWithdrawal?: Maybe<WithdrawalDocAccess>;
	generateSHA?: Maybe<Sha>;
	getExchange?: Maybe<Exchange>;
	getGuessLeaderboard?: Maybe<Array<Leaderboard>>;
	getMe?: Maybe<Player>;
	getRefferals?: Maybe<Array<Maybe<Refferal>>>;
	getTransactions?: Maybe<Transactions>;
	initializedUser?: Maybe<Scalars["Boolean"]["output"]>;
	login?: Maybe<Player>;
	meUser?: Maybe<UsersMe>;
};

export type QueryAboutArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryAboutsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<About_Where>;
};

export type QueryDepositArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryDepositsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Deposit_Where>;
};

export type QueryExchangeRateArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryExchangeRatesArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<ExchangeRate_Where>;
};

export type QueryFeedbackArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryFeedbacksArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Feedback_Where>;
};

export type QueryLeaderboardArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryLeaderboardsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Leaderboard_Where>;
};

export type QueryMediaArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryMinimalDepositArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryMinimalDepositsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<MinimalDeposit_Where>;
};

export type QueryPayloadPreferenceArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryPayloadPreferencesArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<PayloadPreference_Where>;
};

export type QueryPlayerArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryPlayersArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Player_Where>;
};

export type QuerySaved_TransactionArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QuerySaved_TransactionsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Saved_Transaction_Where>;
};

export type QueryTransactionArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryTransactionsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Transaction_Where>;
};

export type QueryUserArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryUsersArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<User_Where>;
};

export type QueryWalletArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryWalletsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Wallet_Where>;
};

export type QueryWithdrawalArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type QueryWithdrawalsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Withdrawal_Where>;
};

export type QueryAllMediaArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	where?: InputMaybe<Media_Where>;
};

export type QueryCountAboutsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<About_Where>;
};

export type QueryCountDepositsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Deposit_Where>;
};

export type QueryCountExchangeRatesArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<ExchangeRate_Where>;
};

export type QueryCountFeedbacksArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Feedback_Where>;
};

export type QueryCountLeaderboardsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Leaderboard_Where>;
};

export type QueryCountMinimalDepositsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<MinimalDeposit_Where>;
};

export type QueryCountPayloadPreferencesArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<PayloadPreference_Where>;
};

export type QueryCountPlayersArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Player_Where>;
};

export type QueryCountSaved_TransactionsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Saved_Transaction_Where>;
};

export type QueryCountTransactionsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Transaction_Where>;
};

export type QueryCountUsersArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<User_Where>;
};

export type QueryCountWalletsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Wallet_Where>;
};

export type QueryCountWithdrawalsArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Withdrawal_Where>;
};

export type QueryCountallMediaArgs = {
	draft?: InputMaybe<Scalars["Boolean"]["input"]>;
	where?: InputMaybe<Media_Where>;
};

export type QueryDocAccessAboutArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessDepositArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessExchangeRateArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessFeedbackArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessLeaderboardArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessMediaArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessMinimalDepositArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessPayloadPreferenceArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessPlayerArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessSaved_TransactionArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessTransactionArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessUserArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessWalletArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryDocAccessWithdrawalArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryGenerateShaArgs = {
	bet?: InputMaybe<Scalars["Float"]["input"]>;
};

export type QueryGetGuessLeaderboardArgs = {
	prevState?: InputMaybe<Array<InputMaybe<Leaderboard_Input>>>;
};

export type QueryGetTransactionsArgs = {
	currency_type?: InputMaybe<Scalars["String"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLoginArgs = {
	email?: InputMaybe<Scalars["String"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
};

export type Saved_Transaction = {
	__typename?: "Saved_transaction";
	amount?: Maybe<Scalars["Float"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	id: Scalars["Int"]["output"];
	owner_address?: Maybe<Scalars["String"]["output"]>;
	transaction_hash?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type Saved_Transaction_Amount_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Saved_Transaction_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Saved_Transaction_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Saved_Transaction_Owner_Address_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Saved_Transaction_Transaction_Hash_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Saved_Transaction_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Saved_Transaction_Where = {
	AND?: InputMaybe<Array<InputMaybe<Saved_Transaction_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Saved_Transaction_Where_Or>>>;
	amount?: InputMaybe<Saved_Transaction_Amount_Operator>;
	createdAt?: InputMaybe<Saved_Transaction_CreatedAt_Operator>;
	id?: InputMaybe<Saved_Transaction_Id_Operator>;
	owner_address?: InputMaybe<Saved_Transaction_Owner_Address_Operator>;
	transaction_hash?: InputMaybe<Saved_Transaction_Transaction_Hash_Operator>;
	updatedAt?: InputMaybe<Saved_Transaction_UpdatedAt_Operator>;
};

export type Saved_Transaction_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Saved_Transaction_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Saved_Transaction_Where_Or>>>;
	amount?: InputMaybe<Saved_Transaction_Amount_Operator>;
	createdAt?: InputMaybe<Saved_Transaction_CreatedAt_Operator>;
	id?: InputMaybe<Saved_Transaction_Id_Operator>;
	owner_address?: InputMaybe<Saved_Transaction_Owner_Address_Operator>;
	transaction_hash?: InputMaybe<Saved_Transaction_Transaction_Hash_Operator>;
	updatedAt?: InputMaybe<Saved_Transaction_UpdatedAt_Operator>;
};

export type Saved_Transaction_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Saved_Transaction_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Saved_Transaction_Where_Or>>>;
	amount?: InputMaybe<Saved_Transaction_Amount_Operator>;
	createdAt?: InputMaybe<Saved_Transaction_CreatedAt_Operator>;
	id?: InputMaybe<Saved_Transaction_Id_Operator>;
	owner_address?: InputMaybe<Saved_Transaction_Owner_Address_Operator>;
	transaction_hash?: InputMaybe<Saved_Transaction_Transaction_Hash_Operator>;
	updatedAt?: InputMaybe<Saved_Transaction_UpdatedAt_Operator>;
};

export type Saved_Transactions = {
	__typename?: "Saved_transactions";
	docs?: Maybe<Array<Maybe<Saved_Transaction>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type Saved_TransactionsCreateAccess = {
	__typename?: "Saved_transactionsCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Saved_TransactionsCreateDocAccess = {
	__typename?: "Saved_transactionsCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Saved_TransactionsDeleteAccess = {
	__typename?: "Saved_transactionsDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Saved_TransactionsDeleteDocAccess = {
	__typename?: "Saved_transactionsDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Saved_TransactionsDocAccessFields = {
	__typename?: "Saved_transactionsDocAccessFields";
	amount?: Maybe<Saved_TransactionsDocAccessFields_Amount>;
	createdAt?: Maybe<Saved_TransactionsDocAccessFields_CreatedAt>;
	owner_address?: Maybe<Saved_TransactionsDocAccessFields_Owner_Address>;
	transaction_hash?: Maybe<Saved_TransactionsDocAccessFields_Transaction_Hash>;
	updatedAt?: Maybe<Saved_TransactionsDocAccessFields_UpdatedAt>;
};

export type Saved_TransactionsDocAccessFields_Amount = {
	__typename?: "Saved_transactionsDocAccessFields_amount";
	create?: Maybe<Saved_TransactionsDocAccessFields_Amount_Create>;
	delete?: Maybe<Saved_TransactionsDocAccessFields_Amount_Delete>;
	read?: Maybe<Saved_TransactionsDocAccessFields_Amount_Read>;
	update?: Maybe<Saved_TransactionsDocAccessFields_Amount_Update>;
};

export type Saved_TransactionsDocAccessFields_Amount_Create = {
	__typename?: "Saved_transactionsDocAccessFields_amount_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Amount_Delete = {
	__typename?: "Saved_transactionsDocAccessFields_amount_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Amount_Read = {
	__typename?: "Saved_transactionsDocAccessFields_amount_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Amount_Update = {
	__typename?: "Saved_transactionsDocAccessFields_amount_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_CreatedAt = {
	__typename?: "Saved_transactionsDocAccessFields_createdAt";
	create?: Maybe<Saved_TransactionsDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<Saved_TransactionsDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<Saved_TransactionsDocAccessFields_CreatedAt_Read>;
	update?: Maybe<Saved_TransactionsDocAccessFields_CreatedAt_Update>;
};

export type Saved_TransactionsDocAccessFields_CreatedAt_Create = {
	__typename?: "Saved_transactionsDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_CreatedAt_Delete = {
	__typename?: "Saved_transactionsDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_CreatedAt_Read = {
	__typename?: "Saved_transactionsDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_CreatedAt_Update = {
	__typename?: "Saved_transactionsDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Owner_Address = {
	__typename?: "Saved_transactionsDocAccessFields_owner_address";
	create?: Maybe<Saved_TransactionsDocAccessFields_Owner_Address_Create>;
	delete?: Maybe<Saved_TransactionsDocAccessFields_Owner_Address_Delete>;
	read?: Maybe<Saved_TransactionsDocAccessFields_Owner_Address_Read>;
	update?: Maybe<Saved_TransactionsDocAccessFields_Owner_Address_Update>;
};

export type Saved_TransactionsDocAccessFields_Owner_Address_Create = {
	__typename?: "Saved_transactionsDocAccessFields_owner_address_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Owner_Address_Delete = {
	__typename?: "Saved_transactionsDocAccessFields_owner_address_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Owner_Address_Read = {
	__typename?: "Saved_transactionsDocAccessFields_owner_address_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Owner_Address_Update = {
	__typename?: "Saved_transactionsDocAccessFields_owner_address_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Transaction_Hash = {
	__typename?: "Saved_transactionsDocAccessFields_transaction_hash";
	create?: Maybe<Saved_TransactionsDocAccessFields_Transaction_Hash_Create>;
	delete?: Maybe<Saved_TransactionsDocAccessFields_Transaction_Hash_Delete>;
	read?: Maybe<Saved_TransactionsDocAccessFields_Transaction_Hash_Read>;
	update?: Maybe<Saved_TransactionsDocAccessFields_Transaction_Hash_Update>;
};

export type Saved_TransactionsDocAccessFields_Transaction_Hash_Create = {
	__typename?: "Saved_transactionsDocAccessFields_transaction_hash_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Transaction_Hash_Delete = {
	__typename?: "Saved_transactionsDocAccessFields_transaction_hash_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Transaction_Hash_Read = {
	__typename?: "Saved_transactionsDocAccessFields_transaction_hash_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_Transaction_Hash_Update = {
	__typename?: "Saved_transactionsDocAccessFields_transaction_hash_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_UpdatedAt = {
	__typename?: "Saved_transactionsDocAccessFields_updatedAt";
	create?: Maybe<Saved_TransactionsDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<Saved_TransactionsDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<Saved_TransactionsDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<Saved_TransactionsDocAccessFields_UpdatedAt_Update>;
};

export type Saved_TransactionsDocAccessFields_UpdatedAt_Create = {
	__typename?: "Saved_transactionsDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_UpdatedAt_Delete = {
	__typename?: "Saved_transactionsDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_UpdatedAt_Read = {
	__typename?: "Saved_transactionsDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsDocAccessFields_UpdatedAt_Update = {
	__typename?: "Saved_transactionsDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields = {
	__typename?: "Saved_transactionsFields";
	amount?: Maybe<Saved_TransactionsFields_Amount>;
	createdAt?: Maybe<Saved_TransactionsFields_CreatedAt>;
	owner_address?: Maybe<Saved_TransactionsFields_Owner_Address>;
	transaction_hash?: Maybe<Saved_TransactionsFields_Transaction_Hash>;
	updatedAt?: Maybe<Saved_TransactionsFields_UpdatedAt>;
};

export type Saved_TransactionsFields_Amount = {
	__typename?: "Saved_transactionsFields_amount";
	create?: Maybe<Saved_TransactionsFields_Amount_Create>;
	delete?: Maybe<Saved_TransactionsFields_Amount_Delete>;
	read?: Maybe<Saved_TransactionsFields_Amount_Read>;
	update?: Maybe<Saved_TransactionsFields_Amount_Update>;
};

export type Saved_TransactionsFields_Amount_Create = {
	__typename?: "Saved_transactionsFields_amount_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Amount_Delete = {
	__typename?: "Saved_transactionsFields_amount_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Amount_Read = {
	__typename?: "Saved_transactionsFields_amount_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Amount_Update = {
	__typename?: "Saved_transactionsFields_amount_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_CreatedAt = {
	__typename?: "Saved_transactionsFields_createdAt";
	create?: Maybe<Saved_TransactionsFields_CreatedAt_Create>;
	delete?: Maybe<Saved_TransactionsFields_CreatedAt_Delete>;
	read?: Maybe<Saved_TransactionsFields_CreatedAt_Read>;
	update?: Maybe<Saved_TransactionsFields_CreatedAt_Update>;
};

export type Saved_TransactionsFields_CreatedAt_Create = {
	__typename?: "Saved_transactionsFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_CreatedAt_Delete = {
	__typename?: "Saved_transactionsFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_CreatedAt_Read = {
	__typename?: "Saved_transactionsFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_CreatedAt_Update = {
	__typename?: "Saved_transactionsFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Owner_Address = {
	__typename?: "Saved_transactionsFields_owner_address";
	create?: Maybe<Saved_TransactionsFields_Owner_Address_Create>;
	delete?: Maybe<Saved_TransactionsFields_Owner_Address_Delete>;
	read?: Maybe<Saved_TransactionsFields_Owner_Address_Read>;
	update?: Maybe<Saved_TransactionsFields_Owner_Address_Update>;
};

export type Saved_TransactionsFields_Owner_Address_Create = {
	__typename?: "Saved_transactionsFields_owner_address_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Owner_Address_Delete = {
	__typename?: "Saved_transactionsFields_owner_address_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Owner_Address_Read = {
	__typename?: "Saved_transactionsFields_owner_address_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Owner_Address_Update = {
	__typename?: "Saved_transactionsFields_owner_address_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Transaction_Hash = {
	__typename?: "Saved_transactionsFields_transaction_hash";
	create?: Maybe<Saved_TransactionsFields_Transaction_Hash_Create>;
	delete?: Maybe<Saved_TransactionsFields_Transaction_Hash_Delete>;
	read?: Maybe<Saved_TransactionsFields_Transaction_Hash_Read>;
	update?: Maybe<Saved_TransactionsFields_Transaction_Hash_Update>;
};

export type Saved_TransactionsFields_Transaction_Hash_Create = {
	__typename?: "Saved_transactionsFields_transaction_hash_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Transaction_Hash_Delete = {
	__typename?: "Saved_transactionsFields_transaction_hash_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Transaction_Hash_Read = {
	__typename?: "Saved_transactionsFields_transaction_hash_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_Transaction_Hash_Update = {
	__typename?: "Saved_transactionsFields_transaction_hash_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_UpdatedAt = {
	__typename?: "Saved_transactionsFields_updatedAt";
	create?: Maybe<Saved_TransactionsFields_UpdatedAt_Create>;
	delete?: Maybe<Saved_TransactionsFields_UpdatedAt_Delete>;
	read?: Maybe<Saved_TransactionsFields_UpdatedAt_Read>;
	update?: Maybe<Saved_TransactionsFields_UpdatedAt_Update>;
};

export type Saved_TransactionsFields_UpdatedAt_Create = {
	__typename?: "Saved_transactionsFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_UpdatedAt_Delete = {
	__typename?: "Saved_transactionsFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_UpdatedAt_Read = {
	__typename?: "Saved_transactionsFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsFields_UpdatedAt_Update = {
	__typename?: "Saved_transactionsFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type Saved_TransactionsReadAccess = {
	__typename?: "Saved_transactionsReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Saved_TransactionsReadDocAccess = {
	__typename?: "Saved_transactionsReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Saved_TransactionsUpdateAccess = {
	__typename?: "Saved_transactionsUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Saved_TransactionsUpdateDocAccess = {
	__typename?: "Saved_transactionsUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Transaction = {
	__typename?: "Transaction";
	amount?: Maybe<Scalars["Float"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	currency_type?: Maybe<Scalars["String"]["output"]>;
	date?: Maybe<Scalars["DateTime"]["output"]>;
	id: Scalars["Int"]["output"];
	status?: Maybe<Scalars["String"]["output"]>;
	type?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	user_id?: Maybe<Player>;
};

export type Transaction_Amount_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Transaction_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Transaction_Currency_Type_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Transaction_Date_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Transaction_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Transaction_Status_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Transaction_Type_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Transaction_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Transaction_User_Id_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	equals?: InputMaybe<Scalars["JSON"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	not_equals?: InputMaybe<Scalars["JSON"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
};

export type Transaction_Where = {
	AND?: InputMaybe<Array<InputMaybe<Transaction_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Transaction_Where_Or>>>;
	amount?: InputMaybe<Transaction_Amount_Operator>;
	createdAt?: InputMaybe<Transaction_CreatedAt_Operator>;
	currency_type?: InputMaybe<Transaction_Currency_Type_Operator>;
	date?: InputMaybe<Transaction_Date_Operator>;
	id?: InputMaybe<Transaction_Id_Operator>;
	status?: InputMaybe<Transaction_Status_Operator>;
	type?: InputMaybe<Transaction_Type_Operator>;
	updatedAt?: InputMaybe<Transaction_UpdatedAt_Operator>;
	user_id?: InputMaybe<Transaction_User_Id_Operator>;
};

export type Transaction_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Transaction_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Transaction_Where_Or>>>;
	amount?: InputMaybe<Transaction_Amount_Operator>;
	createdAt?: InputMaybe<Transaction_CreatedAt_Operator>;
	currency_type?: InputMaybe<Transaction_Currency_Type_Operator>;
	date?: InputMaybe<Transaction_Date_Operator>;
	id?: InputMaybe<Transaction_Id_Operator>;
	status?: InputMaybe<Transaction_Status_Operator>;
	type?: InputMaybe<Transaction_Type_Operator>;
	updatedAt?: InputMaybe<Transaction_UpdatedAt_Operator>;
	user_id?: InputMaybe<Transaction_User_Id_Operator>;
};

export type Transaction_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Transaction_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Transaction_Where_Or>>>;
	amount?: InputMaybe<Transaction_Amount_Operator>;
	createdAt?: InputMaybe<Transaction_CreatedAt_Operator>;
	currency_type?: InputMaybe<Transaction_Currency_Type_Operator>;
	date?: InputMaybe<Transaction_Date_Operator>;
	id?: InputMaybe<Transaction_Id_Operator>;
	status?: InputMaybe<Transaction_Status_Operator>;
	type?: InputMaybe<Transaction_Type_Operator>;
	updatedAt?: InputMaybe<Transaction_UpdatedAt_Operator>;
	user_id?: InputMaybe<Transaction_User_Id_Operator>;
};

export type TransactionsCreateAccess = {
	__typename?: "TransactionsCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type TransactionsCreateDocAccess = {
	__typename?: "TransactionsCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type TransactionsDeleteAccess = {
	__typename?: "TransactionsDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type TransactionsDeleteDocAccess = {
	__typename?: "TransactionsDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type TransactionsDocAccessFields = {
	__typename?: "TransactionsDocAccessFields";
	amount?: Maybe<TransactionsDocAccessFields_Amount>;
	createdAt?: Maybe<TransactionsDocAccessFields_CreatedAt>;
	currency_type?: Maybe<TransactionsDocAccessFields_Currency_Type>;
	date?: Maybe<TransactionsDocAccessFields_Date>;
	status?: Maybe<TransactionsDocAccessFields_Status>;
	type?: Maybe<TransactionsDocAccessFields_Type>;
	updatedAt?: Maybe<TransactionsDocAccessFields_UpdatedAt>;
	user_id?: Maybe<TransactionsDocAccessFields_User_Id>;
};

export type TransactionsDocAccessFields_Amount = {
	__typename?: "TransactionsDocAccessFields_amount";
	create?: Maybe<TransactionsDocAccessFields_Amount_Create>;
	delete?: Maybe<TransactionsDocAccessFields_Amount_Delete>;
	read?: Maybe<TransactionsDocAccessFields_Amount_Read>;
	update?: Maybe<TransactionsDocAccessFields_Amount_Update>;
};

export type TransactionsDocAccessFields_Amount_Create = {
	__typename?: "TransactionsDocAccessFields_amount_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Amount_Delete = {
	__typename?: "TransactionsDocAccessFields_amount_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Amount_Read = {
	__typename?: "TransactionsDocAccessFields_amount_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Amount_Update = {
	__typename?: "TransactionsDocAccessFields_amount_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_CreatedAt = {
	__typename?: "TransactionsDocAccessFields_createdAt";
	create?: Maybe<TransactionsDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<TransactionsDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<TransactionsDocAccessFields_CreatedAt_Read>;
	update?: Maybe<TransactionsDocAccessFields_CreatedAt_Update>;
};

export type TransactionsDocAccessFields_CreatedAt_Create = {
	__typename?: "TransactionsDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_CreatedAt_Delete = {
	__typename?: "TransactionsDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_CreatedAt_Read = {
	__typename?: "TransactionsDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_CreatedAt_Update = {
	__typename?: "TransactionsDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Currency_Type = {
	__typename?: "TransactionsDocAccessFields_currency_type";
	create?: Maybe<TransactionsDocAccessFields_Currency_Type_Create>;
	delete?: Maybe<TransactionsDocAccessFields_Currency_Type_Delete>;
	read?: Maybe<TransactionsDocAccessFields_Currency_Type_Read>;
	update?: Maybe<TransactionsDocAccessFields_Currency_Type_Update>;
};

export type TransactionsDocAccessFields_Currency_Type_Create = {
	__typename?: "TransactionsDocAccessFields_currency_type_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Currency_Type_Delete = {
	__typename?: "TransactionsDocAccessFields_currency_type_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Currency_Type_Read = {
	__typename?: "TransactionsDocAccessFields_currency_type_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Currency_Type_Update = {
	__typename?: "TransactionsDocAccessFields_currency_type_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Date = {
	__typename?: "TransactionsDocAccessFields_date";
	create?: Maybe<TransactionsDocAccessFields_Date_Create>;
	delete?: Maybe<TransactionsDocAccessFields_Date_Delete>;
	read?: Maybe<TransactionsDocAccessFields_Date_Read>;
	update?: Maybe<TransactionsDocAccessFields_Date_Update>;
};

export type TransactionsDocAccessFields_Date_Create = {
	__typename?: "TransactionsDocAccessFields_date_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Date_Delete = {
	__typename?: "TransactionsDocAccessFields_date_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Date_Read = {
	__typename?: "TransactionsDocAccessFields_date_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Date_Update = {
	__typename?: "TransactionsDocAccessFields_date_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Status = {
	__typename?: "TransactionsDocAccessFields_status";
	create?: Maybe<TransactionsDocAccessFields_Status_Create>;
	delete?: Maybe<TransactionsDocAccessFields_Status_Delete>;
	read?: Maybe<TransactionsDocAccessFields_Status_Read>;
	update?: Maybe<TransactionsDocAccessFields_Status_Update>;
};

export type TransactionsDocAccessFields_Status_Create = {
	__typename?: "TransactionsDocAccessFields_status_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Status_Delete = {
	__typename?: "TransactionsDocAccessFields_status_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Status_Read = {
	__typename?: "TransactionsDocAccessFields_status_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Status_Update = {
	__typename?: "TransactionsDocAccessFields_status_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Type = {
	__typename?: "TransactionsDocAccessFields_type";
	create?: Maybe<TransactionsDocAccessFields_Type_Create>;
	delete?: Maybe<TransactionsDocAccessFields_Type_Delete>;
	read?: Maybe<TransactionsDocAccessFields_Type_Read>;
	update?: Maybe<TransactionsDocAccessFields_Type_Update>;
};

export type TransactionsDocAccessFields_Type_Create = {
	__typename?: "TransactionsDocAccessFields_type_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Type_Delete = {
	__typename?: "TransactionsDocAccessFields_type_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Type_Read = {
	__typename?: "TransactionsDocAccessFields_type_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_Type_Update = {
	__typename?: "TransactionsDocAccessFields_type_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_UpdatedAt = {
	__typename?: "TransactionsDocAccessFields_updatedAt";
	create?: Maybe<TransactionsDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<TransactionsDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<TransactionsDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<TransactionsDocAccessFields_UpdatedAt_Update>;
};

export type TransactionsDocAccessFields_UpdatedAt_Create = {
	__typename?: "TransactionsDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_UpdatedAt_Delete = {
	__typename?: "TransactionsDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_UpdatedAt_Read = {
	__typename?: "TransactionsDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_UpdatedAt_Update = {
	__typename?: "TransactionsDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_User_Id = {
	__typename?: "TransactionsDocAccessFields_user_id";
	create?: Maybe<TransactionsDocAccessFields_User_Id_Create>;
	delete?: Maybe<TransactionsDocAccessFields_User_Id_Delete>;
	read?: Maybe<TransactionsDocAccessFields_User_Id_Read>;
	update?: Maybe<TransactionsDocAccessFields_User_Id_Update>;
};

export type TransactionsDocAccessFields_User_Id_Create = {
	__typename?: "TransactionsDocAccessFields_user_id_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_User_Id_Delete = {
	__typename?: "TransactionsDocAccessFields_user_id_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_User_Id_Read = {
	__typename?: "TransactionsDocAccessFields_user_id_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsDocAccessFields_User_Id_Update = {
	__typename?: "TransactionsDocAccessFields_user_id_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields = {
	__typename?: "TransactionsFields";
	amount?: Maybe<TransactionsFields_Amount>;
	createdAt?: Maybe<TransactionsFields_CreatedAt>;
	currency_type?: Maybe<TransactionsFields_Currency_Type>;
	date?: Maybe<TransactionsFields_Date>;
	status?: Maybe<TransactionsFields_Status>;
	type?: Maybe<TransactionsFields_Type>;
	updatedAt?: Maybe<TransactionsFields_UpdatedAt>;
	user_id?: Maybe<TransactionsFields_User_Id>;
};

export type TransactionsFields_Amount = {
	__typename?: "TransactionsFields_amount";
	create?: Maybe<TransactionsFields_Amount_Create>;
	delete?: Maybe<TransactionsFields_Amount_Delete>;
	read?: Maybe<TransactionsFields_Amount_Read>;
	update?: Maybe<TransactionsFields_Amount_Update>;
};

export type TransactionsFields_Amount_Create = {
	__typename?: "TransactionsFields_amount_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Amount_Delete = {
	__typename?: "TransactionsFields_amount_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Amount_Read = {
	__typename?: "TransactionsFields_amount_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Amount_Update = {
	__typename?: "TransactionsFields_amount_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_CreatedAt = {
	__typename?: "TransactionsFields_createdAt";
	create?: Maybe<TransactionsFields_CreatedAt_Create>;
	delete?: Maybe<TransactionsFields_CreatedAt_Delete>;
	read?: Maybe<TransactionsFields_CreatedAt_Read>;
	update?: Maybe<TransactionsFields_CreatedAt_Update>;
};

export type TransactionsFields_CreatedAt_Create = {
	__typename?: "TransactionsFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_CreatedAt_Delete = {
	__typename?: "TransactionsFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_CreatedAt_Read = {
	__typename?: "TransactionsFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_CreatedAt_Update = {
	__typename?: "TransactionsFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Currency_Type = {
	__typename?: "TransactionsFields_currency_type";
	create?: Maybe<TransactionsFields_Currency_Type_Create>;
	delete?: Maybe<TransactionsFields_Currency_Type_Delete>;
	read?: Maybe<TransactionsFields_Currency_Type_Read>;
	update?: Maybe<TransactionsFields_Currency_Type_Update>;
};

export type TransactionsFields_Currency_Type_Create = {
	__typename?: "TransactionsFields_currency_type_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Currency_Type_Delete = {
	__typename?: "TransactionsFields_currency_type_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Currency_Type_Read = {
	__typename?: "TransactionsFields_currency_type_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Currency_Type_Update = {
	__typename?: "TransactionsFields_currency_type_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Date = {
	__typename?: "TransactionsFields_date";
	create?: Maybe<TransactionsFields_Date_Create>;
	delete?: Maybe<TransactionsFields_Date_Delete>;
	read?: Maybe<TransactionsFields_Date_Read>;
	update?: Maybe<TransactionsFields_Date_Update>;
};

export type TransactionsFields_Date_Create = {
	__typename?: "TransactionsFields_date_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Date_Delete = {
	__typename?: "TransactionsFields_date_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Date_Read = {
	__typename?: "TransactionsFields_date_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Date_Update = {
	__typename?: "TransactionsFields_date_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Status = {
	__typename?: "TransactionsFields_status";
	create?: Maybe<TransactionsFields_Status_Create>;
	delete?: Maybe<TransactionsFields_Status_Delete>;
	read?: Maybe<TransactionsFields_Status_Read>;
	update?: Maybe<TransactionsFields_Status_Update>;
};

export type TransactionsFields_Status_Create = {
	__typename?: "TransactionsFields_status_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Status_Delete = {
	__typename?: "TransactionsFields_status_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Status_Read = {
	__typename?: "TransactionsFields_status_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Status_Update = {
	__typename?: "TransactionsFields_status_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Type = {
	__typename?: "TransactionsFields_type";
	create?: Maybe<TransactionsFields_Type_Create>;
	delete?: Maybe<TransactionsFields_Type_Delete>;
	read?: Maybe<TransactionsFields_Type_Read>;
	update?: Maybe<TransactionsFields_Type_Update>;
};

export type TransactionsFields_Type_Create = {
	__typename?: "TransactionsFields_type_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Type_Delete = {
	__typename?: "TransactionsFields_type_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Type_Read = {
	__typename?: "TransactionsFields_type_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_Type_Update = {
	__typename?: "TransactionsFields_type_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_UpdatedAt = {
	__typename?: "TransactionsFields_updatedAt";
	create?: Maybe<TransactionsFields_UpdatedAt_Create>;
	delete?: Maybe<TransactionsFields_UpdatedAt_Delete>;
	read?: Maybe<TransactionsFields_UpdatedAt_Read>;
	update?: Maybe<TransactionsFields_UpdatedAt_Update>;
};

export type TransactionsFields_UpdatedAt_Create = {
	__typename?: "TransactionsFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_UpdatedAt_Delete = {
	__typename?: "TransactionsFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_UpdatedAt_Read = {
	__typename?: "TransactionsFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_UpdatedAt_Update = {
	__typename?: "TransactionsFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_User_Id = {
	__typename?: "TransactionsFields_user_id";
	create?: Maybe<TransactionsFields_User_Id_Create>;
	delete?: Maybe<TransactionsFields_User_Id_Delete>;
	read?: Maybe<TransactionsFields_User_Id_Read>;
	update?: Maybe<TransactionsFields_User_Id_Update>;
};

export type TransactionsFields_User_Id_Create = {
	__typename?: "TransactionsFields_user_id_Create";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_User_Id_Delete = {
	__typename?: "TransactionsFields_user_id_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_User_Id_Read = {
	__typename?: "TransactionsFields_user_id_Read";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsFields_User_Id_Update = {
	__typename?: "TransactionsFields_user_id_Update";
	permission: Scalars["Boolean"]["output"];
};

export type TransactionsReadAccess = {
	__typename?: "TransactionsReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type TransactionsReadDocAccess = {
	__typename?: "TransactionsReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type TransactionsUpdateAccess = {
	__typename?: "TransactionsUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type TransactionsUpdateDocAccess = {
	__typename?: "TransactionsUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type User = {
	__typename?: "User";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	email: Scalars["EmailAddress"]["output"];
	hash?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["Int"]["output"];
	lockUntil?: Maybe<Scalars["DateTime"]["output"]>;
	loginAttempts?: Maybe<Scalars["Float"]["output"]>;
	password: Scalars["String"]["output"];
	referralCode?: Maybe<Scalars["String"]["output"]>;
	resetPasswordExpiration?: Maybe<Scalars["DateTime"]["output"]>;
	resetPasswordToken?: Maybe<Scalars["String"]["output"]>;
	role?: Maybe<User_Role>;
	salt?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export enum UserUpdate_Role_MutationInput {
	AdAgent = "ad_agent",
	Admin = "admin",
}

export type User_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type User_Email_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	contains?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	like?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
};

export type User_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type User_Password_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type User_ReferralCode_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export enum User_Role {
	AdAgent = "ad_agent",
	Admin = "admin",
}

export enum User_Role_Input {
	AdAgent = "ad_agent",
	Admin = "admin",
}

export enum User_Role_MutationInput {
	AdAgent = "ad_agent",
	Admin = "admin",
}

export type User_Role_Operator = {
	all?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
	equals?: InputMaybe<User_Role_Input>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
	not_equals?: InputMaybe<User_Role_Input>;
	not_in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
};

export type User_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type User_Where = {
	AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
	createdAt?: InputMaybe<User_CreatedAt_Operator>;
	email?: InputMaybe<User_Email_Operator>;
	id?: InputMaybe<User_Id_Operator>;
	password?: InputMaybe<User_Password_Operator>;
	referralCode?: InputMaybe<User_ReferralCode_Operator>;
	role?: InputMaybe<User_Role_Operator>;
	updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
	createdAt?: InputMaybe<User_CreatedAt_Operator>;
	email?: InputMaybe<User_Email_Operator>;
	id?: InputMaybe<User_Id_Operator>;
	password?: InputMaybe<User_Password_Operator>;
	referralCode?: InputMaybe<User_ReferralCode_Operator>;
	role?: InputMaybe<User_Role_Operator>;
	updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
	createdAt?: InputMaybe<User_CreatedAt_Operator>;
	email?: InputMaybe<User_Email_Operator>;
	id?: InputMaybe<User_Id_Operator>;
	password?: InputMaybe<User_Password_Operator>;
	referralCode?: InputMaybe<User_ReferralCode_Operator>;
	role?: InputMaybe<User_Role_Operator>;
	updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
	__typename?: "Users";
	docs?: Maybe<Array<Maybe<User>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type UsersCreateAccess = {
	__typename?: "UsersCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersCreateDocAccess = {
	__typename?: "UsersCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersDeleteAccess = {
	__typename?: "UsersDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersDeleteDocAccess = {
	__typename?: "UsersDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersDocAccessFields = {
	__typename?: "UsersDocAccessFields";
	createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
	email?: Maybe<UsersDocAccessFields_Email>;
	password?: Maybe<UsersDocAccessFields_Password>;
	referralCode?: Maybe<UsersDocAccessFields_ReferralCode>;
	role?: Maybe<UsersDocAccessFields_Role>;
	updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
	__typename?: "UsersDocAccessFields_createdAt";
	create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
	update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
	__typename?: "UsersDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
	__typename?: "UsersDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_CreatedAt_Read = {
	__typename?: "UsersDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_CreatedAt_Update = {
	__typename?: "UsersDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Email = {
	__typename?: "UsersDocAccessFields_email";
	create?: Maybe<UsersDocAccessFields_Email_Create>;
	delete?: Maybe<UsersDocAccessFields_Email_Delete>;
	read?: Maybe<UsersDocAccessFields_Email_Read>;
	update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
	__typename?: "UsersDocAccessFields_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Email_Delete = {
	__typename?: "UsersDocAccessFields_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Email_Read = {
	__typename?: "UsersDocAccessFields_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Email_Update = {
	__typename?: "UsersDocAccessFields_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Password = {
	__typename?: "UsersDocAccessFields_password";
	create?: Maybe<UsersDocAccessFields_Password_Create>;
	delete?: Maybe<UsersDocAccessFields_Password_Delete>;
	read?: Maybe<UsersDocAccessFields_Password_Read>;
	update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
	__typename?: "UsersDocAccessFields_password_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Password_Delete = {
	__typename?: "UsersDocAccessFields_password_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Password_Read = {
	__typename?: "UsersDocAccessFields_password_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Password_Update = {
	__typename?: "UsersDocAccessFields_password_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_ReferralCode = {
	__typename?: "UsersDocAccessFields_referralCode";
	create?: Maybe<UsersDocAccessFields_ReferralCode_Create>;
	delete?: Maybe<UsersDocAccessFields_ReferralCode_Delete>;
	read?: Maybe<UsersDocAccessFields_ReferralCode_Read>;
	update?: Maybe<UsersDocAccessFields_ReferralCode_Update>;
};

export type UsersDocAccessFields_ReferralCode_Create = {
	__typename?: "UsersDocAccessFields_referralCode_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_ReferralCode_Delete = {
	__typename?: "UsersDocAccessFields_referralCode_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_ReferralCode_Read = {
	__typename?: "UsersDocAccessFields_referralCode_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_ReferralCode_Update = {
	__typename?: "UsersDocAccessFields_referralCode_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Role = {
	__typename?: "UsersDocAccessFields_role";
	create?: Maybe<UsersDocAccessFields_Role_Create>;
	delete?: Maybe<UsersDocAccessFields_Role_Delete>;
	read?: Maybe<UsersDocAccessFields_Role_Read>;
	update?: Maybe<UsersDocAccessFields_Role_Update>;
};

export type UsersDocAccessFields_Role_Create = {
	__typename?: "UsersDocAccessFields_role_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Role_Delete = {
	__typename?: "UsersDocAccessFields_role_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Role_Read = {
	__typename?: "UsersDocAccessFields_role_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_Role_Update = {
	__typename?: "UsersDocAccessFields_role_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_UpdatedAt = {
	__typename?: "UsersDocAccessFields_updatedAt";
	create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
	__typename?: "UsersDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
	__typename?: "UsersDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
	__typename?: "UsersDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
	__typename?: "UsersDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields = {
	__typename?: "UsersFields";
	createdAt?: Maybe<UsersFields_CreatedAt>;
	email?: Maybe<UsersFields_Email>;
	password?: Maybe<UsersFields_Password>;
	referralCode?: Maybe<UsersFields_ReferralCode>;
	role?: Maybe<UsersFields_Role>;
	updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
	__typename?: "UsersFields_createdAt";
	create?: Maybe<UsersFields_CreatedAt_Create>;
	delete?: Maybe<UsersFields_CreatedAt_Delete>;
	read?: Maybe<UsersFields_CreatedAt_Read>;
	update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
	__typename?: "UsersFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_CreatedAt_Delete = {
	__typename?: "UsersFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_CreatedAt_Read = {
	__typename?: "UsersFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_CreatedAt_Update = {
	__typename?: "UsersFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Email = {
	__typename?: "UsersFields_email";
	create?: Maybe<UsersFields_Email_Create>;
	delete?: Maybe<UsersFields_Email_Delete>;
	read?: Maybe<UsersFields_Email_Read>;
	update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
	__typename?: "UsersFields_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Email_Delete = {
	__typename?: "UsersFields_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Email_Read = {
	__typename?: "UsersFields_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Email_Update = {
	__typename?: "UsersFields_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Password = {
	__typename?: "UsersFields_password";
	create?: Maybe<UsersFields_Password_Create>;
	delete?: Maybe<UsersFields_Password_Delete>;
	read?: Maybe<UsersFields_Password_Read>;
	update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
	__typename?: "UsersFields_password_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Password_Delete = {
	__typename?: "UsersFields_password_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Password_Read = {
	__typename?: "UsersFields_password_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Password_Update = {
	__typename?: "UsersFields_password_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_ReferralCode = {
	__typename?: "UsersFields_referralCode";
	create?: Maybe<UsersFields_ReferralCode_Create>;
	delete?: Maybe<UsersFields_ReferralCode_Delete>;
	read?: Maybe<UsersFields_ReferralCode_Read>;
	update?: Maybe<UsersFields_ReferralCode_Update>;
};

export type UsersFields_ReferralCode_Create = {
	__typename?: "UsersFields_referralCode_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_ReferralCode_Delete = {
	__typename?: "UsersFields_referralCode_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_ReferralCode_Read = {
	__typename?: "UsersFields_referralCode_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_ReferralCode_Update = {
	__typename?: "UsersFields_referralCode_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Role = {
	__typename?: "UsersFields_role";
	create?: Maybe<UsersFields_Role_Create>;
	delete?: Maybe<UsersFields_Role_Delete>;
	read?: Maybe<UsersFields_Role_Read>;
	update?: Maybe<UsersFields_Role_Update>;
};

export type UsersFields_Role_Create = {
	__typename?: "UsersFields_role_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Role_Delete = {
	__typename?: "UsersFields_role_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Role_Read = {
	__typename?: "UsersFields_role_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_Role_Update = {
	__typename?: "UsersFields_role_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_UpdatedAt = {
	__typename?: "UsersFields_updatedAt";
	create?: Maybe<UsersFields_UpdatedAt_Create>;
	delete?: Maybe<UsersFields_UpdatedAt_Delete>;
	read?: Maybe<UsersFields_UpdatedAt_Read>;
	update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
	__typename?: "UsersFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_UpdatedAt_Delete = {
	__typename?: "UsersFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_UpdatedAt_Read = {
	__typename?: "UsersFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type UsersFields_UpdatedAt_Update = {
	__typename?: "UsersFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type UsersReadAccess = {
	__typename?: "UsersReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersReadDocAccess = {
	__typename?: "UsersReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersUnlockAccess = {
	__typename?: "UsersUnlockAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersUnlockDocAccess = {
	__typename?: "UsersUnlockDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersUpdateAccess = {
	__typename?: "UsersUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type UsersUpdateDocAccess = {
	__typename?: "UsersUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Wallet = {
	__typename?: "Wallet";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	id: Scalars["Int"]["output"];
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	wallet_adress?: Maybe<Scalars["String"]["output"]>;
};

export type Wallet_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Wallet_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Wallet_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Wallet_Wallet_Adress_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Wallet_Where = {
	AND?: InputMaybe<Array<InputMaybe<Wallet_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Wallet_Where_Or>>>;
	createdAt?: InputMaybe<Wallet_CreatedAt_Operator>;
	id?: InputMaybe<Wallet_Id_Operator>;
	updatedAt?: InputMaybe<Wallet_UpdatedAt_Operator>;
	wallet_adress?: InputMaybe<Wallet_Wallet_Adress_Operator>;
};

export type Wallet_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Wallet_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Wallet_Where_Or>>>;
	createdAt?: InputMaybe<Wallet_CreatedAt_Operator>;
	id?: InputMaybe<Wallet_Id_Operator>;
	updatedAt?: InputMaybe<Wallet_UpdatedAt_Operator>;
	wallet_adress?: InputMaybe<Wallet_Wallet_Adress_Operator>;
};

export type Wallet_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Wallet_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Wallet_Where_Or>>>;
	createdAt?: InputMaybe<Wallet_CreatedAt_Operator>;
	id?: InputMaybe<Wallet_Id_Operator>;
	updatedAt?: InputMaybe<Wallet_UpdatedAt_Operator>;
	wallet_adress?: InputMaybe<Wallet_Wallet_Adress_Operator>;
};

export type Wallets = {
	__typename?: "Wallets";
	docs?: Maybe<Array<Maybe<Wallet>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type WalletsCreateAccess = {
	__typename?: "WalletsCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WalletsCreateDocAccess = {
	__typename?: "WalletsCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WalletsDeleteAccess = {
	__typename?: "WalletsDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WalletsDeleteDocAccess = {
	__typename?: "WalletsDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WalletsDocAccessFields = {
	__typename?: "WalletsDocAccessFields";
	createdAt?: Maybe<WalletsDocAccessFields_CreatedAt>;
	updatedAt?: Maybe<WalletsDocAccessFields_UpdatedAt>;
	wallet_adress?: Maybe<WalletsDocAccessFields_Wallet_Adress>;
};

export type WalletsDocAccessFields_CreatedAt = {
	__typename?: "WalletsDocAccessFields_createdAt";
	create?: Maybe<WalletsDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<WalletsDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<WalletsDocAccessFields_CreatedAt_Read>;
	update?: Maybe<WalletsDocAccessFields_CreatedAt_Update>;
};

export type WalletsDocAccessFields_CreatedAt_Create = {
	__typename?: "WalletsDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_CreatedAt_Delete = {
	__typename?: "WalletsDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_CreatedAt_Read = {
	__typename?: "WalletsDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_CreatedAt_Update = {
	__typename?: "WalletsDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_UpdatedAt = {
	__typename?: "WalletsDocAccessFields_updatedAt";
	create?: Maybe<WalletsDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<WalletsDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<WalletsDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<WalletsDocAccessFields_UpdatedAt_Update>;
};

export type WalletsDocAccessFields_UpdatedAt_Create = {
	__typename?: "WalletsDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_UpdatedAt_Delete = {
	__typename?: "WalletsDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_UpdatedAt_Read = {
	__typename?: "WalletsDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_UpdatedAt_Update = {
	__typename?: "WalletsDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_Wallet_Adress = {
	__typename?: "WalletsDocAccessFields_wallet_adress";
	create?: Maybe<WalletsDocAccessFields_Wallet_Adress_Create>;
	delete?: Maybe<WalletsDocAccessFields_Wallet_Adress_Delete>;
	read?: Maybe<WalletsDocAccessFields_Wallet_Adress_Read>;
	update?: Maybe<WalletsDocAccessFields_Wallet_Adress_Update>;
};

export type WalletsDocAccessFields_Wallet_Adress_Create = {
	__typename?: "WalletsDocAccessFields_wallet_adress_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_Wallet_Adress_Delete = {
	__typename?: "WalletsDocAccessFields_wallet_adress_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_Wallet_Adress_Read = {
	__typename?: "WalletsDocAccessFields_wallet_adress_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsDocAccessFields_Wallet_Adress_Update = {
	__typename?: "WalletsDocAccessFields_wallet_adress_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields = {
	__typename?: "WalletsFields";
	createdAt?: Maybe<WalletsFields_CreatedAt>;
	updatedAt?: Maybe<WalletsFields_UpdatedAt>;
	wallet_adress?: Maybe<WalletsFields_Wallet_Adress>;
};

export type WalletsFields_CreatedAt = {
	__typename?: "WalletsFields_createdAt";
	create?: Maybe<WalletsFields_CreatedAt_Create>;
	delete?: Maybe<WalletsFields_CreatedAt_Delete>;
	read?: Maybe<WalletsFields_CreatedAt_Read>;
	update?: Maybe<WalletsFields_CreatedAt_Update>;
};

export type WalletsFields_CreatedAt_Create = {
	__typename?: "WalletsFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_CreatedAt_Delete = {
	__typename?: "WalletsFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_CreatedAt_Read = {
	__typename?: "WalletsFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_CreatedAt_Update = {
	__typename?: "WalletsFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_UpdatedAt = {
	__typename?: "WalletsFields_updatedAt";
	create?: Maybe<WalletsFields_UpdatedAt_Create>;
	delete?: Maybe<WalletsFields_UpdatedAt_Delete>;
	read?: Maybe<WalletsFields_UpdatedAt_Read>;
	update?: Maybe<WalletsFields_UpdatedAt_Update>;
};

export type WalletsFields_UpdatedAt_Create = {
	__typename?: "WalletsFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_UpdatedAt_Delete = {
	__typename?: "WalletsFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_UpdatedAt_Read = {
	__typename?: "WalletsFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_UpdatedAt_Update = {
	__typename?: "WalletsFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_Wallet_Adress = {
	__typename?: "WalletsFields_wallet_adress";
	create?: Maybe<WalletsFields_Wallet_Adress_Create>;
	delete?: Maybe<WalletsFields_Wallet_Adress_Delete>;
	read?: Maybe<WalletsFields_Wallet_Adress_Read>;
	update?: Maybe<WalletsFields_Wallet_Adress_Update>;
};

export type WalletsFields_Wallet_Adress_Create = {
	__typename?: "WalletsFields_wallet_adress_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_Wallet_Adress_Delete = {
	__typename?: "WalletsFields_wallet_adress_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_Wallet_Adress_Read = {
	__typename?: "WalletsFields_wallet_adress_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsFields_Wallet_Adress_Update = {
	__typename?: "WalletsFields_wallet_adress_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WalletsReadAccess = {
	__typename?: "WalletsReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WalletsReadDocAccess = {
	__typename?: "WalletsReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WalletsUpdateAccess = {
	__typename?: "WalletsUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WalletsUpdateDocAccess = {
	__typename?: "WalletsUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Withdrawal = {
	__typename?: "Withdrawal";
	amount?: Maybe<Scalars["Float"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	date?: Maybe<Scalars["DateTime"]["output"]>;
	email?: Maybe<Scalars["EmailAddress"]["output"]>;
	id: Scalars["Int"]["output"];
	status?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	wallet?: Maybe<Scalars["String"]["output"]>;
};

export type WithdrawalCreateAccess = {
	__typename?: "WithdrawalCreateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WithdrawalCreateDocAccess = {
	__typename?: "WithdrawalCreateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WithdrawalDeleteAccess = {
	__typename?: "WithdrawalDeleteAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WithdrawalDeleteDocAccess = {
	__typename?: "WithdrawalDeleteDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WithdrawalDocAccessFields = {
	__typename?: "WithdrawalDocAccessFields";
	amount?: Maybe<WithdrawalDocAccessFields_Amount>;
	createdAt?: Maybe<WithdrawalDocAccessFields_CreatedAt>;
	date?: Maybe<WithdrawalDocAccessFields_Date>;
	email?: Maybe<WithdrawalDocAccessFields_Email>;
	status?: Maybe<WithdrawalDocAccessFields_Status>;
	updatedAt?: Maybe<WithdrawalDocAccessFields_UpdatedAt>;
	wallet?: Maybe<WithdrawalDocAccessFields_Wallet>;
};

export type WithdrawalDocAccessFields_Amount = {
	__typename?: "WithdrawalDocAccessFields_amount";
	create?: Maybe<WithdrawalDocAccessFields_Amount_Create>;
	delete?: Maybe<WithdrawalDocAccessFields_Amount_Delete>;
	read?: Maybe<WithdrawalDocAccessFields_Amount_Read>;
	update?: Maybe<WithdrawalDocAccessFields_Amount_Update>;
};

export type WithdrawalDocAccessFields_Amount_Create = {
	__typename?: "WithdrawalDocAccessFields_amount_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Amount_Delete = {
	__typename?: "WithdrawalDocAccessFields_amount_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Amount_Read = {
	__typename?: "WithdrawalDocAccessFields_amount_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Amount_Update = {
	__typename?: "WithdrawalDocAccessFields_amount_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_CreatedAt = {
	__typename?: "WithdrawalDocAccessFields_createdAt";
	create?: Maybe<WithdrawalDocAccessFields_CreatedAt_Create>;
	delete?: Maybe<WithdrawalDocAccessFields_CreatedAt_Delete>;
	read?: Maybe<WithdrawalDocAccessFields_CreatedAt_Read>;
	update?: Maybe<WithdrawalDocAccessFields_CreatedAt_Update>;
};

export type WithdrawalDocAccessFields_CreatedAt_Create = {
	__typename?: "WithdrawalDocAccessFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_CreatedAt_Delete = {
	__typename?: "WithdrawalDocAccessFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_CreatedAt_Read = {
	__typename?: "WithdrawalDocAccessFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_CreatedAt_Update = {
	__typename?: "WithdrawalDocAccessFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Date = {
	__typename?: "WithdrawalDocAccessFields_date";
	create?: Maybe<WithdrawalDocAccessFields_Date_Create>;
	delete?: Maybe<WithdrawalDocAccessFields_Date_Delete>;
	read?: Maybe<WithdrawalDocAccessFields_Date_Read>;
	update?: Maybe<WithdrawalDocAccessFields_Date_Update>;
};

export type WithdrawalDocAccessFields_Date_Create = {
	__typename?: "WithdrawalDocAccessFields_date_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Date_Delete = {
	__typename?: "WithdrawalDocAccessFields_date_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Date_Read = {
	__typename?: "WithdrawalDocAccessFields_date_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Date_Update = {
	__typename?: "WithdrawalDocAccessFields_date_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Email = {
	__typename?: "WithdrawalDocAccessFields_email";
	create?: Maybe<WithdrawalDocAccessFields_Email_Create>;
	delete?: Maybe<WithdrawalDocAccessFields_Email_Delete>;
	read?: Maybe<WithdrawalDocAccessFields_Email_Read>;
	update?: Maybe<WithdrawalDocAccessFields_Email_Update>;
};

export type WithdrawalDocAccessFields_Email_Create = {
	__typename?: "WithdrawalDocAccessFields_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Email_Delete = {
	__typename?: "WithdrawalDocAccessFields_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Email_Read = {
	__typename?: "WithdrawalDocAccessFields_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Email_Update = {
	__typename?: "WithdrawalDocAccessFields_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Status = {
	__typename?: "WithdrawalDocAccessFields_status";
	create?: Maybe<WithdrawalDocAccessFields_Status_Create>;
	delete?: Maybe<WithdrawalDocAccessFields_Status_Delete>;
	read?: Maybe<WithdrawalDocAccessFields_Status_Read>;
	update?: Maybe<WithdrawalDocAccessFields_Status_Update>;
};

export type WithdrawalDocAccessFields_Status_Create = {
	__typename?: "WithdrawalDocAccessFields_status_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Status_Delete = {
	__typename?: "WithdrawalDocAccessFields_status_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Status_Read = {
	__typename?: "WithdrawalDocAccessFields_status_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Status_Update = {
	__typename?: "WithdrawalDocAccessFields_status_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_UpdatedAt = {
	__typename?: "WithdrawalDocAccessFields_updatedAt";
	create?: Maybe<WithdrawalDocAccessFields_UpdatedAt_Create>;
	delete?: Maybe<WithdrawalDocAccessFields_UpdatedAt_Delete>;
	read?: Maybe<WithdrawalDocAccessFields_UpdatedAt_Read>;
	update?: Maybe<WithdrawalDocAccessFields_UpdatedAt_Update>;
};

export type WithdrawalDocAccessFields_UpdatedAt_Create = {
	__typename?: "WithdrawalDocAccessFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_UpdatedAt_Delete = {
	__typename?: "WithdrawalDocAccessFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_UpdatedAt_Read = {
	__typename?: "WithdrawalDocAccessFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_UpdatedAt_Update = {
	__typename?: "WithdrawalDocAccessFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Wallet = {
	__typename?: "WithdrawalDocAccessFields_wallet";
	create?: Maybe<WithdrawalDocAccessFields_Wallet_Create>;
	delete?: Maybe<WithdrawalDocAccessFields_Wallet_Delete>;
	read?: Maybe<WithdrawalDocAccessFields_Wallet_Read>;
	update?: Maybe<WithdrawalDocAccessFields_Wallet_Update>;
};

export type WithdrawalDocAccessFields_Wallet_Create = {
	__typename?: "WithdrawalDocAccessFields_wallet_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Wallet_Delete = {
	__typename?: "WithdrawalDocAccessFields_wallet_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Wallet_Read = {
	__typename?: "WithdrawalDocAccessFields_wallet_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalDocAccessFields_Wallet_Update = {
	__typename?: "WithdrawalDocAccessFields_wallet_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields = {
	__typename?: "WithdrawalFields";
	amount?: Maybe<WithdrawalFields_Amount>;
	createdAt?: Maybe<WithdrawalFields_CreatedAt>;
	date?: Maybe<WithdrawalFields_Date>;
	email?: Maybe<WithdrawalFields_Email>;
	status?: Maybe<WithdrawalFields_Status>;
	updatedAt?: Maybe<WithdrawalFields_UpdatedAt>;
	wallet?: Maybe<WithdrawalFields_Wallet>;
};

export type WithdrawalFields_Amount = {
	__typename?: "WithdrawalFields_amount";
	create?: Maybe<WithdrawalFields_Amount_Create>;
	delete?: Maybe<WithdrawalFields_Amount_Delete>;
	read?: Maybe<WithdrawalFields_Amount_Read>;
	update?: Maybe<WithdrawalFields_Amount_Update>;
};

export type WithdrawalFields_Amount_Create = {
	__typename?: "WithdrawalFields_amount_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Amount_Delete = {
	__typename?: "WithdrawalFields_amount_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Amount_Read = {
	__typename?: "WithdrawalFields_amount_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Amount_Update = {
	__typename?: "WithdrawalFields_amount_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_CreatedAt = {
	__typename?: "WithdrawalFields_createdAt";
	create?: Maybe<WithdrawalFields_CreatedAt_Create>;
	delete?: Maybe<WithdrawalFields_CreatedAt_Delete>;
	read?: Maybe<WithdrawalFields_CreatedAt_Read>;
	update?: Maybe<WithdrawalFields_CreatedAt_Update>;
};

export type WithdrawalFields_CreatedAt_Create = {
	__typename?: "WithdrawalFields_createdAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_CreatedAt_Delete = {
	__typename?: "WithdrawalFields_createdAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_CreatedAt_Read = {
	__typename?: "WithdrawalFields_createdAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_CreatedAt_Update = {
	__typename?: "WithdrawalFields_createdAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Date = {
	__typename?: "WithdrawalFields_date";
	create?: Maybe<WithdrawalFields_Date_Create>;
	delete?: Maybe<WithdrawalFields_Date_Delete>;
	read?: Maybe<WithdrawalFields_Date_Read>;
	update?: Maybe<WithdrawalFields_Date_Update>;
};

export type WithdrawalFields_Date_Create = {
	__typename?: "WithdrawalFields_date_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Date_Delete = {
	__typename?: "WithdrawalFields_date_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Date_Read = {
	__typename?: "WithdrawalFields_date_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Date_Update = {
	__typename?: "WithdrawalFields_date_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Email = {
	__typename?: "WithdrawalFields_email";
	create?: Maybe<WithdrawalFields_Email_Create>;
	delete?: Maybe<WithdrawalFields_Email_Delete>;
	read?: Maybe<WithdrawalFields_Email_Read>;
	update?: Maybe<WithdrawalFields_Email_Update>;
};

export type WithdrawalFields_Email_Create = {
	__typename?: "WithdrawalFields_email_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Email_Delete = {
	__typename?: "WithdrawalFields_email_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Email_Read = {
	__typename?: "WithdrawalFields_email_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Email_Update = {
	__typename?: "WithdrawalFields_email_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Status = {
	__typename?: "WithdrawalFields_status";
	create?: Maybe<WithdrawalFields_Status_Create>;
	delete?: Maybe<WithdrawalFields_Status_Delete>;
	read?: Maybe<WithdrawalFields_Status_Read>;
	update?: Maybe<WithdrawalFields_Status_Update>;
};

export type WithdrawalFields_Status_Create = {
	__typename?: "WithdrawalFields_status_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Status_Delete = {
	__typename?: "WithdrawalFields_status_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Status_Read = {
	__typename?: "WithdrawalFields_status_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Status_Update = {
	__typename?: "WithdrawalFields_status_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_UpdatedAt = {
	__typename?: "WithdrawalFields_updatedAt";
	create?: Maybe<WithdrawalFields_UpdatedAt_Create>;
	delete?: Maybe<WithdrawalFields_UpdatedAt_Delete>;
	read?: Maybe<WithdrawalFields_UpdatedAt_Read>;
	update?: Maybe<WithdrawalFields_UpdatedAt_Update>;
};

export type WithdrawalFields_UpdatedAt_Create = {
	__typename?: "WithdrawalFields_updatedAt_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_UpdatedAt_Delete = {
	__typename?: "WithdrawalFields_updatedAt_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_UpdatedAt_Read = {
	__typename?: "WithdrawalFields_updatedAt_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_UpdatedAt_Update = {
	__typename?: "WithdrawalFields_updatedAt_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Wallet = {
	__typename?: "WithdrawalFields_wallet";
	create?: Maybe<WithdrawalFields_Wallet_Create>;
	delete?: Maybe<WithdrawalFields_Wallet_Delete>;
	read?: Maybe<WithdrawalFields_Wallet_Read>;
	update?: Maybe<WithdrawalFields_Wallet_Update>;
};

export type WithdrawalFields_Wallet_Create = {
	__typename?: "WithdrawalFields_wallet_Create";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Wallet_Delete = {
	__typename?: "WithdrawalFields_wallet_Delete";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Wallet_Read = {
	__typename?: "WithdrawalFields_wallet_Read";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalFields_Wallet_Update = {
	__typename?: "WithdrawalFields_wallet_Update";
	permission: Scalars["Boolean"]["output"];
};

export type WithdrawalReadAccess = {
	__typename?: "WithdrawalReadAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WithdrawalReadDocAccess = {
	__typename?: "WithdrawalReadDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WithdrawalUpdateAccess = {
	__typename?: "WithdrawalUpdateAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type WithdrawalUpdateDocAccess = {
	__typename?: "WithdrawalUpdateDocAccess";
	permission: Scalars["Boolean"]["output"];
	where?: Maybe<Scalars["JSONObject"]["output"]>;
};

export type Withdrawal_Amount_Operator = {
	equals?: InputMaybe<Scalars["Float"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Float"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	less_than?: InputMaybe<Scalars["Float"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Float"]["input"]>;
	not_equals?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Withdrawal_CreatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Withdrawal_Date_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Withdrawal_Email_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	contains?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
	like?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_equals?: InputMaybe<Scalars["EmailAddress"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]["input"]>>>;
};

export type Withdrawal_Id_Operator = {
	equals?: InputMaybe<Scalars["Int"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["Int"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	less_than?: InputMaybe<Scalars["Int"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["Int"]["input"]>;
	not_equals?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Withdrawal_Status_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Withdrawal_UpdatedAt_Operator = {
	equals?: InputMaybe<Scalars["DateTime"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	greater_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	greater_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than?: InputMaybe<Scalars["DateTime"]["input"]>;
	less_than_equal?: InputMaybe<Scalars["DateTime"]["input"]>;
	like?: InputMaybe<Scalars["DateTime"]["input"]>;
	not_equals?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Withdrawal_Wallet_Operator = {
	all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	equals?: InputMaybe<Scalars["String"]["input"]>;
	exists?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	not_equals?: InputMaybe<Scalars["String"]["input"]>;
	not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Withdrawal_Where = {
	AND?: InputMaybe<Array<InputMaybe<Withdrawal_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Withdrawal_Where_Or>>>;
	amount?: InputMaybe<Withdrawal_Amount_Operator>;
	createdAt?: InputMaybe<Withdrawal_CreatedAt_Operator>;
	date?: InputMaybe<Withdrawal_Date_Operator>;
	email?: InputMaybe<Withdrawal_Email_Operator>;
	id?: InputMaybe<Withdrawal_Id_Operator>;
	status?: InputMaybe<Withdrawal_Status_Operator>;
	updatedAt?: InputMaybe<Withdrawal_UpdatedAt_Operator>;
	wallet?: InputMaybe<Withdrawal_Wallet_Operator>;
};

export type Withdrawal_Where_And = {
	AND?: InputMaybe<Array<InputMaybe<Withdrawal_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Withdrawal_Where_Or>>>;
	amount?: InputMaybe<Withdrawal_Amount_Operator>;
	createdAt?: InputMaybe<Withdrawal_CreatedAt_Operator>;
	date?: InputMaybe<Withdrawal_Date_Operator>;
	email?: InputMaybe<Withdrawal_Email_Operator>;
	id?: InputMaybe<Withdrawal_Id_Operator>;
	status?: InputMaybe<Withdrawal_Status_Operator>;
	updatedAt?: InputMaybe<Withdrawal_UpdatedAt_Operator>;
	wallet?: InputMaybe<Withdrawal_Wallet_Operator>;
};

export type Withdrawal_Where_Or = {
	AND?: InputMaybe<Array<InputMaybe<Withdrawal_Where_And>>>;
	OR?: InputMaybe<Array<InputMaybe<Withdrawal_Where_Or>>>;
	amount?: InputMaybe<Withdrawal_Amount_Operator>;
	createdAt?: InputMaybe<Withdrawal_CreatedAt_Operator>;
	date?: InputMaybe<Withdrawal_Date_Operator>;
	email?: InputMaybe<Withdrawal_Email_Operator>;
	id?: InputMaybe<Withdrawal_Id_Operator>;
	status?: InputMaybe<Withdrawal_Status_Operator>;
	updatedAt?: InputMaybe<Withdrawal_UpdatedAt_Operator>;
	wallet?: InputMaybe<Withdrawal_Wallet_Operator>;
};

export type Withdrawals = {
	__typename?: "Withdrawals";
	docs?: Maybe<Array<Maybe<Withdrawal>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type AboutAccess = {
	__typename?: "aboutAccess";
	create?: Maybe<AboutCreateAccess>;
	delete?: Maybe<AboutDeleteAccess>;
	fields?: Maybe<AboutFields>;
	read?: Maybe<AboutReadAccess>;
	update?: Maybe<AboutUpdateAccess>;
};

export type AboutDocAccess = {
	__typename?: "aboutDocAccess";
	create?: Maybe<AboutCreateDocAccess>;
	delete?: Maybe<AboutDeleteDocAccess>;
	fields?: Maybe<AboutDocAccessFields>;
	read?: Maybe<AboutReadDocAccess>;
	update?: Maybe<AboutUpdateDocAccess>;
};

export type AllMedia = {
	__typename?: "allMedia";
	docs?: Maybe<Array<Maybe<Media>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type CountAbouts = {
	__typename?: "countAbouts";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountDeposits = {
	__typename?: "countDeposits";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountExchangeRates = {
	__typename?: "countExchangeRates";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountFeedbacks = {
	__typename?: "countFeedbacks";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountLeaderboards = {
	__typename?: "countLeaderboards";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountMinimalDeposits = {
	__typename?: "countMinimalDeposits";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountPayloadPreferences = {
	__typename?: "countPayloadPreferences";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountPlayers = {
	__typename?: "countPlayers";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountSaved_Transactions = {
	__typename?: "countSaved_transactions";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountTransactions = {
	__typename?: "countTransactions";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountUsers = {
	__typename?: "countUsers";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountWallets = {
	__typename?: "countWallets";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountWithdrawals = {
	__typename?: "countWithdrawals";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type CountallMedia = {
	__typename?: "countallMedia";
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
};

export type Deposit = {
	__typename?: "deposit";
	amount?: Maybe<Scalars["Float"]["output"]>;
	wallet_adress?: Maybe<Scalars["String"]["output"]>;
};

export type DepositAccess = {
	__typename?: "depositAccess";
	create?: Maybe<DepositCreateAccess>;
	delete?: Maybe<DepositDeleteAccess>;
	fields?: Maybe<DepositFields>;
	read?: Maybe<DepositReadAccess>;
	update?: Maybe<DepositUpdateAccess>;
};

export type DepositDocAccess = {
	__typename?: "depositDocAccess";
	create?: Maybe<DepositCreateDocAccess>;
	delete?: Maybe<DepositDeleteDocAccess>;
	fields?: Maybe<DepositDocAccessFields>;
	read?: Maybe<DepositReadDocAccess>;
	update?: Maybe<DepositUpdateDocAccess>;
};

export type Exchange = {
	__typename?: "exchange";
	aics_exchange?: Maybe<Scalars["Float"]["output"]>;
};

export type Exchange_RateAccess = {
	__typename?: "exchange_rateAccess";
	create?: Maybe<ExchangeRateCreateAccess>;
	delete?: Maybe<ExchangeRateDeleteAccess>;
	fields?: Maybe<ExchangeRateFields>;
	read?: Maybe<ExchangeRateReadAccess>;
	update?: Maybe<ExchangeRateUpdateAccess>;
};

export type Exchange_RateDocAccess = {
	__typename?: "exchange_rateDocAccess";
	create?: Maybe<ExchangeRateCreateDocAccess>;
	delete?: Maybe<ExchangeRateDeleteDocAccess>;
	fields?: Maybe<ExchangeRateDocAccessFields>;
	read?: Maybe<ExchangeRateReadDocAccess>;
	update?: Maybe<ExchangeRateUpdateDocAccess>;
};

export type FeedbackAccess = {
	__typename?: "feedbackAccess";
	create?: Maybe<FeedbackCreateAccess>;
	delete?: Maybe<FeedbackDeleteAccess>;
	fields?: Maybe<FeedbackFields>;
	read?: Maybe<FeedbackReadAccess>;
	update?: Maybe<FeedbackUpdateAccess>;
};

export type FeedbackDocAccess = {
	__typename?: "feedbackDocAccess";
	create?: Maybe<FeedbackCreateDocAccess>;
	delete?: Maybe<FeedbackDeleteDocAccess>;
	fields?: Maybe<FeedbackDocAccessFields>;
	read?: Maybe<FeedbackReadDocAccess>;
	update?: Maybe<FeedbackUpdateDocAccess>;
};

export type Free_Coins_Winning = {
	__typename?: "free_coins_winning";
	aics?: Maybe<Scalars["Float"]["output"]>;
	hat?: Maybe<Scalars["Float"]["output"]>;
};

export type Game = {
	__typename?: "game";
	aics?: Maybe<Scalars["Float"]["output"]>;
	hat?: Maybe<Scalars["Float"]["output"]>;
	number?: Maybe<Scalars["Int"]["output"]>;
	sha?: Maybe<Scalars["String"]["output"]>;
	win?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Get_Free_Hat = {
	__typename?: "get_free_hat";
	can_get?: Maybe<Scalars["Boolean"]["output"]>;
	hat?: Maybe<Scalars["Float"]["output"]>;
};

export type Guess_Status = {
	__typename?: "guess_status";
	aics?: Maybe<Scalars["Float"]["output"]>;
	aisc_balance?: Maybe<Scalars["Float"]["output"]>;
	hat?: Maybe<Scalars["Float"]["output"]>;
};

export type Leaderboard = {
	__typename?: "leaderboard";
	bet?: Maybe<Scalars["Float"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	winning?: Maybe<Scalars["Float"]["output"]>;
};

export type Leaderboard_Input = {
	bet?: InputMaybe<Scalars["Float"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	winning?: InputMaybe<Scalars["Float"]["input"]>;
};

export type LeaderboardsAccess = {
	__typename?: "leaderboardsAccess";
	create?: Maybe<LeaderboardsCreateAccess>;
	delete?: Maybe<LeaderboardsDeleteAccess>;
	fields?: Maybe<LeaderboardsFields>;
	read?: Maybe<LeaderboardsReadAccess>;
	update?: Maybe<LeaderboardsUpdateAccess>;
};

export type LeaderboardsDocAccess = {
	__typename?: "leaderboardsDocAccess";
	create?: Maybe<LeaderboardsCreateDocAccess>;
	delete?: Maybe<LeaderboardsDeleteDocAccess>;
	fields?: Maybe<LeaderboardsDocAccessFields>;
	read?: Maybe<LeaderboardsReadDocAccess>;
	update?: Maybe<LeaderboardsUpdateDocAccess>;
};

export type MediaAccess = {
	__typename?: "mediaAccess";
	create?: Maybe<MediaCreateAccess>;
	delete?: Maybe<MediaDeleteAccess>;
	fields?: Maybe<MediaFields>;
	read?: Maybe<MediaReadAccess>;
	update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
	__typename?: "mediaDocAccess";
	create?: Maybe<MediaCreateDocAccess>;
	delete?: Maybe<MediaDeleteDocAccess>;
	fields?: Maybe<MediaDocAccessFields>;
	read?: Maybe<MediaReadDocAccess>;
	update?: Maybe<MediaUpdateDocAccess>;
};

export type Minimal_DepositAccess = {
	__typename?: "minimal_depositAccess";
	create?: Maybe<MinimalDepositCreateAccess>;
	delete?: Maybe<MinimalDepositDeleteAccess>;
	fields?: Maybe<MinimalDepositFields>;
	read?: Maybe<MinimalDepositReadAccess>;
	update?: Maybe<MinimalDepositUpdateAccess>;
};

export type Minimal_DepositDocAccess = {
	__typename?: "minimal_depositDocAccess";
	create?: Maybe<MinimalDepositCreateDocAccess>;
	delete?: Maybe<MinimalDepositDeleteDocAccess>;
	fields?: Maybe<MinimalDepositDocAccessFields>;
	read?: Maybe<MinimalDepositReadDocAccess>;
	update?: Maybe<MinimalDepositUpdateDocAccess>;
};

export type MutationAboutInput = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAboutUpdateInput = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationDepositUpdateInput = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	owner_adress?: InputMaybe<Scalars["String"]["input"]>;
	status?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	user_email?: InputMaybe<Scalars["String"]["input"]>;
	wallet_address?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationExchangeRateInput = {
	aics_exchange?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationExchangeRateUpdateInput = {
	aics_exchange?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationFeedbackInput = {
	age?: InputMaybe<Scalars["Float"]["input"]>;
	avatar?: InputMaybe<Scalars["Int"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	feedback?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	town?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationFeedbackUpdateInput = {
	age?: InputMaybe<Scalars["Float"]["input"]>;
	avatar?: InputMaybe<Scalars["Int"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	feedback?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	town?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationLeaderboardInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationLeaderboardUpdateInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationMediaInput = {
	alt?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	filename?: InputMaybe<Scalars["String"]["input"]>;
	filesize?: InputMaybe<Scalars["Float"]["input"]>;
	focalX?: InputMaybe<Scalars["Float"]["input"]>;
	focalY?: InputMaybe<Scalars["Float"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	sizes?: InputMaybe<MutationMedia_SizesInput>;
	thumbnailURL?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationMediaUpdateInput = {
	alt?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	filename?: InputMaybe<Scalars["String"]["input"]>;
	filesize?: InputMaybe<Scalars["Float"]["input"]>;
	focalX?: InputMaybe<Scalars["Float"]["input"]>;
	focalY?: InputMaybe<Scalars["Float"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
	thumbnailURL?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationMediaUpdate_SizesInput = {
	card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
	default?: InputMaybe<MutationMediaUpdate_Sizes_DefaultInput>;
	thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
	filename?: InputMaybe<Scalars["String"]["input"]>;
	filesize?: InputMaybe<Scalars["Float"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationMediaUpdate_Sizes_DefaultInput = {
	filename?: InputMaybe<Scalars["String"]["input"]>;
	filesize?: InputMaybe<Scalars["Float"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
	filename?: InputMaybe<Scalars["String"]["input"]>;
	filesize?: InputMaybe<Scalars["Float"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationMedia_SizesInput = {
	card?: InputMaybe<MutationMedia_Sizes_CardInput>;
	default?: InputMaybe<MutationMedia_Sizes_DefaultInput>;
	thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_CardInput = {
	filename?: InputMaybe<Scalars["String"]["input"]>;
	filesize?: InputMaybe<Scalars["Float"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationMedia_Sizes_DefaultInput = {
	filename?: InputMaybe<Scalars["String"]["input"]>;
	filesize?: InputMaybe<Scalars["Float"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
	filename?: InputMaybe<Scalars["String"]["input"]>;
	filesize?: InputMaybe<Scalars["Float"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationMinimalDepositInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	minimal_sum?: InputMaybe<Scalars["Float"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationMinimalDepositUpdateInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	minimal_sum?: InputMaybe<Scalars["Float"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationPayloadPreferenceInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	key?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
	value?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type MutationPayloadPreferenceUpdateInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	key?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
	value?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type MutationPlayerInput = {
	aics?: InputMaybe<Scalars["Float"]["input"]>;
	aics_mined?: InputMaybe<Scalars["Float"]["input"]>;
	assignedAgent?: InputMaybe<Scalars["Int"]["input"]>;
	can_get_free_coin?: InputMaybe<Scalars["Boolean"]["input"]>;
	can_get_free_hat?: InputMaybe<Scalars["Boolean"]["input"]>;
	code?: InputMaybe<Scalars["String"]["input"]>;
	confirmations_by_email?: InputMaybe<Scalars["Boolean"]["input"]>;
	country?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	created_by_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	email_verify?: InputMaybe<Scalars["Boolean"]["input"]>;
	guess_games_played?: InputMaybe<Scalars["Float"]["input"]>;
	guess_last_prize?: InputMaybe<Scalars["Float"]["input"]>;
	guess_time_finish?: InputMaybe<Scalars["Float"]["input"]>;
	guess_time_start?: InputMaybe<Scalars["Float"]["input"]>;
	guess_total_time?: InputMaybe<Scalars["Float"]["input"]>;
	hat?: InputMaybe<Scalars["Float"]["input"]>;
	last_free_hat?: InputMaybe<Scalars["Float"]["input"]>;
	login?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	number_combination?: InputMaybe<Scalars["String"]["input"]>;
	number_to_guess?: InputMaybe<Scalars["Float"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	recovery_token?: InputMaybe<Scalars["String"]["input"]>;
	refferal_code?: InputMaybe<Scalars["String"]["input"]>;
	reffered_by?: InputMaybe<Scalars["String"]["input"]>;
	reffered_users?: InputMaybe<
		Array<InputMaybe<MutationPlayer_Reffered_UsersInput>>
	>;
	reffiled?: InputMaybe<Scalars["Float"]["input"]>;
	sapper_total_time?: InputMaybe<Scalars["Float"]["input"]>;
	today_mined_screen?: InputMaybe<Scalars["Float"]["input"]>;
	total_mined?: InputMaybe<Scalars["Float"]["input"]>;
	total_mined_screen?: InputMaybe<Scalars["Float"]["input"]>;
	total_withdraw?: InputMaybe<Scalars["Float"]["input"]>;
	two_factor_authentification?: InputMaybe<Scalars["Boolean"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	usdt?: InputMaybe<Scalars["Float"]["input"]>;
	wallet_address?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationPlayerUpdateInput = {
	aics?: InputMaybe<Scalars["Float"]["input"]>;
	aics_mined?: InputMaybe<Scalars["Float"]["input"]>;
	assignedAgent?: InputMaybe<Scalars["Int"]["input"]>;
	can_get_free_coin?: InputMaybe<Scalars["Boolean"]["input"]>;
	can_get_free_hat?: InputMaybe<Scalars["Boolean"]["input"]>;
	code?: InputMaybe<Scalars["String"]["input"]>;
	confirmations_by_email?: InputMaybe<Scalars["Boolean"]["input"]>;
	country?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	created_by_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	email_verify?: InputMaybe<Scalars["Boolean"]["input"]>;
	guess_games_played?: InputMaybe<Scalars["Float"]["input"]>;
	guess_last_prize?: InputMaybe<Scalars["Float"]["input"]>;
	guess_time_finish?: InputMaybe<Scalars["Float"]["input"]>;
	guess_time_start?: InputMaybe<Scalars["Float"]["input"]>;
	guess_total_time?: InputMaybe<Scalars["Float"]["input"]>;
	hat?: InputMaybe<Scalars["Float"]["input"]>;
	last_free_hat?: InputMaybe<Scalars["Float"]["input"]>;
	login?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	number_combination?: InputMaybe<Scalars["String"]["input"]>;
	number_to_guess?: InputMaybe<Scalars["Float"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	recovery_token?: InputMaybe<Scalars["String"]["input"]>;
	refferal_code?: InputMaybe<Scalars["String"]["input"]>;
	reffered_by?: InputMaybe<Scalars["String"]["input"]>;
	reffered_users?: InputMaybe<
		Array<InputMaybe<MutationPlayerUpdate_Reffered_UsersInput>>
	>;
	reffiled?: InputMaybe<Scalars["Float"]["input"]>;
	sapper_total_time?: InputMaybe<Scalars["Float"]["input"]>;
	today_mined_screen?: InputMaybe<Scalars["Float"]["input"]>;
	total_mined?: InputMaybe<Scalars["Float"]["input"]>;
	total_mined_screen?: InputMaybe<Scalars["Float"]["input"]>;
	total_withdraw?: InputMaybe<Scalars["Float"]["input"]>;
	two_factor_authentification?: InputMaybe<Scalars["Boolean"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	usdt?: InputMaybe<Scalars["Float"]["input"]>;
	wallet_address?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationPlayerUpdate_Reffered_UsersInput = {
	date?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["String"]["input"]>;
	reffered_email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationPlayer_Reffered_UsersInput = {
	date?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["String"]["input"]>;
	reffered_email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSaved_TransactionInput = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	owner_address?: InputMaybe<Scalars["String"]["input"]>;
	transaction_hash?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSaved_TransactionUpdateInput = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	owner_address?: InputMaybe<Scalars["String"]["input"]>;
	transaction_hash?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTransactionInput = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	currency_type?: InputMaybe<Scalars["String"]["input"]>;
	date?: InputMaybe<Scalars["String"]["input"]>;
	status?: InputMaybe<Scalars["String"]["input"]>;
	type?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	user_id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationTransactionUpdateInput = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	currency_type?: InputMaybe<Scalars["String"]["input"]>;
	date?: InputMaybe<Scalars["String"]["input"]>;
	status?: InputMaybe<Scalars["String"]["input"]>;
	type?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	user_id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationUserInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	email: Scalars["String"]["input"];
	hash?: InputMaybe<Scalars["String"]["input"]>;
	lockUntil?: InputMaybe<Scalars["String"]["input"]>;
	loginAttempts?: InputMaybe<Scalars["Float"]["input"]>;
	password: Scalars["String"]["input"];
	referralCode?: InputMaybe<Scalars["String"]["input"]>;
	resetPasswordExpiration?: InputMaybe<Scalars["String"]["input"]>;
	resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
	role?: InputMaybe<User_Role_MutationInput>;
	salt?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUserUpdateInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	hash?: InputMaybe<Scalars["String"]["input"]>;
	lockUntil?: InputMaybe<Scalars["String"]["input"]>;
	loginAttempts?: InputMaybe<Scalars["Float"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	referralCode?: InputMaybe<Scalars["String"]["input"]>;
	resetPasswordExpiration?: InputMaybe<Scalars["String"]["input"]>;
	resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
	role?: InputMaybe<UserUpdate_Role_MutationInput>;
	salt?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationWalletInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	wallet_adress?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationWalletUpdateInput = {
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	wallet_adress?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationWithdrawalInput = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	date?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	status?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	wallet?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationWithdrawalUpdateInput = {
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	createdAt?: InputMaybe<Scalars["String"]["input"]>;
	date?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	status?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["String"]["input"]>;
	wallet?: InputMaybe<Scalars["String"]["input"]>;
};

export type Payload_PreferencesAccess = {
	__typename?: "payload_preferencesAccess";
	create?: Maybe<PayloadPreferencesCreateAccess>;
	delete?: Maybe<PayloadPreferencesDeleteAccess>;
	fields?: Maybe<PayloadPreferencesFields>;
	read?: Maybe<PayloadPreferencesReadAccess>;
	update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
	__typename?: "payload_preferencesDocAccess";
	create?: Maybe<PayloadPreferencesCreateDocAccess>;
	delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
	fields?: Maybe<PayloadPreferencesDocAccessFields>;
	read?: Maybe<PayloadPreferencesReadDocAccess>;
	update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type PlayerAccess = {
	__typename?: "playerAccess";
	create?: Maybe<PlayerCreateAccess>;
	delete?: Maybe<PlayerDeleteAccess>;
	fields?: Maybe<PlayerFields>;
	read?: Maybe<PlayerReadAccess>;
	update?: Maybe<PlayerUpdateAccess>;
};

export type PlayerDocAccess = {
	__typename?: "playerDocAccess";
	create?: Maybe<PlayerCreateDocAccess>;
	delete?: Maybe<PlayerDeleteDocAccess>;
	fields?: Maybe<PlayerDocAccessFields>;
	read?: Maybe<PlayerReadDocAccess>;
	update?: Maybe<PlayerUpdateDocAccess>;
};

export type Recovery_Confirmation = {
	__typename?: "recovery_confirmation";
	token?: Maybe<Scalars["String"]["output"]>;
};

export type Refferal = {
	__typename?: "refferal";
	date?: Maybe<Scalars["String"]["output"]>;
	mining?: Maybe<Scalars["Float"]["output"]>;
	profit?: Maybe<Scalars["Float"]["output"]>;
	refferal_email?: Maybe<Scalars["String"]["output"]>;
	reffiled?: Maybe<Scalars["Float"]["output"]>;
};

export type Result_Of_Check = {
	__typename?: "result_of_check";
	status?: Maybe<Scalars["Boolean"]["output"]>;
	usdt?: Maybe<Scalars["Float"]["output"]>;
};

export type Saved_TransactionsAccess = {
	__typename?: "saved_transactionsAccess";
	create?: Maybe<Saved_TransactionsCreateAccess>;
	delete?: Maybe<Saved_TransactionsDeleteAccess>;
	fields?: Maybe<Saved_TransactionsFields>;
	read?: Maybe<Saved_TransactionsReadAccess>;
	update?: Maybe<Saved_TransactionsUpdateAccess>;
};

export type Saved_TransactionsDocAccess = {
	__typename?: "saved_transactionsDocAccess";
	create?: Maybe<Saved_TransactionsCreateDocAccess>;
	delete?: Maybe<Saved_TransactionsDeleteDocAccess>;
	fields?: Maybe<Saved_TransactionsDocAccessFields>;
	read?: Maybe<Saved_TransactionsReadDocAccess>;
	update?: Maybe<Saved_TransactionsUpdateDocAccess>;
};

export type Sha = {
	__typename?: "sha";
	aisc?: Maybe<Scalars["Float"]["output"]>;
	sha?: Maybe<Scalars["String"]["output"]>;
};

export type Status = {
	__typename?: "status";
	aics?: Maybe<Scalars["Float"]["output"]>;
	usdt?: Maybe<Scalars["Float"]["output"]>;
};

export type Transactions = {
	__typename?: "transactions";
	docs?: Maybe<Array<Maybe<Transaction>>>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	hasPrevPage?: Maybe<Scalars["Boolean"]["output"]>;
	limit?: Maybe<Scalars["Int"]["output"]>;
	nextPage?: Maybe<Scalars["Int"]["output"]>;
	offset?: Maybe<Scalars["Int"]["output"]>;
	page?: Maybe<Scalars["Int"]["output"]>;
	pagingCounter?: Maybe<Scalars["Int"]["output"]>;
	prevPage?: Maybe<Scalars["Int"]["output"]>;
	totalDocs?: Maybe<Scalars["Int"]["output"]>;
	totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type TransactionsAccess = {
	__typename?: "transactionsAccess";
	create?: Maybe<TransactionsCreateAccess>;
	delete?: Maybe<TransactionsDeleteAccess>;
	fields?: Maybe<TransactionsFields>;
	read?: Maybe<TransactionsReadAccess>;
	update?: Maybe<TransactionsUpdateAccess>;
};

export type TransactionsDocAccess = {
	__typename?: "transactionsDocAccess";
	create?: Maybe<TransactionsCreateDocAccess>;
	delete?: Maybe<TransactionsDeleteDocAccess>;
	fields?: Maybe<TransactionsDocAccessFields>;
	read?: Maybe<TransactionsReadDocAccess>;
	update?: Maybe<TransactionsUpdateDocAccess>;
};

export type UsersAccess = {
	__typename?: "usersAccess";
	create?: Maybe<UsersCreateAccess>;
	delete?: Maybe<UsersDeleteAccess>;
	fields?: Maybe<UsersFields>;
	read?: Maybe<UsersReadAccess>;
	unlock?: Maybe<UsersUnlockAccess>;
	update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
	__typename?: "usersDocAccess";
	create?: Maybe<UsersCreateDocAccess>;
	delete?: Maybe<UsersDeleteDocAccess>;
	fields?: Maybe<UsersDocAccessFields>;
	read?: Maybe<UsersReadDocAccess>;
	unlock?: Maybe<UsersUnlockDocAccess>;
	update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
	__typename?: "usersJWT";
	collection: Scalars["String"]["output"];
	email: Scalars["EmailAddress"]["output"];
};

export type UsersLoginResult = {
	__typename?: "usersLoginResult";
	exp?: Maybe<Scalars["Int"]["output"]>;
	token?: Maybe<Scalars["String"]["output"]>;
	user?: Maybe<User>;
};

export type UsersMe = {
	__typename?: "usersMe";
	collection?: Maybe<Scalars["String"]["output"]>;
	exp?: Maybe<Scalars["Int"]["output"]>;
	strategy?: Maybe<Scalars["String"]["output"]>;
	token?: Maybe<Scalars["String"]["output"]>;
	user?: Maybe<User>;
};

export type UsersRefreshedUser = {
	__typename?: "usersRefreshedUser";
	exp?: Maybe<Scalars["Int"]["output"]>;
	refreshedToken?: Maybe<Scalars["String"]["output"]>;
	strategy?: Maybe<Scalars["String"]["output"]>;
	user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
	__typename?: "usersResetPassword";
	token?: Maybe<Scalars["String"]["output"]>;
	user?: Maybe<User>;
};

export type WalletsAccess = {
	__typename?: "walletsAccess";
	create?: Maybe<WalletsCreateAccess>;
	delete?: Maybe<WalletsDeleteAccess>;
	fields?: Maybe<WalletsFields>;
	read?: Maybe<WalletsReadAccess>;
	update?: Maybe<WalletsUpdateAccess>;
};

export type WalletsDocAccess = {
	__typename?: "walletsDocAccess";
	create?: Maybe<WalletsCreateDocAccess>;
	delete?: Maybe<WalletsDeleteDocAccess>;
	fields?: Maybe<WalletsDocAccessFields>;
	read?: Maybe<WalletsReadDocAccess>;
	update?: Maybe<WalletsUpdateDocAccess>;
};

export type WithdrawalAccess = {
	__typename?: "withdrawalAccess";
	create?: Maybe<WithdrawalCreateAccess>;
	delete?: Maybe<WithdrawalDeleteAccess>;
	fields?: Maybe<WithdrawalFields>;
	read?: Maybe<WithdrawalReadAccess>;
	update?: Maybe<WithdrawalUpdateAccess>;
};

export type WithdrawalDocAccess = {
	__typename?: "withdrawalDocAccess";
	create?: Maybe<WithdrawalCreateDocAccess>;
	delete?: Maybe<WithdrawalDeleteDocAccess>;
	fields?: Maybe<WithdrawalDocAccessFields>;
	read?: Maybe<WithdrawalReadDocAccess>;
	update?: Maybe<WithdrawalUpdateDocAccess>;
};

export type CreateDepositMutationVariables = Exact<{
	amount: Scalars["Float"]["input"];
}>;

export type CreateDepositMutation = {
	__typename?: "Mutation";
	createDeposit?: {
		__typename?: "deposit";
		amount?: number | null;
		wallet_adress?: string | null;
	} | null;
};

export type ConfirmDepositMutationMutationVariables = Exact<{
	[key: string]: never;
}>;

export type ConfirmDepositMutationMutation = {
	__typename?: "Mutation";
	confirmDeposit: boolean;
};

export type MinimalDepositsQueryVariables = Exact<{ [key: string]: never }>;

export type MinimalDepositsQuery = {
	__typename?: "Query";
	MinimalDeposits?: {
		__typename?: "MinimalDeposits";
		docs?: Array<{
			__typename?: "MinimalDeposit";
			minimal_sum?: number | null;
		} | null> | null;
	} | null;
};

export type CompleteDepositMutationMutationVariables = Exact<{
	[key: string]: never;
}>;

export type CompleteDepositMutationMutation = {
	__typename?: "Mutation";
	completeDeposit?: {
		__typename?: "result_of_check";
		status?: boolean | null;
		usdt?: number | null;
	} | null;
};

export type ExchangeMutationMutationVariables = Exact<{
	usdt: Scalars["Float"]["input"];
	aics: Scalars["Float"]["input"];
}>;

export type ExchangeMutationMutation = {
	__typename?: "Mutation";
	exchange?: {
		__typename?: "status";
		aics?: number | null;
		usdt?: number | null;
	} | null;
};

export type GetFreeCoinMutationVariables = Exact<{ [key: string]: never }>;

export type GetFreeCoinMutation = {
	__typename?: "Mutation";
	freeCoin?: {
		__typename?: "free_coins_winning";
		aics?: number | null;
		hat?: number | null;
	} | null;
};

export type GetWinningGuessMutationMutationVariables = Exact<{
	number: Scalars["Float"]["input"];
	bet: Scalars["Float"]["input"];
}>;

export type GetWinningGuessMutationMutation = {
	__typename?: "Mutation";
	getWinningGuess?: {
		__typename?: "guess_status";
		aics?: number | null;
		hat?: number | null;
		aisc_balance?: number | null;
	} | null;
};

export type GetLeaderBoardQueryVariables = Exact<{
	prevState?: InputMaybe<
		Array<InputMaybe<Leaderboard_Input>> | InputMaybe<Leaderboard_Input>
	>;
}>;

export type GetLeaderBoardQuery = {
	__typename?: "Query";
	getGuessLeaderboard?: Array<{
		__typename?: "leaderboard";
		name?: string | null;
		bet?: number | null;
		winning?: number | null;
	}> | null;
};

export type StartGameQueryVariables = Exact<{
	bet: Scalars["Float"]["input"];
}>;

export type StartGameQuery = {
	__typename?: "Query";
	generateSHA?: {
		__typename?: "sha";
		sha?: string | null;
		aisc?: number | null;
	} | null;
};

export type GameMutationVariables = Exact<{
	numbers?: InputMaybe<
		| Array<InputMaybe<Scalars["Int"]["input"]>>
		| InputMaybe<Scalars["Int"]["input"]>
	>;
	bet: Scalars["Int"]["input"];
	time: Scalars["Int"]["input"];
}>;

export type GameMutation = {
	__typename?: "Mutation";
	playGuess?: {
		__typename?: "game";
		win?: boolean | null;
		aics?: number | null;
		hat?: number | null;
		number?: number | null;
		sha?: string | null;
	} | null;
};

export type GetRefferalsQueryVariables = Exact<{ [key: string]: never }>;

export type GetRefferalsQuery = {
	__typename?: "Query";
	getRefferals?: Array<{
		__typename?: "refferal";
		date?: string | null;
		refferal_email?: string | null;
		reffiled?: number | null;
		mining?: number | null;
		profit?: number | null;
	} | null> | null;
};

export type PlaySapperMutationVariables = Exact<{
	bet: Scalars["Float"]["input"];
	time: Scalars["Int"]["input"];
	hat: Scalars["Float"]["input"];
}>;

export type PlaySapperMutation = {
	__typename?: "Mutation";
	playSapper: boolean;
};

export type StartSapperGameMutationVariables = Exact<{
	bet: Scalars["Float"]["input"];
}>;

export type StartSapperGameMutation = {
	__typename?: "Mutation";
	startPlaySapper: boolean;
};

export type PlayScreenMutationVariables = Exact<{
	score: Scalars["Float"]["input"];
}>;

export type PlayScreenMutation = {
	__typename?: "Mutation";
	playScreen: number;
};

export type ChangePasswordMutationVariables = Exact<{
	old_password: Scalars["String"]["input"];
	new_password: Scalars["String"]["input"];
}>;

export type ChangePasswordMutation = {
	__typename?: "Mutation";
	changePassword: boolean;
};

export type ChangeSettingsMutationVariables = Exact<{
	two_factor_authentification: Scalars["Boolean"]["input"];
	confirmations_by_email: Scalars["Boolean"]["input"];
}>;

export type ChangeSettingsMutation = {
	__typename?: "Mutation";
	changeSettings: boolean;
};

export type ChangeWalletAddressMutationVariables = Exact<{
	wallet_address?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ChangeWalletAddressMutation = {
	__typename?: "Mutation";
	changeWalletAddress: boolean;
};

export type GetTransactionsQueryVariables = Exact<{
	currency_type: Scalars["String"]["input"];
	page: Scalars["Int"]["input"];
}>;

export type GetTransactionsQuery = {
	__typename?: "Query";
	getTransactions?: {
		__typename?: "transactions";
		totalDocs?: number | null;
		hasNextPage?: boolean | null;
		limit?: number | null;
		offset?: number | null;
		pagingCounter?: number | null;
		totalPages?: number | null;
		nextPage?: number | null;
		page?: number | null;
		docs?: Array<{
			__typename?: "Transaction";
			date?: any | null;
			amount?: number | null;
			type?: string | null;
			currency_type?: string | null;
			status?: string | null;
		} | null> | null;
	} | null;
};

export type CreateWithdrawMutationVariables = Exact<{
	amount: Scalars["Float"]["input"];
	code?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CreateWithdrawMutation = {
	__typename?: "Mutation";
	createWithdraw: boolean;
};

export type SendWithdrawCodeMutationVariables = Exact<{ [key: string]: never }>;

export type SendWithdrawCodeMutation = {
	__typename?: "Mutation";
	sendWithdrawCode: boolean;
};

export type ResetCodeMutationMutationVariables = Exact<{
	email?: InputMaybe<Scalars["String"]["input"]>;
	confirm?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type ResetCodeMutationMutation = {
	__typename?: "Mutation";
	resetCode: boolean;
};

export type VerifyemailMutationVariables = Exact<{
	email?: InputMaybe<Scalars["String"]["input"]>;
	code?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type VerifyemailMutation = {
	__typename?: "Mutation";
	verifyEmail: boolean;
};

export type RegMutationVariables = Exact<{
	country?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	login?: InputMaybe<Scalars["String"]["input"]>;
	refferal_code?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type RegMutation = {
	__typename?: "Mutation";
	registration?: {
		__typename?: "Player";
		id: number;
		name?: string | null;
		email?: any | null;
		country?: string | null;
	} | null;
};

export type RecoveryPasswordMutationMutationVariables = Exact<{
	email: Scalars["String"]["input"];
}>;

export type RecoveryPasswordMutationMutation = {
	__typename?: "Mutation";
	recoveryPassword: boolean;
};

export type CofirmRecoveryMutationVariables = Exact<{
	email: Scalars["String"]["input"];
	code: Scalars["String"]["input"];
}>;

export type CofirmRecoveryMutation = {
	__typename?: "Mutation";
	cofirmRecoveryPassword?: {
		__typename?: "recovery_confirmation";
		token?: string | null;
	} | null;
};

export type SetPasswordMutationMutationVariables = Exact<{
	password: Scalars["String"]["input"];
	token: Scalars["String"]["input"];
}>;

export type SetPasswordMutationMutation = {
	__typename?: "Mutation";
	setPassword: boolean;
};

export type ResetCodeMutationVariables = Exact<{
	email?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ResetCodeMutation = { __typename?: "Mutation"; resetCode: boolean };

export type VerifyEmailCodeMutationVariables = Exact<{
	email?: InputMaybe<Scalars["String"]["input"]>;
	code?: InputMaybe<Scalars["String"]["input"]>;
	need?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type VerifyEmailCodeMutation = {
	__typename?: "Mutation";
	verifyEmail: boolean;
};

export type LoginQueryVariables = Exact<{
	email?: InputMaybe<Scalars["String"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type LoginQuery = {
	__typename?: "Query";
	login?: {
		__typename?: "Player";
		id: number;
		name?: string | null;
		email?: any | null;
		country?: string | null;
		login?: string | null;
	} | null;
};

export type GetAboutQueryVariables = Exact<{ [key: string]: never }>;

export type GetAboutQuery = {
	__typename?: "Query";
	Abouts?: {
		__typename?: "Abouts";
		docs?: Array<{
			__typename?: "About";
			content?: string | null;
		} | null> | null;
	} | null;
};

export type ContactUsMutationVariables = Exact<{
	phone?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	message?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ContactUsMutation = { __typename?: "Mutation"; contactUs: boolean };

export type GetFeedBackQueryVariables = Exact<{ [key: string]: never }>;

export type GetFeedBackQuery = {
	__typename?: "Query";
	Feedbacks?: {
		__typename?: "Feedbacks";
		docs?: Array<{
			__typename?: "Feedback";
			feedback?: string | null;
			name?: string | null;
			age?: number | null;
			town?: string | null;
			avatar: {
				__typename?: "Media";
				url?: string | null;
				alt?: string | null;
			};
		} | null> | null;
	} | null;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = {
	__typename?: "Query";
	getMe?: {
		__typename?: "Player";
		id: number;
		email?: any | null;
		name?: string | null;
		login?: string | null;
		country?: string | null;
		aics?: number | null;
		hat?: number | null;
		usdt?: number | null;
		total_mined?: number | null;
		sapper_total_time?: number | null;
		created_by_admin?: boolean | null;
		today_mined_screen?: number | null;
		total_mined_screen?: number | null;
		two_factor_authentification?: boolean | null;
		confirmations_by_email?: boolean | null;
		can_get_free_coin?: boolean | null;
		refferal_code?: string | null;
		wallet_address?: string | null;
		total_withdraw?: number | null;
		createdAt?: any | null;
	} | null;
};

export type GetExchangeQueryVariables = Exact<{ [key: string]: never }>;

export type GetExchangeQuery = {
	__typename?: "Query";
	getExchange?: {
		__typename?: "exchange";
		aics_exchange?: number | null;
	} | null;
};

export type VerifyCodeMutationMutationVariables = Exact<{
	code: Scalars["String"]["input"];
}>;

export type VerifyCodeMutationMutation = {
	__typename?: "Mutation";
	verifyCode: boolean;
};

export type CanGetFreeHatQueryVariables = Exact<{ [key: string]: never }>;

export type CanGetFreeHatQuery = {
	__typename?: "Query";
	canGetFreeHat: boolean;
};

export type GetFreeHatMutationVariables = Exact<{ [key: string]: never }>;

export type GetFreeHatMutation = {
	__typename?: "Mutation";
	getFreeHat?: {
		__typename?: "get_free_hat";
		can_get?: boolean | null;
		hat?: number | null;
	} | null;
};

export const CreateDepositDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "createDeposit" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "amount" },
					},
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "createDeposit" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "amount" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "amount" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "amount" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "wallet_adress" },
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	CreateDepositMutation,
	CreateDepositMutationVariables
>;
export const ConfirmDepositMutationDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "confirmDepositMutation" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "confirmDeposit" } },
				],
			},
		},
	],
} as unknown as DocumentNode<
	ConfirmDepositMutationMutation,
	ConfirmDepositMutationMutationVariables
>;
export const MinimalDepositsDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "minimalDeposits" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "MinimalDeposits" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: { kind: "Name", value: "docs" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "minimal_sum" },
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	MinimalDepositsQuery,
	MinimalDepositsQueryVariables
>;
export const CompleteDepositMutationDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "completeDepositMutation" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "completeDeposit" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "status" } },
								{ kind: "Field", name: { kind: "Name", value: "usdt" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	CompleteDepositMutationMutation,
	CompleteDepositMutationMutationVariables
>;
export const ExchangeMutationDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "exchangeMutation" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "usdt" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "aics" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "exchange" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "usdt" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "usdt" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "aics" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "aics" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "aics" } },
								{ kind: "Field", name: { kind: "Name", value: "usdt" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	ExchangeMutationMutation,
	ExchangeMutationMutationVariables
>;
export const GetFreeCoinDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "getFreeCoin" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "freeCoin" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "aics" } },
								{ kind: "Field", name: { kind: "Name", value: "hat" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetFreeCoinMutation, GetFreeCoinMutationVariables>;
export const GetWinningGuessMutationDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "getWinningGuessMutation" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "number" },
					},
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "bet" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "getWinningGuess" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "number" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "number" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "bet" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "bet" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "aics" } },
								{ kind: "Field", name: { kind: "Name", value: "hat" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "aisc_balance" },
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	GetWinningGuessMutationMutation,
	GetWinningGuessMutationMutationVariables
>;
export const GetLeaderBoardDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getLeaderBoard" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "prevState" },
					},
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "leaderboard_input" },
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "getGuessLeaderboard" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "prevState" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "prevState" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "name" } },
								{ kind: "Field", name: { kind: "Name", value: "bet" } },
								{ kind: "Field", name: { kind: "Name", value: "winning" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetLeaderBoardQuery, GetLeaderBoardQueryVariables>;
export const StartGameDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "startGame" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "bet" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "generateSHA" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "bet" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "bet" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "sha" } },
								{ kind: "Field", name: { kind: "Name", value: "aisc" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<StartGameQuery, StartGameQueryVariables>;
export const GameDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "game" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "numbers" },
					},
					type: {
						kind: "ListType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "bet" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "time" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "playGuess" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "numbers" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "numbers" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "bet" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "bet" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "time" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "time" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "win" } },
								{ kind: "Field", name: { kind: "Name", value: "aics" } },
								{ kind: "Field", name: { kind: "Name", value: "hat" } },
								{ kind: "Field", name: { kind: "Name", value: "number" } },
								{ kind: "Field", name: { kind: "Name", value: "sha" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GameMutation, GameMutationVariables>;
export const GetRefferalsDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getRefferals" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "getRefferals" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "date" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "refferal_email" },
								},
								{ kind: "Field", name: { kind: "Name", value: "reffiled" } },
								{ kind: "Field", name: { kind: "Name", value: "mining" } },
								{ kind: "Field", name: { kind: "Name", value: "profit" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetRefferalsQuery, GetRefferalsQueryVariables>;
export const PlaySapperDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "playSapper" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "bet" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "time" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "hat" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "playSapper" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "bet" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "bet" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "time" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "time" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "hat" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "hat" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<PlaySapperMutation, PlaySapperMutationVariables>;
export const StartSapperGameDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "startSapperGame" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "bet" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "startPlaySapper" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "bet" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "bet" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	StartSapperGameMutation,
	StartSapperGameMutationVariables
>;
export const PlayScreenDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "playScreen" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "score" },
					},
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "playScreen" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "score" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "score" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<PlayScreenMutation, PlayScreenMutationVariables>;
export const ChangePasswordDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "changePassword" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "old_password" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "new_password" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "changePassword" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "new_password" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "new_password" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "old_password" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "old_password" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	ChangePasswordMutation,
	ChangePasswordMutationVariables
>;
export const ChangeSettingsDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "changeSettings" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "two_factor_authentification" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Boolean" },
						},
					},
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "confirmations_by_email" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Boolean" },
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "changeSettings" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "confirmations_by_email" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "two_factor" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "two_factor_authentification" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	ChangeSettingsMutation,
	ChangeSettingsMutationVariables
>;
export const ChangeWalletAddressDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "changeWalletAddress" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "wallet_address" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "changeWalletAddress" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "wallet_address" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "wallet_address" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	ChangeWalletAddressMutation,
	ChangeWalletAddressMutationVariables
>;
export const GetTransactionsDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getTransactions" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "currency_type" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "getTransactions" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "currency_type" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "currency_type" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "page" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "page" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: { kind: "Name", value: "docs" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "date" } },
											{
												kind: "Field",
												name: { kind: "Name", value: "amount" },
											},
											{ kind: "Field", name: { kind: "Name", value: "type" } },
											{
												kind: "Field",
												name: { kind: "Name", value: "currency_type" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "status" },
											},
										],
									},
								},
								{ kind: "Field", name: { kind: "Name", value: "totalDocs" } },
								{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
								{ kind: "Field", name: { kind: "Name", value: "limit" } },
								{ kind: "Field", name: { kind: "Name", value: "offset" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "pagingCounter" },
								},
								{ kind: "Field", name: { kind: "Name", value: "totalPages" } },
								{ kind: "Field", name: { kind: "Name", value: "nextPage" } },
								{ kind: "Field", name: { kind: "Name", value: "page" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	GetTransactionsQuery,
	GetTransactionsQueryVariables
>;
export const CreateWithdrawDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "createWithdraw" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "amount" },
					},
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "createWithdraw" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "amount" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "amount" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "code" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "code" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	CreateWithdrawMutation,
	CreateWithdrawMutationVariables
>;
export const SendWithdrawCodeDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "sendWithdrawCode" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "sendWithdrawCode" } },
				],
			},
		},
	],
} as unknown as DocumentNode<
	SendWithdrawCodeMutation,
	SendWithdrawCodeMutationVariables
>;
export const ResetCodeMutationDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "resetCodeMutation" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "confirm" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "resetCode" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "confirmation" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "confirm" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	ResetCodeMutationMutation,
	ResetCodeMutationMutationVariables
>;
export const VerifyemailDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "verifyemail" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "verifyEmail" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "code" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "code" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<VerifyemailMutation, VerifyemailMutationVariables>;
export const RegDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "reg" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "country" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "password" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "login" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "refferal_code" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "registration" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "country" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "country" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "password" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "password" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "name" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "name" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "login" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "login" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "refferal_code" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "refferal_code" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "id" } },
								{ kind: "Field", name: { kind: "Name", value: "name" } },
								{ kind: "Field", name: { kind: "Name", value: "email" } },
								{ kind: "Field", name: { kind: "Name", value: "country" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<RegMutation, RegMutationVariables>;
export const RecoveryPasswordMutationDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "recoveryPasswordMutation" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "recoveryPassword" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	RecoveryPasswordMutationMutation,
	RecoveryPasswordMutationMutationVariables
>;
export const CofirmRecoveryDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "cofirmRecovery" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "cofirmRecoveryPassword" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "code" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "code" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "token" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	CofirmRecoveryMutation,
	CofirmRecoveryMutationVariables
>;
export const SetPasswordMutationDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "setPasswordMutation" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "password" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "token" },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "setPassword" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "password" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "password" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "recovery_token" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "token" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	SetPasswordMutationMutation,
	SetPasswordMutationMutationVariables
>;
export const ResetCodeDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "resetCode" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "resetCode" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<ResetCodeMutation, ResetCodeMutationVariables>;
export const VerifyEmailCodeDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "verifyEmailCode" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "need" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "verifyEmail" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "code" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "code" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "need" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "need" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	VerifyEmailCodeMutation,
	VerifyEmailCodeMutationVariables
>;
export const LoginDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "login" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "password" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "login" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "password" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "password" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "id" } },
								{ kind: "Field", name: { kind: "Name", value: "name" } },
								{ kind: "Field", name: { kind: "Name", value: "email" } },
								{ kind: "Field", name: { kind: "Name", value: "country" } },
								{ kind: "Field", name: { kind: "Name", value: "login" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const GetAboutDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getAbout" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "Abouts" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: { kind: "Name", value: "docs" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "content" },
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetAboutQuery, GetAboutQueryVariables>;
export const ContactUsDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "contactUs" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "phone" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "email" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "message" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "contactUs" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "phone" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "phone" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "email" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "email" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "message" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "message" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "name" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "name" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<ContactUsMutation, ContactUsMutationVariables>;
export const GetFeedBackDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getFeedBack" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "Feedbacks" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: { kind: "Name", value: "docs" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "feedback" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "avatar" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "Field",
															name: { kind: "Name", value: "url" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "alt" },
														},
													],
												},
											},
											{ kind: "Field", name: { kind: "Name", value: "name" } },
											{ kind: "Field", name: { kind: "Name", value: "age" } },
											{ kind: "Field", name: { kind: "Name", value: "town" } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetFeedBackQuery, GetFeedBackQueryVariables>;
export const GetMeDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getMe" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "getMe" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "id" } },
								{ kind: "Field", name: { kind: "Name", value: "email" } },
								{ kind: "Field", name: { kind: "Name", value: "name" } },
								{ kind: "Field", name: { kind: "Name", value: "login" } },
								{ kind: "Field", name: { kind: "Name", value: "country" } },
								{ kind: "Field", name: { kind: "Name", value: "aics" } },
								{ kind: "Field", name: { kind: "Name", value: "hat" } },
								{ kind: "Field", name: { kind: "Name", value: "usdt" } },
								{ kind: "Field", name: { kind: "Name", value: "total_mined" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "sapper_total_time" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "created_by_admin" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "today_mined_screen" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "total_mined_screen" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "two_factor_authentification" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "confirmations_by_email" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "can_get_free_coin" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "refferal_code" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "wallet_address" },
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "total_withdraw" },
								},
								{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetExchangeDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getExchange" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "getExchange" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: { kind: "Name", value: "aics_exchange" },
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetExchangeQuery, GetExchangeQueryVariables>;
export const VerifyCodeMutationDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "verifyCodeMutation" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "String" },
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "verifyCode" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "code" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "code" },
								},
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode<
	VerifyCodeMutationMutation,
	VerifyCodeMutationMutationVariables
>;
export const CanGetFreeHatDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "canGetFreeHat" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "canGetFreeHat" } },
				],
			},
		},
	],
} as unknown as DocumentNode<CanGetFreeHatQuery, CanGetFreeHatQueryVariables>;
export const GetFreeHatDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "getFreeHat" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "getFreeHat" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "can_get" } },
								{ kind: "Field", name: { kind: "Name", value: "hat" } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetFreeHatMutation, GetFreeHatMutationVariables>;
