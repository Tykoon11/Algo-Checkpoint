let insert = function(sentence){

    const sentenceLength = sentence.length;
    const numberOfWords = sentence.split(" ").length;
    const numberOfVowels = sentence.match(/[aeiou]/ig).length;

    return [sentenceLength, numberOfWords, numberOfVowels];
}