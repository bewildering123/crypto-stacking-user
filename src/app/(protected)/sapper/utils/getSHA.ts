import { createHash as createSHA } from "crypto";

export const getSHA = (str: string) => {
	return createSHA("sha256").update(str).digest("hex");
};
