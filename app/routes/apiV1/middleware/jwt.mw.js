const jwt = require('jsonwebtoken');

// TODO: fix
module.exports =  (req, res, next) => {
    let bearerToken = req.headers['authorization'];
    if (bearerToken) {
        let bearer, token;
        try {
            bearer = bearerToken.split(" ");
            token = bearer[1];
        }
        catch (err) {
            res.status(401).json({
                error: "Missing bearer token"
            });
            return;
        }
        
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if (err) {
                res.status(403).json({
                    error: "Missing bearer token"
                });
                return;
            }
            req.token = token;
            req.user = decoded;
            next();
        });
    }
    else {
        res.status(401).json({
            error: "Missing bearer token"
        });
    }
}