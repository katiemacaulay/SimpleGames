const wordOnlyHasLetters = (word) => {
    const wordArray = word.split('');
    const filterLetters = (character) => !parseInt(character) || '!';
    const lettersArray = wordArray.filter(filterLetters)
    const isValid = (arr1, arr2) => arr1.length === arr2.length;
    return isValid(wordArray, lettersArray);
  }
  
  const findPositionofFirstVowel = (word) =>{ 
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const wordArray = word.split('');
    const isVowel = (letter) => !vowel.includes(letter)
    const someArray = wordArray.map(isVowel)
    return someArray.indexOf(false)
  }
  
  const sendToEndOfWord = (word, position) => {
    const wordArray = word.split('');
    const cutConsonant = wordArray.slice(position);
    const cutOffPart = wordArray.slice(0, position);
    return cutConsonant.join('') + cutOffPart.join('');
  }
  
  const pigLatin = (word) => {
    if(!wordOnlyHasLetters(word) || word === ''){
      return word
    }
    const position = findPositionofFirstVowel(word);
    if(position === 0){
      return word + 'yay';
    }
    return sendToEndOfWord(word, position) + 'ay';
  };
  
  const translatePhrase = (ph) => {
    return ph.split(' ').map(pigLatin).join(' ');
  }

  module.exports = {
    wordOnlyHasLetters,
    findPositionofFirstVowel,
    sendToEndOfWord,
    pigLatin,
    translatePhrase
}