import { OrderService } from "../services/index.js"

export const getOrders = async (req, res) => {
    const result = await OrderService.getOrders()
    res.json({status: "success", payload: result}) 
}

export const getOrderById = async (req, res) => {
    const { id } = req.params 
    const result = await OrderService.getOrderById(id)

    res.json({status: "succes", payload: result })
}

export const createOrder = async (req, res) =>{
    const order = req.body

    const result = await OrderService.createOrder(order)
    res.json({ status: "success", payload: result })
}
export const resolveOrder = async (req, res) =>{
    const { resolve } = req.query
    const { id } = req.params
    
    const result = await OrderService.resolveOrder(id, resolve)
    res.json({ status: "success", payload: result })
}