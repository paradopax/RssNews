'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SALT_LENGTH = parseInt(process.env.JWT_SALT_LENGTH);

const sourceModel = require('../models/source.model');
const userModel = require('../models/user.model');

const ERRORS = {
    emailBusy: "Email already used",
    wrongLogin: "Email or password wrong"
}

let generateToken = (user) => {
    let payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
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
    user.password = bcrypt.hashSync(user.password, SALT_LENGTH);
    
    try {
        let result = await userModel.create(user);
        res.status(200).json({
            token: generateToken(result)
        });
    }
    catch (err) {
        res.status(403).json({
            error: ERRORS.emailBusy
        });
    }   
}

module.exports.login = async (req, res) => {
    // return access token
    let user = req.joivalid;
    
    let result = await userModel.findOne({ where: {
        email: user.email
    }});

    if (result == null || !bcrypt.compareSync(user.password, result.password)) {
        res.status(403).json({
            error: ERRORS.wrongLogin
        });
        return;
    }
    
    res.status(200).json({
        token: generateToken(result)
    });
}

module.exports.profile = async (req, res) => {
    // return profile info
    let user = req.user;
    
    let result = await userModel.findByPk(user.id, {
        include: [{
            model: sourceModel,
            through: {
                attributes: ["notify", "createdAt"]
            }
        }]
    });
    
    res.status(200).json(result.Sources); // dummy test for middleware
}