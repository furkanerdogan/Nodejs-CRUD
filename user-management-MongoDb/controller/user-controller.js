const User=require("../model/User")

/*Read*/

const getAllUsers=async(req,res,next)=>{
    let users;
    try{
        users= await User.find();
    }
    catch(err)
    {
        return next(err)
    }

    if(!users){
        return res.status(500).json({message:"unable to get"})
    }

return res.status(200).json({users})
};
/*Read by id*/
const getUserById=async(req,res,next)=>{
    const id=req.params.id; 

    let users;
    try{
        users= await User.findById(id);
    }
    catch(err)
    {
        return next(err)
    }

    if(!users){
        return res.status(404).json({message:"unable to find user with id"})
    }

return res.status(200).json({users})
};
/*Create*/
const addUser=async(req,res,next)=>{
   const {name, email, password}= req.body;

   if(!name && name.trim()==="" && !email && email.trim()==="" && !password &&password.lenght>=6) 
   {
    return res.status(442).json({message:"invalid data"});
   }
let user;
        try {
            user=new User({
                name, //=> name:name  (es6 proporty)
                email,
                password,
            });
            user= await user.save();
        } 
        catch (error) {
            return next(error)         
        }

        if(!user){
            return res.status(500).json({message:"unable to add"});
        }
return res.status(201).json({user})
}
/*Update */
const updateUser=async(req,res,next)=>{
    const id=req.params.id; 
    const {name, email, password}= req.body;

    if(!name && name.trim()==="" && !email && email.trim()==="" && !password &&password.lenght>=6) 
    {
     return res.status(442).json({message:"invalid data"});
    }
    let user;

    try {
        user = await User.findByIdAndUpdate(id,{name,email,password});
    } catch (error) {
        return next(error);
    }
    if(!user){
        return res.status(500).json({message:"unable to update"});
    }
    return res.status(200).json({message:"updated user"});

}
/*Delete */

const deleteUser=async(req,res,next)=>{
    const id=req.params.id; 
    let user;
    try {
        user =  await User.findByIdAndDelete(id);
    } catch (error) {
        return next(error);

    }
    if(!user){
        return res.status(500).json({message:"unable to delete"});
    }
    return res.status(200).json({message:"deleted user"});
}





exports.getAllUsers=getAllUsers;
exports.addUser=addUser;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;
exports.getUserById=getUserById;
