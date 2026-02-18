const { default: makeWASocket, useMultiFileAuthState, delay } = require("@whiskeysockets/baileys");
const { Telegraf } = require('telegraf');
const pino = require("pino");

const tgBot = new Telegraf('7759727923:AAH00B6do15Q4oXOP3I6RVl095hhE7YQzxU');

tgBot.command('pair', async (ctx) => {
    const number = ctx.message.text.split(' ')[1];
    if (!number) return ctx.reply("Usage: /pair 91XXXXXXXXXX");

    ctx.reply(`⏳ Requesting Pairing Code for +${number}...`);

    // Temporary session for pairing
    const { state, saveCreds } = await useMultiFileAuthState(`./sessions/${number}`);
    
    const sock = makeWASocket({
        auth: state,
        logger: pino({ level: "silent" }),
        browser: ["Ubuntu", "Chrome", "20.0.04"]
    });

    try {
        await delay(5000);
        const code = await sock.requestPairingCode(number);
        ctx.reply(`✅ *Pairing Code:* \`${code}\` \n\nLink ithu ninte WhatsApp-il enter cheyyu muthe!`, { parse_mode: 'Markdown' });
    } catch (err) {
        ctx.reply("❌ Error: Pairing request failed!");
    }

    sock.ev.on('creds.update', saveCreds);
    
    sock.ev.on('connection.update', (update) => {
        if (update.connection === 'open') {
            ctx.reply(`🔥 WhatsApp Connected for +${number}!`);
        }
    });
});

tgBot.launch();
console.log("✅ Multiple Pair Bot is Online!");
