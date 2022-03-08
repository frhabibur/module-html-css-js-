const names = ['aboul', 'babul', 'dabul', 'kabul', 'jabul', 'babul', 'dabul', 'jabul', 'babul']

function removeDuplicate(names) {
    let uniqueName = []
    // for (const singleName of names) {
    //     if (uniqueName.indexOf(singleName) == -1) {
    //         uniqueName.push(singleName)
    //     }
    // }
    for (i = 0; i < names.length; i++) {

        let singleName = names[i];
        if (uniqueName.indexOf(singleName) == -1) {
            uniqueName.push(singleName)
        }

    }
    return uniqueName
}
var orginalPerson = removeDuplicate(names);
console.log(orginalPerson)
