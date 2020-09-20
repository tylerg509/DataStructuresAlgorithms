//reference type

export const referenceTypes = () => {
    // objects are referece types in javascript 
    // objects are non primative types. Created by programmer

    console.log('advancedArrays reference types')
    var object1 = { value: 10};
    var object2 = object1;
    var object3 = { value: 10 };

    console.log(object1 === object2)

    console.log(object1 === object3)

    console.log(object1.value)
    console.log(object2.value)
    console.log(object3.value)

    console.log([] === [])
}

//context

export const context = (window) => {
    // scope is created when there are curly brackerts = for ex. when a function is created. Not the same as context

    const cl = ContextClass = new ContextClass();
    console.log(cl._this)

    const pl = new Player('tyler', 'human');
    pl.introduce();

    console.log(window)

    const wiz1 = new Wizard('shelly', 'healer')
    const wiz2 = new Wizard('shawn', 'dark magic')
    wiz1.introduce()
    wiz1.play()

    wiz2.introduce()
    wiz2.play()
}

export class ContextClass {
    // this is the context of the object it is inside of
    constructor(){
        this.title = 'advancedArrays context'
        this._this = this
    }
}


//instantiation

export class Player {
    constructor(name, type ) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`hi i am ${this.name} i am ${this.type}`)
    }
}

class Wizard extends Player {
    // eslint-disable-next-line no-useless-constructor
    constructor(name, type) {
        super(name, type) // get access to player
    }

    play() {
        console.log(`weee i am a ${this.type}`)
    }
}
