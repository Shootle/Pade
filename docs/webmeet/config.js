var config = {
    authentication: 'anonymous',
    auto_login: true,
    auto_join_rooms: [
        'pade@conference.igniterealtime.org',
    ],
    play_sounds: true,
    sounds_path: "sounds/",
    notification_icon: "image.png",
    muc_domain: "conference.igniterealtime.org",
    domain_placeholder: 'igniterealtime.org',
    registration_domain: 'igniterealtime.org',
    locked_domain: 'igniterealtime.org',
    whitelisted_plugins: ["webmeet"],
    bosh_service_url: 'https://xmpp.igniterealtime.org:7483/http-bind/',
    websocket_url: 'wss://xmpp.igniterealtime.org:7483/ws/',
    jid: 'igniterealtime.org',
    notify_all_room_messages: true,
    auto_reconnect: true,
    allow_non_roster_messaging: true,
    view_mode: 'embedded',
    webmeet_invitation: 'Please join meeting in room ',
    webmeet_record: false,
    webmeet_record_audio: false,
    webmeet_record_video: false,
    webmeet_transcription: false,
    webmeet_captions: false,
    ofswitch: false,
    uport: false
};