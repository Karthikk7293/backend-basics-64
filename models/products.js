import mongoose, { Schema } from "mongoose";

const porductSchema = new Schema({
    title: { type: String, required: true, },
    description: { type: String, required: true, },
    price: { type: String, required: true },
    image: { type: String },

}, { timestamps: true })

const Product = mongoose.model('product', porductSchema)

export default Product
