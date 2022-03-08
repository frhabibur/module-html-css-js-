function BigFriend(friends) {
    if (Array.isArray(friends) == false) {
        return ('please give me an array')
    }
    let bigFriend = []

    for (const friend of friends) {
        if (friend.length > bigFriend.length) {

            bigFriend = friend
        }
    }
    return bigFriend
}

const friends = ['ratul', 'razzak', 'abdul Khalek', 'Rahihan', 'fulcopy', 'lal miaaaaaaa', 'takla sultann']
const myBuddy = BigFriend("4432421")
// console.log(myBuddy)


const animal = ['tiger', 'lion', 'birds', 'cow'];

if (animal.indexOf('cow') != -1) {
    // console.log('cow is exsist')
}

if (animal.includes('cow')) {
    console.log('cow is existed')
}