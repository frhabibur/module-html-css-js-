/* wood for per chair = 3cft
wood for per table = 5cft;
wood for per bed = 50cft */

function woodCalculator(chair, table, bed) {
    const WodPerChair = 3;
    const WoodPerTable = 5;
    const WoodPerBed = 50;
    let chairWood = chair * WodPerChair;
    let tableWood = table * WoodPerTable;
    let bedWood = bed * WoodPerBed;
    const totolWood = chairWood + tableWood + bedWood;
    return totolWood
}
var Quantity = woodCalculator(5, 2, 3)
console.log(Quantity)