import React, { useEffect, useState } from 'react';

import { colorChanger } from './colorChanger';
import Button from '../../../Shared/Elements/Button/Button';
import DataAdminModal from '../../../Shared/Components/Modal/DataAdminModal';
import './AdminPanel.css';


const buttonsTypes = [
    { name: 'uczniowie', id: 'students' },
    { name: 'grupy', id: 'groups' },
    { name: 'partnerzy', id: 'partners' },
    { name: 'lektorzy', id: 'teachers' }
];

const AdminPanel = props => {


    const [infoTypeButton, setInfoTypeButton] = useState('students');
    const [openAddDataModal, setOpenAddDataModal] = useState();

    useEffect(() => {
        document.querySelector('.admin-header__button').classList.add('admin-header__button--active');
    }, [])

    const sendInfoTypeHandler = (e) => {
        const infoType = e.target.id;
        props.infoTypeHandler(infoType);
        colorChanger(infoType);
        setInfoTypeButton(infoType);
        document.querySelector('.add-data-modal').classList.remove('add-data-modal--active');
    }

    const buttons = buttonsTypes.map(button => (
        <div className='admin-header__btn-div' key={button.name}>
            <Button
                btnText={button.name}
                btn='admin-header__button'
                id={button.id}
                click={sendInfoTypeHandler}
            />
        </div>
    ));

    let buttonText;
    switch (infoTypeButton) {
        case 'students': buttonText = 'dodaj nowego ucznia';
            break;
        case 'groups': buttonText = 'dodaj nową grupę';
            break;
        case 'partners': buttonText = 'dodaj nowego partnera';
            break;
        case 'teachers': buttonText = 'dodaj nowego lektora';
            break;
        default: buttonText = 'dodaj nowego ucznia';
    }

    const addButtonHandler = (e) => {
        setOpenAddDataModal(e.target.id);
        const form = document.querySelector('.add-data-modal');
        form.classList.add('add-data-modal--active');
    }

    return (
        <React.Fragment>
            <div className='admin-header__buttons-wrapper'>
                {buttons}
            </div>
            <div className='admin-header__button-add-wrapper'>
                <Button
                    id={infoTypeButton}
                    btnText={buttonText}
                    btn='admin-header__button-add'
                    click={addButtonHandler}
                />
            </div>
            <DataAdminModal
                infoType={openAddDataModal}
                btnTextContent={buttonText}
                dataLoaded={props.dataLoaded} />
        </React.Fragment>
    );
}

export default AdminPanel;