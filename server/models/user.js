import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date },
    phone: {type: Number, required: true}
})

export default mongoose.model('User', userSchema)