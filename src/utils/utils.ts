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
  const timestamp = (bigInt >> BigInt(22)) + BigInt(discordEpoch);
  const internalWorkerId = (bigInt & BigInt(0x3E0000)) >> BigInt(17);
  const internalProcessId = (bigInt & BigInt(0x1F000)) >> BigInt(12);
  const increment = bigInt & BigInt(0xFFF);
  return {
    timestamp: Number(timestamp),
    internalWorkerId: Number(internalWorkerId),
    internalProcessId: Number(internalProcessId),
    increment: Number(increment),
  };
}
