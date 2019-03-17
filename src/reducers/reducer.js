import { LANGUAGE_ENGLISH, LANGUAGE_CHINESE } from '../actions/action';
export default (state, action) => {
    let out = Object.assign({}, state);
    switch (action.type) {
        case LANGUAGE_ENGLISH:
            out.language = 'en';
            break;
        case LANGUAGE_CHINESE:
            out.language = 'ch';
            break;
        default:
            return state;
    }
    return out;
};