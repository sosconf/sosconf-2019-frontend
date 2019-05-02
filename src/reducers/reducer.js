import { LANGUAGE_ENGLISH, LANGUAGE_CHINESE, CHANGE_USER } from '../actions/action';
export default (state, action) => {
    let out = Object.assign({}, state);
    switch (action.type) {
        case LANGUAGE_ENGLISH:
            out.language = 'en';
            break;
        case LANGUAGE_CHINESE:
            out.language = 'zh';
            break;
        case CHANGE_USER:
            out.userProfile = action.userProfile;
            break;
        default:
            return state;
    }
    return out;
};