
//sum of n odd numbers
function sum(n){
  if(n===1) return 1;
  if(n%2!==0){
    return n+sum(n-1)
  }else{
    return sum(n-1)
  }
}


//sum of natural n numbers
function sum(n){
  if(n===1) return 1;
  return n+sum(n-1)
}


//sum of even natural numbers
function sum(n){
  if(n===1) return 0;
  if(n%2===0){
    return n+sum(n-1)
  }else{
    return sum(n-1)
  }
}

