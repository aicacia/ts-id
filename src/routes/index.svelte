<script lang="ts" context="module">
	import { signIn, getToken } from '$lib/user';

	export const prerender = false;

	/** @type {import('@sveltejs/kit').Load} */
	export async function load() {
		return signIn(decodeURIComponent(getToken()))
			.then((user) => ({
				props: { user }
			}))
			.catch((_error) => ({ redirect: '/sign-in', status: 307 }));
	}
</script>

<script lang="ts">
	import type { User_Private } from '$lib/api/id';
	import { signOut } from '$lib/user';
	import { goto } from '$app/navigation';

	export let user: User_Private;

	function onSignOut() {
		signOut();
		goto('/sign-in');
	}
</script>

<svelte:head>
	<title>{user.username}</title>
</svelte:head>

<h1>Hello, {user.username}!</h1>

<button class="btn btn-primary" on:click={onSignOut}>Sign out</button>
