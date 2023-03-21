const User = require("../models/users");

const signin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password)
      return res
        .status(404)
        .send({ success: false, message: "all field are required" });
    let user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .send({ success: false, message: "Account not found" });
    let isCorrectPassword = await bcrypt.compare(password, user.password);
    delete user._doc.password;
    if (isCorrectPassword) {
      return res.status(200).send({ success: true, user });
    } else {
      return res
        .status(404)
        .send({ success: false, message: "Invalid password or email" });
    }
  } catch (error) {}
};

const register = async (req, res) => {
  try {
    let { email, password, firstname, lastname } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res
        .stats(404)
        .send({ success: false, message: "User already exists" });

    const newUser = new User({ email, password, firstname, lastname });

    const createdUser = await newUser.save();

    return res.status(201).send({
      success: true,
      message: "Account created successfully",
      user: createdUser,
    });
  } catch (err) {
    res.status(404).send({ success: false, message: err });
  }
};

module.exports = { signin, register };
