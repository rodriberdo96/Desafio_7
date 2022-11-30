const {options} = require('./optionsSQLite3');
const knex = require('knex')(options);

async function createMessages () {
    try {
        await knex.schema.createTable('messages', table => {
            table.increments('id').primary();
            table.string('email');
            table.string('message');
            table.timestamp('date');
        })
            console.log ('Tabla creada');
    }catch (error) {
        console.log(error);
        throw error;
    }
    finally {
        knex.destroy();
    }
};


module.exports = createMessages;