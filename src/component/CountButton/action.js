//=========action part - 分離至ex: actions/action.js =============//

export const TYPES = {
    CLICKEVENT: 'CLICKEVENT'
};

export function clickAction(count = 1, delay = 0) {
    return{
        type: TYPES.CLICKEVENT,
        count,
        delay
    };
}

export default {
    clickAction
};
