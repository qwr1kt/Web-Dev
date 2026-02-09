alert("I'm JavaScript!");

let admin, name;
name = "John";
admin = name;
alert( admin );

let ourPlanetName = "Earth";
let currentUserName = "John";

const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);

let name = "Ilya";
// the expression is a number 1
alert( `hello ${1}` ); // hello 1
// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name
// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya

let name = prompt("What is your name?", "");
alert(name);

let a = 1, b = 1;
alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value
alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

a = 4 (multiplied by 2)
x = 5 (calculated as 1 + 4)
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);
alert(a + b); // 12

5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false

if ("0") {
  alert( 'Hello' );
}

    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

The answer is 2, that’s the first truthy value.

alert( null || 2 || undefined );

alert( alert(1) || 2 || alert(3) );
The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3).

The answer: null, because it’s the first falsy value from the list.
alert(1 && null && 2);

The answer: 1.

let i = 3;

while (i) {
  alert( i-- );
}

From 1 to 4

let i = 0;
while (++i < 5) alert( i );

From 1 to 5

let i = 0;
while (i++ < 5) alert( i );

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

No difference!

In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
