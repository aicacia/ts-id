/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Util_HealthCheck } from '../models/Util_HealthCheck';
import { request as __request } from '../core/request';

export class UtilService {
	/**
	 * Health Check
	 * Returns simple json response to see if the server is up and running
	 *
	 * @returns Util_HealthCheck Health Check Response
	 * @throws ApiError
	 */
	public static async aicaciaIdWebControllerApiHealthCheckHealth(): Promise<Util_HealthCheck> {
		const result = await __request({
			method: 'GET',
			path: `/api/health`
		});
		return result.body;
	}

	/**
	 * Health Check
	 * Returns simple json response to see if the server is up and running
	 *
	 * @returns Util_HealthCheck Health Check Response
	 * @throws ApiError
	 */
	public static async aicaciaIdWebControllerApiHealthCheckHealth2(): Promise<Util_HealthCheck> {
		const result = await __request({
			method: 'HEAD',
			path: `/api/health`
		});
		return result.body;
	}
}
