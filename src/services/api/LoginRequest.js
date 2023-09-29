import APIRequest from "./Request";

export default class LoginRequest extends APIRequest {

    setUsername(username) {
        this._requestJSON["user"] = username
    }

    async setPassword(password) {
        this._requestJSON["password"] = password
    }

    // Logs in if the data entered is correct by sending a request to the api to check it.
    async login() {
        await this.encodePassword()
        const promise = new Promise((resolve, reject) => {
            fetch(this._link + "/login", {method : "POST", headers: {
                'Content-Type': 'application/json'
              }, body : JSON.stringify(this._requestJSON)})
            .then((result) => {
                return result.json()
            }).then(({status, result}) => {
                if (status) {
                    resolve(result[0])
                } else {
                    reject(result.map((errorvalue) => {return errorvalue.split("R: ")[1]}))
                }
            })
        })
        return promise
    }
}