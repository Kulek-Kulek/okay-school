import React from 'react';
import { useSelector } from 'react-redux';

import StudentItem from './StudentItem';

import './Students.css';

const Students = props => {

    const adminData = useSelector(state => state.adminData);

    let students;
    if (adminData.loadedData.length > 0) {

        students = adminData.loadedData.map((item, index) => (
            <StudentItem
                key={item.id}
                name={item.name}
                surname={item.surname}
                mobile={item.mobile}
                email={item.email}
                id={item.id}
                infoType={adminData.infoType}
                groupData={adminData.loadedData[index].group}
            />
        ));
    } else {
        students = <h1 className='admin-main__general-info'>Brak uczniów</h1>;
    }


    return (
        <React.Fragment>
            <ul className='admin-main__list'>
                {students}
            </ul>
        </React.Fragment>
    );
};

export default Students;
