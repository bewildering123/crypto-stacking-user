import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.configDotenv();

const config: CodegenConfig = {
	schema: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/graphql`,

	documents: ["./src/**/*.ts", "./src/**/*.tsx"],

	generates: {
		"./src/integrations/graphql-codegen/generated/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
		},
	},
};

export default config;
