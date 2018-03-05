var number=5;
var counter=0;

while(number<=50) {
    if(number==50) {
        break;
    }
    number +=5;
    counter++;
}

console.log('Number ' + number + ' iteration ' + counter);