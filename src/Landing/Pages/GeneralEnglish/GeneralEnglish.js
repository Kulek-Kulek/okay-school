import React from 'react';
import { useLocation } from 'react-router-dom';

import Courses from '../../../Landing/Components/OfferComponents/CourseComponents/Courses';
import './GeneralEnglish.css';


const GeneralEnglish = props => {

    let location = useLocation();

    return (
        <React.Fragment>
            <Courses courseType={location.pathname.slice(7)} />
        </React.Fragment>
    );
}

export default GeneralEnglish;