//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {

const initialDate = date.getTime();

//const finalDate = initialDate + 1000000000000;

const finalDate = initialDate + 1e12; //the same as the above.

return new Date(finalDate);

};
