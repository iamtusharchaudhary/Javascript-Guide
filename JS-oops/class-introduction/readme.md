# Class and Objects

<ul>
    <li><h3>Classes are user-defined data types that act as the blueprint for individual objects, attributes and methods.<h3/></li>
</ul>
<ul><li><h3>Objects are instances of a class created with specifically defined data. Objects can correspond to real-world objects or an abstract entity.</h3></li></ul> 


```
class Welcome{
    uname = "Tushar";
    uemail = "tushar@gmail.com";
    #upass = 123456;
    arr = ["html", 'css', 'javascript'];
    obj = { data1: "HTML 5", data2: "CSS 3", data4: 'jquery' };
    hello(title) {
        return (`${title} ${this.uname}`); 
    }
}
// console.log(uname);
const app = new Welcome;
console.log(app.uname);
console.log(app.uemail);
console.log(app.upass);
console.log(app.arr);
console.log(app.arr[0]);
console.log(app.obj);
console.log(app.obj.data1);
console.log(app.hello('Welcome to Function inside the class'));


////////////////////////////////////////////////////////////////////


// basic function
// function hello() {
//         return (`Welcome to Function Outside the class`);
        
// }
// console.log(hello());
```
