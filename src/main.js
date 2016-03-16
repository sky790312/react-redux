import Redux, { createStore, combineReducers, applyMiddleware } from 'redux';
// createStore => 這邊用於產生 middleware 的 store
// combineReducers => 合併 reducers
// applyMiddleware => Middleware 處理非同步ex: ajax

import CountButton from 'component/CountButton';

let button = document.getElementById('mybutton');
let button2 = document.getElementById('mybutton2');
let button3 = document.getElementById('mybutton3');
let text = document.getElementById('count');

//========= view part 分離至ex: 結合react(Provider) - xxx.jsx =============//

// dispatch - action
button.addEventListener('click', () => {
    store.dispatch(clickAction())
});
button2.addEventListener('click',() => {
    store.dispatch(clickAction(10));
});
button3.addEventListener('click',() => {
    store.dispatch(clickAction(5, 2));
})

// view - getState
store.subscribe(function(){
    text.textContent = store.getState().myClickState.clickCount
})
