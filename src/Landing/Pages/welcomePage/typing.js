
const logo = '#O#k#a#y';
const welcomeSlogan = ['*Witamy w ', logo, '^dzień dobry'];
let welcomeSloganIndex = 0;
let letterIndex = 0;
let previousTime = 0;
const speed = 100;
let spanElement;

export const typing = (newTime) => {
    if (newTime - previousTime > speed) {
        const letter = welcomeSlogan[welcomeSloganIndex].substr(letterIndex, 1);
        if (welcomeSlogan[welcomeSloganIndex].length === letterIndex) {
            if (welcomeSloganIndex === welcomeSlogan.length - 1) return;
            letterIndex = 0;
            welcomeSloganIndex++;
        } if (letterIndex === 0 && welcomeSlogan[welcomeSloganIndex].substr(letterIndex, 1) === '*') {
            const helloDiv = document.querySelector('.welcomePageSloganWrapper__helloDiv');
            const span = document.createElement('span');
            helloDiv.appendChild(span);
            spanElement = span;
        } if (letterIndex === 0 && welcomeSlogan[welcomeSloganIndex].substr(letterIndex, 1) === '^') {
            const helloDiv = document.querySelector('.welcomePageSloganWrapper__morningDiv');
            const span = document.createElement('span');
            helloDiv.appendChild(span);
            spanElement = span;
        } if (letterIndex === 0 && welcomeSlogan[welcomeSloganIndex].substr(letterIndex, 1) === '#') {
            const helloDiv = document.querySelector('.welcomePageSloganWrapper__helloDiv');
            const spanLogoWrapper = document.createElement('span');
            spanLogoWrapper.classList.add('welcomePageSloganWrapper__logo');
            helloDiv.appendChild(spanLogoWrapper);
        }
        if ((letterIndex === 0 && welcomeSlogan[welcomeSloganIndex].substr(letterIndex, 1) === '#') || letter === '#') {
            const spanLetterWrapper = document.querySelector('.welcomePageSloganWrapper__logo');
            const span = document.createElement('span');
            span.classList.add('welcomePageSloganWrapper__logoSpan');
            spanLetterWrapper.appendChild(span);
            span.classList.add('welcomePageSloganWrapper__logoSpan--active');
            spanElement = span;
        }

        previousTime = newTime;
        if ((letter !== '*') && (letter !== '^') && (letter !== '#')) {
            spanElement.textContent += letter;
        }

        letterIndex++;
    }
    requestAnimationFrame(typing);
};

