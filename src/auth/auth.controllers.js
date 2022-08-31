const { comparePassword } = require('../tools/crypt')
const {getUserByEmail} = require('../users/users.controllers')

const  loginUser = (email, password)=> {
    const user = getUserByEmail(email)
    //? user.password contrseña hasheada
    //* password contraseña en texto plano

    if(user) {
        const verify_password = comparePassword(password, user.password)
        if(verify_password){
            return user
        }
    }
    return false
}
console.log(loginUser("alex123@gmail.com", "maximos" ))