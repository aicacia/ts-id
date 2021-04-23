<script lang="ts">
	import { signOut, userStore } from '$lib/state/user';
	import { goto } from '$app/navigation';

	function onSignOut() {
		signOut();
		goto('/sign-in');
	}
</script>

<header class="p-3">
	<div class="container">
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
		>
			<a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none text-black">
				<h3>Aicacia Id</h3>
			</a>

			<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" />

			<div class="text-end">
				{#if $userStore.token}
					<button type="button" class="btn btn-primary me-2" on:click={onSignOut}>Sign out</button>
				{:else}
					<a type="button" class="btn btn-primary me-2" href="/sign-in">Login</a>
					<a type="button" class="btn btn-secondary" href="/sign-up">Sign-up</a>
				{/if}
			</div>
		</div>
	</div>
</header>

<main class="container"><slot /></main>
