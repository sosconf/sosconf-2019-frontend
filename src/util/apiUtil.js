import axios from 'axios';

export const post = (url, options) => {
    return new Promise ((resolve, reject) => {
        axios.post(url, options)
            .then(res => {
                
            })
    })
}

export const get = (url, options) => {
    return new Promise ((resolve, reject) => {
        axios.get(url, options)
            .then(res => {

            })
    })
}