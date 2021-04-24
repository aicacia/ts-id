/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignIn_UsernameOrEmailAndPassword } from '../models/SignIn_UsernameOrEmailAndPassword';
import type { SignUp_UsernamePassword } from '../models/SignUp_UsernamePassword';
import type { User_Email } from '../models/User_Email';
import type { User_EmailCreate } from '../models/User_EmailCreate';
import type { User_Private } from '../models/User_Private';
import type { User_UsernameUpdate } from '../models/User_UsernameUpdate';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Sign in
     * Signs in user and returns the User with the Bearer Token
     *
     * @param requestBody Request body to sign in
     * @returns User_Private Sign in User Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiSignInUsernameOrEmailAndPasswordSignIn(
        requestBody: SignIn_UsernameOrEmailAndPassword,
    ): Promise<User_Private> {
        const result = await __request({
            method: 'POST',
            path: `/api/sign_in/username_or_email_and_password`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Sign up
     * Signs up a user and returns the User with the Bearer Token
     *
     * @param requestBody Request body to sign up
     * @returns User_Private Sign up User Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiSignUpUsernameAndPasswordSignUp(
        requestBody: SignUp_UsernamePassword,
    ): Promise<User_Private> {
        const result = await __request({
            method: 'POST',
            path: `/api/sign_up/username_and_password`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Sign current User out
     * Signs out the current User based on the bearer token
     *
     * @returns void
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserSignOut(): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/user/current`,
        });
        return result.body;
    }

    /**
     * Gets the Current User
     * Returns the current user based on the bearer token
     *
     * @returns User_Private Current User Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserCurrent(): Promise<User_Private> {
        const result = await __request({
            method: 'GET',
            path: `/api/user/current`,
        });
        return result.body;
    }

    /**
     * Create an Eamil
     * Create and returns an Email
     *
     * @param requestBody Create Email Body
     * @returns User_Email Create an Email Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserEmailCreate(
        requestBody: User_EmailCreate,
    ): Promise<User_Email> {
        const result = await __request({
            method: 'POST',
            path: `/api/user/email`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Confirm an Eamil
     * Confirms an Email and returns the User with the Bearer Token
     *
     * @returns User_Private Confirmed User Email Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserEmailConfirm(): Promise<User_Private> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/user/email/confirm`,
        });
        return result.body;
    }

    /**
     * Confirm an Eamil
     * Confirms an Email and returns the User with the Bearer Token
     *
     * @returns User_Private Confirmed User Email Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserEmailConfirm2(): Promise<User_Private> {
        const result = await __request({
            method: 'PUT',
            path: `/api/user/email/confirm`,
        });
        return result.body;
    }

    /**
     * Delete an Email
     * Delete a non-primary Email
     *
     * @returns User_Email Delete non-primary Email Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserEmailDelete(): Promise<User_Email> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/user/email/${id}`,
        });
        return result.body;
    }

    /**
     * Set Email as Primary
     * Sets an Email as User's Primary Email
     *
     * @returns User_Email Set Primary Email Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserEmailSetPrimary(): Promise<User_Email> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/user/email/${id}/primary`,
        });
        return result.body;
    }

    /**
     * Set Email as Primary
     * Sets an Email as User's Primary Email
     *
     * @returns User_Email Set Primary Email Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserEmailSetPrimary2(): Promise<User_Email> {
        const result = await __request({
            method: 'PUT',
            path: `/api/user/email/${id}/primary`,
        });
        return result.body;
    }

    /**
     * Reset Password
     * Resets the User's Password creating a new Token in the process
     *
     * @param requestBody reset user password
     * @returns User_Private Confirmed User Email Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserPasswordReset(
        requestBody: User_EmailCreate,
    ): Promise<User_Private> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/user/password/reset`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Reset Password
     * Resets the User's Password creating a new Token in the process
     *
     * @param requestBody reset user password
     * @returns User_Private Confirmed User Email Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserPasswordReset2(
        requestBody: User_EmailCreate,
    ): Promise<User_Private> {
        const result = await __request({
            method: 'PUT',
            path: `/api/user/password/reset`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update User's Username
     * Updates a User's Username
     *
     * @param requestBody Update User's Username Body
     * @returns User_Private Update User's Username Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserUsernameUpdate(
        requestBody: User_UsernameUpdate,
    ): Promise<User_Private> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/user/username`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update User's Username
     * Updates a User's Username
     *
     * @param requestBody Update User's Username Body
     * @returns User_Private Update User's Username Response
     * @throws ApiError
     */
    public static async aicaciaIdWebControllerApiUserUsernameUpdate2(
        requestBody: User_UsernameUpdate,
    ): Promise<User_Private> {
        const result = await __request({
            method: 'PUT',
            path: `/api/user/username`,
            body: requestBody,
        });
        return result.body;
    }

}