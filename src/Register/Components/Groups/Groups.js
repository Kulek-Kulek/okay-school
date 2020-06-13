import React from 'react';

import GroupItem from './GroupItem';
import './Groups.css';

const Groups = props => {

    const groups = props.data.map(item => (
        <GroupItem
            key={item.id}
            name={item.name}
            id={item.id}
            infoType={props.infoType}
            onDelete={props.onDelete}
        />
    ))

    return (
        <ul className='admin-main__list admin-main__list-groups'>
            {groups}
        </ul>
    );
};

export default Groups;
