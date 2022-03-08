const kibrea = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,
    treatDay: function (expence) {
        this.money = this.money - expence;
        console.log(this)
        return this.money
    }
}

const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000
}

kibrea.treatDay(1000)
const heroTreatDey = kibrea.treatDay.bind(heroBalam)
heroTreatDey(500)