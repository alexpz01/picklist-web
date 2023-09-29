import APIRequest from "./Request"

export default class SignUpRequest extends APIRequest {
   
    setName(name) {
        this._requestJSON["name"] = name
    }

    setUsername(username) {
        this._requestJSON["user"] = username
    }

    async setPassword(password) {
        this._requestJSON["password"] = password
    }

    setMail(mail) {
        this._requestJSON["mail"] = mail
    }

    // Sends the new user information to the api for processing.
    async signUp() {
        await this.encodePassword()
        const promise = new Promise((resolve, reject) => {
            fetch(this._link + "/signup", {method : "POST", headers: {
                'Content-Type': 'application/json'
              }, body : JSON.stringify(this._requestJSON)})
            .then((result) => {
                return result.json()
            }).then(({status, result}) => {
                if (status) {
                    resolve(true)
                } else {
                    reject(result.map((errorvalue) => {return errorvalue.split("R: ")[1]}))
                }
            })
        })
        return promise
    }

    
}