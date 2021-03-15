import jwt from 'jsonwebtoken';

function verifyToken(req, res, next){
    const token = req.headers['x-access-token'];
    console.log(token);
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, 'MY_SECRET', function(err, decoded) {
        console.log(err);
        if (err)
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        
        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

export default verifyToken;