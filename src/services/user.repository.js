export default class UserRepository {
    constructor(dao){
        this.dao = dao
    }

    getUsers = async ()=> { return this.dao.getUsers() }
    getUsersById = async id => { return this.dao.getUsersById(id) }
    register = async user => {
        user.role = "USER"
        return this.dao.saveUser(user)
    }
}

