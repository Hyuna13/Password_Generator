let word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "*", "&"]

let limit = document.getElementById("limit")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")

let words = ""

function generate() {
    password()
}

function calculate() {
    for(let i=0; i<limit.value; i++){
        let random = Math.floor(Math.random() * word.length)
        words += word[random]
    }
}

function password() {
    if(limit.value > 13) {
        alert("should be less than 14")
    } else {
        calculate()
        password1.textContent = words
        words = "" 
        
        calculate()
        password2.textContent = words
        words = "" 
        
        calculate()
        password3.textContent = words
        words = "" 
        
        calculate()
        password4.textContent = words
        words = "" 
    }
}