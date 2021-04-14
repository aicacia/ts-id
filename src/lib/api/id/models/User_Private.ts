/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User_Email } from './User_Email';

/**
 * A private user
 */
export type User_Private = {
    email?: User_Email;
    emails: Array<User_Email>;
    /**
     * Id
     */
    id: string;
    /**
     * Creation timestamp
     */
    inserted_at: string;
    /**
     * User Token
     */
    token?: string;
    /**
     * Update timestamp
     */
    updated_at: string;
    /**
     * User name
     */
    username: string;
}
