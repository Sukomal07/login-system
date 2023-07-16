const User = require('../model/userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
    try {
        const { name, email, password, username, bio } = req.body

        const emailExist = await User.findOne({ email })
        if (emailExist) {
            return res.status(401).json({
                message: "User with this email already exists",
            });
        }

        const hashPassword = await bcryptjs.hash(password, 10)
        const user = new User({
            name,
            email,
            password: hashPassword,
            username,
            bio
        })
        await user.save()
        res.status(201).json({
            success: true,
            message: "User registered successfully"
        })
    } catch (error) {
        res.status(501).json({
            error
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const isCorrectPassword = await bcryptjs.compare(password, user.password)
        if (!isCorrectPassword) {
            return res.status(401).json({
                message: "Invalid username or password"
            })
        }

        const token = jwt.sign({ user: user._id, username: user.username }, process.env.SECRET)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 1000,
        })
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(501).json({ error })
    }
}
exports.getUserDetails = async (req, res) => {
    try {
        const { username } = req.user;
        const userData = await User.findOne({username});
        res.status(200).json({
            success: true,
            data: userData
        })
    } catch (error) {
        res.status(501).json({ error })
    }
}
