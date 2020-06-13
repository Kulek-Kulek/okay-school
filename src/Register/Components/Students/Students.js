import React, { useState } from 'react';

import StudentItem from './StudentItem';
import DataAdminModal from '../../../Shared/Components/Modal/DataAdminModal';
import './Students.css';

const Students = props => {

    const [studentId, setStudentId] = useState();

    const addStudent = (studentId) => {
        setStudentId(studentId);
    }

    const students = props.data.map(item => (
        <StudentItem
            key={item.id}
            name={item.name}
            surname={item.surname}
            mobile={item.mobile}
            email={item.email}
            id={item.id}
            infoType={props.infoType}
            onDelete={props.onDelete}
            addStudent={addStudent}
        />
    ));

    return (
        <React.Fragment>
            <DataAdminModal class='admin-main__add-modal' infoType='updateGroups' studentId={studentId} btnTextContent='' />
            <ul className='admin-main__list'>
                {students}
            </ul>
        </React.Fragment>
    );
};

export default Students;
