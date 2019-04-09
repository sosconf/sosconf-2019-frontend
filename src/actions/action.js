export const LANGUAGE_ENGLISH = "LANGUAGE_ENGLISH";
export const LANGUAGE_CHINESE = "LANGUAGE_CHINESE";
export const CHANGE_TICKET = "CHANGE_TICKET";
export const changeToEnglish = () => ({
    type: LANGUAGE_ENGLISH
})

export const changeToChinese = () => ({
    type: LANGUAGE_CHINESE
})

export const changeTicket = () => ({
    type: CHANGE_TICKET
})