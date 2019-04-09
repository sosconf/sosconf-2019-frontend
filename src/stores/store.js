import { createStore } from 'redux';
import reducer from '../reducers/reducer.js';

const init = {
    // language 默认语言为英文，但可设置为中文，详细的文章在i18n文件夹目录下
    language: 'en',
    ticket: ''
};

const store = createStore(reducer, init);

export default store;
