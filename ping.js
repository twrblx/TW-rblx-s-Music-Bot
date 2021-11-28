module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
  run: async (client, message, args) => {
           message.channel.send({embed : {
             description : `> \`\`\`You Latency Is: ${client.ws.ping}ms \`\`\`  `
           }})
           .then(msg=>msg.react('📶'))
           
           }
}


