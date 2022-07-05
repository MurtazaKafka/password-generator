const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let generateEl = document.getElementById("generate-el")
let passwordLength = 15


function ranChar() {
    let randomCharacter = Math.floor( (Math.random() * characters.length) )
    return characters[randomCharacter]
}

function ranNum() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i ++) {
        randomPassword += ranChar()
    }
    return randomPassword
}


function generate() {
    let firstPasswordEl = ""
    let secondPasswordEl = ""
    firstPasswordEl = ranNum()
    secondPasswordEl = ranNum()
    
    firstPassword.textContent = firstPasswordEl
    secondPassword.textContent = secondPasswordEl
}


/* 
* Password Generator
* Programmer: Murtaza
* To be continued...
*/