import axios from "axios";
import {
    PERSON_LIST_REQUEST,
    PERSON_LIST_SUCCESS,
    PERSON_LIST_FAIL,
    PERSON_DETAILS_REQUEST,
    PERSON_DETAILS_SUCCESS,
    PERSON_DETAILS_FAIL
} from "../constants/personConstants";

//action to get the list of persons
export const listPersons = () => async (dispatch) => {
    try {
        dispatch({ type: PERSON_LIST_REQUEST });
        //fetching data using the "LIST USERS" API endpoint
        const { data } = await axios.get("https://reqres.in/api/users?page=1");
        dispatch({ type: PERSON_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PERSON_LIST_FAIL, payload: error.message });
    }
};

//action to get the details of a person
export const listPersonDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PERSON_DETAILS_REQUEST });
        //fetching data using the "SINGLE USER" API endpoint
        const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
        dispatch({ type: PERSON_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PERSON_DETAILS_FAIL, payload: error.message });
    }
};