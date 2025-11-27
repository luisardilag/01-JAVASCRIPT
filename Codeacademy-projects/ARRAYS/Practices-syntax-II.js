const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
}

const acceptEverything = (arr) => {
  arr.forEach(e => console.log(`Ok, I guess I will eat some ${e}`));
}

declineEverything(veggies);
acceptEverything(veggies);

/*
==========================================================================
*/

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = (arr) => {
    return arr.map(e => toSquare(e))
}

console.log(squareNums(numbers));

/*
==========================================================================
*/

const justCoolStuff = (arr1, arr2) => {
  return arr1.filter( e => arr2.includes(e));
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

/*
==========================================================================
*/

