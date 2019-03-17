import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// React-intl
import { addLocaleData, IntlProvider } from 'react-intl';

import en_US from './i18n/en_US';
import zh_CN from './i18n/zh_CN';

import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

// react-redux
import { Provider } from 'react-redux';

// Store
import store from './stores/store';

// init react-intl
const language = [...zh, ...en];
addLocaleData(language);


ReactDOM.render((
        <Provider store={store}>
            <IntlProvider locale={'zh'} messages={zh_CN}>
                <App>
                </App>
            </IntlProvider>
        </Provider>
    )
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
