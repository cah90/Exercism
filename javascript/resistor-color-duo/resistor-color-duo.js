//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


/*The destructuring assignment syntax is a JavaScript expression that makes it 
possible to unpack values from arrays, or properties from objects, into distinct variables.*/

import {colorCode} from '../resistor-color/resistor-color';

export const value = ([color1, color2]) => {


  const COLOR_1 = colorCode(color1);
  const COLOR_2 = colorCode(color2);

  //let result = "" + COLOR_1 + COLOR_2;

  let result = COLOR_1 * 10 + COLOR_2;
  console.log(result);

  return result;



};
