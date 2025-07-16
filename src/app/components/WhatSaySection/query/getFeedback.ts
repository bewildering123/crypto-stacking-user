import { graphql } from "@/integrations/graphql-codegen/generated";

export const getFeedBack = graphql(`
	query getFeedBack {
		Feedbacks {
			docs {
				feedback
				avatar {
					url
					alt
				}
				name
				age
				town
			}
		}
	}
`);
