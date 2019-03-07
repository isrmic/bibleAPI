const fs = require('fs');
const { join } = require('path');
const Query = fs.readFileSync(join(__dirname, '/Query.gql'), 'utf8');
const Mutation = fs.readFileSync(join(__dirname, '/Mutation.gql'), 'utf8');

module.exports = { Query, Mutation };