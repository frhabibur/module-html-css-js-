/* class Support {
    name;
    role = "support Web Dev";
    adress = "BD"
    constructor(name, address) {
        this.name = name;
        this.address = address

    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const habibur = new Support('habibur');
const salman = new Support('Salman', 'china');
const amir = new Support('Amir', 'Dubai');
const akshay = new Support('Akshay', "America");
const rohit = new Support('Rohit', 'jordan');
habibur.startSession()
salman.startSession()
console.log(habibur)
console.log(salman)
console.log(amir)
console.log(akshay)
console.log(rohit) */

class Student {
    name;
    designation = 'Student';
    address = 'Bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

}

const ratul = new Student('ratul', 'Gaibandha');
console.log(ratul)