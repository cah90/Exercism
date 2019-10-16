//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const isPangram = (string) => {

// const ALPHABET = ('abcdefghijklmnopqrstuvwxyz').split("");

// const LOWERCASE = string.toLowerCase();

// return ALPHABET.every(letter => LOWERCASE.includes(letter));

// };


export const isPangram = (string) => {
  
  const modifiedStr = string.toLowerCase().replace(/\s|[^a-z]/g, "").split("");
  
  return new Set(modifiedStr).size === 26;


}
  