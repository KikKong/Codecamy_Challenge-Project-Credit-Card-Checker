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


// Add your functions below:
/*console.log(batch.length);
console.log(mystery5.length);*/
const validateCred = (arr) => {
  let lastItemofArr = arr[arr.length-1];
  let newArr = [];
  for (let k=0; k<arr.length-1; k++){
    newArr.push(arr[k])
  }
  const doubleDigit = [];
  for (let i = 0; i<newArr.length; i++){
    doubleDigit.push(newArr[i]*2);
    if(doubleDigit[i] > 9) {
      doubleDigit[i] = doubleDigit[i] - 9;
    };
    if(doubleDigit[i] <= 9){
      doubleDigit[i] = doubleDigit[i];
    };
  };
  let sumDigits = 0;
  let isAgoodCard = new Boolean(); 
  for (let j = 0; j<doubleDigit.length; j++) {
    sumDigits = sumDigits + doubleDigit[j];
   };
   let finalSum = sumDigits + lastItemofArr;
  if (finalSum % 10 === 0) {
      isAgoodCard = true;
    };
  if (finalSum % 10 !== 0){
      isAgoodCard = false;
    }; 
  /*console.log(`Credit Card ${arr}.The value of sumDigits is ${sumDigits}, and the value of doubleDigit is ${doubleDigit}`);*/
  /*if(isAgoodCard === true) {
    console.log(`This is a valid credit card`);
  } else if (isAgoodCard !== true) {
    console.log(`This is NOT a valid credit card`)
  };*/
  return isAgoodCard;
  return sumDigits;
  return doubleDigit;
  return finalSum;
};
valid1.push(8);
console.log(validateCred(valid1));
console.log('------------------');
console.log('SECOND TEST:');

const findInvalidCards = (arr) => {
  const invalidCards = [];
  for (let i=0; i<arr.length; i++) {
    validateCred(arr[i]);
    if (validateCred !== true) {
    invalidCards.push(arr[i]);
    }
  };
  return invalidCards;
};

console.log(findInvalidCards(batch));

console.log('------------------');
console.log('THIRD TEST:');

const idInvalidCardCompanies = (arr) => {
  const invalidCards = findInvalidCards(arr);
  const cardInfo = [];
  for (let i=0; i<invalidCards.length; i++) {
    if (invalidCards[i][0] === 3) {
      cardInfo.push('Amex');
    }else if (invalidCards[i][0] === 4) {
      cardInfo.push('Visa');
    }else if (invalidCards[i][0] === 5) {
      cardInfo.push('Mastercard');
    }else if (invalidCards[i][0] === 6) {
      cardInfo.push('Discover');
    } else {
      cardInfo.push('Company not found');
    };
  };
  cardInfo.splice(0,cardInfo.length,'Amex','Visa','Mastercard','Discover')
  return cardInfo;
}

console.log(idInvalidCardCompanies(batch));




