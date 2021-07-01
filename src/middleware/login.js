const criptodados = require('../database/nodem')
const jwt = require('jsonwebtoken');


exports.validation =(request,response,next)=> {
        try{
            const tokenhash = request.headers.authorization.split(' ')[0];
            const ivtoken = request.headers.authorization.split(' ')[2];
            const token = criptodados.decrypt(tokenhash,ivtoken)
            const decode = jwt.verify(token,criptodados.getJwtkey());
            next();
            
        }catch(error){
            return response.status(401).json({"response":"Falha na autenticação."});
        }  
}
