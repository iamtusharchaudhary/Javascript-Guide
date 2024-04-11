# OOPs ( Object Oriented Programming )

 Object-Oriented Programming (OOP) is essentially a programming paradigm that organises code into reusable, self-contained objects. OOPs is very useful on large scale projects, as it facilitates code modularity and organization.

 # JS and ES6 Module
```
 class Application {
    // gobal variable type
    name = "Tushar Chaudhary";
    //method

    constructor() {
        console.log("Hello Devloper");
    }
    hello() {
        return "Hello In Method of Application";
    }
    // hello();
}

let app = new Application;
console.log(app);
console.log(app.name);
console.log(app.hello());
```

> A module is a self-contained unit of code that can be reused and imported into other programs. Modules help to organize code and avoid naming conflicts by keeping variables and functions local to the module.
