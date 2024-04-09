# JavaScript Conditional Statements

> if and else

> else if

> switch

# if statement

Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

## synatx:-
```
if(condition){

  //  block of code to be executed if the condition is true

}
```

# else statement

Use the else statement to specify a block of code to be executed if the condition is false.

## syntax:-
```
if(condition){

   //  block of code to be executed if the condition is true
   
}
else{

  //  block of code to be executed if the condition is false
  
}
```

# else if statement

Use the else if statement to specify a new condition if the first condition is false.

## syntax:-
```
if(condition){

   //  block of code to be executed if the condition is true
   
}
else if(condition){

   //  block of code to be executed if the first condition is false
   
}
else{

   //  block of code to be executed if the both condition is false
   
}
```

# switch statement

The switch statement is used to perform different actions based on different conditions.

## syntax
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
# Conditional Statements With Operators

> &

> |

> !
```
else{
    if(user[0]==userEmail & user[1]==userPass){
        res="Welcome";
    }
    else{
        res="Id Password Do Not Match";

    }
}
console.log(res);
```
