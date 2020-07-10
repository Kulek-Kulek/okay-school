import * as actionTypes from '../actions/actionTypes';

const initialState = {
    contactModal: false,
    dataAdminModal: false,
    authModal: false,
    addAdminModal: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CONTACT_MODAL:
            return {
                ...state,
                [action.modalName]: !state[action.modalName]
            }
        case actionTypes.TOGGLE_AUTH_MODAL:
            return {
                ...state,
                [action.modalName]: !state[action.modalName]
            }
        case actionTypes.TOGGLE_DATA_ADMIN_MODAL:
            return {
                ...state,
                [action.modalName]: !state[action.modalName]
            }
        case actionTypes.TOGGLE_ADD_ADMIN_MODAL:
            return {
                ...state,
                [action.modalName]: !state[action.modalName]
            }
        default: return state;
    }
}


export default reducer;