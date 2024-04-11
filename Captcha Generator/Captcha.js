//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen
//Intitial Reference
let container = document.querySelector('.container');
let captcha = document.querySelector('.container .captcha h3');
let userInput = document.querySelector('.container input');
let checkBtn = document.querySelector('.container .check-btn');
let generateBtn = document.querySelector('.container .generate-btn');
let message = document.querySelector('.container .message');
let captchacharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let generateCaptcha = () => {
        captcha.innerHTML = '';
        for (let i = 0; i < 6; i++) {
                let randomCaptcha = captchacharacter[Math.floor(Math.random() * captchacharacter.length)];
                captcha.innerHTML += ' ' + randomCaptcha;
        }
        message.style.display = 'none';
        userInput.value = '';
        container.style.height = '300px';
};

let check = () => {
        let userCaptcha = userInput.value;
        let rightCaptcha = captcha.innerHTML;

        if (userCaptcha.replaceAll(' ', '') == rightCaptcha.replaceAll(' ', '')) {
                container.style.height = '320px';
                message.style.display = 'block';
                message.innerHTML = `<i class="fa-solid fa-circle-check"></i> Captcha matched. You are not a robot`;
                message.style.color = '#3CB371';
                setTimeout(() => {
                        generateCaptcha();
                }, 1800);
                generateBtn.style.pointerEvents = 'auto';
        } else {
                container.style.height = '320px';
                userInput.classList.add('input-shaked');
                setTimeout(() => {
                        userInput.classList.remove('input-shaked');
                }, 200);
                message.style.display = 'block';
                message.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Captcha not matched. please try again!`;
                message.style.color = '#FF0000';
                generateBtn.style.pointerEvents = 'none';
        }
};

checkBtn.addEventListener('click', () => {
        if (userInput.value != '') {
                check();
        }
});
generateBtn.addEventListener('click', generateCaptcha);

generateCaptcha();
