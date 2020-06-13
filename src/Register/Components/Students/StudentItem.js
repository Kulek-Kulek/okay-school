import React, { useState } from 'react';

import Card from '../../../Shared/Components/Card/Card';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import Spinner from '../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../../../Shared/Components/Modal/ErrorModal';
import './StudentItem.css';

const StudentItem = props => {

    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [errorModalActive, setErrorModalActive] = useState(false);

    const addToGroupHandler = e => {
        const form = document.querySelector('.admin-main__add-modal');
        form.classList.add('add-data-modal--active');
        form.classList.add('admin-main__add-modal--active');
        props.addStudent(props.id);
    }

    const editHandler = e => {
        console.log('clicked');
    }
    const deleteHandler = async e => {
        try {
            await sendRequest(`http://localhost:5000/api/${props.infoType || 'students'}/${props.id}`,
                'DELETE');
            props.onDelete(props.id);
        } catch (err) {
            setErrorModalActive(true);
        }
    }

    return (
        <li className="admin-main__item">
            {loading && <Spinner />}
            {errorModalActive && <ErrorModal errorMessage={error} />}
            <Card className="admin-main__content">
                <div className="admin-main__info-div">
                    <h2 className='admin-main__h2'>{`${props.name} ${props.surname}`}</h2>
                    <h5 className='admin-main__h5'>{`Tel: ${props.mobile}`}</h5>
                    <h5 className='admin-main__h5'>{`email: ${props.email}`}</h5>
                </div>
                <div className='admin-main__i-student-wrapper'>
                    <i onClick={addToGroupHandler} className="fas fa-user-plus admin-main__student-i"></i>
                    <i onClick={editHandler} className="fas fa-pen admin-main__student-i"></i>
                    <i onClick={deleteHandler} className="fas fa-trash-alt admin-main__student-i"></i>
                </div>
            </Card>
        </li>
    );
}

export default StudentItem;