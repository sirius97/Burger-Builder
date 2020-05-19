import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import reducer from './Store/reducer';

//const store = createStore(reducer);

const app = (

        <BrowserRouter>
            <App />
        </BrowserRouter>


);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
