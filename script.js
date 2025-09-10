//This will select the empty div which will contains question expression
const question = document.querySelector(".question");

//This will select the empty div which will contains answer expression
const answer = document.querySelector(".answer");

//This will select all the buttons on the keypad
const buttons = document.querySelectorAll("button");

//This will select the clear button
const clear = document.querySelector(".clear");

// This will clear everything if clear is registered
// clear.addEventListener('click', () => {
//     question.innerHTML = "";
//     answer.innerHTML = "";
// })

//This is the expression which will be evaluated
let expression = "";

//Register click event
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let thing = e.target.innerHTML
        console.log(thing)
        if (thing == "C") {
            question.innerHTML = "";
            answer.innerHTML = "";
            expression = ""
        }
        else if (thing == "=") {
            answer.innerHTML = `= ${expression}`
        }
        else {
            expression = expression+thing;
            question.innerHTML = expression
        }
    })
})
