export default class LoginUtils {

    // Saves the token in the browser storage. 
    // Checks if the option to keep logged in is checked and depending on that save it in the local or session storage.
    static login(token, keepSession) {

        if(keepSession) {
            localStorage.setItem("user_token", token)
            sessionStorage.removeItem("user_token")
        } else {
            sessionStorage.setItem("user_token", token )
            localStorage.removeItem("user_token")
        }
    }
    
}