import jwt from 'jsonwebtoken';


const authMiddleware = (req, res, next) => {
    const token = req.header('authorization')?.replace('Bearer ', '');
    
    if(!token){
        return res.status(401).json({
            message: 'access denied .No token provied'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Invalied token'
        })
    }
}
export default authMiddleware;