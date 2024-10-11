
```
// In this both of the objects are merged together...

const obj1 = {
    name: "Tushar",
    age: 20,
    city: "Ghaziabad",
    isLoggedIn: false
}

const obj2 = {
    elegibility: "Web Developer",
    anotherCity: "Noida",
    number: 7
}

const obj3 = Object.assign({}, obj1 , obj2)

console.log(obj3);

```
