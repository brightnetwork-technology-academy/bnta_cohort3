counter = 0;

while (counter < 10) {
    counter++;
    console.log(counter);
}

while (true) {
    rand = Math.random();
    console.log(rand);
    if (rand > 0.8){
        break;
    }
}