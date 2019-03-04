const words = require('./words');

const generate = (string) => {
  
  const strspl = string.toLowerCase().split('');

  const newstring = strspl.map(char => {
    for (let i = 0; i < words.length; i++) {
      //if words[i] contains "char" return a join array of index "i"
      if (words[i].indexOf(char) !== -1) {
        return words[i];
      }
    }
    return char;
  });  
  
  return newstring;

};

const generateRegexString = (string) => {
  
  const arrayOfString = generate(string);

  return arrayOfString.map(chars => Array.isArray(chars) ? `[${chars.join('')}]` : chars).join('');
};

module.exports = { generate, generateRegexString };