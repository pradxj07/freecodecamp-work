function smallestCommons(arr) {

  // function to calculate greatest common divisor of the two numbers
  var GCD = function (a,b) {
    var min = a<b?a:b;
    var max = a>b?a:b;
    
    // keep find gcd with remainder until remainer becomes 0 or max%min becomes 1
    if (max%min === 0) {
      return min;
    } else if(max%min === 1) {
      return 1;    
    } else 
      return GCD(max%min,min);      
  };
  
  var min = arr[0]<arr[1]?arr[0]:arr[1];
  var max = arr[0]>arr[1]?arr[0]:arr[1];
    
  var lcm = 1;
  //lcm of two numbers = product of the two numbers / greatest common divisor of the two numbers
  for(var j=min;j<=max;j++) {
    lcm = (lcm*j)/GCD(lcm,j);
  }
           
  return lcm;
}


smallestCommons([1,13]);
