import React, { useState, useEffect } from 'react';


import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import Spinner from '../../../Shared/Elements/LoadingSpinner/LoadingSpinner';
import Students from '../Students/Students';
import Teachers from '../Teachers/Teachers';
import Groups from '../Groups/Groups';
import ErrorModal from '../../../Shared/Components/Modal/ErrorModal';

import './GeneralInfo.css';



const GetGeneralInfo = props => {

    const [dataLoaded, setDataLoaded] = useState();
    const { loading, sendRequest, error, clearError } = useHttpClient();
    const [errorModalActive, setErrorModalActive] = useState();

    useEffect(() => {
        const path = props.infoType || 'students';
        const fetchData = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/${path}`);
                setDataLoaded(responseData[path]);
            } catch (err) {
                setErrorModalActive(true);
            }
        }
        fetchData();
    }, [sendRequest, props.infoType, props.newDataLoaded]);


    const errorModalCancelHandler = () => {
        setErrorModalActive(false);
        clearError();
    }

    const onDeleteHandler = (deletedDataId) => {
        setDataLoaded(prevData => prevData.filter(dataItem => dataItem.id !== deletedDataId))
    }

    let section;
    switch (props.infoType) {
        case 'students':
            section = <section className='admin-main__data-section'>
                {dataLoaded &&
                    <Students
                        data={dataLoaded}
                        infoType={props.infoType}
                        onDelete={onDeleteHandler} />}
            </section>
            break;
        case 'teachers':
            section = <section className='admin-main__data-section'>
                {dataLoaded &&
                    <Teachers
                        data={dataLoaded}
                        infoType={props.infoType}
                        onDelete={onDeleteHandler} />}
            </section>
            break;
        case 'groups':
            section = <section className='admin-main__data-section'>
                {dataLoaded &&
                    <Groups
                        data={dataLoaded}
                        infoType={props.infoType}
                        onDelete={onDeleteHandler} />}
            </section>
            break;
        case 'partners':
            section = <section className='admin-main__data-section'>
                <h1>Brak danych</h1>
            </section>
            break;
        default: section = <section className='admin-main__data-section'>
            {dataLoaded ? <Students
                data={dataLoaded}
                infoType={props.infoType}
                onDelete={onDeleteHandler}
            /> : <h1>Brak danych</h1>}
        </section>
            break;
    }

    return (
        <React.Fragment>
            {loading ? <Spinner /> : (
                errorModalActive ? <ErrorModal
                    class='error-modal--active'
                    errorMessage={error}
                    errorHeaderMessage='Błąd sieciowy'
                    click={errorModalCancelHandler}
                /> :
                    <React.Fragment>
                        {section}
                    </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default GetGeneralInfo;