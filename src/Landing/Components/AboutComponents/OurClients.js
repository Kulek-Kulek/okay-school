import React, { useEffect } from 'react';

import './OurClients.css';
import helvetia from '../../../images/client-logos/helvetia.jpg';
import topline from '../../../images/client-logos/topline.jpg';
import meblosiek from '../../../images/client-logos/meblosiek.jpg';
import pfleiderer from '../../../images/client-logos/pfleiderer.jpg';
import wielton from '../../../images/client-logos/wielton.jpg';
import LinkElement from '../../../Shared/Elements/LinkElement/LinkElement';
import { companyLogosScrollEffect } from './ourClientsScripts';


const OurClients = props => {

    useEffect(() => {
        companyLogosScrollEffect();
    }, []);

    const companyLogoImgs = [helvetia, meblosiek, topline, pfleiderer, wielton];

    const logos = companyLogoImgs.map((imgSrc, index) => (
        <div className='our-clients__logo-div' key={'logo' + index}>
            <img className='our-clients__logo-img' src={imgSrc} alt={'logo' + index} />
        </div>
    ));

    return (
        <section className='our-clients'>
            <div className='our-clients__motto'>
                <div className='our-clients__left'></div>
                <div className='our-clients__right'>
                    <h1 className='our-clients__main-title'>więcej niż lekcja</h1>
                    <h3 className='our-clients__subtitle'>Profesjonalnie, z pasją</h3>
                    <p className='our-clients__p'>
                        Moi kursanci to osoby wymagające, dla których ważny jest osobisty rozwój, podnoszenie swoich kwalifikacji oraz poczucie, że dobrze zainwestowali swój czas. Dzięki nieustannemu dbaniu o osobisty rozwój poparty międzynarodowymi certyfikatami, takimi jak Certificate of Proficiency in English (University of Cambridge ESOL Examinations), czy First Certificate for Teachers of Business English zdanemu w Londyńskiej Izbie Przemysłowo-Handlowej, mogę zaproponować swoim kursantom sesje z elementami pracy coachingowej z jasno i skutecznie zdefiniowanymi celami językowymi.
                        <span className='our-clients__signature'>Krzysztof Ługowski</span>
                    </p>
                    <div className='our-clients__button-div'>
                        <LinkElement
                            to='/offer'
                            className='our-clients__a'
                            btnText='więcej'
                            btn={'our-clients__button pulse'}
                            arrowClassName='btn-arrow-right--active'
                        />
                    </div>
                </div>
            </div>
            <div className='our-clients__companies'>
                <div className='our-clients__companies-title-wrapper'>
                    <h1 className='our-clients__companies-title'>współpracujemy z</h1>
                </div>
                <div className='our-clients__companies-imagies-wrapper'>
                    {logos}
                </div>
            </div>
        </section>
    );
};

export default OurClients;