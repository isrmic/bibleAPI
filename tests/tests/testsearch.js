const should = require('should');
const { generate, generateRegexString } = require('./modules/generators');

describe('test of generate', () => {
  
  it('generate of "a" should return [["a","à","á","â","ã","ä","å"]]', () => {
    generate("a").should.be.eql([["a","à","á","â","ã","ä","å"]]);
  });

  it('generate of e should return [["e","è","é","ê","ë"]]', () => {
    generate("e").should.be.eql([["e","è","é","ê","ë"]]);
  });
  
  it('generate of ae should return [["a","à","á","â","ã","ä","å"], ["e","è","é","ê","ë"]]', () => {
    generate("ae").should.be.eql([["a","à","á","â","ã","ä","å"], ["e","è","é","ê","ë"]]);
  });

  it('generate of ae should return [["a","à","á","â","ã","ä","å"], ["e","è","é","ê","ë"], "b"]', () => {
    generate("aeb").should.be.eql([["a","à","á","â","ã","ä","å"], ["e","è","é","ê","ë"], "b"]);
  });

});

describe('test of a generateStringRegex', () => {
  it('generate of a should be return "[aàáâãäå]"', () => {
    generateRegexString('a').should.be.equal('[aàáâãäå]');
  });
});