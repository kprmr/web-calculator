//This will select the empty div which will contains question expression
const question = document.querySelector(".question");

//This will select the empty div which will contains answer expression
const answer = document.querySelector(".answer");

//This will select all the buttons on the keypad
const buttons = document.querySelectorAll("button");

//This will select the clear button
const clear = document.querySelector(".clear");

//This is the expression which will be evaluated
let expression = "";

//This function will computer the expression
function result(exp) {
    if(exp.includes("*")) {
        let newExp = exp.split("*");
        res = newExp[0]*newExp[1];
        return res;
    }
    else if(exp.includes("/")) {
        let newExp = exp.split("/");
        res = newExp[0]/newExp[1];
        return res;
    }
    else if(exp.includes("-")) {
        let newExp = exp.split("-");
        res = newExp[0]-newExp[1];
        return res;
    }
    else if(exp.includes("+")) {
        let newExp = exp.split("+");
        num1 = Number(newExp[0]);
        num2 = Number(newExp[1]);
        res = num1 + num2;
        return res;
    }
}

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
            ans = result(expression)
            answer.innerHTML = `= ${ans}`
        }
        else {
            expression = expression+thing;
            question.innerHTML = expression
        }
    })
})
