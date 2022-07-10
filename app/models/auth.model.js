'use strict';

const database = require('../../database').getDB();

const QUERIES = {
    create: 'INSERT INTO users(email, password, name, since) VALUES($1, $2, $3, NOW()) RETURNING *',
    searchByEmail: 'SELECT * FROM Users WHERE email = $1::text'
}

module.exports.create = async (user) => {

    let query = {
        text: QUERIES.create,
        values: [
            user.email,
            user.hashedpassowrd,
            user.name
        ]
    }
    try {
        const res = await database.query(query);
        return res.rows[0];
    }
    catch (err) {
        return {
            error: "Email busy"
        };
    }
}

module.exports.searchByEmail = async (email) => {
    let query = {
        text: QUERIES.searchByEmail,
        values: [
            email
        ]
    }
    try {
        const res = await database.query(query);
        if (res.rowCount == 0) throw(new Error("No email find"));
        return res.rows[0];
    }
    catch (err) {
        console.log(err);
        return {
            error: "Email or password wrong"
        };
    }
    return res;
}