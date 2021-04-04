import User from '../models/user.js'
import { mail } from '../helpers/mail.js'
import { isValid } from '../helpers/phoneValidator.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        console.log('some thins is wrong')
        res.status(404).json({})
    }
}

export const createUser = async (req, res) => {
  const { name, email, dob, phone } = req.body
  console.log(req.body)
    
    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: "A user with that email already exists!" })  
        }

        if (isValid(phone)) {
            const user = await User.create({name, email, dob, phone})
            mail(email)
            return res.status(200).json(user.email)
        } else {
          return res.status(400).json({ message: "Invalid phone number!"})
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' })
    }
    
}

export const login = async (req, res) => {

  const { email } = req.body
  console.log(req.body)
  try {
    const existingUser = await User.findOne({ email })

    if (!existingUser) {
        return res.status(404).json({ message: "No user with that email!" })  
    } else {
        return res.status(200).json(email)  
    }
  } catch(error) {
      res.status(500).json({ message: 'Something went wrong.' })
  }
}