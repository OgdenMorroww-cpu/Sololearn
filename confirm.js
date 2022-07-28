// let results = confirm("Do you really want to leave this page.");

// if (results == true) {
//   alert("Thanks for visiting");
// } else {
//   alert("Thanks for staying with us");
// }

const test = (number) => {
  while (number < 5) {
    number++;
  }
  return number;
};
alert(`Test:`, test(2));

const test_add = (a, b) => {
  if (a > b) {
    return a * b;
  } else {
    return b / a;
  }
};

alert(test_add(5, 15));
