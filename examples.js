console.log(true);
console.info("page loaded");
console.debug(5 - 2);
console.warn(10 / 2);
console.error("Hello " + "there");

var employed = false;
var age = 31 + 2;
var name = 'Nic "Matei"';
console.info("I'm employed", employed);
console.info(typeof employed);
console.warn("age", age, typeof age);
console.info("My name is", name, typeof name);

age = 35;
console.warn("age", age, typeof age);

age = false;
console.warn("age", age, typeof age);

var Destinations = ["Italy", "Greece", "Italy - Matera"];
console.debug(Destinations, typeof Destinations);

var person = {
  employed: true,
  age: 29,
};

function jsonwithFunctions() {
  console.log(typeof variablesExample);
  console.log(typeof document);
  console.log(typeof document.getElementById);

  var person = {
    age: 29,
    name: "Nick",
    learn: function () {
      console.info("I'm learning JS, I love it!");
    },
    play: function () {
      console.info("I'm playing. My name is ", this.name);
    },
  };
  person.learn();
  person.play();
  var action = "play"; // learn
  console.log(typeof person[action]);
}

//variablesExample()

//jsonwithFunctions();
