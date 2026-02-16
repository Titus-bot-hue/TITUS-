const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Create client
const client = new Client({
    authStrategy: new LocalAuth() // Saves session
});

// Generate QR Code
client.on('qr', (qr) => {
    console.log('Scan this QR code with your WhatsApp:');
    qrcode.generate(qr, { small: true });
});

// When ready
client.on('ready', () => {
    console.log('🤖 Titus Bot is ready!');
});

// Listen for messages
client.on('message', async message => {

    // Auto reply
    if (message.body.toLowerCase() === 'hi') {
        message.reply('Hello 👋 Welcome to Titus Bot!');
    }

    // Away message example
    if (message.body.toLowerCase() === 'bye') {
        message.reply('Goodbye! Have a great day 😊');
    }

    // Custom command
    if (message.body === '!info') {
        message.reply('This is Titus Tech & AI Circle Bot 🚀');
    }
});

// Start bot
client.initialize();
