//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export const colorCode = color => COLORS.indexOf(color);
  
/*No need for the parentheses on the argument function as it is an alone
argument.
Because the code is a single return, we can inline it. No need for the curly 
brackets as well.
*/
