import {discordEpoch} from './constants';
import {SnowflakeObject} from '../interfaces/SnowflakeInterface';

/**
 * Authorization header
 * @param {string} auth - Authorization key
 * @param {boolean} [isBot=true] - Ise Bot or Bearer
 * @return {string}
 */
export function authorization(auth: string, isBot: boolean = true): string {
  return `${isBot ? 'Bot ' : 'Bearer'} ${auth}`;
}

/**
 * Deconstruct snowflake to object
 * @param {string} snowflake - Snowflake string
 * @return {SnowflakeObject}
 */
export function deconstructSnowflake(snowflake: string): SnowflakeObject {
  const bigInt = BigInt(snowflake);
  const timestamp = (bigInt >> 22n) + BigInt(discordEpoch);
  const internalWorkerId = (bigInt & 0x3E0000n) >> 17n;
  const internalProcessId = (bigInt & 0x1F000n) >> 12n;
  const increment = bigInt & 0xFFFn;
  return {
    timestamp: Number(timestamp),
    internalWorkerId: Number(internalWorkerId),
    internalProcessId: Number(internalProcessId),
    increment: Number(increment),
  };
}
