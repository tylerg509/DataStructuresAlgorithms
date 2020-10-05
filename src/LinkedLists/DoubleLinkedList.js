// 10 -> 5 -> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(valueToAppend) {
        const valueToAdd = new Node(valueToAppend)
        valueToAdd.previous = this.tail
        this.tail.next = valueToAdd;
        this.tail = valueToAdd;
        this.length++
        return this
    }

    prepend(valueToPrepend) {
        const valueToAdd = new Node(valueToPrepend)
        this.head.previous = valueToAdd
        valueToAdd.next = this.head;
        this.head = valueToAdd
        this.length++
        return this
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    traverseToIndex(index) { //O(n)
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    reverseTraverseToIndex(index) { //O(n)
        let counter = this.length - 1;
        let currentNode = this.tail;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter--
        }
        return currentNode;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.printList()
        
    }

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index-1)

        const follower = leader.next;

        leader.next = newNode;

        newNode.previous = leader;

        newNode.next = follower;

        follower.previous = newNode;

        this.length++;

        return this.printList()
    }

    remove(index) {

        let nodeToReplace = this.traverseToIndex(index-1)
        console.log(nodeToReplace)
        nodeToReplace.next = nodeToReplace.next.next
        nodeToReplace.next.previous = nodeToReplace
        this.length--
        return this.printList()
    }
}

export const myDoubleLinkedList = (value) => {
    const myList = new DoubleLinkedList(value)
    console.log('DOUBLE LINKED LIST CLASS')
    console.log(myList)
    
    console.log('DOUBLE APPEND TO LIST')
    myList.append(5)
    console.log(myList)

    console.log('DOUBLE APPEND TO LIST')
    myList.append(16)
    console.log(myList)

    console.log('PREPEND TO LIST')
    myList.prepend(1)
    console.log(myList)

    myList.insert(2, 56)
    console.log('INSERT INTO LIST')
    console.log(myList)

    myList.remove(2)
    console.log('REMOVE FROM LIST')
    console.log(myList)

    console.log('REVERSE')
    console.log(myList.printList())
    console.log(myList.reverse())

}