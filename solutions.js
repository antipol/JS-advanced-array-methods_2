//ADVANCED ARRAY METHODS 2

//1. forEach-log
const forEachLog = arr => arr.forEach(item => console.log(item));
forEachLog([2, 65, 75]);
//2
//65
//75


//2. simple-filter
const greaterThan10 = numArr => numArr.filter(num => num > 10);
console.log(greaterThan10([2, 65, 21, 5]));
//[ 65, 21 ]


//3. simple-filter-2
const filterEvens = numArr2 => numArr2.filter(num => num % 2 === 0);
console.log(filterEvens([3, 65, 43, 22, 100]));
//[ 22, 100 ]


//4. forEach-sum
const forEachSum = numArr3 => {
  let result = 0;
  numArr3.forEach(num => result += num);
  return result;
}
console.log(forEachSum([1, 2, 3, 4]));
//10


//5. implement-forEach
const forEachNums = [1, 2, 3, 4];
const logFunction = (num) => console.log(num);

const forEach = (array, forEachFunction) => array.forEach(num => forEachFunction(num));

forEach(forEachNums, logFunction);
// 1
// 2
// 3
// 4


//6. map-triple-array
const mapFunction = arr => arr.map(num => num * 3);
console.log(mapFunction([2, 5, 3, 10]));
//[ 6, 15, 9, 30 ]


//7. map-strings-to-nums
const stringsToNums = numArr => numArr.map(str => parseInt(str));
console.log(stringsToNums(["3", "6", "76"]));
//[ 3, 6, 76 ]


//8. first-letter-uppercase-map
const toUpper = original => original.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");
console.log(toUpper("the quick brown fox"));
//The Quick Brown Fox


//9. implement-map
const mapArr = [1, 3, 66, 10];
const double = (val) => val * 2;

const map = (arr, doubleFunction) => arr.map(num => doubleFunction(num));

console.log(map(mapArr, double));
//[ 2, 6, 132, 20 ]


//10. reduce-sum
const sum = numArray => numArray.reduce((acc, cur) => acc + cur);
console.log(sum([1, 2, 3, 4]));
//10


//11. reduce-min
const reduceArr = [10, 5, 4, 2, 7, 1];
const reduceMin = arr => arr.reduce((acc, cur) => acc < cur ? acc : cur);
console.log(reduceMin(reduceArr));
//1


//12. count-odds-and-evens
const countOddsAndEvens = arr => {
  const odds = arr.filter(num => num % 2 === 1).length;
  const evens = arr.filter(num => num % 2 === 0).length;
  const countObj = {
    Odds: odds,
    Evens: evens
  }
  return countObj;
}
console.log(countOddsAndEvens([1, 2, 3, 4, 10]));
//{ Odds: 2, Evens: 3 }
