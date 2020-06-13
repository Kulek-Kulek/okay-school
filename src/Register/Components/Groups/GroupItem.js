import React, { useState } from 'react';

import Card from '../../../Shared/Components/Card/Card';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import Spinner from '../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../../../Shared/Components/Modal/ErrorModal';
import './GroupItem.css';

const GroupItem = props => {

    const { loading, error, sendRequest, clearError } = useHttpClient();

    const [errorModalActive, setErrorModalActive] = useState(false);

    const editHandler = (e) => {
        console.log('clicked');
    }
    const deleteHandler = async e => {
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
                    <h2 className='admin-main__h2'>{props.name}</h2>
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