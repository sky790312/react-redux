import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import store from 'store/index';
import CountButton from 'component/CountButton';

// do it react way use Provider with store which's logic deal with in component/index.js
let app = (
    <Provider store={store}>
        <CountButton/>
    </Provider>
);

ReactDom.render(app, document.getElementById('app'))

/*
    About react with redux :

    1. thinking about action
    2. deal with reducer
    3. write middleware if have
    4. combine to store
    5. main use Provider pass store to component/xxx.js to deal with react component
    6. use connect to connect the store and action to react's props
    7. write your component's view and listen event
 */
