import React from 'react';

import StudentAbout from './StudentAbout';
import StudentFinance from './StudentFinance';
import StudentLessons from './StudentLessons';


import './StudentInfoType.css';


const StudentInfoType = props => {


    return (
        <aside className='dashboard student__infotype'>
            <StudentAbout />
            <StudentLessons />
            <StudentFinance />
        </aside>
    );
}

export default StudentInfoType;