/// <reference types="node" />
import { FormDataHeaderInterface } from '../interfaces/FormDataInterface';
/**
 * Create form-data
 */
export default class FormData {
    private boundary;
    headers: FormDataHeaderInterface;
    private forms;
    /**
     * Create new boundary
     */
    constructor();
    /**
     * Create body header disposition
     * @param {string} name
     * @param {string} contentType
     * @param {string|undefined} filename
     * @return {string}
     */
    private disposition;
    /**
     * Add forms
     * @param {string|Buffer} data - form data
     * @param {string} name - form name
     * @param {string} contentType - form content type
     * @param {string} filename - form file name
     * @return {this}
     */
    add(data: string | Buffer, name: string, contentType: string, filename?: string | undefined): this;
    /**
     * return body
     * @return {string}
     */
    toString(): string;
}
//# sourceMappingURL=formData.d.ts.map