const inputs = document.querySelectorAll('input')
const ERRORMESSAGE = document.querySelectorAll('p')
console.log(ERRORMESSAGE)

const namePT =  /^[A-Z][a-z]+$/
const usernamePT = /^[a-zA-z0-9]{5,25}$/
const passPT = /^[a-zA-Z0-9!\.@]{7,25}$/
const mailPT = /^([a-z0-9\.]{1,30})@([a-zA-Z]{1,30})(\.[a-z]{2,15})(\.[a-z]{2,15})?$/
const inputPatterns = [namePT, namePT, usernamePT, mailPT, passPT]
const phonePT = /^[0]0-9 /

console.log()



function isValid () {
    for (let i = 0; i< inputs.length; i++) {
        inputs[i].addEventListener('keyup', (e) => {
            if (inputPatterns[i].test(e.target.value) === true) {
                inputs[i].style.border = '3px solid green'
                console.log(inputPatterns[i].style)
                ERRORMESSAGE[i].style.display = 'none'
            } else {
                ERRORMESSAGE[i].style.color = 'orange'
                ERRORMESSAGE[i].style.display = 'block'
                inputs[i].style.border = '3px solid orange'
            }
        })
        console.log(inputs[i])
        }
}

isValid()

