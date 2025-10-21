const jwt = require('jsonwebtoken');
const Session = require('../model/sessionmodel');
const User = require('../model/usermodel');
const { getaccesstoken, getrefreshtoken } = require('../helper/helper');
const authmiddleware = async (req, res, next) => {

    const accesstoken = req.cookies.accesstoken;
    const refreshtoken = req.cookies.refreshtoken;
    req.user = null;

    if (!accesstoken && !refreshtoken) {
        return res.status(400).json({ msg: "you are unauthorized" })
    }

    if (accesstoken) {
        const decode = jwt.verify(accesstoken, process.env.my_secret);
        if(!decode){
            return res.status(400).json({ msg: "invalid credentials" })
        }

        req.user = { userid: decode.userid, role: decode.role, sessionid: decode.sessionid }
        next()

    } else if(refreshtoken) {
   
        const decode = jwt.verify(refreshtoken, process.env.my_secret);
         if(!decode){
            return res.status(400).json({ msg: "invalid credentials" })
        }

        const sessiondata = await Session.findOne({ _id: decode.sessionid });
        const userdata = await User.findOne({ _id: sessiondata.userid });

        const newaccesstoken = getaccesstoken(userdata, sessiondata);
        const newrefreshtoken = getrefreshtoken(sessiondata);

        res.cookie("accesstoken", newaccesstoken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 60 * 60 * 1000
        });

        res.cookie("refreshtoken", newrefreshtoken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000
        });

        req.user = { userid: userdata.userid, role: userdata.role, sessionid: sessiondata._id }
        next()
    }
}

module.exports = authmiddleware;