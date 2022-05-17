import {deconstructSnowflake} from '../src/utils/utils';
import {SnowflakeObject} from '../src/interfaces/SnowflakeInterface';

describe('Utils testing', () => {
  test('', () => {

  });

  test('Deconstruct snowflake', () => {
    const snowflake: SnowflakeObject =
      deconstructSnowflake('175928847299117063');

    expect(snowflake.timestamp).toBe(1462015105796);
    expect(snowflake.internalWorkerId).toBe(1);
    expect(snowflake.internalProcessId).toBe(0);
    expect(snowflake.increment).toBe(7);
  });
});
