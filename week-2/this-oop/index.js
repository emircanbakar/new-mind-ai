// console.log(this);

// EcmaScript6
/* class Animal {
  constructor() {
    console.log('animal class', this);
    // const name = 'Box';
    this.name = 'Box';
  }

  setName() {
    this.name = 'Box';
  }

  getName() {
    console.log('my name is: ', this.name);
  }
}

const animal = new Animal();
animal.setName();
console.log(animal.getName()); */


/* function getName() {
  console.log(this);
  this.name = 'caglayan';
}

const user = new getName(); // instance
console.log(user.name); */

/* const userObj = {
  name: 'kaan',
  getName: function() {
    console.log(this.name);
  },
  getNameArrow: () => {
    console.log(this.name)
  }
};

userObj.getName();
userObj.getNameArrow(); */

class Animal {
  #secretKey;
  constructor(name) {
    this.name = name;
    this.keyNumber = 'e1231';
  }

  getName() {
    console.log('my name is: ', this.name);
  }

  setName() {
    this.name = 'Fox';
  }
}

const animal = new Animal('Box');
const animal2 = new Animal('Duffy');
animal.setName();
animal.getName();

animal2.getName();

class Dog extends Animal { // inheritance
  constructor(name, age) {
    super(name) // call extended class constructor
    this.age = age;
  }
  bark() {
    console.log('hrrr, my age is', this.age);
  }
}

const dog1 = new Dog('puppy', 3);
console.log(dog1)
dog1.getName();
dog1.bark();
// animal.bark();