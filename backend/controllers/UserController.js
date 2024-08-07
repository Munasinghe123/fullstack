const User = require('../model/UserModel')

//display
const getAllUsers = async(req,res,next)=>{

    let users ; 

    // get all users
    try{
        users = await User.find()
    }
    catch(err){
        console.log(err)
    }

    //no users
    if(!users){
        return res.status(404).json({message:"no users"})
    }

    //displaying all the users
    return res.status(200).json({users})
}

//insert
const addUsers = async(req,res,next)=>{

    const{name,gmail,age,address}=req.body;

    let users;

    try{
        users= new User({name,gmail,age,address})
        await users.save()
    }
    catch(err){
        console.log(err)
    }

    //no users were added
    if(!users){
        res.status(404).json({message:"no users"})
    }
    res.status(200).json({users})
}

//get by id
const getById= async(req,res,next)=>{

    const id=req.params.id;

    let user;

    try{
        user =await User.findById(id)

    }catch(err){
        console.log(err)
    }
    //no users availabel
    if(!user){
        res.status(404).json({message:"no users"})
    }
    res.status(200).json({user})
}
//updating 
const updateUser = async (req,res,next)=>{

    const id = req.params.id
    const{name,gmail,age,address}=req.body;

    let user;

    try{
       user=await User.findByIdAndUpdate(id, {name:name, gmail:gmail, age:age, address:address})

       user=await user.save()

    }catch(err){
        console.log(err)
    }
    if(!user){
        res.status(404).json({message:"unabel to update details"})
    }
    res.status(200).json({user})
}
//delete

const deleteUser= async(req,res,next)=>{

    const id=req.params.id

    let user;

    try {
        user = await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err)
    }
    if(!user){
        res.status(404).json({message:"unabel to delete"})
    }
    res.status(200).json({user})
}


exports.getAllUsers=getAllUsers
exports.addUsers=addUsers
exports.getById=getById
exports.updateUser=updateUser
exports.deleteUser=deleteUser