

const onlineLearningTypingEffect = () => {
    const wrappingDiv = document.querySelector('.learn-online__slogans')
    const slogans = ['Wow, cieszę się, że jesteś tutaj. Lubię mówić do ludzi!',
        'Jak masz na imię? Może Stanisław? Był tu taki jeden Stanisław kiedyś, spędziliśmy razem piękne wspólne chwile.', 'Niestety później żona kazała mu wrzucić węgiel do komórki. Mam nadzieję, że ty nie masz komórki :).'];

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
        requestAnimationFrame(onlineLearningTyping)
    }

    onlineLearningTyping();
}


export default onlineLearningTypingEffect;