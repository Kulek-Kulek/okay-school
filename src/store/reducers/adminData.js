import * as actionTypes from '../actions/actionTypes';
import { errorModalActivator } from '../actions';

const initialState = {
    loadedData: [],
    infoType: 'students',
    loading: false,
    error: null,
    errorModalActivator: false,
    studentId: null,
    teacherId: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ERROR_MODAL_ACTIVATOR:
            return {
                ...state,
                errorModalActivator: action.active,
                error: !errorModalActivator ? null : action.error,
            }
        case actionTypes.INFO_TYPE_CHANGE:
            return {
                ...state,
                infoType: action.infoType
            }
        case actionTypes.ADD_NEW_DATA:
            return {
                ...state,
                loadedData: state.loadedData.concat(action.updatedData)
            }
        case actionTypes.DELETE_DATA:
            return {
                ...state,
                ...state.loadedData,
                loadedData: state.loadedData.filter(item => item.id !== action.id)
            }
        case actionTypes.LOAD_DATA:
            return {
                ...state,
                loadedData: action.loadedData || [],
                infoType: action.infoType,
                loading: false,
                error: action.error
            }
        case actionTypes.LOADING_DATA_FAILED:
            return {
                ...state,
                errorModalActivator: true,
                loading: false
            }
        case actionTypes.ID_PROVIDER:
            return {
                ...state,
                [action.idType]: action.id
            }
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true
            }

        default: return state;
    }
}


export default reducer;