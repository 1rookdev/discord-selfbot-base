require('dotenv').config();
const {Client} = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false
});

const delay = ms => new Promise(res => setTimeout(res, ms));
const min = 0.80;
const max = 0.99;

// prints that the client is ready
client.on('ready', async () => {
    console.log('--- client is ready ---')


});

client.on('messageCreate', async (message) => {
    if (message.author.id === client.user.id) { 

        if (message.content.toLowerCase() === "test") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            await message.reply("hi")
            console.log("| --- keyword: [test], replied: [hi] --- |")
        }

        else if (message.content.toLowerCase() === "help") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            await message.reply("> ```testing commands```\n> `test`: **prints hi, meant for testing purposes.**\n\n\n> ```guild commands```\n> `guild.id`: **prints the guild's id**\n> `guild.name`: **prints the guild's name**\n\n\n> ```client commands```\n> `client.info`: **fetches the client's uptime, friend, and guild count**\n> `client.avatar`: **fetches the client's avatar URL**\n> `client.id`: **fetches the client's user ID**\n> `client.status`: **fetches the client's status**\n> `client.status.set`: **sets the client's status**\n> `client.set.presence`: **sets the client's rich presence**\n> `client.stop.presence`: **stops the client's rich presence**\n")
            console.log("| --- keyword: [help], replied: [INFO] --- |")
        }

        else if (message.content.toLowerCase() === "guild.id") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            if (message.guild) {
                await message.reply(message.guild.id)
                console.log("| --- keyword: [guild.id], replied: [INFO] --- |")
            }
            else {
                await message.reply("*message is not in a guild (server)*")
                console.log("| --- guild.id error, message not in a guild --- |")
            }
        }

        else if (message.content.toLowerCase() === "guild.name") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);
            
            if (message.guild) {
                await message.reply(message.guild.name)
                console.log("| --- keyword: [guild.name], replied: [INFO] --- |")
            }
            else {
                await message.reply("*message is not in a guild (server)*")
                console.log("| --- guild.name error, message not in a guild --- |")
            }
        }
        
        else if (message.content.toLowerCase() === "client.avatar") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);
            
            await message.reply(message.author.avatarURL({ format: 'png', dynamic: true, size: 256 }));
            console.log("| --- keyword: [client.avatar], replied: [URL] --- |")
        }

        else if (message.content.toLowerCase() === "client.info") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            const uptime_mins = Math.round(client.uptime / 60000);
            const uptime_secs = Math.round(client.uptime / 1000);

            await message.reply(`**Uptime:** \`${uptime_mins} minutes, ${uptime_secs} seconds\`\n**Friends:** \`${client.relationships.friendCache.size}\`\n**Servers in:** \`${client.guilds.cache.size}\``)
        }

        else if (message.content.toLowerCase() === "client.id") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            await message.reply(message.author.id)
            console.log("| --- keyword: [client.id], replied: [URL] --- |")
        }

        else if (message.content.toLowerCase() === "client.status") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            await message.reply(`**${client.user.presence.status}**`);
            console.log("| --- keyword: [client.status], replied: [INFO] --- |")
        }

        else if (message.content.toLowerCase() === "client.status.set") {
            if (message.author.id !== client.user.id) return;

            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            await message.reply("what would you like to set your status to?\n- online\n- idle\n- dnd (do not disturb)\n- invisible")
            
            const filter = m => m.author.id === client.user.id;

            try {
                const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30_000, errors: ["time"] });
                const response = collected.first().content.toLowerCase();

                if (response === "online") {
                    const wait_time = Math.random() * (max - min) + min;
                    await delay(wait_time)
                    client.user.setStatus('online');
                    await delay(wait_time);

                    await collected.first().reply("status has been set to `online`.\n\n*note that this doesn't work for the client, it only shows your changed status to others; your previous status (before it was changed) only is visible and functions for YOU.\nwhen the selfbot turns off, your status is back to normal (which was your previous one), and will not be back to what it was when the selfbot turns back on again.*")
                }
            else if (response === "idle") {
                const wait_time = Math.random() * (max - min) + min;
                await delay(wait_time);
                client.user.setStatus('idle');
                await delay(wait_time);
                
                await collected.first().reply("status has been set to `idle`.\n\n*note that this doesn't work for the client, it only shows your changed status to others; your previous status (before it was changed) only is visible and functions for YOU.\nwhen the selfbot turns off, your status is back to normal (which was your previous one), and will not be back to what it was when the selfbot turns back on again.*")
                }
            else if (response === "dnd") {
                const wait_time = Math.random() * (max - min) + min;
                await delay(wait_time);
                client.user.setStatus('dnd');
                await delay(wait_time);
                
                await collected.first().reply("status has been set to `dnd`.\n\n*note that this doesn't work for the client, it only shows your changed status to others; your previous status (before it was changed) only is visible and functions for YOU.\nwhen the selfbot turns off, your status is back to normal (which was your previous one), and will not be back to what it was when the selfbot turns back on again.*")
                }
            else if (response === "invisible") {
                const wait_time = Math.random() * (max - min) + min;
                await delay(wait_time);
                client.user.setStatus('invisible');
                await delay(wait_time);
                
                await collected.first().reply("status has been set to `invisible`.\n\n*note that this doesn't work for the client, it only shows your changed status to others; your previous status (before it was changed) only is visible and functions for YOU.\nwhen the selfbot turns off, your status is back to normal (which was your previous one), and will not be back to what it was when the selfbot turns back on again.*")
                }

            } catch {
                const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30_000, errors: ["time"] });
                if (!collected) {
                    await message.reply("timed out. no changes made.")
                }
            }
        }

        else if (message.content.toLowerCase() === "client.set.presence") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            await message.reply("type the text of your presence");
            const filter = m => m.author.id === client.user.id;

            try {
                const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30_000, errors: ["time"] });
                const response1 = collected.first().content.toLowerCase();

                if (response1) {
                    const wait_time = Math.random() * (max - min) + min;
                    await delay(wait_time);

                    await message.reply("which type of presence would you like?\n- `watching`\n- `streaming`\n- `playing`\n- `listening`\n- `competing`")
                    console.log("| --- keyword: [client.set.presence], replied: [OPTIONS] --- |")
                    try {
                        const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30_000, errors: ["time"] });
                        const response2 = collected.first().content.toUpperCase();

                        if (response2 === "WATCHING") {
                            const wait_time = Math.random() * (max - min) + min;
                            await delay(wait_time);

                            await client.user.setActivity(response1, {type: response2});
                            await message.reply(`rich presence has been set to **${response1}**, **${response2}**\n\n**client.stop.presence** to stop rich presence.`)
                            console.log("| --- keyword: [client.set.presence {watching} ], replied: [SUCCESS] --- |")
                        }

                        else if (response2 === "STREAMING") {
                            const wait_time = Math.random() * (max - min) + min;
                            await delay(wait_time);

                            await client.user.setActivity(response1, {type: response2});
                            await message.reply(`rich presence has been set to **${response1}**, **${response2}**\n\n**client.stop.presence** to stop rich presence.`)
                            console.log("| --- keyword: [client.set.presence {streaming} ], replied: [SUCCESS] --- |")
                        }

                        else if (response2 === "PLAYING") {
                            const wait_time = Math.random() * (max - min) + min;
                            await delay(wait_time);

                            await client.user.setActivity(response1, {type: response2});
                            await message.reply(`rich presence has been set to **${response1}**, **${response2}**\n\n**client.stop.presence** to stop rich presence.`)
                            console.log("| --- keyword: [client.set.presence {playing} ], replied: [SUCCESS] --- |")
                        }

                        else if (response2 === "LISTENING") {
                            const wait_time = Math.random() * (max - min) + min;
                            await delay(wait_time);

                            await client.user.setActivity(response1, {type: response2});
                            await message.reply(`rich presence has been set to **${response1}**, **${response2}**\n\n**client.stop.presence** to stop rich presence.`)
                            console.log("| --- keyword: [client.set.presence {listening} ], replied: [SUCCESS] --- |")
                        }

                        else if (response2 === "COMPETING") {
                            const wait_time = Math.random() * (max - min) + min;
                            await delay(wait_time);

                            await client.user.setActivity(response1, {type: response2});
                            await message.reply(`rich presence has been set to **${response1}**, **${response2}**\n\n**client.stop.presence** to stop rich presence.`)
                            console.log("| --- keyword: [client.set.presence {competing} ], replied: [SUCCESS] --- |")
                        }
                    } catch (error) {
                        await message.reply("timed out. no changes made.")
                    }
                }
            } catch (error) {
                await message.reply("timed out. no changes made.")
            }
        }

        else if (message.content.toLowerCase() === "client.stop.presence") {
            const wait_time = Math.random() * (max - min) + min;
            await delay(wait_time);

            await client.user.setActivity()
            await message.reply("rich presence has been stopped.")
            console.log("| --- keyword: [client.stop.presence], replied: [INFO] --- |")
        }
    }
});

// login token
client.login(process.env.TOKEN);