class StudentCare {
    name;
    designation = 'Student Care';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildAroutien(student) {
        console.log(this.name, 'Build a routine for', student)
    }
}
class NettuneDev {
    name;
    designation = 'Student Care';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseAppa(version) {
        console.log(this.name, 'resease app virsion', version)
    }
}

const arif = new StudentCare('Arif', 'Gaibandha');
const arifRoutine = buildAroutien(arif);
console.log(arifRoutine)
console.log(arif)