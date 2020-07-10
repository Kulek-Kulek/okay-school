import React from 'react';
import { useSelector } from 'react-redux';

import TeacherItem from './TeacherItem';

import './Teachers.css';

const Teachers = props => {

    const adminData = useSelector(state => state.adminData);


    let teachers;
    if (adminData.loadedData.length > 0) {
        teachers = adminData.loadedData.map((item, index) => (
            <TeacherItem
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
        teachers = <h1 className='admin-main__general-info'>Brak lektorów</h1>;
    }


    return (
        <React.Fragment>
            <ul className='admin-main__list'>
                {teachers}
            </ul>
        </React.Fragment>
    );
};

export default Teachers;
