let name = "Tushar Chaudhary"
console.log(name);   // Output of this code is Tushar Chaudhary

{
  let name = "Tech"
  console.log(name);  // Output of code is Tech either variable name is same i.e, "name", because we can define variable again and again so it is neglect previous variable value automatically.
}
console.log(name);  // Output is Tushar Chaudhary because this is not in a block of scope so that's why it contains a previous value.

///////////////////////////////

const num = 16;
console.log(num);

{
  const num = 17;
  console.log(num);
}

console.log(num);

/////////////////////////////

var uname = "Tushar";
console.log(uname);

{
  var uname = "Neha"
  console.log(uname);
}

console.log(uname);

////////////////////////////

let value = 44;
console.log(value);

{
  const value = 10;
  console.log(value);
}

console.log(value);



Happy Ending !
