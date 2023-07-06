let sheepCount = +prompt("Nechta qo'y sanamoqchisiz???");
while(sheepCount == 0 || isNaN(sheepCount)){
    sheepCount = +prompt("Qo'ylarni sonini kiriting");
}
for(let i = 1; i <= sheepCount; i++){
    console.log(i + ". qo'y");
}