exports.signUpValidator = (req, res , next) =>{
    const{name, email , password, username, bio} = req.body
    if(name && email && password && username && bio){
        next()
    }else{
        res.status(404).send({
            msg:"all input fields require"
        })
    }
}