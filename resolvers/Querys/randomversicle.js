const { generateRegexString } = require('./modules/generators');

const randomversicle = () => async (root, {bookname, chapter}, { bibles }) => {

	const nvt = bibles.version.nvt;
	
	const filter = bookname && new RegExp(generateRegexString(bookname), 'i');
	
	const books = bookname ? nvt.books.filter(({ bookname }) => (filter.lastIndex = 0, filter.test(bookname))) : nvt.books;
	
	if (books.length === 0)
		return {
			bookname: '',
			chapternumber: 0,
			versiclenumber: 0,
			content: 'Livro não encontrado',
		};		

	const randombook = Math.floor((Math.random() * (books.length)));
	var book = books[randombook];

	if (chapter) {
		var chapter = book.chapters[chapter];
	}
	else {
		var randomchapter = Math.floor((Math.random() * book.chaptersnumber));
		var chapter = book.chapters[randomchapter];
	}

	const randomversicle = Math.floor((Math.random() * chapter.versiclesnumber));
	const versiclecontent = chapter.versicles[randomversicle];
	
	return {
		bookname: book.bookname,
		chapternumber: randomchapter + 1,
		versiclenumber: randomversicle + 1,
		content: versiclecontent,
	};
};

module.exports = randomversicle;