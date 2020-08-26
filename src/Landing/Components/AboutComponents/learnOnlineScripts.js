

export const onlineLearningTypingEffect = () => {
    const wrappingDiv = document.querySelector('.learn-online__slogans')
    const slogans = ['Wow, cieszę się, że jesteś tutaj. Jak masz na imię?',
        'Już dzisiaj zapraszam Cię na pokazową lekcję online na platformie Zoom lub Teams bez żadnych dodatkowych kosztów.', 'Wszystkie zajęcia wspmagane przez Google Docs, wirtualny sekretariat i mutimedia.', 'Wyślij wiadmość i umów się na swoje zajęcia.'];

    let wordIndex = 0;
    let oldTime = 0;
    const speed = 100;
    let sloganIndex = 0;
    let activeDOMElement;


    const onlineLearningTyping = (newTime) => {

        if (newTime - oldTime > speed) {
            if (wordIndex === slogans[sloganIndex].length) {
                let timeout = 2000;
                if (sloganIndex === slogans.length - 1) {
                    sloganIndex = -1;
                    timeout = 4500;
                }
                return setTimeout(() => {
                    wrappingDiv.textContent = '';
                    sloganIndex++;
                    wordIndex = 0;
                    requestAnimationFrame(onlineLearningTyping);
                }, timeout);
            } else if (wordIndex === 0) {
                const p = document.createElement('p');
                p.classList.add('learn-online__single-slogan');
                wrappingDiv.appendChild(p);
                activeDOMElement = p;
            }
            oldTime = newTime;
            const letter = slogans[sloganIndex].substr(wordIndex, 1);
            activeDOMElement.textContent += letter;
            wordIndex++;
        }
        requestAnimationFrame(onlineLearningTyping);
    }
    onlineLearningTyping();
}


export const macShakeOnScroll = () => {
    const macImg = document.querySelector('.learn-online__img');
    const offers = document.querySelector('.offers');
    let offersSectionFromTop;

    if (offers) {
        offersSectionFromTop = offers.offsetTop;
    }

    if (window.scrollY >= offersSectionFromTop * 1.5) {
        macImg.classList.add('learn-online__img--active');
    }
    window.addEventListener('scroll', macShakeOnScroll);
}

