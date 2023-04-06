export const chatMessage = (channel, msg) => ({
    channel: channel,
    channelId: msg.channelId,

    username: msg.userInfo.displayName,
    userId: msg.userInfo.userId,
    badges: msg.userInfo.badges,
    color: msg.userInfo.color,

    id: msg.id,
    message: msg.parseEmotes(),
    emotes: msg.emoteOffsets,

            
    type: "chat",
    raw: msg,

})