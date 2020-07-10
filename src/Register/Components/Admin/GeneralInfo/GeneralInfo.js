import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


// import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import Spinner from '../../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import Students from '../Students/Students';
import Teachers from '../../Teachers/Teachers';
import Groups from '../../Groups/Groups';
import ErrorModal from '../../../../Shared/Components/Modal/ErrorModal';
import DataAdminModal from '../../../../Shared/Components/Modal/DataAdminModal';
import * as actions from '../../../../store/actions/index';

import './GeneralInfo.css';

const GetGeneralInfo = props => {

    const adminData = useSelector(state => state.adminData);
    const dataAdminModal = useSelector(state => state.modal.dataAdminModal);
    const dispatch = useDispatch();


    // const [dataLoaded, setDataLoaded] = useState();
    // const [errorModalActive, setErrorModalActive] = useState();
    const [btnTextContent, setBtnTextContent] = useState();
    // const { loading, sendRequest, error, clearError } = useHttpClient();


    useEffect(() => {
        dispatch(actions.fetchData('students'));
        dispatch(actions.loading());
    }, [dispatch])


    useEffect(() => {
        const adminPanelBtnAdd = document.querySelector('.admin-header__button-add');
        setBtnTextContent(adminPanelBtnAdd.textContent);
    }, [adminData.infoType]);

    const errorModalCancelHandler = () => {
        // clearError();
        dispatch(actions.errorModalActivator(false));
    }


    let section;
    switch (adminData.infoType) {
        case 'students':
            section = <Students />
            break;
        case 'teachers':
            section = <Teachers />
            break;
        case 'groups':
            section = <Groups />
            break;
        case 'partners':
            section = <section className='admin-main__data-section'>
                <h1 className='admin-main__general-info'>Brak partnerów</h1>
            </section>
            break;
        default: section =
            <Students />
            break;
    }


    return (
        <React.Fragment>
            {adminData.loading ? <Spinner /> : (
                adminData.errorModalActivator ? <ErrorModal
                    class='error-modal--active'
                    errorMessage={adminData.error}
                    errorHeaderMessage='Błąd sieciowy'
                    click={errorModalCancelHandler}
                /> :
                    <React.Fragment>
                        <section className='admin-main__data-section'>
                            {section}
                        </section>

                        <DataAdminModal
                            weekdaysHeading={'Wybierz dni i godziny zajęć'}
                            classDataAdminModal={dataAdminModal && 'add-data-modal--active'}
                            btnTextContent={btnTextContent}
                        />
                    </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default GetGeneralInfo;