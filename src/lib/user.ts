import { OpenAPI, UserService, User_Private } from './api/id';
import Cookies from 'js-cookie';

export const USER_TOKEN = 'aicacia-user-token';

export function signIn(token: string): Promise<User_Private> {
	setToken(token);
	try {
		return UserService.aicaciaIdWebControllerApiUserCurrent();
	} catch (error: unknown) {
		removeToken();
		throw error;
	}
}

export async function signOut(): Promise<void> {
	await UserService.aicaciaIdWebControllerApiUserSignOut();
	removeToken();
}

export function getToken(): string {
	return decodeURIComponent(Cookies.get(USER_TOKEN));
}

export function setToken(token: string): void {
	OpenAPI.HEADERS = { Authorization: `Bearer ${token}` };
	Cookies.set(USER_TOKEN, encodeURIComponent(token));
}

export function removeToken(): void {
	OpenAPI.HEADERS = undefined;
	Cookies.remove(USER_TOKEN);
}
