import React from 'react';

import TeacherItem from './TeacherItem';
import './Teachers.css';

const Teachers = props => {

    const teachers = props.data.map(item => (
        <TeacherItem
            key={item.id}
            name={item.name}
            surname={item.surname}
            mobile={item.mobile}
            email={item.email}
            id={item.id}
            infoType={props.infoType}
            onDelete={props.onDelete}
        />
    ))

    return (
        <ul className='admin-main__list'>
            {teachers}
        </ul>
    );
};

export default Teachers;
