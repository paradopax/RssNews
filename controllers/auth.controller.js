'use strict';

let generateToken = (user) => {
    let payload = {

    };
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: '30d'
        }
    );
}

module.exports.register = (req, res) => {
    // return new user reg
}

module.exports.login = (req, res) => {
    // return access token
}

module.exports.profile = (req, res) => {
    // return profile info
}