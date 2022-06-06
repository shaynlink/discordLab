import { MessageFormatingInteface, ImageFormatInterface, CdnInterface } from './../interfaces/ConstantInterface';
export declare const discordEpoch: number;
export declare const userAgent: string;
export declare enum MessageFormating {
    USER = 0,
    USER_WITH_EXCLAMATION_MARK = 1,
    CHANNEL = 2,
    ROLE = 3,
    STANDARD_EMOJI = 4,
    CUSTOM_EMOJI = 5,
    CUSTOM_EMOJI_ANIMATED = 6,
    UNIX_TIMESTAMP = 7,
    UNIX_TIMESTAMP_STYLED = 8
}
export declare enum TimestampStyle {
    t = 0,
    T = 1,
    d = 2,
    D = 3,
    f = 4,
    F = 5,
    r = 6
}
export declare const messageFormatingRegex: MessageFormatingInteface;
export declare const cdnEndpoint = "https://cdn.discordapp.com/";
export declare enum ImageFormat {
    JPEG = 0,
    JPG = 1,
    PNG = 2,
    WEBP = 3,
    GIF = 4,
    LOTTIE = 5
}
export declare const imageFormat: ImageFormatInterface;
export declare type imageFormatType = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif' | 'json';
export declare const cdn: (format: imageFormatType) => CdnInterface;
/**
 * Return data encoded in base64
 * @param {string} format - Image format
 * @param {string} imageEncoded - Image encoded in base64
 * @return {string}
 */
export declare function imageData(format: string, imageEncoded: string): string;
//# sourceMappingURL=constants.d.ts.map