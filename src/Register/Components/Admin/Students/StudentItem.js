import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../../../../Shared/Components/Card/Card';
import { useHttpClient } from '../../../../Shared/Hooks/http-hook';
import Spinner from '../../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../../../../Shared/Components/Modal/ErrorModal';
import Button from '../../../../Shared/Elements/Button/Button';
import * as actions from '../../../../store/actions/index';
import './StudentItem.css';


const StudentItem = props => {

    const dispatch = useDispatch();

    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [errorModalActive, setErrorModalActive] = useState(false);

    const addStudentToGroupHandler = () => {
        dispatch(actions.toggleAddAdminModal('dataAdminModal'));
        dispatch(actions.infoTypeChange('updateGroups'));
        dispatch(actions.idProvider(props.id, 'studentId'));
    }

    const editHandler = e => {
        console.log('clicked');
    }
    const deleteHandler = async e => {
        try {
            await sendRequest(`http://localhost:5000/api/students/${props.id}`,
                'DELETE');
            dispatch(actions.deleteData(props.id));
        } catch (err) {
            setErrorModalActive(true);
        }
    }

    const errorModalCancelHandler = () => {
        setErrorModalActive(false);
        clearError();
    }


    let groups;
    if (props.groupData) {
        groups = props.groupData.map(g => (
            <div className='admin-main__populated-data-div' key={g.name}>
                <h5 className='admin-main__populated-data'>{`Grupa: ${g.name}`}</h5>
                <Button btnText='usuń' btn='admin-main__delete-btn' />
            </div>
        ));
    }

    return (
        <li className="admin-main__item">
            {loading && <Spinner />}
            {errorModalActive && <ErrorModal errorMessage={error} click={errorModalCancelHandler} />}
            <Card className="admin-main__content">
                <div className="admin-main__info-div">
                    <h2 className='admin-main__h2'>{`${props.name} ${props.surname}`}</h2>
                    <h5 className='admin-main__h5'>{`Tel: ${props.mobile}`}</h5>
                    <h5 className='admin-main__h5'>{`email: ${props.email}`}</h5>
                    {groups}
                </div>
                <div className='admin-main__i-student-wrapper'>
                    <i onClick={addStudentToGroupHandler} className="fas fa-user-plus admin-main__student-i"></i>
                    <i onClick={editHandler} className="fas fa-pen admin-main__student-i"></i>
                    <i onClick={deleteHandler} className="fas fa-trash-alt admin-main__student-i"></i>
                </div>
            </Card>
        </li>
    );
}

export default StudentItem;