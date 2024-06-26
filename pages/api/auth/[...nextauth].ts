import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import LineProvider from "next-auth/providers/line";
console.log(process.env.GOOGLE_CLIENT_ID,'red');
export const authOptions:AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
        }),
        LineProvider({
            clientId: process.env.LINE_CLIENT_ID || '',
            clientSecret: process.env.LINE_CLIENT_SECRET || '',
            authorization: { params: { scope: 'profile openid email' } },
            profile: (profile, token) => {
                console.log("🚀 ~ profile:", profile, token)
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile?.email,
                    image: profile.picture,
                    token
                }
            },
            
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {
            token.accessToken = account.access_token
          }
          return token
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          return session
        }
      },
  secret: process.env.SECRET,
}

export default NextAuth(authOptions);