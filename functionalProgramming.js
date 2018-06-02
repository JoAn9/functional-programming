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

  const sayNiceMiss = newWay("Asia", "Miss Joan");
  console.log(sayNiceMiss("Asia is learnig functional programming"));

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