const fs = require('fs');
const { join } = require('path');

const nvtstringjson = fs.readFileSync(join(__dirname, 'books', 'nvt.json'));
const nvtbooks = JSON.parse(nvtstringjson);

const bibles = {
  version: {
    nvt: {
      books: nvtbooks,
    },
  },
};

module.exports = bibles;