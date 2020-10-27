const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }
  let arr = [];
  for(let i = 0;i < members.length; i++){
    if(typeof members[i] === 'string'){
      arr.push(members[i].trim().toUpperCase());
    }
  }
  let array = arr.sort();
  let name = '';
  for(let elem of array){
    name+=elem[0];
  }
  return name
};
