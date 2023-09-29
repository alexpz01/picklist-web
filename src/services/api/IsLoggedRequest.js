import Request from "./Request";

export default class IsLoggedRequest extends Request {

    // Check if the user is logged in
    isLogged() {
        const promise = new Promise((resolve, reject) => {
            if (!this.getTokenFromStorage()) {
                reject(false)
                return false
            }
            fetch(this._link + "/isvalidtoken", {headers : {"Authorization" : "Bearer " +  this.getTokenFromStorage()}})
            .then((result) => {
                return result.json()
            }).then(({status}) => {
                if (status) {
                    resolve(true)
                } else {
                    reject(false)
                }
            })
        })
        return promise
    }
}