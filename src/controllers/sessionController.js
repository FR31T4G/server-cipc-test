const connection = require('../database/connection');   
const jwt = require('jsonwebtoken');
const criptodados = require('../database/nodem');

module.exports = {
    async create(request,response){

        const {cpf_user,pw_user} = request.body;

        if(!cpf_user || !pw_user){
            response.status(401).json({'response':'Preencha todos os campos.'});
        }else{
            const user = await connection('users').select('*').where('cpf_user',cpf_user).first();
        if(user){
            const pw = criptodados.decrypt(user.pw_user,user.ipw_userv);
            if(pw_user!=pw){
                response.status(401).json({'response':'Sua senha está incorreta.'});
            }else{
                //Criando autenticação pelo JWT
                let token =jwt.sign({
                    'cod_user':user.cod_user,
                    'user_name':user.user_name,
                    'cpf_user':user.cpf_user,
                    'email_user':user.email_user,
                    'acess_level':user.acess_level_user
                },criptodados.getJwtkey(),
                {
                    'expiresIn':"24h",
                });
                const {'ipw_userv':ivtoken,'pwhash':tokenhash} = criptodados.encrypt(token); 
                const tokenfinal = String(tokenhash).concat(" Y0LjkuNDkuOSIsImVtYWlsX3VzZXIiOiJwb3NpQGdtYWlsLmNvbSIsImlhdCI6MTYxNzEyOTY0OCwiZX ",ivtoken)
                
                
                response.status(201).json({'response':'Autenticação foi um sucesso!','user_token':tokenfinal});
                
            }
            
        }else{
            response.status(401).json({'response':'Não existe um usuario cadastrado com esse CPF.'});
        }
        }

        
       
    }

};