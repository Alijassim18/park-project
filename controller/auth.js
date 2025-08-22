const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const SECRET = process.env.SECRET || "dev_secret";

exports.register = async (req, res) => {
  try {
    const { email, name, password, role } = req.body


    if (!email || !name || !password) {
      return res
        .status(400)
        .json({ message: "Email, name, and password are required" })
    }

   
    const existing = await Admin.findOne({ email })
    if (existing) {
      return res.status(400).json({ message: "Email already exists" })
    }

    
    const passwordHash = await bcrypt.hash(password, 8)


    const newUser = new Admin({
      email,
      name,
      passwordHash,
      role: role || "customer",
    })

    await newUser.save()

    res
      .status(201)
      .json({ message: `${newUser.role} registered successfully` })
  } catch (err) {
    console.error("Register error:", err)
    res.status(500).json({ message: "Server error" })
  }
}


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await Admin.findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("User found:", user);

    const isValid = await bcrypt.compare(password, user.passwordHash);
    console.log("Password valid?", isValid);

    if (!isValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.role === "admin") {
      return res.json({
        message: "Admin login successful",
        role: user.role,
      });
    }

    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });

    res.json({
      message: "Customer login successful",
      token,
      role: user.role,
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
