let i=0;
let max=0;
let number=0;
while(i<=10) {
    i++;
    number = prompt("Введите число");
    if(number>max){
        max=number; 
    }
}
console.log(max);
