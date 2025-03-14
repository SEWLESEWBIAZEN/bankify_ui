import { auth } from "@/auth";


export async function tokenProvider() {
    try {
        const session = await auth()
        const {  accessToken = '', expiry = '', email = '', firstName = '', lastName ='', claims = '' } = session?.user || {};
        return { accessToken, expiry, email, firstName, lastName, claims };
    } catch (error) {
        return { accessToken: '', idToken: '',expiry : '', email: '', firstName: '', lastName : '', claims: '' };
    }
}

