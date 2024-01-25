import { UserService } from "../services/index.js"

export const getUsers = async (req, res) => {
    const result = await UserService.getUsers()
    res.json({status: "success", payload: result}) 
}

export const getUserById = async (req, res) => {
    const { id } = req.params 
    const result = await UserService.getUsersById(id)
    res.json({status: "succes", payload: result })
}

export const register = async (req, res) =>{
    const user = req.body

    const result = await UserService.register(user)
    res.json({ status: "success", payload: result })
}