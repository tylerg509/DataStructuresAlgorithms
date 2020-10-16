//Stacks = LIFO


class Stack {
    constructor(){
        this.stackArray = []
    }
    // See top element/node
    peek() {
        return this.stackArray[0]
    }

    // add node to top of stack
    push(value){
        this.stackArray=[...this.stackArray, value]

    }

    // remove from top of stack
    pop(){
        this.stackArray.pop();
    }

    isEmpty() {
        return this.stackArray.length === 0 ? true : false;
    }
}
  
  export const stackArray = () => {
        const myStack = new Stack();

        console.log('stack array isEmpty')
        console.log(myStack.isEmpty())

        myStack.push('Discord')
        myStack.push('Udemy')
        myStack.push('gooooogle')

        console.log('stack array push')
        console.log(JSON.parse(JSON.stringify(myStack)))

        console.log('stack array peek')
        const value = myStack.peek()
        console.log(value)

        console.log('stack array pop')
        myStack.pop()
        console.log(JSON.parse(JSON.stringify(myStack)))

        console.log('stack array isEmpty')
        console.log(myStack.isEmpty())

        console.log('stack array remove all')
        myStack.pop()
        myStack.pop()
        console.log(myStack)

        console.log('stack array isEmpty')
        console.log(myStack.isEmpty())
  }
  
  
  
  
  //Discord
  //Udemy
  //google
  