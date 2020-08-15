import React, { useEffect } from 'react';

import { displayOffers } from './offerDescriptionScripts';
import './OfferDescriptions.css';


const OfferDecriptions = props => {

    useEffect(() => {
        displayOffers();
    }, []);

    return (
        <section data-section='introduction' className="offers">
            <div className="offers__decription-wrapper">
                <i className="fas fa-graduation-cap offers__icon"></i>
                <h2 className="offers__title">dla nastolatków</h2>
                <p className='offers__description'>To skrojone wyłącznie na Twoją miarę zajęcia językowe z dojazdem do ucznia. W przyjaznej atmosferze swojego domu opanujesz język bez stresu i przełamiesz lęk przed mówieniem po angielsku, a dzięki lekcjom typu one-to-one masz pewność, że lektor jest wyłącznie dla Ciebie. Wszystkie zajęcia prowadzone są przy pomocy multimediów.
                </p>
            </div>
            <div className="offers__decription-wrapper">
                <i className="far fa-calendar-check offers__icon"></i>
                <h2 className="offers__title">do egzaminów</h2>
                <p className='offers__description'>Czy to sprawdzian po ósmej klasie, czy może matura, nieważne! Wspólnie opracujemy strategie egzaminacyjne, nadrobimy zaległości, utrwalimy materiał. Zajęcia z dojazdem do domu, na których rozwiniesz wszystkie sprawności językowe w oparciu o zadania zgodne z wymaganiami Centralnej Komisji Egzaminacyjnej.
                </p>
            </div>
            <div className="offers__decription-wrapper">
                <i className="fas fa-users offers__icon"></i>
                <h2 className="offers__title">dla dorosłych</h2>
                <p className='offers__description'>Postanowione – chcesz mówić po angielsku. Masz dość niepowodzeń. Nieważne, że kolejny raz podchodzisz do nauki języka. A może dopiero szukasz kursu dla dorosłych. Dzięki odpowiednio dobranemu programowi nauczania oraz metodom dostosowanym do wieku i aktualnego poziomu studentów szybko zaczniesz być niezależny językowo. Bo liczy się komunikatywność!
                </p>
            </div>
            <div className="offers__decription-wrapper">
                <i className="fas fa-briefcase offers__icon"></i>
                <h2 className="offers__title">dla biznesu</h2>
                <p className='offers__description'>Tylko szyte na miarę kursy biznesowego języka angielskiego. Zawsze poprzedzone analizą indywidualnych potrzeb językowych każdej firmy. Elastyczne i dopasowane do charakteru prowadzonego biznesu, uwzględniające indywidualne potrzeby pracowników. Językowe wsparcie dla eventów bizesowych typu konferencje, prezentacje, sympozja.
                </p>
            </div>
        </section>
    );
};




export default OfferDecriptions;