import { graphql } from "@/integrations/graphql-codegen/generated";

export const getAbout = graphql(`
	query getAbout {
		Abouts {
			docs {
				content
			}
		}
	}
`);
