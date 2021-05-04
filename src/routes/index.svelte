<script lang="ts">
	import { signIn, getToken, userStore } from '$lib/state/user';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Username from '$lib/Username.svelte';

	onMount(() => signIn(decodeURIComponent(getToken())).catch((_error) => goto('/sign-in')));
</script>

<svelte:head>
	<title>{$userStore.username}</title>
</svelte:head>

<div class="d-flex align-items-center justify-content-center">
	<div class="col-12 col-lg-auto mt-3 mb-3">
		<Username username={$userStore.username} />
	</div>
</div>
