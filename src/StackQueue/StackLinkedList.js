//Stacks = LIFO

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    // See top element/node
    peek() {
        return this.top.value
    }

    // add node to top of stack
    push(value){
        const newNode = new Node(value)

        if (this.isEmpty()){
            this.bottom = this.top;
            this.top = newNode;
            newNode.next = this.bottom;
        } else {
            newNode.next = this.top;
            this.bottom = this.top.next;
            this.top = newNode;
        }

        this.length++

    }

    // remove from top of stack
    pop(){
        this.top = this.top.next;
        this.length--
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }
  }
  
  export const stackLinkedList = () => {
        const myStack = new Stack();

        console.log('stack linked list isEmpty')
        console.log(myStack.isEmpty())

        myStack.push('Discord')
        myStack.push('Udemy')
        myStack.push('gooooogle')

        console.log('stack linked list push')
        console.log(JSON.parse(JSON.stringify(myStack)))

        console.log('stack linked list peek')
        const value = myStack.peek()
        console.log(value)

        console.log('stack linked list pop')
        myStack.pop()
        console.log(myStack)

        console.log('stack linked list isEmpty')
        console.log(myStack.isEmpty())
  }
  
  
  
  
  //Discord
  //Udemy
  //google
  