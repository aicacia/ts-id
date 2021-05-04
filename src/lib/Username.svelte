<script lang="ts">
	import { UserService, ApiError } from './api/id';
	import { userStore } from './state/user';

	let loading = false;

	export let username;
	let usernameErrors = [];

	async function onUpdate() {
		loading = true;

		const user = await UserService.aicaciaIdWebControllerApiUserUsernameUpdate({
			username
		})
			.then((user) => {
				usernameErrors = [];
				return user;
			})
			.catch((error: ApiError) => {
				const errors = error.body.errors;
				usernameErrors = errors.username || [];
			});

		loading = false;

		if (user) {
			userStore.set(user);
		}
	}
</script>

<form action="javascript:void(0);" class="row">
	<div class="col-auto has-validation">
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
	<div class="col-auto">
		<button
			type="submit"
			class="form-control btn btn-primary"
			disabled={loading}
			aria-label="Update"
			on:click={onUpdate}
		>
			<span
				class="spinner-border spinner-border-sm"
				class:d-none={!loading}
				role="status"
				aria-hidden="true"
			/>
			Update
		</button>
	</div>
</form>
