const {options} = require('./optionsSQLite3');
const knex = require('knex')(options);

async function insertMessage (message) {
    await knex('messages').insert(message);
        then (() => console.log('Mensaje insertado'))
}

module.exports = insertMessage;