const add_numbers = (a, b) => {
  return a + b;
};

let x = add_numbers(10, 45);
alert(`The return value is: ${x}`);

const birthYear = (birthyear) => {
  let age = 2022 - birthyear;
  alert(`You are ${age} years old`);
  return age;
};

console.log(birthYear(1998));
