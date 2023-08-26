import React from 'react'
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from './configureStore'


import {createRoot} from 'react-dom';

import App from './App';

const store = configureStore()

const container = document.getElementById("root");

const root = createRoot(container);
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
root.render(app)