const {options} = require('./optionsSQLite3');
const knex = require('knex')(options);

async function selectMessages () {
    try {
        const messages = await knex.from('messages').select('*');
        return messages;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = selectMessages;