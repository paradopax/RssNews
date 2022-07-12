module.exports = (schema) => {
    return (req, res, next) => {
        let validation = schema.validate(req.body);
        if (validation.error) {
            res.status(403).json({
                error: validation.error.details.message
            });
            return;
        }
        req.joivalid = validation.value;
        next();
    }
}