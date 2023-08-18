module.exports = {
        token: "TOKEN",
        prefix: "$getGuildVar[prefix;$guildID;main]",
    intents:["MessageContent",
    "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping",
            ],
    events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onReactionAdd", "onReactionRemove", "onReactionRemoveAll", "onReactionRemoveEmoji", "onGuildJoin", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onVoiceStateUpdate", "onWebhookUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onPresenceUpdate", "onTypingStart", "onUserUpdate", "onInteractionCreate",
            ],
}
