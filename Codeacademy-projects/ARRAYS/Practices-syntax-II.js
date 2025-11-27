// Use .forEach() array method:
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
// Use .map() array method:
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = (arr) => {
    return arr.map(e => toSquare(e))
}

console.log(squareNums(numbers));

/*
==========================================================================
*/

// Use .filter() array method:
const justCoolStuff = (arr1, arr2) => {
  return arr1.filter( e => arr2.includes(e));
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

/*
==========================================================================
*/

// Use .every() array method:
const isTheDinnerVegan = (food) => {
  return food.every(e => e.source == "plant");
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false


/*
==========================================================================
*/

// Use .sort(a, b) array method:
const speciesArray = [ 
  {speciesName:'shark', numTeeth:50},
  {speciesName:'dog', numTeeth:42},
  {speciesName:'alligator', numTeeth:80},
  {speciesName:'human', numTeeth:32}
];

const sortSpeciesByTeeth = (animal) => {
   return animal.sort((a, b) => a.numTeeth - b.numTeeth );
  console.log(animal);
}

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]


/*
==========================================================================
*/

// Use .findIndex() array method:
const findMyKeys = (arr) => {
  return arr.findIndex(e => e === "keys")
}

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4



/*
==========================================================================
*/

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,

    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(newName) {
      this._name = newName;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    }
    
  };
};

const newDog = dogFactory('Joe', 'Pug', 27);
newDog.bark();
newDog.eatTooManyTreats();
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
