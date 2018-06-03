{
  const sayNiceMiss = text => text.replace("Asia", "Miss Joanna");

  console.log(sayNiceMiss("Asia is learnig functional programming"));


  const sayNiceMister = text => text.replace("Cat", "Mister Dog");

  console.log(sayNiceMister("Cat is drinking"));
}
// const newWay = (original, replacement) => {
//   return function(source) {
//     return source.replace(original, replacement);
//   };
// };

{
  const newWay = (original, replacement) => source => source.replace(original, replacement);

  //const sayNiceMiss = newWay("Asia", "Miss Joan");
  //console.log(sayNiceMiss("Asia is learnig functional programming"));
  console.log(newWay("Asia", "Miss Joann")("Asia is learnig functional programming"));

  const sayNiceMister = newWay("Cat", "Mister Lion");
  console.log(sayNiceMister("Cat is drinking"))
}

{
  const countdown = value => {
    if(value > 0) {
      console.log(value);
      return countdown(value-1); //recursive function
    } else {
      return value;
    }
  };
  countdown(10);
}

{
  function greet(greeting, name) {
    return (`${greeting}, ${name}`);
  }

  console.log(greet("Hello", "Peppa"));
  console.log(greet("Hello", "George"));

  function greetHello(name) {
    return (`Hello, ${name}`);
  }
  console.log(greetHello("Emilka"));
  console.log(greetHello("Tomek"));

  //with curry function
  function greetCurried(greeting) {
    return function(name) {
      // if ((typeof(greeting)) !== "string") {
      //   return ('Bad!');
      // } else if (typeof(name) !== "string") {
      //   return (greeting);
      // }
      return (`${greeting}, ${name}`);
    }
  }
  const greetCurriedHello = greetCurried('Hello');
  console.log(greetCurriedHello('Horacy'));

  //the same as:
  const greetCurriedES6 = greeting => name => `${greeting}, ${name}`;
  console.log(greetCurriedES6('Hi')('You'));

  const greetDeeplyCurried = greeting => separator => emphasis => name => {
    return greeting + separator + name + emphasis;
  }
  const greetAwkwardly = greetDeeplyCurried("Hello")("... ")("?");
  console.log(greetAwkwardly("Cicero"));






}