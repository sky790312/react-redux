//========= reducer part - 分離至ex: reducers/countReducer.js =============//

import { TYPES } from './action.js'

// let initialState = {
export const initialState = {
    clickCount: 0
};

export default function clickReducer (state = initialState, action) {
    switch (action.type) {
        case TYPES.CLICKEVENT:
            state.clickCount += action.count;
            return { ...state };
        default:
            return state;
    }
}

