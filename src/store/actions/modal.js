import * as actionTypes from './actionTypes';


export const toggleContactModal = (modalName) => {
    return {
        type: actionTypes.TOGGLE_CONTACT_MODAL,
        modalName
    }
}


export const toggleAuthtModal = (modalName) => {
    return {
        type: actionTypes.TOGGLE_AUTH_MODAL,
        modalName
    }
}


export const toggleDataAdminModal = (modalName) => {
    return {
        type: actionTypes.TOGGLE_DATA_ADMIN_MODAL,
        modalName
    }
}


export const toggleAddAdminModal = (modalName) => {
    return {
        type: actionTypes.TOGGLE_ADD_ADMIN_MODAL,
        modalName
    }
}