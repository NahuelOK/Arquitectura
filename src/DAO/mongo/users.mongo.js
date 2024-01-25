import UserModel from "./models/user.model.js"

export default class User {
    getUsers = async () => { return UserModel.finde() }
    getUserById = async id => { return UserModel.findById(id) }
    saveUser = async user => { return UserModel.create(user) }
}