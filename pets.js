// Mock function
function getFriendshipStatus() {
    return true // insert more logic here later
}

function generateInvite(userAge, minDrinkingAge, name) {
    let isDrinkingAge = userAge >= minDrinkingAge;
    let isFriend = getFriendshipStatus(name) // either true or false


    if (isDrinkingAge && isFriend) {
        return "Congratulations: You have been invited to our Autumn Bar Crawl!"
    }
    return "Sorry, but you're either too young or we don't really know you."

}  // this message is diclarey but not runed 


console.log(generateInvite(76, 21, 'Bill potts'))
