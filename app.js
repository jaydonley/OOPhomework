let dog = {
    name: "benny",
    numLegs: 4
  };

  //----------------------
  let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.name, dog.numLegs);

  //------------------------------

  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
      return "This dog has "+ dog.numLegs + " legs."
    }
  };
  
  dog.sayLegs();

  //------------------------------------

  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

  //--------------------------------

  function Dog(){
    this.name = "Sparky";
    this.color = "Black and White";
    this.numLegs = 4
  }

  //---------------------------------

  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  
  let hound = new Dog();

  //-----------------------------

  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse ={
    numBedrooms: 4
  };
  
  myHouse instanceof House;

  //-----------------------------------

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for (let property in Bird){
    if(canary.hasOwnProperty(property)){
      own.Props.push(property);
    }
  }
  console.log(ownProps);

  //--------------------------------

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");