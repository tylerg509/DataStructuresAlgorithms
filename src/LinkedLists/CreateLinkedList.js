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
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(valueToAppend) {
        const valueToAdd = new Node(valueToAppend)
        this.tail.next = valueToAdd;
        this.tail = valueToAdd;
        this.length = ++this.length
        return this
    }

    prepend(valueToPrepend) {
        const valueToAdd = new Node(valueToPrepend)
        valueToAdd.next = this.head;
        this.head = valueToAdd
        this.length = ++ this.length
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

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index-1)

        const holdingPointer = leader.next;

        leader.next = newNode;

        newNode.next = holdingPointer;

        this.length++;

        return this.printList()
    }

    remove(index) {

        let nodeToReplace = this.traverseToIndex(index-1)
        nodeToReplace.next = nodeToReplace.next.next
        this.length--
        return this.printList()
    }
}

export const myLinkedList = (value) => {
    const myList = new LinkedList(value)
    console.log('LINKED LIST CLASS')
    console.log(myList)
    console.log('APPEND TO LIST')
    myList.append(5)
    console.log(myList)

    console.log('APPEND TO LIST')
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

}