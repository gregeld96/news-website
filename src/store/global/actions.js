
import { HttpGet } from "../../config/axios";
import {
    INITIATE_GLOBAL
} from "./type"

export const initiateGlobal = (url) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('access-token');
            
            if (token) {
                let user = await HttpGet('users/', {headers: {
                    "access_token": token
                }});
                
                dispatch({
                    type: INITIATE_GLOBAL,
                    payload: {
                        user: user,
                        finishInitiate: true,
                        url,
                    }
                });
            } else {
                dispatch({
                    type: INITIATE_GLOBAL,
                    payload: {
                        user: null,
                        finishInitiate: true,
                    }
                })
            }
        } catch (error) {
            throw (error)
        }
    }
}

export const profileSave = (token) => {
    return async (dispatch) => {
        try {
            localStorage.setItem("access-token", token);

            let user = await HttpGet('users/', {headers: {
                "access_token": token
            }});

            dispatch({
                type: INITIATE_GLOBAL,
                payload: {
                    user: user,
                    finishInitiate: true,
                }
            })
        } catch (error) {
            throw (error)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            localStorage.removeItem("access-token");

            dispatch({
                type: INITIATE_GLOBAL,
                payload: {
                    user: null,
                    finishInitiate: true,
                }
            })
        } catch (error) {
            throw (error)
        }
    }
}