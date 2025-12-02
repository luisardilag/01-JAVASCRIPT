// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

  const invalidCards = [];

const LuhnAlgorithm = (cardNumber) => {
  
  let copyNumber = [...cardNumber];   // 1. create a copy of the array
  let removeLast = copyNumber.pop();  // 2. Drop the last digit
  let sum = 0;
  
  for(let i = copyNumber.length - 1; i >= 0; i--){
    let digit = copyNumber[i]; // 3. revert the array
    
    if(i % 2 !== 1){ 
      digit *= 2;    // 4. multiple odd digit by 2 
      if(digit > 9) {
       digit -= 9;   // 5. subtract 9 to numbers over 9
      }
    }
    sum += digit; // 6. add numbers (remember add the digit Step2)
  }
  
  return (sum + removeLast) % 10 === 0; // 7. Check the module is cero
};

const validateCred = (cardNumber) => {
  let validate = LuhnAlgorithm(cardNumber);
  if(!validate) {
    invalidCards.push(cardNumber);
  }
  console.log(validate ? "VALID" : "INVALID");
}

//validateCred(valid1);
validateCred(invalid1);
validateCred(invalid2);
validateCred(invalid3);
validateCred(invalid4);
validateCred(invalid5);


console.log(invalidCards);

const creditCardCompanies = [
  { fistDigit: 3, value: "Amex" },
  { fistDigit: 4, value: "Visa" },
  { fistDigit: 5, value: "Mastercard" },
  { fistDigit: 6, value: "Discover" },
]


  

const idInvalidCardCompanies = (arrCards) => {
  let companiesToCall = [];
  
  arrCards.forEach(e => {
    switch(e[0]){
      case 3:
          companiesToCall.push("Anex");
          break;
      case 4:
          companiesToCall.push("Visa");
          break;
      case 5:
          companiesToCall.push("Mastercard");
          break;
      case 6:
          companiesToCall.push("Discover");
          break;
    }
    
    const unicas = [...new Set(companiesToCall)];
    console.log(unicas);
    return unicas;
  });
}

idInvalidCardCompanies(invalidCards);