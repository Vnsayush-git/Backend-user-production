const {z} = require('zod');

const userSchema= z.object({
    name:z.string({message:"name required"}).trim().min(5,  "min 5 char required").max(25, "max 25 char required"),
    email:z.email({message:"email is required"}).trim(),
    password:z.string({message:"password is required"}).trim(),
    phone:z.string({message:"phone is required"}).trim(),
    address:z.string({message:"address is required"}).trim(),
    profile:z.string({message:"profile is required"}).trim()    
})

module.exports=userSchema