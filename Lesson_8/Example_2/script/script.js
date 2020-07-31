let days=0;
let km=10;
while(true){
    days++;
    km=Math.round(km*1.1);
      if(km>=50){
        break;
    }
}
Math.round(km);
console.log(km+" киллометров за "+days+" дней");
document.write(km+" киллометров за "+days+" дней");