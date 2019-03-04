const { generateRegexString } = require('./modules/generators');

const books = () => async (root, { bookname, chapter, versicle, content }, { bibles }) => {

  const bible = bibles.version.nvt;

  let books = [

    ...bible.books.map(book => {
    
      return { //new object book
        
        ...book,

        chapters: [

          ...book.chapters.map((chapter, index) => {

            return { //new chapter
              chapternumber: index + 1, //define chapter number
              ...chapter,

              versicles: [
                ...chapter.versicles.map((versicle, index) => {
                  return {
                    versiclenumber: index + 1,
                    content: versicle,
                  };
                }),
              ],
            };
          }),          
        ],
      };     
    }),
  ];
  
  if (bookname) {
    
    const filter = new RegExp(generateRegexString(bookname), 'i');
    
    books = books.filter( book => (filter.lastIndex = 0, filter.test(book.bookname) ) );    
  }
  if (chapter) {
    books.filter(book => book.chaptersnumber >= chapter).map(book => {
      
      book.chapters = [book.chapters[chapter - 1]];

    });
  }
  if(versicle) {
    books.map(book => {
      book.chapters.filter(chapter => chapter.versiclesnumber >= versicle).map(chapter => {
        chapter.versicles = [chapter.versicles[versicle - 1]];
      });
    });
  }
  if (content) {
    
    const filter = new RegExp(generateRegexString(content), 'i');

    books.map(book => {
      book.chapters.map(chapter => {
        chapter.versicles = chapter.versicles.filter(versicle => {
          filter.lastIndex = 0;
          return filter.test(versicle.content);
        });
      });
    });
  }
  return books;
};

module.exports = books;