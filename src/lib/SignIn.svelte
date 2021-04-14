<script lang="ts">
	import { goto } from '$app/navigation';
	import { UserService, ApiError } from './api/id';
	import { setToken } from './user';

	let loading = false;

	let usernameOrEmail = '';
	let password = '';

	let usernameOrEmailErrors = [];
	let passwordErrors = [];

	async function onSignIn() {
		loading = true;

		const user = await UserService.aicaciaIdWebControllerApiSignInUsernameOrEmailAndPasswordSignIn({
			username_or_email: usernameOrEmail,
			password
		})
			.then((user) => {
				usernameOrEmailErrors = [];
				passwordErrors = [];
				return user;
			})
			.catch((error: ApiError) => {
				const errors = error.body.errors;
				usernameOrEmailErrors = errors.username_or_email || [];
				passwordErrors = errors.password || [];
			});

		loading = false;

		if (user) {
			setToken(user.token);
			goto('/');
		}
	}
</script>

<form action="javascript:void(0);">
	<div class="input-group has-validation">
		<input
			type="text"
			class="form-control"
			class:is-invalid={usernameOrEmailErrors.length}
			placeholder="Username"
			aria-label="Username"
			required
			bind:value={usernameOrEmail}
		/>
		<div class="invalid-feedback">
			{#each usernameOrEmailErrors as error}
				<div class="alert alert-danger" role="alert">
					{error}
				</div>
			{/each}
		</div>
	</div>
	<div class="input-group has-validation">
		<input
			type="password"
			class="form-control"
			class:is-invalid={passwordErrors.length}
			placeholder="Password"
			aria-label="Password"
			required
			bind:value={password}
		/>
		<div class="invalid-feedback">
			{#each passwordErrors as error}
				<div class="alert alert-danger" role="alert">
					{error}
				</div>
			{/each}
		</div>
	</div>
	<div class="input-group">
		<button
			type="submit"
			class="form-control btn btn-primary"
			disabled={loading}
			aria-label="Sign in"
			on:click={onSignIn}
		>
			<span
				class="spinner-border spinner-border-sm"
				class:d-none={!loading}
				role="status"
				aria-hidden="true"
			/>
			Sign in
		</button>
	</div>
</form>
