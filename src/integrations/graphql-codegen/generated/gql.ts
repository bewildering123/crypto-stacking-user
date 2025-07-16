/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation createDeposit($amount: Float!) {\n\t\tcreateDeposit(amount: $amount) {\n\t\t\tamount\n\t\t\twallet_adress\n\t\t}\n\t}\n": types.CreateDepositDocument,
    "\n\tmutation confirmDepositMutation {\n\t\tconfirmDeposit\n\t}\n": types.ConfirmDepositMutationDocument,
    "\n\tquery minimalDeposits {\n\t\tMinimalDeposits {\n\t\t\tdocs {\n\t\t\t\tminimal_sum\n\t\t\t}\n\t\t}\n\t}\n": types.MinimalDepositsDocument,
    "\n\tmutation completeDepositMutation {\n\t\tcompleteDeposit {\n\t\t\tstatus\n\t\t\tusdt\n\t\t}\n\t}\n": types.CompleteDepositMutationDocument,
    "\n\tmutation exchangeMutation($usdt: Float!, $aics: Float!) {\n\t\texchange(usdt: $usdt, aics: $aics) {\n\t\t\taics\n\t\t\tusdt\n\t\t}\n\t}\n": types.ExchangeMutationDocument,
    "\n\tmutation getFreeCoin {\n\t\tfreeCoin {\n\t\t\taics\n\t\t\that\n\t\t}\n\t}\n": types.GetFreeCoinDocument,
    "\n\tmutation getWinningGuessMutation($number: Float!, $bet: Float!) {\n\t\tgetWinningGuess(number: $number, bet: $bet) {\n\t\t\taics\n\t\t\that\n\t\t\taisc_balance\n\t\t}\n\t}\n": types.GetWinningGuessMutationDocument,
    "\n\tquery getLeaderBoard($prevState: [leaderboard_input]) {\n\t\tgetGuessLeaderboard(prevState: $prevState) {\n\t\t\tname\n\t\t\tbet\n\t\t\twinning\n\t\t}\n\t}\n": types.GetLeaderBoardDocument,
    "\n\tquery startGame($bet: Float!) {\n\t\tgenerateSHA(bet: $bet) {\n\t\t\tsha\n\t\t\taisc\n\t\t}\n\t}\n": types.StartGameDocument,
    "\n\tmutation game($numbers: [Int], $bet: Int!, $time: Int!) {\n\t\tplayGuess(numbers: $numbers, bet: $bet, time: $time) {\n\t\t\twin\n\t\t\taics\n\t\t\that\n\t\t\tnumber\n\t\t\tsha\n\t\t}\n\t}\n": types.GameDocument,
    "\n\tquery getRefferals {\n\t\tgetRefferals {\n\t\t\tdate\n\t\t\trefferal_email\n\t\t\treffiled\n\t\t\tmining\n\t\t\tprofit\n\t\t}\n\t}\n": types.GetRefferalsDocument,
    "\n\tmutation playSapper($bet: Float!, $time: Int!, $hat: Float!) {\n\t\tplaySapper(bet: $bet, time: $time, hat: $hat)\n\t}\n": types.PlaySapperDocument,
    "\n\tmutation startSapperGame($bet: Float!) {\n\t\tstartPlaySapper(bet: $bet)\n\t}\n": types.StartSapperGameDocument,
    "\n\tmutation playScreen($score: Float!) {\n\t\tplayScreen(score: $score)\n\t}\n": types.PlayScreenDocument,
    "\n\tmutation changePassword($old_password: String!, $new_password: String!) {\n\t\tchangePassword(new_password: $new_password, old_password: $old_password)\n\t}\n": types.ChangePasswordDocument,
    "\n\tmutation changeSettings(\n\t\t$two_factor_authentification: Boolean!\n\t\t$confirmations_by_email: Boolean!\n\t) {\n\t\tchangeSettings(\n\t\t\temail: $confirmations_by_email\n\t\t\ttwo_factor: $two_factor_authentification\n\t\t)\n\t}\n": types.ChangeSettingsDocument,
    "\n\tmutation changeWalletAddress($wallet_address: String) {\n\t\tchangeWalletAddress(wallet_address: $wallet_address)\n\t}\n": types.ChangeWalletAddressDocument,
    "\n\tquery getTransactions($currency_type: String!, $page: Int!) {\n\t\tgetTransactions(currency_type: $currency_type, page: $page) {\n\t\t\tdocs {\n\t\t\t\tdate\n\t\t\t\tamount\n\t\t\t\ttype\n\t\t\t\tcurrency_type\n\t\t\t\tstatus\n\t\t\t}\n\t\t\ttotalDocs\n\t\t\thasNextPage\n\t\t\tlimit\n\t\t\toffset\n\t\t\tpagingCounter\n\t\t\ttotalPages\n\t\t\tnextPage\n\t\t\tpage\n\t\t}\n\t}\n": types.GetTransactionsDocument,
    "\n\tmutation createWithdraw($amount: Float!, $code: String) {\n\t\tcreateWithdraw(amount: $amount, code: $code)\n\t}\n": types.CreateWithdrawDocument,
    "\n\tmutation sendWithdrawCode {\n\t\tsendWithdrawCode\n\t}\n": types.SendWithdrawCodeDocument,
    "\n\tmutation resetCodeMutation($email: String, $confirm: Boolean) {\n\t\tresetCode(email: $email, confirmation: $confirm)\n\t}\n": types.ResetCodeMutationDocument,
    "\n\tmutation verifyemail($email: String, $code: String) {\n\t\tverifyEmail(email: $email, code: $code)\n\t}\n": types.VerifyemailDocument,
    "\n\tmutation reg(\n\t\t$country: String\n\t\t$email: String\n\t\t$password: String\n\t\t$name: String\n\t\t$login: String\n\t\t$refferal_code: String\n\t) {\n\t\tregistration(\n\t\t\tcountry: $country\n\t\t\temail: $email\n\t\t\tpassword: $password\n\t\t\tname: $name\n\t\t\tlogin: $login\n\t\t\trefferal_code: $refferal_code\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tcountry\n\t\t}\n\t}\n": types.RegDocument,
    "\n\tmutation recoveryPasswordMutation($email: String!) {\n\t\trecoveryPassword(email: $email)\n\t}\n": types.RecoveryPasswordMutationDocument,
    "\n\tmutation cofirmRecovery($email: String!, $code: String!) {\n\t\tcofirmRecoveryPassword(email: $email, code: $code) {\n\t\t\ttoken\n\t\t}\n\t}\n": types.CofirmRecoveryDocument,
    "\n\tmutation setPasswordMutation($password: String!, $token: String!) {\n\t\tsetPassword(password: $password, recovery_token: $token)\n\t}\n": types.SetPasswordMutationDocument,
    "\n\tmutation resetCode($email: String) {\n\t\tresetCode(email: $email)\n\t}\n": types.ResetCodeDocument,
    "\n\tmutation verifyEmailCode($email: String, $code: String, $need: Boolean) {\n\t\tverifyEmail(email: $email, code: $code, need: $need)\n\t}\n": types.VerifyEmailCodeDocument,
    "\n\tquery login($email: String, $password: String) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tcountry\n\t\t\tlogin\n\t\t}\n\t}\n": types.LoginDocument,
    "\n\tquery getAbout {\n\t\tAbouts {\n\t\t\tdocs {\n\t\t\t\tcontent\n\t\t\t}\n\t\t}\n\t}\n": types.GetAboutDocument,
    "\n\tmutation contactUs(\n\t\t$phone: String\n\t\t$email: String\n\t\t$message: String\n\t\t$name: String\n\t) {\n\t\tcontactUs(phone: $phone, email: $email, message: $message, name: $name)\n\t}\n": types.ContactUsDocument,
    "\n\tquery getFeedBack {\n\t\tFeedbacks {\n\t\t\tdocs {\n\t\t\t\tfeedback\n\t\t\t\tavatar {\n\t\t\t\t\turl\n\t\t\t\t\talt\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tage\n\t\t\t\ttown\n\t\t\t}\n\t\t}\n\t}\n": types.GetFeedBackDocument,
    "\n\tquery getMe {\n\t\tgetMe {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tlogin\n\t\t\tcountry\n\t\t\taics\n\t\t\that\n\t\t\tusdt\n\t\t\ttotal_mined\n\t\t\tsapper_total_time\n\t\t\tcreated_by_admin\n\t\t\ttoday_mined_screen\n\t\t\ttotal_mined_screen\n\t\t\ttwo_factor_authentification\n\t\t\tconfirmations_by_email\n\t\t\tcan_get_free_coin\n\t\t\trefferal_code\n\t\t\twallet_address\n\t\t\ttotal_withdraw\n\t\t\tcreatedAt\n\t\t}\n\t}\n": types.GetMeDocument,
    "\n\tquery getExchange {\n\t\tgetExchange {\n\t\t\taics_exchange\n\t\t}\n\t}\n": types.GetExchangeDocument,
    "\n\tmutation verifyCodeMutation($code: String!) {\n\t\tverifyCode(code: $code)\n\t}\n": types.VerifyCodeMutationDocument,
    "\n\tquery canGetFreeHat {\n\t\tcanGetFreeHat\n\t}\n": types.CanGetFreeHatDocument,
    "\n\tmutation getFreeHat {\n\t\tgetFreeHat {\n\t\t\tcan_get\n\t\t\that\n\t\t}\n\t}\n": types.GetFreeHatDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createDeposit($amount: Float!) {\n\t\tcreateDeposit(amount: $amount) {\n\t\t\tamount\n\t\t\twallet_adress\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createDeposit($amount: Float!) {\n\t\tcreateDeposit(amount: $amount) {\n\t\t\tamount\n\t\t\twallet_adress\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation confirmDepositMutation {\n\t\tconfirmDeposit\n\t}\n"): (typeof documents)["\n\tmutation confirmDepositMutation {\n\t\tconfirmDeposit\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery minimalDeposits {\n\t\tMinimalDeposits {\n\t\t\tdocs {\n\t\t\t\tminimal_sum\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery minimalDeposits {\n\t\tMinimalDeposits {\n\t\t\tdocs {\n\t\t\t\tminimal_sum\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation completeDepositMutation {\n\t\tcompleteDeposit {\n\t\t\tstatus\n\t\t\tusdt\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation completeDepositMutation {\n\t\tcompleteDeposit {\n\t\t\tstatus\n\t\t\tusdt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation exchangeMutation($usdt: Float!, $aics: Float!) {\n\t\texchange(usdt: $usdt, aics: $aics) {\n\t\t\taics\n\t\t\tusdt\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation exchangeMutation($usdt: Float!, $aics: Float!) {\n\t\texchange(usdt: $usdt, aics: $aics) {\n\t\t\taics\n\t\t\tusdt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation getFreeCoin {\n\t\tfreeCoin {\n\t\t\taics\n\t\t\that\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation getFreeCoin {\n\t\tfreeCoin {\n\t\t\taics\n\t\t\that\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation getWinningGuessMutation($number: Float!, $bet: Float!) {\n\t\tgetWinningGuess(number: $number, bet: $bet) {\n\t\t\taics\n\t\t\that\n\t\t\taisc_balance\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation getWinningGuessMutation($number: Float!, $bet: Float!) {\n\t\tgetWinningGuess(number: $number, bet: $bet) {\n\t\t\taics\n\t\t\that\n\t\t\taisc_balance\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getLeaderBoard($prevState: [leaderboard_input]) {\n\t\tgetGuessLeaderboard(prevState: $prevState) {\n\t\t\tname\n\t\t\tbet\n\t\t\twinning\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getLeaderBoard($prevState: [leaderboard_input]) {\n\t\tgetGuessLeaderboard(prevState: $prevState) {\n\t\t\tname\n\t\t\tbet\n\t\t\twinning\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery startGame($bet: Float!) {\n\t\tgenerateSHA(bet: $bet) {\n\t\t\tsha\n\t\t\taisc\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery startGame($bet: Float!) {\n\t\tgenerateSHA(bet: $bet) {\n\t\t\tsha\n\t\t\taisc\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation game($numbers: [Int], $bet: Int!, $time: Int!) {\n\t\tplayGuess(numbers: $numbers, bet: $bet, time: $time) {\n\t\t\twin\n\t\t\taics\n\t\t\that\n\t\t\tnumber\n\t\t\tsha\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation game($numbers: [Int], $bet: Int!, $time: Int!) {\n\t\tplayGuess(numbers: $numbers, bet: $bet, time: $time) {\n\t\t\twin\n\t\t\taics\n\t\t\that\n\t\t\tnumber\n\t\t\tsha\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getRefferals {\n\t\tgetRefferals {\n\t\t\tdate\n\t\t\trefferal_email\n\t\t\treffiled\n\t\t\tmining\n\t\t\tprofit\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getRefferals {\n\t\tgetRefferals {\n\t\t\tdate\n\t\t\trefferal_email\n\t\t\treffiled\n\t\t\tmining\n\t\t\tprofit\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation playSapper($bet: Float!, $time: Int!, $hat: Float!) {\n\t\tplaySapper(bet: $bet, time: $time, hat: $hat)\n\t}\n"): (typeof documents)["\n\tmutation playSapper($bet: Float!, $time: Int!, $hat: Float!) {\n\t\tplaySapper(bet: $bet, time: $time, hat: $hat)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation startSapperGame($bet: Float!) {\n\t\tstartPlaySapper(bet: $bet)\n\t}\n"): (typeof documents)["\n\tmutation startSapperGame($bet: Float!) {\n\t\tstartPlaySapper(bet: $bet)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation playScreen($score: Float!) {\n\t\tplayScreen(score: $score)\n\t}\n"): (typeof documents)["\n\tmutation playScreen($score: Float!) {\n\t\tplayScreen(score: $score)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation changePassword($old_password: String!, $new_password: String!) {\n\t\tchangePassword(new_password: $new_password, old_password: $old_password)\n\t}\n"): (typeof documents)["\n\tmutation changePassword($old_password: String!, $new_password: String!) {\n\t\tchangePassword(new_password: $new_password, old_password: $old_password)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation changeSettings(\n\t\t$two_factor_authentification: Boolean!\n\t\t$confirmations_by_email: Boolean!\n\t) {\n\t\tchangeSettings(\n\t\t\temail: $confirmations_by_email\n\t\t\ttwo_factor: $two_factor_authentification\n\t\t)\n\t}\n"): (typeof documents)["\n\tmutation changeSettings(\n\t\t$two_factor_authentification: Boolean!\n\t\t$confirmations_by_email: Boolean!\n\t) {\n\t\tchangeSettings(\n\t\t\temail: $confirmations_by_email\n\t\t\ttwo_factor: $two_factor_authentification\n\t\t)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation changeWalletAddress($wallet_address: String) {\n\t\tchangeWalletAddress(wallet_address: $wallet_address)\n\t}\n"): (typeof documents)["\n\tmutation changeWalletAddress($wallet_address: String) {\n\t\tchangeWalletAddress(wallet_address: $wallet_address)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getTransactions($currency_type: String!, $page: Int!) {\n\t\tgetTransactions(currency_type: $currency_type, page: $page) {\n\t\t\tdocs {\n\t\t\t\tdate\n\t\t\t\tamount\n\t\t\t\ttype\n\t\t\t\tcurrency_type\n\t\t\t\tstatus\n\t\t\t}\n\t\t\ttotalDocs\n\t\t\thasNextPage\n\t\t\tlimit\n\t\t\toffset\n\t\t\tpagingCounter\n\t\t\ttotalPages\n\t\t\tnextPage\n\t\t\tpage\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getTransactions($currency_type: String!, $page: Int!) {\n\t\tgetTransactions(currency_type: $currency_type, page: $page) {\n\t\t\tdocs {\n\t\t\t\tdate\n\t\t\t\tamount\n\t\t\t\ttype\n\t\t\t\tcurrency_type\n\t\t\t\tstatus\n\t\t\t}\n\t\t\ttotalDocs\n\t\t\thasNextPage\n\t\t\tlimit\n\t\t\toffset\n\t\t\tpagingCounter\n\t\t\ttotalPages\n\t\t\tnextPage\n\t\t\tpage\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createWithdraw($amount: Float!, $code: String) {\n\t\tcreateWithdraw(amount: $amount, code: $code)\n\t}\n"): (typeof documents)["\n\tmutation createWithdraw($amount: Float!, $code: String) {\n\t\tcreateWithdraw(amount: $amount, code: $code)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation sendWithdrawCode {\n\t\tsendWithdrawCode\n\t}\n"): (typeof documents)["\n\tmutation sendWithdrawCode {\n\t\tsendWithdrawCode\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation resetCodeMutation($email: String, $confirm: Boolean) {\n\t\tresetCode(email: $email, confirmation: $confirm)\n\t}\n"): (typeof documents)["\n\tmutation resetCodeMutation($email: String, $confirm: Boolean) {\n\t\tresetCode(email: $email, confirmation: $confirm)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation verifyemail($email: String, $code: String) {\n\t\tverifyEmail(email: $email, code: $code)\n\t}\n"): (typeof documents)["\n\tmutation verifyemail($email: String, $code: String) {\n\t\tverifyEmail(email: $email, code: $code)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation reg(\n\t\t$country: String\n\t\t$email: String\n\t\t$password: String\n\t\t$name: String\n\t\t$login: String\n\t\t$refferal_code: String\n\t) {\n\t\tregistration(\n\t\t\tcountry: $country\n\t\t\temail: $email\n\t\t\tpassword: $password\n\t\t\tname: $name\n\t\t\tlogin: $login\n\t\t\trefferal_code: $refferal_code\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tcountry\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation reg(\n\t\t$country: String\n\t\t$email: String\n\t\t$password: String\n\t\t$name: String\n\t\t$login: String\n\t\t$refferal_code: String\n\t) {\n\t\tregistration(\n\t\t\tcountry: $country\n\t\t\temail: $email\n\t\t\tpassword: $password\n\t\t\tname: $name\n\t\t\tlogin: $login\n\t\t\trefferal_code: $refferal_code\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tcountry\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation recoveryPasswordMutation($email: String!) {\n\t\trecoveryPassword(email: $email)\n\t}\n"): (typeof documents)["\n\tmutation recoveryPasswordMutation($email: String!) {\n\t\trecoveryPassword(email: $email)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation cofirmRecovery($email: String!, $code: String!) {\n\t\tcofirmRecoveryPassword(email: $email, code: $code) {\n\t\t\ttoken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation cofirmRecovery($email: String!, $code: String!) {\n\t\tcofirmRecoveryPassword(email: $email, code: $code) {\n\t\t\ttoken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation setPasswordMutation($password: String!, $token: String!) {\n\t\tsetPassword(password: $password, recovery_token: $token)\n\t}\n"): (typeof documents)["\n\tmutation setPasswordMutation($password: String!, $token: String!) {\n\t\tsetPassword(password: $password, recovery_token: $token)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation resetCode($email: String) {\n\t\tresetCode(email: $email)\n\t}\n"): (typeof documents)["\n\tmutation resetCode($email: String) {\n\t\tresetCode(email: $email)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation verifyEmailCode($email: String, $code: String, $need: Boolean) {\n\t\tverifyEmail(email: $email, code: $code, need: $need)\n\t}\n"): (typeof documents)["\n\tmutation verifyEmailCode($email: String, $code: String, $need: Boolean) {\n\t\tverifyEmail(email: $email, code: $code, need: $need)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery login($email: String, $password: String) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tcountry\n\t\t\tlogin\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery login($email: String, $password: String) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tcountry\n\t\t\tlogin\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getAbout {\n\t\tAbouts {\n\t\t\tdocs {\n\t\t\t\tcontent\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getAbout {\n\t\tAbouts {\n\t\t\tdocs {\n\t\t\t\tcontent\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation contactUs(\n\t\t$phone: String\n\t\t$email: String\n\t\t$message: String\n\t\t$name: String\n\t) {\n\t\tcontactUs(phone: $phone, email: $email, message: $message, name: $name)\n\t}\n"): (typeof documents)["\n\tmutation contactUs(\n\t\t$phone: String\n\t\t$email: String\n\t\t$message: String\n\t\t$name: String\n\t) {\n\t\tcontactUs(phone: $phone, email: $email, message: $message, name: $name)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getFeedBack {\n\t\tFeedbacks {\n\t\t\tdocs {\n\t\t\t\tfeedback\n\t\t\t\tavatar {\n\t\t\t\t\turl\n\t\t\t\t\talt\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tage\n\t\t\t\ttown\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getFeedBack {\n\t\tFeedbacks {\n\t\t\tdocs {\n\t\t\t\tfeedback\n\t\t\t\tavatar {\n\t\t\t\t\turl\n\t\t\t\t\talt\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tage\n\t\t\t\ttown\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getMe {\n\t\tgetMe {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tlogin\n\t\t\tcountry\n\t\t\taics\n\t\t\that\n\t\t\tusdt\n\t\t\ttotal_mined\n\t\t\tsapper_total_time\n\t\t\tcreated_by_admin\n\t\t\ttoday_mined_screen\n\t\t\ttotal_mined_screen\n\t\t\ttwo_factor_authentification\n\t\t\tconfirmations_by_email\n\t\t\tcan_get_free_coin\n\t\t\trefferal_code\n\t\t\twallet_address\n\t\t\ttotal_withdraw\n\t\t\tcreatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getMe {\n\t\tgetMe {\n\t\t\tid\n\t\t\temail\n\t\t\tname\n\t\t\tlogin\n\t\t\tcountry\n\t\t\taics\n\t\t\that\n\t\t\tusdt\n\t\t\ttotal_mined\n\t\t\tsapper_total_time\n\t\t\tcreated_by_admin\n\t\t\ttoday_mined_screen\n\t\t\ttotal_mined_screen\n\t\t\ttwo_factor_authentification\n\t\t\tconfirmations_by_email\n\t\t\tcan_get_free_coin\n\t\t\trefferal_code\n\t\t\twallet_address\n\t\t\ttotal_withdraw\n\t\t\tcreatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getExchange {\n\t\tgetExchange {\n\t\t\taics_exchange\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getExchange {\n\t\tgetExchange {\n\t\t\taics_exchange\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation verifyCodeMutation($code: String!) {\n\t\tverifyCode(code: $code)\n\t}\n"): (typeof documents)["\n\tmutation verifyCodeMutation($code: String!) {\n\t\tverifyCode(code: $code)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery canGetFreeHat {\n\t\tcanGetFreeHat\n\t}\n"): (typeof documents)["\n\tquery canGetFreeHat {\n\t\tcanGetFreeHat\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation getFreeHat {\n\t\tgetFreeHat {\n\t\t\tcan_get\n\t\t\that\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation getFreeHat {\n\t\tgetFreeHat {\n\t\t\tcan_get\n\t\t\that\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;