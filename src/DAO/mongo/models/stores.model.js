import mongoose from "mongoose";

const StoreModel = mongoose.model("stores", new mongoose.Schema({
    name:String,
    productos: []
}))

export default StoreModel;