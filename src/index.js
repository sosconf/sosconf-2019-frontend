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

// React-transition-group
import { TransitionGroup, CSSTransition } from "react-transition-group";

import 'antd/dist/antd.css';
import './themes/common.css'

// init react-intl
const language = [...zh, ...en];
addLocaleData(language);

let locate = 'en'
let msg = en_US;

function render () {
    ReactDOM.render((
        <Provider store={store}>
            <IntlProvider locale={locate} messages={msg}>
                <TransitionGroup>
                    <CSSTransition
                    appear={true}
                    classNames="appAppear"
                    timeout={500}
                    >
                        <App>
                        </App>
                    </CSSTransition>
                </TransitionGroup>    
            </IntlProvider>
        </Provider>
    )
    , document.getElementById('root'));
}

store.subscribe(() => {
    let { language } = store.getState();
    if (language === 'en') {
        locate = 'en';
        msg = en_US;
        render();
    } else if (language === 'zh') {
        locate = 'zh'
        msg = zh_CN
        render();
    }
})

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
