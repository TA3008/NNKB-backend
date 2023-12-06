const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    const userId = request.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user){
        if(err){
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERR'
            })
        }
        const {payload} = user
        if(payload?.isAdmin){
            next()
        }
        else{
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERR'
            })
        }
    })
}

const authUserMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user){
        if(err){
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERR'
            })
        }
        const {payload} = user
        if(payload?.isAdmin || payload?.id === userId){
            next()
        }
        else{
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERR'
            })
        }
    })
}

module.exports = {
    authMiddleWare,
    authUserMiddleWare
}