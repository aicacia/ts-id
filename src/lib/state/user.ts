import { OpenAPI, UserService, User_Private } from '../api/id';
import Cookies from 'js-cookie';
import { writable, get } from 'svelte/store';

export const USER_TOKEN = 'aicacia-user-token';

const DEFAULT_USER: User_Private = {
	emails: [],
	id: null,
	inserted_at: null,
	updated_at: null,
	username: 'guest'
};

export const userStore = writable<User_Private>(DEFAULT_USER);

OpenAPI.BASE = import.meta.env.VITE_ID_API_URI;

export async function signIn(token: string): Promise<User_Private> {
	const user = get(userStore);

	if (token && user.token === token) {
		return user;
	} else {
		setToken(token);
		try {
			const result = await UserService.aicaciaIdWebControllerApiUserCurrent();
			userStore.set(result);
			return result;
		} catch (error: unknown) {
			removeToken();
			throw error;
		}
	}
}

export async function signOut() {
	await UserService.aicaciaIdWebControllerApiUserSignOut();
	removeToken();
	userStore.set(DEFAULT_USER);
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
