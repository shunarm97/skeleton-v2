const uuid = require('uuid')
const {hashPassword} = require('../tools/crypt')

const userDB = [
    {
        "id": "4c1e62a8-2472-46fd-906c-6b7f2e78e4c0",
        "first_name": "Alexander",
        "last_name": "Toscano",
        "email": "alex123@gmail.com",
        "password": "$2b$10$nifbNAVTc5oFKmzotQcU/uI8relj4RQj998tUng1LUm2RAQ1eD4Nu",
        "phone": "+5426483354521",
        "birthday_date": "19/02/2022",
        "rol": "normal",
        "profile_image": "c/images/image.png",
        "country": "colombia",
        "is_active": true,
        "verified": false
      }
    /*
    {
        id: "1",
        first_name: "alexander", 
        last_name:"toscano", 
        email:"alex@correo.com",
        password:"root", 
        phone: "+590123456789",
        birthday_date: "19/02/1997", 
        rol: "normal", 
        profile_image:"", 
        country: "Ecuador", 
        is_active: true, 
        verified: false 
    }
    */ 
]

const getAllUsers = () => {
    return userDB
    //? select * from user
}

const getUserById = (id) => {
    const data = userDB.filter(item => item.id === id)
    return data.length ? data[0] : false
    //? select * from users where id = ${id}
}

const createUser = (data) => {
    const newUser = {
        id: uuid.v4(), // obligatorio y unico 
        first_name: data.first_name, // obligatorio
        last_name:data.last_name, // obligatorio
        email:data.email,// obligatorio y unico
        password: hashPassword(data.password), // obligatorio
        phone: data.phone ? data.phone : '', // unico
        birthday_date: data.birthday_date, // obligatorio
        rol: 'normal', // obligatorio y por defecto "normal" 
        profile_image:data.profile_image ? data.profile_image : '', 
        country: data.country, // obligatorio
        is_active: true, // obligatorio y por defecto true
        verified: false  // obligatorio y por defecto false

    }
    userDB.push(newUser)
    return newUser
}

const editUser = (id, data) => {
    const index = userDB.findIndex((user) => user.id === id)
    if (index !== -1) {
        userDB[index] = {
        id: id,
        first_name: data.first_name, // obligatorio
        last_name:data.last_name, // obligatorio
        email:data.email,// obligatorio y unico
        password: userDB[index].password, // obligatorio
        phone: data.phone, // unico
        birthday_date: data.birthday_date, // obligatorio
        rol: data.rol, // obligatorio y por defecto "normal" 
        profile_image:data.profile_image, 
        country: data.country, // obligatorio
        is_active: data.is_active, // obligatorio y por defecto true
        verified: false  // obligatorio y por defecto false
        }
        return userDB[index]
    } else {
        return createUser(data)
    }
}

const deleteUser = (id) => {
    const index = userDB.findIndex(user => user.id === id)
    if (index !== -1) {
        userDB.splice(index, 1)
        return true
    } else {
        return false
    }
}

const getUserByEmail =(email) => {
    const data = userDB.filter(item => item.email === email)
    return data.length ? data[0] : false
        //? select * from users where email = ${email}

}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
    getUserByEmail
  }
  