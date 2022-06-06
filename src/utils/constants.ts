import {version} from './../../package.json';
import {
  MessageFormatingInteface,
  ImageFormatInterface,
  CdnInterface,
} from './../interfaces/ConstantInterface';

export const discordEpoch: number = 1420070400000;

export const userAgent: string = `DiscordLab (https://github.com/shaynlink/discordLab, ${version}) Node.js/${process.version}`;

export enum MessageFormating {
  // eslint-disable-next-line no-unused-vars
  USER,
  // eslint-disable-next-line no-unused-vars
  USER_WITH_EXCLAMATION_MARK,
  // eslint-disable-next-line no-unused-vars
  CHANNEL,
  // eslint-disable-next-line no-unused-vars
  ROLE,
  // eslint-disable-next-line no-unused-vars
  STANDARD_EMOJI,
  // eslint-disable-next-line no-unused-vars
  CUSTOM_EMOJI,
  // eslint-disable-next-line no-unused-vars
  CUSTOM_EMOJI_ANIMATED,
  // eslint-disable-next-line no-unused-vars
  UNIX_TIMESTAMP,
  // eslint-disable-next-line no-unused-vars
  UNIX_TIMESTAMP_STYLED, // like Gangnam Style
}

export enum TimestampStyle {
  // eslint-disable-next-line no-unused-vars
  t,
  // eslint-disable-next-line no-unused-vars
  T,
  // eslint-disable-next-line no-unused-vars
  d,
  // eslint-disable-next-line no-unused-vars
  D,
  // eslint-disable-next-line no-unused-vars
  f, // default
  // eslint-disable-next-line no-unused-vars
  F,
  // eslint-disable-next-line no-unused-vars
  r
}

export const messageFormatingRegex: MessageFormatingInteface = {
  [MessageFormating.USER]: /<@(\d+)>/,
  [MessageFormating.USER_WITH_EXCLAMATION_MARK]: /<@!(\d+)>/,
  [MessageFormating.CHANNEL]: /<#(\d+)>/,
  [MessageFormating.ROLE]: /<@&(\d+)>/,
  [MessageFormating.STANDARD_EMOJI]: /<:(\w+):(\d+)>/,
  [MessageFormating.CUSTOM_EMOJI]: /<:(\w+):(\d+)>/,
  [MessageFormating.CUSTOM_EMOJI_ANIMATED]: /<a?:\w+:(\d+)>/,
  [MessageFormating.UNIX_TIMESTAMP]: /\d{13}/,
  [MessageFormating.UNIX_TIMESTAMP_STYLED]: /\d{13}/,
};

export const cdnEndpoint = 'https://cdn.discordapp.com/';

export enum ImageFormat {
  // eslint-disable-next-line no-unused-vars
  JPEG,
  // eslint-disable-next-line no-unused-vars
  JPG,
  // eslint-disable-next-line no-unused-vars
  PNG,
  // eslint-disable-next-line no-unused-vars
  WEBP,
  // eslint-disable-next-line no-unused-vars
  GIF,
  // eslint-disable-next-line no-unused-vars
  LOTTIE
}

export const imageFormat: ImageFormatInterface = {
  [ImageFormat.JPEG]: '.jpeg',
  [ImageFormat.JPG]: '.jpg',
  [ImageFormat.PNG]: '.png',
  [ImageFormat.WEBP]: '.webp',
  [ImageFormat.GIF]: '.gif',
  [ImageFormat.LOTTIE]: '.json',
};

export type imageFormatType =
  'jpg' | 'jpeg' | 'png' | 'webp' | 'gif' | 'json';

export const cdn = (format: imageFormatType): CdnInterface => ({
  customEmoji: (emojiId: string): string => `/emojis/${emojiId}.${format}`,
  guildIcon: (guildId: string, guildIcon: string): string =>
    `/icons/${guildId}/${guildIcon}.${format}`,
  guildSplash: (guildId: string, guildSplash: string): string =>
    `/splashes/${guildId}/${guildSplash}.${format}`,
  guildDiscoverySplash:
    (guildId: string, guildDiscoverySplash: string): string =>
      `/discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}`,
  guildBanner: (guildId: string, guildBanner: string): string =>
    `/banners/${guildId}/${guildBanner}.${format}`,
  userBanner: (userId: string, userBanner: string): string =>
    `/banners/${userId}/${userBanner}.${format}`,
  defaultUserAvatar: (userDiscriminator: string): string =>
    `/embed/avatars/${userDiscriminator}.${format}`,
  userAvatar: (userId: string, userAvatar: string): string =>
    `/avatars/${userId}/${userAvatar}.${format}`,
  guildMemberAvatar:
    (guildId: string, userId: string, memberAvatar: string): string =>
      `/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${format}`,
  applicationIcon: (applicationId: string, icon: string): string =>
    `/app-icons/${applicationId}/${icon}.${format}`,
  applicationCover: (applicationId: string, coverImage: string): string =>
    `/app-icons/${applicationId}/${coverImage}.${format}`,
  applicationAssets: (applicationId: string, assetId: string): string =>
    `/app-assets/${applicationId}/${assetId}.${format}`,
  achievementIcon:
    (applicationId: string, achievementId: string, iconHash: string): string =>
      `/app-assets/${
        applicationId
      }/achievements/${achievementId}/icons/${iconHash}.${format}`,
  stickerPackBanner: (stickerPackBannerAssetId: string): string =>
    `/app-assets/710982414301790216/store/${
      stickerPackBannerAssetId}.${format}`,
  teamIcon: (teamId: string, teamIcon: string): string =>
    `/team-icons/${teamId}/${teamIcon}.${format}`,
  sticker: (stickerId: string): string => `stickers/${stickerId}.${format}`,
  roleIcon: (roleId: string, roleIcon: string): string =>
    `/role-icon/${roleId}/${roleIcon}.${format}`,
  guildScheduledEventCover:
    (scheduledEventId: string, scheduledEventCoverImage: string): string =>
      `/guild-events/${scheduledEventId}/${scheduledEventCoverImage}.${format}`,
});

/**
 * Return data encoded in base64
 * @param {string} format - Image format
 * @param {string} imageEncoded - Image encoded in base64
 * @return {string}
 */
export function imageData(format: string, imageEncoded: string) {
  return `data:${format};base64,${imageEncoded}`;
};
