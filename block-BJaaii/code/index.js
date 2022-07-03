// 1. Create a class name `Stack` with the following data and methods. Also implement a `length` getter method.

// Data:

// - `stack`

// Methods:

// - `push`: will accept a value and add to the stack. Stack adds data at the end
// - `pop`: will delete the last element (max index) of the stack
// - `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the last element (last index)
// - `reverse`: will reverse all the elements of the stack and return the reversed stack
// - `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
// - `displayStack`: returns all the data in stack in string format

// Getter

// - `length`: returns the current length of the stack.


class Stack{
    constructor(stack){
        this.stack = stack;
    }
    push(value){
        this.stack += value;
    }
    pop(){
        this.stack - 1;
    }
    peek(index = 1){

    }
    reverse(){
        return this.stack.reverse();
    }
    isEmpty(){
        return this.stack <= 1;
    }
    displayStack(){
        return this.stack;
    }

    get(){

    }

}

let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true