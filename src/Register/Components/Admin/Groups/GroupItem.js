import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../../../Shared/Components/Card/Card';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import Spinner from '../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import * as actions from '../../../store/actions/index';
import './GroupItem.css';
import Button from '../../../Shared/Elements/Button/Button';

const GroupItem = props => {

    const dispatch = useDispatch();

    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [errorModalActive, setErrorModalActive] = useState(false);

    const editHandler = (e) => {
        console.log('clicked');
    }
    const deleteHandler = async e => {
        try {
            await sendRequest(`http://localhost:5000/api/${props.infoType}/${props.id}`,
                'DELETE');
            dispatch(actions.deleteData(props.id));
        } catch (err) {
            setErrorModalActive(true);
        }
    }

    let students;
    if (props.studentData) {
        students = props.studentData.map((s, index) => (
            <div className='admin-main__populated-data-div' key={s.email + index}>
                <h5 className='admin-main__populated-data'>{s.name + ' ' + s.surname}</h5>
                <Button btnText='usuń' btn='admin-main__delete-btn' />
            </div>
        ))
    }
    let groupLeader;
    if (props.teacherData) {
        groupLeader = props.teacherData.map(t => (
            <h4 key={t.id} className='admin-main__populated-data'>{'Lektor: ' + t.name + ' ' + t.surname}</h4>
        ));
    };



    return (
        <li className="admin-main__item">
            {loading && <Spinner />}
            <Card className="admin-main__group-content">
                <div className="admin-main__info-group-div">
                    <h2 className='admin-main__h2'>{`Grupa ${props.name}`}</h2>
                    {groupLeader}
                    {students}
                </div>
                <div className='admin-main__i-wrapper'>
                    <i onClick={editHandler} className="fas fa-pen admin-main__i"></i>
                    <i onClick={deleteHandler} className="fas fa-trash-alt admin-main__i"></i>
                </div>
            </Card>
        </li>
    );
}

export default GroupItem;