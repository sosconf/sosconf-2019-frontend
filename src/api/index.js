import axios from 'axios';
import commonUtil from '../util/commonUtil';

export const post = (url, options) => {
    return new Promise ((resolve, reject) => {
        axios.post(url, options)
        .then(res => {

        })
    })
}

export const getProfile = () => {
    return new Promise((resolve, reject) => {
        let ticket = commonUtil.getTicket();
        if (ticket) {
            try {
                axios.post('https://api.sosconf.org/graphql/?', {
                    query:`query{userProfile(ticket:"${ticket}"){
                      userId
                      nickname
                      groupKind
                      skill
                      lang
                      userSex
                      userPhoto 
                      email
                      description
                      status
                      err
                    }}`
                }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            } catch (err) {
                console.error(err);
                reject(err);
            }
        }
    })
}

export const signin = () => {
    return new Promise ((resolve, reject) => {
        axios.get("https://api.sosconf.org/login")
            .then(res => {
                console.log(res.data)
            })
    })
}