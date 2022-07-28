let sum = 0;

for (let index = 4; index < 8; index++) {
  if (index == 6) {
    continue;
  }
  sum += index;
}
console.log(`Sum: ${sum}`);

let x = 0;

while (x < 6) {
  x++;
}
console.log(`x-val: ${x}`);
