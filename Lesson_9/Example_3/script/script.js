let number1 = 123;
let number2 = 321;

function razbivka(first, second) {
    let a = first % 10;
    first/=10;
    first = first.toFixed(0);
    let b = first%10;
    let sumFirst = a + b;
    
    second = second % 100;
    let x = second % 10;
    second = second.toFixed(0);
    let y = second % 10;
    let sumSecond = y + x;

    return console.log(sumFirst + sumSecond);
  }

razbivka(number1, number2);

