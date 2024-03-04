const Comic = require("../models/comic")

module.exports = (req, res, next) => {
    req.db = {
        Comic,
    };
    next();
};