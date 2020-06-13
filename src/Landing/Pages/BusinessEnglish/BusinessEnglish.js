import React from 'react';
import { useLocation } from 'react-router-dom';

import Courses from '../../../Landing/Components/OfferComponents/CourseComponents/Courses';
import './BusinessEnglish.css';


const BusinessEnglish = props => {

    return (
        <React.Fragment>
            <Courses courseType={useLocation().pathname.slice(7)} />
        </React.Fragment>
    );
}

export default BusinessEnglish;