const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const SECRET = process.env.SECRET || "dev_secret";

async function createAdmin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    const passwordHash = await bcrypt.hash(password, 8);

    const newAdmin = await Admin.create({
      email,
      passwordHash,
      role: "admin",
    });

    const payload = { id: newAdmin._id, role: newAdmin.role };
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });

    res.status(201).json({
      message: "Admin created successfully",
      role: newAdmin.role,
      token,
    });
  } catch (err) {
    console.error("Error creating admin:", err);
    res.status(500).json({ error: err.message });
  }
}

async function getAdmin(req, res) {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    console.error("Error getting admins:", err);
    res.status(500).json({ error: err.message });
  }
}

async function updateAdmin(req, res) {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (admin) res.status(200).json(admin);
    else res.sendStatus(404);
  } catch (err) {
    console.error("Error updating admin:", err);
    res.status(500).json({ error: err.message });
  }
}

async function deleteAdmin(req, res) {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (admin) res.status(200).json(admin);
    else res.sendStatus(404);
  } catch (err) {
    console.error("Error deleting admin:", err);
    res.status(500).json({ error: err.message });
  }
}

async function AdminById(req, res) {
  try {
    const admin = await Admin.findById(req.params.id);
    if (admin) res.status(200).json(admin);
    else res.sendStatus(404);
  } catch (err) {
    console.error("Error getting admin by ID:", err);
    res.status(500).json({ error: err.message });
  }
}


module.exports = {
  createAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin,
  AdminById
};
