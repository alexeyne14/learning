function is_simple(value) {
  for(let i = 2; i< value; i++){
  if(value % i == 0){
      return false;
  }   
  }

  return true;
}

function print_simple_numbers(x, y) {
  for(let i = 1; i<= y; i++){
      if (is_simple(i)) {
          console.log(i + " is simple number.");
      }
  }
}

print_simple_numbers(3,99);