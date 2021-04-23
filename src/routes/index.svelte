<script lang="ts">
	import { signIn, getToken, userStore } from '$lib/state/user';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		signIn(decodeURIComponent(getToken())).catch((_error) => goto('/sign-in'));
	});
</script>

<svelte:head>
	<title>{$userStore.username}</title>
</svelte:head>

<h1>Hello, {$userStore.username}!</h1>
