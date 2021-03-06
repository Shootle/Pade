var interfaceConfig = {
  "SHOW_CONTACTLIST_AVATARS": true,
  "SHOW_POWERED_BY": false,
  "APP_NAME": chrome.i18n.getMessage('manifest_extensionName'),
  "filmStripOnly": false,
  "SHADOW_COLOR": "#ffffff",
  "JITSI_WATERMARK_LINK": "",
  "SHOW_BRAND_WATERMARK": false,
  "RANDOM_AVATAR_URL_SUFFIX": "",
  "REMOTE_THUMBNAIL_RATIO": 1,
  "SHOW_JITSI_WATERMARK": false,
  "VIDEO_LAYOUT_FIT": "both",
  "CANVAS_EXTRA": 104,
  "DEFAULT_BACKGROUND": "#474747",
  "BRAND_WATERMARK_LINK": "",
  "DISABLE_FOCUS_INDICATOR": false,
  "VERTICAL_FILMSTRIP": getSetting("VERTICAL_FILMSTRIP", true),
  "LOCAL_THUMBNAIL_RATIO": 1.7777777777777777,

  "TOOLBAR_BUTTONS": [
    "microphone",
    "camera",
    "desktop",
    "invite",
    "fullscreen",
    "fodeviceselection",
    "profile",
    "addtocall",
    "contacts",
    "chat",
    "recording",
    "etherpad",
    "livestreaming",
    "sharedvideo",
    "settings",
    "raisehand",
    "info",
    "videoquality",
    'invite',
    'feedback',
    'stats',
    'shortcuts',
    "filmstrip"
  ],
  "RANDOM_AVATAR_URL_PREFIX": "",
  "DEFAULT_DOMINANT_SPEAKER_DISPLAY_NAME": "Speaker",
  "FILM_STRIP_MAX_HEIGHT": getSetting("FILM_STRIP_MAX_HEIGHT", 80),
  "SETTINGS_SECTIONS": [
    "language",
    "devices",
    "moderator"
  ],
  "CANVAS_RADIUS": 7,
  "ENABLE_FEEDBACK_ANIMATION": false,
  "INVITATION_POWERED_BY": true,
  "DEFAULT_REMOTE_DISPLAY_NAME": "",
  "TOOLBAR_TIMEOUT": getSetting("TOOLBAR_TIMEOUT", 4000),
  "INVITE_OPTIONS": [
    "invite",
    "dialout",
    "addtocall"
  ],
  "GENERATE_ROOMNAMES_ON_WELCOME_PAGE": true,
  "MAIN_TOOLBAR_BUTTONS": [
    "microphone",
    "camera",
    "desktop",
    "invite",
    "fullscreen"
  ],
  "DEFAULT_LOCAL_DISPLAY_NAME": "Me",
  "INITIAL_TOOLBAR_TIMEOUT": getSetting("INITIAL_TOOLBAR_TIMEOUT", 20000)
};