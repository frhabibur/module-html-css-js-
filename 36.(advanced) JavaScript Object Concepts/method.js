const student = {
    id: 101,
    saving: 5000,
    name: 'abdul kalam',
    mejor: 'Economics',
    subjects: ['bangla', 'english', 'physic'],
    bestFriend: {
        name: 'habibur',
        major: 'mathemathic',
        age: 19
    },
    treat: function (cost) {
        this.saving = this.saving - cost;
        return this.saving
    },
}
console.log(student)
const remainig = student.treat(3000)
const remainig2 = student.treat(1000)
console.log(remainig)
console.log(remainig2)
console.log(student)