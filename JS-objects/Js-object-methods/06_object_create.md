```

const obj1 = {
    name: "Tushar",
    age: 20,
    sayHello: function(){
        console.log(`Hi my name is ${this.name}`);   
    }
}

const obj2 = Object.create(obj1)

obj2.name = "Chaudhary Sahab"
obj2.age = 18
obj2.sayHello()
console.log(obj2);


```
