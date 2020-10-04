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

}