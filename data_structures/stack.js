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
        this.top--
        return this.data.pop()
    }

    // get the top element of the stack
    peek() {
        return this.data[this.top - 1];
    }

    // reverse stack elements
    reverse() {
        let tempStack = new Stack()
        while (!this.isEmpty()) {
            tempStack.push(this.pop())
        }
        return tempStack
    }

    // print the elements of the stack
    print() {
        for (let i = 0; i <= this.top - 1; i++) {
            console.log(this.data[i])
        }
    }

}


let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.reverse().print()
module.exports = Stack