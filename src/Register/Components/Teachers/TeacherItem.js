import React, { useState } from 'react';

import Card from '../../../Shared/Components/Card/Card';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import Spinner from '../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../../../Shared/Components/Modal/ErrorModal';
import './TeacherItem.css';

const TeacherItem = props => {

    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [errorModalActive, setErrorModalActive] = useState(false);

    const editHandler = (e) => {
        console.log('clicked');
    }
    const deleteHandler = async e => {
        console.log(props.infoType, props.id);
        try {
            await sendRequest(`http://localhost:5000/api/${props.infoType}/${props.id}`,
                'DELETE');
            props.onDelete(props.id);
        } catch (err) {
            setErrorModalActive(true);
        }
    }

    return (
        <li className="admin-main__item">
            {loading && <Spinner />}
            <Card className="admin-main__content">
                <div className="admin-main__info-div">
                    <h2 className='admin-main__h2'>{`${props.name} ${props.surname}`}</h2>
                    <h5 className='admin-main__h5'>{`Tel: ${props.mobile}`}</h5>
                    <h5 className='admin-main__h5'>{`email: ${props.email}`}</h5>
                </div>
                <div className='admin-main__i-wrapper'>
                    <i onClick={editHandler} className="fas fa-pen admin-main__i"></i>
                    <i onClick={deleteHandler} className="fas fa-trash-alt admin-main__i"></i>
                </div>
            </Card>
        </li>
    );
}

export default TeacherItem;