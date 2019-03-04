const randomversicle = () => async (root, args, { bibles }) => {

	const nvt = bibles.version.nvt;

	const randombook = Math.floor((Math.random() * 66 - 1));
	const book = nvt.books[randombook];

	const randomchapter = Math.floor((Math.random() * book.chaptersnumber));
	const chapter = book.chapters[randomchapter];

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