// Diego esta si importa jajaja xd

const getWordCount = (information, word) => {
  const wordCount = information
    .split(" ")
    .filter((w) => w.toUpperCase() === word.toUpperCase()).length;
  return wordCount;
};

export default getWordCount;
