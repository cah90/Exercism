//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const toRna = (nucleotide) => {

  const NUCLEOTIDES = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  if (nucleotide === "") {

    return "";

  } else if(nucleotide.length > 1) {

    //const INITIAL_ARR = nucleotide.split(""); //It'll result in an array.

    const CHANGE_TO = (nucleotide) => {

      return NUCLEOTIDES[nucleotide];

    };

    //const FINAL_ARR = INITIAL_ARR.map(CHANGE_TO); //It'll result in an array with the initial values changed.

    //return FINAL_ARR.join(''); //It'll result in a string without the commas.

    return nucleotide.split("").map(CHANGE_TO).join("");

  } else {

    return NUCLEOTIDES[nucleotide];

  }

};