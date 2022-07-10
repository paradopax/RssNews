'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SALT_LENGTH = 10;

const userModel = require('../models/auth.model');

let generateToken = (user) => {
    let payload = {
        id: user.id,
        name: user.name,
        email: user.email
    };
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: '30d'
        }
    );
}

module.exports.register = async (req, res) => {
    // return new user reg
    let user = req.joivalid;
    user.hashedpassowrd = bcrypt.hashSync(user.password, SALT_LENGTH);
    
    let result = await userModel.create(user);
    if (result.error) {
        res.status(403).json(result);
        return;
    }
    res.status(200).json({
        token: generateToken(user)
    });
}

module.exports.login = async (req, res) => {
    // return access token
    let user = req.joivalid;
    let result = await userModel.searchByEmail(user.email);
    if (result.error || !bcrypt.compareSync(user.password, result.password)) {
        res.status(403).json(result);
        return;
    }
    res.status(200).json({
        token: generateToken(user)
    });
}

module.exports.profile = (req, res) => {
    // return profile info
}