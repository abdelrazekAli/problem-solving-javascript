// Implement a Stack using an array

// create a Stack class
class Stack {
    constructor() {
        this.data = []
        this.top = 0
    }

    // insert an element at the top of stack
    push(element) {
        this.data[this.top] = element
        this.top++
    }

    // check if the stack is empty
    isEmpty() {
        return this.top === 0
    }

    // delete an element from the top of the stack
    pop() {
        if (this.isEmpty()) return console.log("Stack is empty")
        this.data.pop()
        this.top--
    }

    // get the top element of the stack
    peek() {
        return this.data[this.top - 1];
    }

    // print the elements of the stack
    print() {
        for (let i = 0; i <= this.top - 1; i++) {
            console.log(this.data[i])
        }
    }

}

let stack = new Stack()

stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
stack.print()