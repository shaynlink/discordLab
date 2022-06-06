export interface MessageFormatingInteface {
  [key: number]: RegExp;
}

export interface ImageFormatInterface {
  [key: number]: string;
}

export interface CdnInterface {
  customEmoji: (emojiId: string) => string,
  guildIcon: (guildId: string, guildIcon: string) => string;
  guildSplash: (guildId: string, guildSplash: string) => string;
  guildDiscoverySplash:
    (guildId: string, guildDiscoverySplash: string) => string;
  guildBanner: (guildId: string, guildBanner: string) => string;
  userBanner: (userId: string, userBanner: string) => string;
  defaultUserAvatar: (userDiscriminator: string) => string;
  userAvatar: (userId: string, userAvatar: string) => string;
  guildMemberAvatar:
    (guildId: string, userId: string, memberAvatar: string) => string;
  applicationIcon: (applicationId: string, icon: string) => string;
  applicationCover: (applicationId: string, coverImage: string) => string;
  applicationAssets: (applicationId: string, assetId: string) => string;
  achievementIcon:
    (applicationId: string, achievementId: string, iconHash: string) => string;
  stickerPackBanner: (stickerPackBannerAssetId: string) => string;
  teamIcon: (teamId: string, teamIcon: string) => string;
  sticker: (stickerId: string) => string;
  roleIcon: (roleId: string, roleIcon: string) => string;
  guildScheduledEventCover:
    (scheduledEventId: string, scheduledEventCoverImage: string) => string;
};
