import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { colorChanger } from './colorChanger';
// import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import Button from '../../../../Shared/Elements/Button/Button';
import * as actions from '../../../../store/actions/index';
import './AdminPanel.css';


const buttonsTypes = [
    { name: 'uczniowie', id: 'students' },
    { name: 'grupy', id: 'groups' },
    { name: 'partnerzy', id: 'partners' },
    { name: 'lektorzy', id: 'teachers' }
];

const AdminPanel = props => {

    const dispatch = useDispatch();

    const adminData = useSelector(state => state.adminData);

    // const { loading, sendRequest, error, clearError } = useHttpClient();

    const [infoType, setInfoType] = useState();


    useEffect(() => {
        document.querySelector('.admin-header__button').classList.add('admin-header__button--active');
    }, []);

    const loadDataHandler = async (e) => {
        const infoType = e.target.id;
        colorChanger(infoType);
        // dispatch(actions.infoTypeChange(infoType));
        dispatch(actions.fetchData(infoType))
        dispatch(actions.loading());
        setInfoType(infoType);
        // try {
        //     const responseData = await sendRequest(`http://localhost:5000/api/${infoType}`);
        //     dispatch(actions.loadAdminData(responseData[infoType], loading, error));
        // } catch (err) {
        //     setErrorModalActive(true);
        // }

    }

    const buttons = buttonsTypes.map(button => (
        <div className='admin-header__btn-div' key={button.name}>
            <Button
                btnText={button.name}
                btn='admin-header__button'
                id={button.id}
                click={loadDataHandler}
            />
        </div>
    ));

    let buttonText;
    switch (adminData.infoType) {
        case 'students':
            buttonText = 'dodaj nowego ucznia';
            break;
        case 'groups':
            buttonText = 'dodaj nową grupę';
            break;
        case 'partners': buttonText = 'dodaj nowego partnera';
            break;
        case 'teachers': buttonText = 'dodaj nowego lektora';
            break;
        default: buttonText = 'dodaj nowego ucznia';
    }

    const addButtonHandler = async (e) => {
        dispatch(actions.toggleDataAdminModal('dataAdminModal'));
        dispatch(actions.infoTypeChange(infoType || 'students'));
    }

    return (
        <React.Fragment>
            <nav className='admin-header__buttons-wrapper'>
                {buttons}
            </nav>
            <div className='admin-header__button-add-wrapper'>
                <Button
                    id={adminData.infoType}
                    btnText={buttonText}
                    btn='admin-header__button-add'
                    click={addButtonHandler}
                />
            </div>
        </React.Fragment>
    );
}

export default AdminPanel;