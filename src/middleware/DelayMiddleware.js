//========= middleware part 分離至ex: middleware.js =============//

// var inc = (x) => x+1;
// equal to
// var inc = function (x) { return x + 1; };
const delayMiddleware = store => next => action => {
    if (action.delay) {
        return setTimeout(() => {
            next(action);
        }, action.delay * 1000);
    } else {
        next(action);
    }
}
export default delayMiddleware;
