import * as actionTypes from './actionTypes';


export const loadGroups = (loadedGroups = [], chooseTitle) => {
    return {
        type: actionTypes.LOAD_GROUPS,
        loadedGroups,
        chooseTitle
    }
}

export const loadinGroupsFailed = () => {
    return {
        type: actionTypes.LOADING_GROUPS_FAILED
    }
}

export const fetchGroups = (chooseTitle) => {
    return dispatch => {
        fetch('http://localhost:5000/api/groups')
            .then(res => res.json())
            .then(data => dispatch(loadGroups(data.groups, chooseTitle)))
            .catch(err => {
                dispatch(loadinGroupsFailed());
            })
    }
}