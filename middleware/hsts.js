//Middleware function for enabling HTTP Strict Transport Security
function hsts(req, res, next){
    //Check if the request is secure
    if (req.secure) {
        //Set the HSTS header on the response
        res.setHeader(
            'Strict-Transport-Security',
            'max-age=31536000; includeSubDomains; preload'
        );
    }
    next();
}

module.exports = hsts;