const base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 10;

for (i = 0; i < base.length; i++) {
  console.log(`Você escolheu a tabuada do ${num}`);
  console.log(`${num} x ${base[i]} = ${num * base[i]}`);
}
