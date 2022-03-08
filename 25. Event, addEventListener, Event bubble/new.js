// /////////problem-1 ana to vori///////////////
function anaToVori(ana) {
    if (typeof (ana) != 'number') {
        return 'please give me a number';
    }
    else if (ana <= 0) {
        return 'please give me number greter than 0';
    }
    // calculation
    const vori = ana / 16;
    return vori;
}
var ana = anaToVori(32);
console.log(ana);


//////////// problem -2 pada cost////////////////////////////// 

function pandaCost(sigaraQuantity, samusaQuantity, jilabiQuantity) {
    if (typeof sigaraQuantity != 'number' || typeof samusaQuantity != 'number' || typeof jilabiQuantity != 'number') {
        return 'please give me a number';
    }
    else if (sigaraQuantity <= 0 || samusaQuantity <= 0 || jilabiQuantity <= 0) {
        return 'please give me number greter than 0';
    }
    // calculation

    const totalSingaraPrice = sigaraQuantity * 5;
    const totalSamusaPrice = samusaQuantity * 7;
    const totalJilabiPrice = jilabiQuantity * 15;
    const totalPrice = totalSingaraPrice + totalSamusaPrice + totalJilabiPrice;
    return totalPrice;
}
var totalQuantity = pandaCost(1, 2, 2);
console.log(totalQuantity);


/////////////////////// problem -3 picnic Budget///////////////////


function picnicBudget(persons) {
    let totalCost;
    if (typeof persons != 'number') {
        return 'please give me a number'
    }
    else if (persons <= 0) {
        return 'please give me number greter than 0'
    }
    // calculations

    else if (persons <= 100) {
        totalCost = persons * 5000;

    }
    else if (persons <= 200) {
        const costIn100 = 100 * 5000;
        const restCost = (persons - 100) * 4000;
        totalCost = costIn100 + restCost;

    }
    else {
        const costIn100 = 100 * 5000;
        const costIn200 = (200 - 100) * 4000;
        const restCost = (persons - 200) * 3000;
        totalCost = costIn100 + costIn200 + restCost;

    }
    return totalCost;
}
let getTotalCost = picnicBudget(203);
console.log(getTotalCost);


// //////////////problem-4 odd Friend/////////////////////



function oddFriend(friends) {
    let oddFriend = '';
    for (const friend of friends) {
        if (friend.length % 2 != 0) {
            oddFriend = friend;
        }

    }
    return oddFriend;

}

const friends = ['Raihan', 'Shagor', 'dulu mia', 'Habibur mia', 'Afjol syek', 'Rashed mia']
var allFriends = oddFriend(friends);
console.log(allFriends);