let count1 = 0;
let count2 = 0;

do {
    console.log("Loop Do..While :", count1);
    count1++;
    if (count1 === 9) {
        break;
    }
} while (count1 < 10);

while (count2 < 10) {
    console.log("Loop While : ", count2);
    count2++;    
    if (count2 === 5) {
        break;
    }
}