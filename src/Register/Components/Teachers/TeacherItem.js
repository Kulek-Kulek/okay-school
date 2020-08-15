import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../../../Shared/Components/Card/Card';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import Button from '../../../Shared/Elements/Button/Button';
import Spinner from '../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import * as actions from '../../../store/actions/index';
// import ErrorModal from '../../../Shared/Components/Modal/ErrorModal';

import './TeacherItem.css';

const TeacherItem = props => {

    const dispatch = useDispatch();

    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [errorModalActive, setErrorModalActive] = useState(false);

    const editHandler = (e) => {
        console.log('clicked');
    }
    const deleteHandler = async e => {
        try {
            await sendRequest(`http://localhost:5000/api/teachers/${props.id}`,
                'DELETE');
            dispatch(actions.deleteData(props.id));
        } catch (err) {
            setErrorModalActive(true);
        }
    }

    const addTeacherToGroupHandler = () => {
        dispatch(actions.toggleAddAdminModal('dataAdminModal'));
        dispatch(actions.infoTypeChange('updateGroups'));
        dispatch(actions.idProvider(props.id, 'teacherId'));
    }


    let groups;
    if (props.groupData) {
        groups = props.groupData.map(g => (
            <div className='admin-main__populated-data-div' key={g.id}>
                <h5 className='admin-main__populated-data'>{g.name}</h5>
                {/* <Button btnText='usuń' btn='admin-main__delete-btn' /> */}
            </div>
        ))
    }

    return (
        <li className="admin-main__item">
            {loading && <Spinner />}
            <Card className="admin-main__content">
                <div className="admin-main__info-div">
                    <h2 className='admin-main__h2'>{`${props.name} ${props.surname}`}</h2>
                    <h5 className='admin-main__h5'>{`Tel: ${props.mobile}`}</h5>
                    <h5 className='admin-main__h5'>{`email: ${props.email}`}</h5>
                    <div>Uczy w grupach:{groups}</div>
                </div>
                <div className='admin-main__i-wrapper'>
                    <i onClick={addTeacherToGroupHandler} className="fas fa-user-plus admin-main__student-i"></i>
                    <i onClick={editHandler} className="fas fa-pen admin-main__i"></i>
                    <i onClick={deleteHandler} className="fas fa-trash-alt admin-main__i"></i>
                </div>
            </Card>
        </li>
    );
}

export default TeacherItem;