const openBtn = document.getElementById("open");
openBtn.addEventListener('click',openForm);

function openForm(){
    if(openBtn.textContent.includes('Open Form')){
        openBtn.textContent = 'Close Form';
    }
    else{
        openBtn.textContent = 'Open Form';
    }
    const dropdownMenu=document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('dropdown-menu-active');
}
//accessing the form
const form = document.querySelector('form');
const email=document.getElementById('mail');
const emailError=document.querySelector('#mail + .error');
const country=document.getElementById('country');
const countryError=document.querySelector('#country + .error');
const pin=document.getElementById('pin');
const pinError=document.querySelector('#pin + .error');
const pass=document.getElementById('pass');
const passError=document.querySelector('#pass + .error');
const conpass=document.getElementById('passcon');
const conpassError=document.querySelector('#passcon + .error');
email.addEventListener('input', handleEmail);
country.addEventListener('input', handleCountry);
pin.addEventListener('input', handlePin);
pass.addEventListener('input', handlePass);
conpass.addEventListener('input', handlePassCon);
conpass.addEventListener('input',()=>{
    pass.addEventListener('input',handlePassCon);
});
function handleEmail(){
    if(email.validity.valid){
        emailError.textContent="";
        emailError.classList.toggle('active',false);
    }
    else{
        emailError.classList.toggle('active',true);
        showEmailError();
    }
}

function showEmailError(){
    if(email.validity.typeMismatch){
        emailError.textContent = "Entered value must be an email";
    }
    if(email.validity.tooShort){
        emailError.textContent = `Email must be at least ${email.minLength} characters. You entered ${email.value.length}.`;
    }
    if(email.validity.valueMissing){
        emailError.textContent=`You need to enter an email`;
    }
}

function handleCountry(){
    if(country.validity.valid){
        countryError.textContent="";
        countryError.classList.toggle('active',false);
    }
    else{
        countryError.classList.toggle('active',true);
        showCountryError();
    }
}

function showCountryError(){
    if(country.validity.patternMismatch){
        countryError.textContent = "Entered value must be only alphabets";
    }
    if(country.validity.valueMissing){
        countryError.textContent=`You need to enter your country`;
    }
}
function handlePin(){
    if(pin.validity.valid){
        pinError.textContent="";
        pinError.classList.toggle('active',false);
    }
    else{
        pinError.classList.toggle('active',true);
        showPinError();
    }
}

function showPinError(){
    if(pin.validity.tooShort||pin.validity.tooLong){
        pinError.textContent = "PIN code must be a six digit number";
    }
    if(pin.validity.patternMismatch){
        pinError.textContent = "Entered value must be a number";
    }
    if(pin.validity.valueMissing){
        pinError.textContent=`You need to enter your PIN code.`;
    }
}
function handlePass(){
    if(pass.validity.valid){
        passError.textContent="";
        passError.classList.toggle('active',false);
    }
    else{
        passError.classList.toggle('active',true);
        showPassError();
    }
}

function showPassError(){
    if(pass.validity.tooShort){
        passError.textContent = `Password must be atleast 8 characters. You entered ${pass.value.length}.`;
    }
    if(pass.validity.patternMismatch){
        passError.textContent = "Password must contain  atleast one lowercase character, atleast one uppercase character, atleast one number and atleast one special character from @#$%!&_+=(). Password must not contain a whitespace. ";
    }
    if(pass.validity.valueMissing){
        passError.textContent=`You need to enter your password.`;
    }
}

function handlePassCon(){
    if(pass.value!=conpass.value){
        conpassError.textContent="Passwords do not match";
        conpassError.classList.toggle('active',true);
    }
    else if(conpass.validity.valueMissing){
        conpassError.textContent="You need to confirm your password";
        conpassError.classList.toggle('active',true);
    }
    else{
        conpassError.textContent="";
        conpassError.classList.toggle('active',false);
    }
}

form.addEventListener("submit", (event) => {
    if(pass.value!=conpass.value){
        handlePassCon();
        event.preventDefault();
    }
    if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
    }
    if (!pass.validity.valid) {
        showPassError();
        event.preventDefault();
    }
    if (!pin.validity.valid) {
        showPinError();
        event.preventDefault();
    }
    if (!country.validity.valid) {
        showCountryError();
        event.preventDefault();
    }
});