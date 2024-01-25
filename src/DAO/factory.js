import config from "../config/config.js"
import mongoose from "mongoose"

export let Store 
export let User
export let Order

console.log(`Persistence with ${config.persistence}`)

switch (config.persistence) {
    case "MONGO":

        await mongoose.connect(config.mongoURL, { dbName: config.mongoDBName })
        console.log("db conected..")

        const { default: OrderMongo } = await import("./mongo/orders.mongo.js")
        const { default: UserMongo } = await import("./mongo/users.mongo.js")
        const { default: StoreMongo } = await import("./mongo/stores.mongo.js")

        Order = OrderMongo
        User = UserMongo
        Store = StoreMongo

        break;

    default:
        throw new Error("persistence not recognized")
}
