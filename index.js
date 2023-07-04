const EmojiStorage = require('./EmojiStorage')

module.exports = function(settings) {
    return {
        clientMixin: (client) => {
            client.emojiStorage = new EmojiStorage(client, settings)
            client.on('ready', () => {
                client.emojiStorage.init()
            })
        },
        intents: 9
    }
}