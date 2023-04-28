// console.log('This runs as expected')

// let fantasyGod

// console.log(fantasyGod)
// fantasyGod = "The Raven Queen"
// there is zero or noting right now . declared but dont have a meaning. this is undefined. pice of data that means nothing. it's the absense of a data. valavles that are empty/ 0 means undefine.

// let nickname = ""
// console.log(nickname)
// this is going to be an empty line on the console
// everything that happens in the console will stayes in the console. it's like a safespace. to see a change you have to do it on the index or js.
// = is used to difine a thing in js. you use === to use it instade of = sing.

// Input: bill, tipPercentage 
function calculateTip(bill, tipPercentage) {
    let tip = bill * tipPercentage
    let total = bill + tip
    console.log(tip)
    let message = 'The tip on a $' + bill + ' food bill is $' + tip.toFixed(2) + ' for a total of $' + total.toFixed(2)

    return message

}
// Output : a message describing the bill and tip total.

console.log(calculateTip(13.00, 0.18))

let billmessage = calculateTip(45.00, 0.12)
console.log(billmessage)

let tip = 'Do not walk into the street with out looking two ways.'
console.log(tip)



// let userAge = 76
// let minDrinkingAge = 21
// let isDrinkingAge = userAge >= minDrinkingAge
// let isFriend = getFriendshipStatus() // either true or false

// if (isDrinkingAge && isFriend) {
//     console.log("Congratulations: You have been invited to our Autumn Bar Crawl!")
// } else {
//     console.log("Sorry, but you're either too young or we don't really know you.")
// }

// Mock function
function getFriendshipStatus() {
    return true // insert more logic here later
}

function getFriendshipStatus(userAge, minDrinkingAge, name) {
    let isDrinkingAge = userAge >= minDrinkingAge
    let isFriend = getFriendshipStatus(name) // either true or false
    let message1 = "Congratulations: You have been invited to our Autumn Bar Crawl!"
    let message2 = "Sorry, but you're either too young or we don't really know you."
        (isDrinkingAge && isFriend) ? console.log(message1) : console.log(message2)

    // if () {
    //     return "Congratulations: You have been invited to our Autumn Bar Crawl!"
    // }
    // return "Sorry, but you're either too young or we don't really know you."

}  // this message is diclarey but not runed 


console.log(getFriendshipStatus(76, 21, 'Bill potts'))


// function generateInvite(userAge, minDrinkingAge) {

//     let isDrinkingAge = userAge >= minDrinkingAge
//     let isFriend = getFriendshipStatus()
//     if (isDrinkingAge && isFriend)
//         let message = 'Congratulations: You have been invited to our Autumn Bar Crawl!' + 'Sorry, but you're either too young or we don't really know you.'

//     return message
// }


//     if (isDrinkingAge && isFriend)
//         console.log("Congratulations: You have been invited to our Autumn Bar Crawl!"

//             console.log("Sorry, but you're either too young or we don't really know you.")

// }

console.log(drinkingFrinds(76, 21))
