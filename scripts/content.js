console.log('✈️ AutoUMS in action...');

let loginField = document.querySelector(".login-field")
let termsAgree = document.querySelector(".login-section");


let userNameField = loginField.children[1].children[1];
let passwordField = loginField.children[2].children[1];
let loginBtn = loginField.children[4].firstChild;
let termsAgreeBtn = termsAgree.children[2].firstChild


userNameField.setAttribute("value", "12213701");
passwordField.setAttribute("value", "J4&2ko@0");


function loginFn(){
    termsAgreeBtn.click();
    loginBtn.click();
}
// timeout to prevent any issues
setTimeout(loginFn ,1000);  
