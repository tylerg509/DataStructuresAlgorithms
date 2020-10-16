// Queue = FIFO

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
  
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;

    }

    peek() {
        return this.first;
    }

    // add to bottom of queue
    enqueue(value) {
        try {
            const newNode = new Node(value);
            if ( this.first === null ) {
                this.first = newNode;
                this.last = newNode;
            } else {
                this.last.next = newNode;
                this.last = newNode;
            }
            this.length++

            return this
        } catch (err) {
            console.error(err)
        }
    }

    // remove from queue - move from front of list - whatever is first
    dequeue() {

        try {
            if ( !this.first ) {
                console.warn('There is nothing to dequeue')
                return null;
            } 

            if (this.first === this.last) {
                this.last = null;
            }

            this.first = this.first.next;
            this.length--
            return this;
            
        } catch (err) {
            console.error(err)
        }

        this.length--

    }
}

export const myQueue = () => {
    const myNewQueue = new Queue();
    myNewQueue.enqueue('Joy')
    myNewQueue.enqueue('Matt');
    myNewQueue.enqueue('Pavel')

    console.log('myQueue enqueue')
    console.log(JSON.parse(JSON.stringify(myNewQueue)))

    console.log('myQueue peek enqueue')
    console.log(JSON.parse(JSON.stringify(myNewQueue.peek())))

    console.log('myQueue denqueue')
    myNewQueue.dequeue()
    console.log(JSON.parse(JSON.stringify(myNewQueue)))
    myNewQueue.dequeue()
    myNewQueue.dequeue()
    myNewQueue.dequeue()
    console.log(myNewQueue)

}


// Joy
// Matt
// Pavel
// Samir