
function diffArray(arr1, arr2) {
  var newArr = [];
  
//sort arrays in ascending order
  arr1.sort();
  arr2.sort();

  function chk(a) {
  // check that "this" array (passed as argument) does not include the value of a
    return !this.includes(a);
  }

// pass function chk and arr2 to be used as "this" in the chk function
  newArr = arr1.filter(chk, arr2);
  newArr = newArr.concat(arr2.filter(chk, arr1));
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
