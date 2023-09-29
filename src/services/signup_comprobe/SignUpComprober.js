// Methods that check if the data entered when creating a new user are correct.
export default class SignUpComprober {
    textError = "";
    name;
    username;
    mail
    pass;
    rpass;


    constructor(name, username, mail, passw, rpass) {
        this.name = name 
        this.username = username 
        this.mail = mail 
        this.pass = passw
        this.rpass = rpass
    }

    isPermmited(regexRule, string) {
        if (regexRule.exec(string)[0] != string) {
            return false
        } 
        return true
    }

    isCorrect(string, ...roules) {
        let error = 0
        roules.map((roule) => {
            if (!roule.test(string)) {
                error++
            }
        })
        if (error > 0) {
            return false
        }
        return true
    }

    comprobeName() {
        const permitted = /[A-Za-z ]+/
        if (this.name.length < 3 || this.name.length > 50) {
            this.textError = "El nombre completo debe contener ente 3 y 50 caracteres"
            return false
        }
        if (!this.isPermmited(permitted, this.name)) {
            this.textError = "El nombre no pueden contener numeros ni simbolos"
            return false
        }
        return true
    }

    comprobeUserName() {
        const permitted = /[A-Za-z0-9\-_]+/
        if (this.username.length < 3 || this.username.length > 20) {
            this.textError = "El nombre de usuario debe contener ente 3 y 20 caracteres"
            return false
        }
        if (!this.isPermmited(permitted, this.username)) {
            this.textError = "El nombre de usuario contiene caracteres no validos"
            return false
        }
        return true
    }

    comprobeEmail() {
        if (!this.isCorrect(this.mail, /(@)/) || 
        !this.isCorrect(this.mail, /(\.)/) ||
        this.isCorrect(this.mail, /[ ]/) || 
        this.mail.length < 3) {
            this.textError = "El email no es valido"
            return false
        }
        return true
    }

    comprobePassword() {
        if (this.pass.length < 7 || this.pass.length > 25) {
            this.textError = "La contraseña debe contener ente 7 y 25 caracteres"
            return false
        }
        if (!this.isCorrect(this.pass, /[A-Z]/, /[a-z]/, /[0-9]/)) {
            this.textError = "La contraseña debe contener al menos una letra mayuscula, una minuscula y un numero"
            return false
        }
        return true
    }

    comprobeRepeatPassword() {
        if (this.pass != this.rpass) {
            this.textError = "Las contraseñas no coinciden"
            return false
        }
        return true
    }
}