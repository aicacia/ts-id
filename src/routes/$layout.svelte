<script lang="ts">
	import { signOut, userStore } from '$lib/state/user';
	import { goto } from '$app/navigation';

	function onSignOut() {
		signOut();
		goto('/sign-in');
	}
</script>

<header class="container">
	<div class="d-flex flex-wrap align-items-center justify-content-center">
		<div class="d-flex align-items-center">
			<a href="/" class="btn btn-lg btn-primary" role="button"> Aicacia Id </a>
		</div>

		<div class="nav col-auto me-auto" />

		<div class="text-end">
			{#if $userStore.token}
				<button type="button" class="btn btn-primary" on:click={onSignOut}>Sign out</button>
			{:else}
				<a role="button" class="btn btn-primary" href="/sign-in">Login</a>
				<a role="button" class="btn btn-secondary" href="/sign-up">Sign-up</a>
			{/if}
		</div>
	</div>
</header>

<main class="container"><slot /></main>

<style lang="scss" global>
	$theme-colors: (
		'primary': #2673d8
	);

	$spacer: 0.5rem;
	$enable-rounded: false;

	@import 'bootstrap/scss/bootstrap';
	@import 'bootstrap/scss/functions';

	@import 'bootstrap/scss/variables';
	@import 'bootstrap/scss/mixins';

	@import 'bootstrap/scss/root';
	@import 'bootstrap/scss/reboot';
	@import 'bootstrap/scss/type';
	@import 'bootstrap/scss/images';
	@import 'bootstrap/scss/containers';
	@import 'bootstrap/scss/grid';
</style>
