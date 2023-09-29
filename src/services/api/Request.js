import APIResponse from "./Response"

export default class APIRequest {

    // API URL
    _link = "http://192.168.1.150:5000/api"
    _requestJSON = {}

    // Receives the token from the user when there is a session initiated.
    getTokenFromStorage() {
        if (sessionStorage.getItem("user_token")) {
            return sessionStorage.getItem("user_token")
        }
        if (localStorage.getItem("user_token")) {
            return localStorage.getItem("user_token")
        }
        return undefined
    }

    // Añade un valor al json que se enviara en el cuerpo de la peticion
    addRequestValue(key, value) {
        this._requestJSON[key] = value
    }

    // Encode the password field in the body of the request before sending it.
    async encodePassword() {
        if (!this._requestJSON["password"]) {
            return false
        }
        const textAsBuffer = new TextEncoder().encode(this._requestJSON["password"]);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const digest = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        this._requestJSON["password"] = digest
        return true
    }
}