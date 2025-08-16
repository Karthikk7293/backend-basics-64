import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, },
    age: { type: Number },
    role: { type: String, enum: ['admin', 'user', 'super admin'], default: 'user' },
    gender: { type: String },
    city: { type: String },

}, { timestamps: true })

userSchema.index({ email: 1, name: 1 })

const User = mongoose.model('user', userSchema)

export default User

