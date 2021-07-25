const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class OffCommand extends BaseCommand {
  constructor() {
    super('off', 'lamp', []);
  }

  run(client, message, args) {
    var axios = require("axios").default;
    require('dotenv').config();
    var options = {
      method: 'PUT',
      url: `https://api.meethue.com/bridge/${process.env.USER}/lights/1/state`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.BEARER
      },
      data: { on: false }
    };
    
    axios.request(options).then(function (response) {
      message.channel.send('🌑 Lamps are now off!');
    }).catch(function (error) {
      console.error(error);
    });
  }
}