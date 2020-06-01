/* eslint-disable no-unused-vars */
let inputArray = document.getElementById('inputArrayid');
let arrays = [[1, 2, 3], [4, 5], [6]];
const concatArray = function (arr) {
  arr.substr(1, arr.length - 1);
  let array = arr.split('], [');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(', ');
  }
  let arrAll = array.reduce(function (sum, current) {
    return sum.concat(current);
  });
  return (document.getElementById('result').innerHTML = `${arrAll}`);
};
