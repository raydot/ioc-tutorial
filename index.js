// FIRST VERSION, WITH DEPENDENCIES

function Wheels() {
    this.action = () => log("Wheels are spinning.")
    log("Made some wheels")
}

function Pistons() {
    this.action = () => log("Pistons are firing")
    log("Made some pistons")
}

function Engine() {
    this.pistons = new Pistons()
    this.action = () => {
        this.pistons.action()
        log("Engine is roaring")
    }
    log("Made an engine")
}

function Car() {
    this.wheels = new Wheels()
    this.engine = new Engine()
    this.action = () => {
        this.wheels.action()
        this.engine.action()
        log("Car is driving")
    }
    log("Made a car.")
}

var car = new Car()
car.action

// SECOND VERSION, DEPENDENCIES PASSED TO CONSTRUCTOR FUNCTIONS
function TestPistons() {
    this.action = () => log("The test pistons are doing...nothing.")
    log("Made some test pistons.")
}

function Wheels() {
    this.action = () => log("Wheels are spinning.")
    log("Made some wheels")
}

function Pistons() {
    this.action = () => log("Pistons are firing")
    log("Made some pistons")
}

function Engine(pistons) {
    this.pistons = pistons
    this.action = () => {
        this.pistons.action()
        log("Engine is roaring")
    }
    log("Made an engine")
}

function Car(wheels, engine) {
    this.wheels = wheels
    this.engine = engine
    this.action = () => {
        this.wheels.action()
        this.engine.action()
        log("Car is driving")
    }
    log("Made a car.")
}

var pistons = new Pistons()
var testPistons = new TestPistons()
var wheels = new Wheels()
var engine = new Engine(pistons)
var testEngine = new Engine(testPistons)
var car = new Car(wheels, engine)
car.action()
testEngine.action()

// My own little stupid logging function.
// Interesting problem: how to make "log" available to "this?"
function log(text) {
    console.log(text)
}
