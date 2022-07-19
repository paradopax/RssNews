'use strict';

const { Op } = require("sequelize");
const userCategoryModel = require('../models/usercategory.model');

const ERRORS = {
    create: "Can't create",
    update: "Can't update",
    delete: "Can't delete"
}

module.exports.create = async (req, res) => {
    // add new category
    let user = req.user;
    let category = req.joivalid;

    let toadd = {
        name: category.name,
        UserId: user.id
    }

    try {
        let ret = await userCategoryModel.create(toadd);
        res.status(200).json(ret);
    }
    catch (err) {
        console.log(err);
        res.status(403).json({
            error: ERRORS.create
        });
    }
}

module.exports.update = async (req, res) => {
    // update category
    let user = req.user;
    let category = req.joivalid;

    let toupdate = {
        name: category.name
    }

    try {
        let ret = await userCategoryModel.update(toupdate, {
            where: {
                [Op.and]: [
                    { id: category.id },
                    { UserId: user.id }
                ]
            }
        });
        if (ret[0] == 0) {
            throw(new Error("No category found"));
        }
        res.status(200).json({});
    }
    catch (err) {
        res.status(403).json({
            error: ERRORS.update
        });
    }
}

module.exports.delete = async (req, res) => {
    // delete
    let user = req.user;
    let category = req.joivalid;

    try {
        let ret = await userCategoryModel.destroy({
            where: {
                [Op.and]: [
                    { id: category.id },
                    { UserId: user.id }
                ]
            }
        });
        if (ret == 0)
            throw(new Error("Not found"));
        res.status(200).json({});
    }
    catch (err) {
        res.status(403).json({
            error: ERRORS.delete
        });
    }
}