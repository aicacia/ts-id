<script lang="ts">
	import { goto } from '$app/navigation';
	import { UserService, ApiError } from './api/id';
	import { setToken } from './user';

	let loading = false;

	let username = '';
	let password = '';
	let passwordConfirmation = '';

	let usernameErrors = [];
	let passwordErrors = [];
	let passwordConfirmationErrors = [];

	async function onSignUp() {
		loading = true;

		const user = await UserService.aicaciaIdWebControllerApiSignUpUsernameAndPasswordSignUp({
			username,
			password,
			password_confirmation: passwordConfirmation
		})
			.then((user) => {
				usernameErrors = [];
				passwordErrors = [];
				passwordConfirmationErrors = [];
				return user;
			})
			.catch((error: ApiError) => {
				const errors = error.body.errors;

				usernameErrors = errors.username || [];
				passwordErrors = errors.password || [];
				passwordConfirmationErrors = errors.passwordConfirmation || [];
			});

		loading = true;

		if (user) {
			setToken(user.token);
			goto('/');
		}
	}
</script>

<h1>Sign up</h1>
<p>Already a member? <a href="/sign-in">Sign in</a></p>

<form action="javascript:void(0);">
	<div class="input-group has-validation">
		<input
			type="text"
			class="form-control"
			class:is-invalid={usernameErrors.length}
			placeholder="Username"
			aria-label="Username"
			required
			bind:value={username}
		/>
		<div class="invalid-feedback">
			{#each usernameErrors as error}
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
	<div class="input-group has-validation">
		<input
			type="password"
			class="form-control"
			class:is-invalid={passwordConfirmation.length}
			placeholder="Password Confirmation"
			aria-label="Password Confirmation"
			required
			bind:value={passwordConfirmation}
		/>
		<div class="invalid-feedback">
			{#each passwordConfirmationErrors as error}
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
			aria-label="Sign up"
			on:click={onSignUp}
		>
			<span
				class="spinner-border spinner-border-sm"
				class:d-none={!loading}
				role="status"
				aria-hidden="true"
			/>
			Sign up
		</button>
	</div>
</form>
