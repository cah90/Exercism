// const isPangram = (string) => {

//   const ALPHABET = ('abcdef').split("");
  
//   const LOWERCASE = string.toLowerCase();

//   const test = letter => { 

//     console.log(`this is the letter ${letter}`);

//     const r = LOWERCASE.includes(letter);

//     console.log(`this is if it includes it or not`);

//     console.log(r);

//     return r;
  
//   }

//   return ALPHABET.every(test);


// }
  
  
  // var test1 = isPangram('abcfde');
  // console.log(test1);



//=========second version try===============



const isPangram = (string) => {
  
  const modifiedStr = string.toLowerCase().replace(/\s|[^a-z]/g, "").split("");

  console.log(modifiedStr);
  

  const test =  new Set(modifiedStr).size === 26;

  console.log(`my return will be ${test}`);

  return test;
}
  
  
  var test1 = isPangram('a quick movement of the enemy will jeopardize five gunboats');
  console.log(test1);