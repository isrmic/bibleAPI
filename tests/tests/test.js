const Fuse = require('fuse.js');

const books = [
  {
    bookname: 'Gênesis',
    chapters: [
      {
        versicles:[
          'No princípio, Deus criou os céus e a terra.',
          'A terra era sem forma e vazia, a escuridão cobria as águas profundas, e o Espírito de Deus se movia sobre a superfície das águas.',
        ],
      },
    ],
  },
  {
    bookname: 'Exôdo',
    chapters: [
      {
        versicles:[
          'Estes são os nomes dos filhos de Israel que se mudaram para o Egito com Jacó, cada um com sua família:',
          'Rúben, Simeão, Levi, Judá,',
        ],
      },
    ],
  },
];

const options = {
  keys: [
    'chapters.versicles',
  ],
};

const fuse = new Fuse(books, options);

const result = fuse.search('rúben');

console.log(result[0]);