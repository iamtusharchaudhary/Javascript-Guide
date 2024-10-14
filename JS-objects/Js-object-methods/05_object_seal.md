```

const obj1 = {
    name: "Tushar Chaudhary",
    hobby: "",
    age: 20
}
const obj2 = Object.seal(obj1)

obj1.hobby = "dancing",     // we can change the value easily 
delete obj1.age             // we cannot delete the object because of seal

console.log(obj2);


```
