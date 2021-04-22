<script lang="ts">
	import type { User_Private } from '$lib/api/id';
	import { signIn, getToken, signOut, userStore } from '$lib/state/user';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function onSignOut() {
		signOut();
		goto('/sign-in');
	}

	onMount(() => {
		signIn(decodeURIComponent(getToken())).catch((_error) => goto('/sign-in'));
	});
</script>

<svelte:head>
	<title>{$userStore.username}</title>
</svelte:head>

<h1>Hello, {$userStore.username}!</h1>

<button class="btn btn-primary" on:click={onSignOut}>Sign out</button>
