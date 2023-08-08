// Implementing a ListNode class 
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Implementing a LinkedList 
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // Adding an element at the end
    addLast(element) {
        // creating a new node
        let node = new ListNode(element)
        // to store current node
        let current

        // Checking if list is Empty 
        if (this.head === null)
            this.head = node
        else {
            current = this.head

            // Iterating to the end of the list
            while (current.next) {
                current = current.next
            }

            // Adding node
            current.next = node;

        }
        this.size++
    }

    // Inserting an element at the given index 
    insertAt(element, index) {
        // Checking if index is not vaild
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.")
        else {
            // creating a new node
            let node = new ListNode(element)
            // to store current and previous  node
            let current, previous

            if (index === 0) {
                node.next = this.head
                this.head = node
            } else {
                current = this.head

                // Iterating over the list to find the position
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }

                // Adding node
                node.next = current
                previous.next = node

                this.size++
            }

        }
    }

    // Removing an element from the given index 
    removeFrom(index) {
        // Checking if index is not vaild
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            // to store current and previous  node
            let previous,
                current = this.head

            // Iterating over the list to find the position
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }

            // Removing node
            previous.next = current.next

            this.size--
        }

    }

    // Displaying list nodes data
    display() {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            console.log(current.data)
            current = current.next
        }
    }

}

// Testing our LinkedList
const list = new LinkedList()
list.addLast(4)
list.addLast(5)
list.addLast(6)
list.insertAt(7, 2)
list.removeFrom(2)
list.display()
