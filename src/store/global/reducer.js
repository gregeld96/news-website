import {
    INITIATE_GLOBAL
} from "./type";

const initiate = {
    user: null,
    setting: {
        lang: 'en'
    },
    url: "/",
    finishInitiate: false,
}

const GlobalReducer = (state = initiate, action) => {
    switch (action.type) {
        case INITIATE_GLOBAL:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export default GlobalReducer;