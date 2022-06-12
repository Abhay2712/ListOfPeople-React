import {
    PERSON_LIST_REQUEST,
    PERSON_LIST_SUCCESS,
    PERSON_LIST_FAIL,
    PERSON_DETAILS_REQUEST,
    PERSON_DETAILS_SUCCESS,
    PERSON_DETAILS_FAIL
} from "../constants/personConstants";

//reducer to get the list of persons
export const personListReducer = (state = {persons: []}, action) => {
    switch (action.type) {
        case PERSON_LIST_REQUEST:
            return { loading:true, persons: [] };
        case PERSON_LIST_SUCCESS:
            return { loading:false, persons: action.payload.data };
        case PERSON_LIST_FAIL:
            return { loading:false, error: action.payload.data };
        default:
            return state;
    }
}

//reducer to get the details of a person
export const personDetailsReducer = (state = {person: {}}, action) => {
    switch (action.type) {
        case PERSON_DETAILS_REQUEST:
            return { loading:true, ...state };
        case PERSON_DETAILS_SUCCESS:
            return { loading:false, person: action.payload.data };
        case PERSON_DETAILS_FAIL:
            return { loading:false, error: action.payload.data };
        default:
            return state;
    }
}
