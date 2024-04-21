let minLength = document.querySelector('.password-length .icon');
let lowercase = document.querySelector('.lowercase .icon');
let uppercase = document.querySelector('.uppercase .icon');
let digit = document.querySelector('.number .icon');
let specialChar = document.querySelector('.special-character .icon');
let indicator = document.querySelector('.indicatorBox .indicator');
let message = document.querySelector('.password-strength');


let passwordToggle =()=>{
let userInput = document.querySelector('#userInput');
if(userInput.type === 'password'){
userInput.type = 'text';
document.querySelector('.fa-eye').style.display = 'none';
document.querySelector('.fa-eye-slash').style.display = 'block';
}else{
userInput.type = 'password';
document.querySelector('.fa-eye').style.display = 'block';
document.querySelector('.fa-eye-slash').style.display = 'none';
}
}

let checkPassword =(value)=>{
if(value != ''){
document.querySelector('.indicatorBox').style.display = 'block';
document.querySelector('.container').style.height = '390px';
document.querySelector('.validation-box').style.top = '160px';
message.style.display = 'block';
}else{
document.querySelector('.indicatorBox').style.display = 'none';
document.querySelector('.container').style.height = '335px';
document.querySelector('.validation-box').style.top = '130px';
message.style.display = 'none';    
}
let strength = 0;
const passLength = new RegExp('(?=.{8,})');
const lower = new RegExp('(?=.*[a-z])');
const upper = new RegExp('(?=.*[A-Z])');
const number = new RegExp('(?=.*[0-9])');
const special = new RegExp('(?=.*[!@#$%^&*])');

//check pass length
if(passLength.test(value)){
 strength++;
 minLength.classList.add('valid');
}else{
 minLength.classList.remove('valid');
}

//check lowercase
if(lower.test(value)){
  strength++;
 lowercase.classList.add('valid');
}else{
 lowercase.classList.remove('valid');
}

//check uppercase
if(upper.test(value)){
 strength++;
 uppercase.classList.add('valid');
}else{
 uppercase.classList.remove('valid');
}

//check number 
if(number.test(value)){
 strength++;
 digit.classList.add('valid');
}else{
 digit.classList.remove('valid');
}

//Check special character
if(special.test(value)){
 strength++;
 specialChar.classList.add('valid');
}else{
 specialChar.classList.remove('valid');
}

//Switch condition
switch(strength){
case 0:
indicator.style.cssText = `width:0%;background:#828282;`;
break;
case 1:
message.innerHTML = 'Password strength: Very weak'
indicator.style.cssText = `width:20%;background:#828282;`;
break;
case 2:
message.innerHTML = 'Password strength: Weak'
indicator.style.cssText = `width:40%;background:#EA1111;`;
break;
case 3:
message.innerHTML = 'Password strength: Average'
indicator.style.cssText = `width:60%;background:#FFAD00;`;
break;
case 4:
message.innerHTML = 'Password strength: Good'
indicator.style.cssText = `width:80%;background:#99b158;`;
break;
case 5:
message.innerHTML = 'Password strength: Strong'
indicator.style.cssText = `width:100%;background:#00b500;`;
}
}
