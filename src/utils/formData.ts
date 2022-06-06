import genToken from '@shaynlink/gentoken';
import {FormDataHeaderInterface} from '../interfaces/FormDataInterface';

const PREFIX = '--discordLab';

const generator = genToken(PREFIX);

/**
 * Create form-data
 */
export default class FormData {
  private boundary: string;
  public headers: FormDataHeaderInterface;
  private forms: Set<string>;
  /**
   * Create new boundary
   */
  constructor() {
    this.boundary = generator.next().value;

    this.headers = {
      'Content-Type': `multipart/form-data; boundary=${this.boundary}`,
    };

    this.forms = new Set();
  }

  /**
   * Create body header disposition
   * @param {string} name
   * @param {string} contentType
   * @param {string|undefined} filename
   * @return {string}
   */
  private disposition(
      name: string,
      contentType: string, filename: string|undefined = undefined): string {
    return `Content-Disposition: form-data; name="${name}"` +
      (filename ? `; filename="${filename}"` : '') +
      `\r\nContent-Type: ${contentType}\r\n\r\n`;
  }

  /**
   * Add forms
   * @param {string|Buffer} data - form data
   * @param {string} name - form name
   * @param {string} contentType - form content type
   * @param {string} filename - form file name
   * @return {this}
   */
  public add(
      data: string|Buffer,
      name: string,
      contentType: string, filename: string|undefined = undefined): this {
    this.forms.add(
        this.disposition(name, contentType, filename) +
        (typeof data == 'string' ? data : data.toString('base64')));

    return this;
  }

  /**
   * return body
   * @return {string}
   */
  public toString() {
    return this.boundary +
      [...this.forms].join(this.boundary + '\r\n') +
      `\r\n${this.boundary}--`;
  }
};
