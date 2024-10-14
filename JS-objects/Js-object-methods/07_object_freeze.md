```

const obj1 = {
    name: "Tushar",
    age: 20,
    city: "Jaipur"
}

obj1.name = "Tushar Chaudhary"  // This is valid because it should be declared before freeze

Object.freeze(obj1)

obj1.city = "Delhi"            // This is not valid because it should be declared after freeze
obj1.name = "Rajat"            // This is not valid because it should be declared after freeze

console.log(obj1);


```
