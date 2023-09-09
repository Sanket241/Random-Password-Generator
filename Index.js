const passwordBox =document.getElementById('password')
const length="12";

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const num="0123456789"
const specialSymbol="~!@#$%^&*()_+|";

const allChars = upperCase + lowerCase + num + specialSymbol

function createPassword(){
    let password="";
    while(length >password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value=password;
}
function copy(){
    passwordBox.Select();
    document.execCommand("copy");
   
}