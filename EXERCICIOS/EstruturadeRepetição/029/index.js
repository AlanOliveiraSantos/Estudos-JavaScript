par = 0
while (par < 100){
    par += 2;
    console.log(par)
}
// OU

let i = 1;

do {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++
} while (i <= 100);