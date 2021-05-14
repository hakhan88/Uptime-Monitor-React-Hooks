import store from "./store";

export const setUptime = data =>
    store.dispatch({
        type: "SET_UPTIME",
        payload: {
            data
        }
    });
export const addDomain = domain => {
    return store.dispatch({
        type: "ADD_DOMAIN",
        payload: {
            domain
        }
    });
}
