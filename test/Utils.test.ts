import genToken from '@shaynlink/gentoken';
import {
  authorization,
  deconstructSnowflake,
  generateSnowflakeFromTimestamp,
} from '../src/utils/utils';
import FormData from '../src/utils/formData';
import {SnowflakeInterface} from '../src/interfaces/SnowflakeInterface';


describe('Utils testing', () => {
  test('authorization bot', () => {
    const authToken: string = authorization('test', true);
    expect(authToken).toMatch(/^Bot (\w|.|=)+/gm);
  });

  test('authorization bearer', () => {
    const authToken: string = authorization('test', false);
    expect(authToken).toMatch(/^Bearer (\w|.|=)+/gm);
  });

  test('Deconstruct snowflake', () => {
    const snowflake: SnowflakeInterface =
      deconstructSnowflake('175928847299117063');

    expect(snowflake.timestamp).toBe(1462015105796);
    expect(snowflake.internalWorkerId).toBe(1);
    expect(snowflake.internalProcessId).toBe(0);
    expect(snowflake.increment).toBe(7);
  });

  test('Construct snowflake from timestamp', () => {
    const snowflake: string = generateSnowflakeFromTimestamp(1652781711051);

    expect(snowflake).toBe('976061982786453504');
  });

  test('Form data', () => {
    const formData: FormData = new FormData();

    const generator = genToken();

    formData.add(generator.next().value, 'test', 'text/plain');

    expect(typeof formData.toString()).toBe('string');
  });
});
