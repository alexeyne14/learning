// function is_simple(value) {
//     for(let i = 2; i< value; i++){
//     if(value % i == 0){
//         return false;
//     }   
//     }

//     return true;
// }

// function print_simple_numbers(x, y) {
//     for(let i = 1; i<= y; i++){
//         if (is_simple(i)) {
//             console.log(i + " is simple number.");
//         }
//     }
// }

// print_simple_numbers(3,99);

// let number = 123;
// let a = number % 10;
// number/=10;
// number = number.toFixed(0)
// console.log(number);
// let b = number%10;
// number/=10;
// number = number.toFixed(0);
// let c = number%10;

// console.log(a + " " + b + " " + c)






// let number1 = 123;
// let number2 = 321;

// function razbivka(first, second) {
//     let a = first % 10;               
//     first/=10;
//     first = first.toFixed(0);
//     let b = first%10;
//     let sumFirst = a + b;       пример от вадика
    
//     second = second % 100;
//     let x = second % 10;
//     second = second.toFixed(0);
//     let y = second % 10;
//     let sumSecond = y + x;

//     return console.log(sumFirst + sumSecond);
//   }

// razbivka(number1, number2);






// let a=parseInt(prompt("Введите первое число"));
// let b=parseInt(prompt("Введите второе число"));
// function sum(a, b){
//     result=a+b;
//     if(result>2000){
//     alert(result);
//     }else{
//         alert("Нужно больше 2000")
//     }
// }
// sum(a, b);


function getSum(number){
  if(number < 1) {
    return 0;
  }
  return number % 10 + getSum(parseInt(number / 10));
}


console.log(getSum(1234567));