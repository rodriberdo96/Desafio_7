const options = {
    client: 'mysql',
    connection: {
        filename: './db/ecommerce.sqlite',
    },
    useNullAsDefault: true,
};

module.exports = options;