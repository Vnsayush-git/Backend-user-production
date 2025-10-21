const jwt = require('jsonwebtoken');

 const getaccesstoken= (userdata, sessiondata)=>{
    const token= jwt.sign({userid:userdata._id, role:userdata.role, sessionid:sessiondata._id}, 
        process.env.my_secret,
        {expiresIn:'1h'}
    );
    return token
}

 const getrefreshtoken= ( sessiondata)=>{
    const token= jwt.sign({ sessionid:sessiondata._id}, 
        process.env.my_secret,
        {expiresIn:'1d'}
    );
    return token
}

module.exports={getaccesstoken, getrefreshtoken}