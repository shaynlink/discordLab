import { SnowflakeInterface } from '../interfaces/SnowflakeInterface';
/**
 * Authorization header
 * @param {string} auth - Authorization key
 * @param {boolean} [isBot=true] - Ise Bot or Bearer
 * @return {string}
 */
export declare function authorization(auth: string, isBot?: boolean): string;
/**
 * Deconstruct snowflake to object
 * @param {string} snowflake - Snowflake string
 * @return {SnowflakeInterface}
 */
export declare function deconstructSnowflake(snowflake: string): SnowflakeInterface;
/**
 * Generate snowflake from timestamp
 * for pagination
 * @param {number} timestamp - Timestamp unix time
 * @return {string}
 */
export declare function generateSnowflakeFromTimestamp(timestamp: number): string;
/**
 * Get avatar id
 * @param {number} discriminator - User discriminator
 * @return {number}
 */
export declare function getAvaterDefault(discriminator: number): number;
//# sourceMappingURL=utils.d.ts.map