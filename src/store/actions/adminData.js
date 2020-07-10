import * as actionTypes from './actionTypes';



export const errorModalActivator = (active, error) => {
    return {
        type: actionTypes.ERROR_MODAL_ACTIVATOR,
        active,
        error,
    }
}

export const infoTypeChange = infoType => {
    return {
        type: actionTypes.INFO_TYPE_CHANGE,
        infoType
    }
}


export const addNewData = updatedData => {
    return {
        type: actionTypes.ADD_NEW_DATA,
        updatedData
    }
}
export const deleteData = id => {
    return {
        type: actionTypes.DELETE_DATA,
        id
    }
}


export const loadData = (loadedData, infoType) => {
    return {
        type: actionTypes.LOAD_DATA,
        loadedData,
        infoType
    }
}

export const loadinDataFailed = () => {
    return {
        type: actionTypes.LOADING_DATA_FAILED,
    }
}

export const fetchData = (infoType) => {
    return dispatch => {
        fetch(`http://localhost:5000/api/${infoType}`)
            .then(res => res.json())
            .then(data => dispatch(loadData(data[infoType], infoType)))
            .catch(err => {
                dispatch(loadinDataFailed());
            })
    }
}


export const idProvider = (id, idType) => {
    return {
        type: actionTypes.ID_PROVIDER,
        id,
        idType
    }
}

export const loading = () => {
    return {
        type: actionTypes.LOADING,
    }
}