// main.js

import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

render (
    
        <Provider store={store}>
            <App />
        </Provider>, Document.getElementByID('root')
    
)


registerServiceWorker();
