
function bouncer(arr) {
  // filter out falsy values (i.e. blanks, undefined, nan, etc.)
  return arr.filter(function(val) {
    return Boolean(val);
  }); 
    
} 

bouncer([7, "ate", "", false, 9, 0/0, 55, "abc", "a"*undefined]);
