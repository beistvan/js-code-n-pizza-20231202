let number = 5;

if (number > 5) {
  console.log("A szám nagyobb, mint 5");
  number += 10;
  console.log(number);
} else if (number === 5) {
  console.log("A szám az 5, se nem kisebb, se nem nagyobb" +
             " mégis mit akartál...?");
} else {
  console.log("A szám kisebb, mint 5");
}


console.log("A program véget ért: " + number);
