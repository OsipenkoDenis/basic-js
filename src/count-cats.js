const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let numberOfCats = 0;
  for(let SubArr of matrix){
    for(let elem of SubArr){
      if(elem === '^^' || elem === "^^"){
        numberOfCats++
      }
    }
  }
  return numberOfCats;
};
