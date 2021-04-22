import { OpenAPI, UserService, User_Private } from '../api/id';
import Cookies from 'js-cookie';

export const USER_TOKEN = 'aicacia-user-token';

OpenAPI.BASE = import.meta.env.VITE_ID_API_URI;

export function signIn(token: string): Promise<User_Private> {
	setToken(token);
	try {
		return UserService.aicaciaIdWebControllerApiUserCurrent();
	} catch (error: unknown) {
		removeToken();
		throw error;
	}
}

export async function signOut() {
	await UserService.aicaciaIdWebControllerApiUserSignOut();
	removeToken();
}

export function getToken() {
	return decodeURIComponent(Cookies.get(USER_TOKEN));
}

export function setToken(token: string) {
	OpenAPI.HEADERS = { Authorization: `Bearer ${token}` };
	Cookies.set(USER_TOKEN, encodeURIComponent(token));
}

export function removeToken() {
	OpenAPI.HEADERS = undefined;
	Cookies.remove(USER_TOKEN);
}
