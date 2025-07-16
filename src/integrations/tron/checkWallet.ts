export const checkWalletExist = async (walletAddress: string) => {
	const url = `https://apilist.tronscanapi.com/api/account?address=${walletAddress}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			return false;
		}
		const data = await response.json();
		if (data && data.address) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
};
