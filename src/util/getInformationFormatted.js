// Diego ACA ESTA LA QUE FORMATEA LA INFORMACION ( No me la pediste pero weno)

const getInformationFormatted = (information, word) => {
  const informationFormatted = information
    .split(" ")
    .map((w) => {
      if (w.toUpperCase() === word.toUpperCase()) {
        return `<b> ${w} </b>`;
      }
      return w;
    })
    .join(" ");
  return informationFormatted;
};

export default getInformationFormatted;
