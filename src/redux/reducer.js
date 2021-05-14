import { combineReducers } from "redux";

const defaultDomainArray = ["passfoo.com", "failxx.com", "salesforce.com", "gmail.com"]
const uptimes = (state = {}, action) => {
    switch (action.type) {
        case "SET_UPTIME":
            return {
                ...state,
                [action.payload.data.domain]: action.payload.data
            };
        default:
            return state;
    }
};

const domains = (state = { domains: defaultDomainArray }, action) => {
    switch (action.type) {
        case "ADD_DOMAIN":
            return {
                ...state,
                domains: [...state.domains, action.payload.domain]
            };
        default:
            return state;
    }
};

export default combineReducers({ uptimes, domains });
