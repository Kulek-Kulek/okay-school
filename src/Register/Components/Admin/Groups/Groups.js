import React from 'react';
import { useSelector } from 'react-redux';

import GroupItem from './GroupItem';
import './Groups.css';

const Groups = props => {

    const adminData = useSelector(state => state.adminData);

    let groups;
    if (adminData.loadedData.length > 0) {
        groups = adminData.loadedData.map((item, index) => (
            <GroupItem
                key={item.id}
                name={item.name}
                id={item.id}
                infoType={adminData.infoType}
                studentData={adminData.loadedData[index].students}
                teacherData={adminData.loadedData[index].teacher}
            />
        ))
    } else {
        groups = <h1 className='admin-main__general-info'>Brak danych</h1>;
    }

    return (
        <ul className='admin-main__list admin-main__list-groups'>
            {groups}
        </ul>
    );
};

export default Groups;
