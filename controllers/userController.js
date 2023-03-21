const User = require("../models/users")
const signin = (req, res) => {
    try {
        
    } catch (err) {
        res.status(404).send({success: false, message: err.message});
    }
}

const register = async (req, res) => {
    try {
    let {email, password, firstname, lastname} = req.body
    const user = await User.findOne({email})
    if(user) return res.status(404).send({success: false, message: "user already exists"})
    const newUser = new User({email,password,firstname, lastname})  
    const creatUser= await newUser.save()
    return res.status(201).send({success:true, message: "user created successfully"})
    } 
    catch (err)
    {
        res.status(404).send({success: false, message: err.message});
    }

}
module.exports = {register , signin}
//await : code asynchrone (code prend du temps )