const sayHello = (firstName) => {
  alert(`Hey your first name is: ${firstName}`);
};

sayHello("OgdenMorroww");
sayHello("Mikhail");
sayHello("Dustin");

const wifeStuffs = (wifeName, wifeAge, wifeRace, wifeContinents) => {
  alert(
    `Name: ${wifeName}, Age: ${wifeAge}, Race: ${wifeRace}, Continet: ${wifeContinents}`
  );
};

wifeStuffs("Nancy", 22, "Negroid", "Africa");
wifeStuffs("Taylor Swift", 31, "Caucasian", "Europe");

const getAge = (name, age) => {
  alert(`Your name is: ${name} and you are: ${age} years old`);
};

getAge("Kyle", 35);
getAge("Millie Bobby Brown", 21);
getAge("Shedrack Abel", 23);
getAge("Elon Musk", 50);

const compare_num = (x, y) => {
  if (x < y) {
    alert(`X value: ${x}`);
  } else {
    alert(`Y value: ${y}`);
  }
};

compare_num(5, 8);
