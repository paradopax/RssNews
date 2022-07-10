module.exports.validation = (schema) => {
    return (req, res, next) => {
        let validation = schema.validate(req.body);
        if (validation.error) {
            res.send({
                error: validation.error.details.message
            });
            return;
        }
        req.joivalid = validation.value;
        next();
    }
}