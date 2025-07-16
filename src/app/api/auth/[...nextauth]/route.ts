import NextAuth from "next-auth";

import { authOptions } from "@/integrations/nextauth/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
