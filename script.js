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
email.addEventListener('input', handleEmail);
country.addEventListener('input', handleCountry);
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
