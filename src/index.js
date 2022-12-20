import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "jquery/dist/jquery.min";
import "admin-lte/plugins/popper/popper.min";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min";
import "admin-lte/dist/js/adminlte.min";
import "jquery-ui-dist/jquery-ui.css";
import "jquery-ui-dist/jquery-ui.min";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById("root"));