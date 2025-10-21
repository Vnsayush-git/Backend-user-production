
const { getaccesstoken, getrefreshtoken } = require('../helper/helper');
const Session = require('../model/sessionmodel');
const User = require('../model/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;





exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        console.log(req.body);

        if (!name || !email || !password) {
            return res.status(400).json("all field required")
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json("user already register")
        }

        const hashpassword = await bcrypt.hash(password, 10);
        const userdata = new User({ name, email, password: hashpassword, role });
        await userdata.save();

        const sessiondata = new Session({
            userid: userdata._id, ip: req.clientIp, agent: req.header('user-agent')
        });
        await sessiondata.save();

        const accesstoken = getaccesstoken(userdata, sessiondata);
        const refreshtoken = getrefreshtoken(sessiondata);

        console.log(accesstoken, "accesstoken");
        console.log(refreshtoken, "refreshtoken");

        res.cookie("accesstoken", accesstoken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 60 * 60 * 1000
        });

        res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({ msg: "register done" })



    } catch (error) {
        console.log(error);
        res.status(500).json("server error")
    }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log('Login request body:', req.body);

    if (!email || !password) {
      const error = new Error('All fields are required');
      error.status = 400;
      return next(error);
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      const error = new Error('Invalid credentials');
      error.status = 400;
      return next(error);
    }

    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (!isPasswordValid) {
      const error = new Error('Invalid credentials');
      error.status = 400;
      return next(error);
    }

    const sessiondata = new Session({
      userid: userExist._id,
      ip: req.clientIp,
      agent: req.header('user-agent'),
    });
    await sessiondata.save();

    const accesstoken = getaccesstoken(userExist, sessiondata);
    const refreshtoken = getrefreshtoken(sessiondata);

    console.log('Access Token:', accesstoken);
    console.log('Refresh Token:', refreshtoken);

    res.cookie('accesstoken', accesstoken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.cookie('refreshtoken', refreshtoken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ msg: 'Login successful', user: userExist });
  } catch (err) {
    console.error('Login error:', err);
    next(err); // pass to centralized error handler
  }
};



exports.logout = async (req, res) => {
    try {

        res.clearCookie("accesstoken", {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 60 * 60 * 1000
        });
        res.clearCookie("refreshtoken", {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000
        });

        await Session.deleteOne({ _id: req.user.sessionid });
        return res.status(200).json({ msg: "logout successful" });

    } catch (error) {
        console.log(error);
        res.status(500).json("server error")
    }
}

exports.myProfile = async (req, res) => {
    try {

        const userid = req.user.userid;
        
        const user = await User.findOne({ _id: userid }).select({ password: 0 });

        if (!user) {
            return res.status(400).json({ msg: "user not found" });
        }

        return res.status(200).json({ user: user });

    } catch (error) {
        console.log(error);
        res.status(500).json("server error")
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const { name, address, password, phone } = req.body;

        const userid = req.user.userid;
        const user = await User.findOne({ _id: userid });

        if (!user) {
            return res.status(400).json({ msg: "user not found" });
        }

        if (req.file && req.file.path) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                resource_type: 'image',
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                invalidate: true
            });
            console.log(result);
            user.profile = result.secure_url;
        }

        if (name) user.name = name;
        if (password) user.password = await bcrypt.hash(password, 10);
        if (address) user.address = address;
        if (phone) user.phone = phone;
        await user.save()
        return res.status(200).json({ msg: "profile updated ", user: user });


    } catch (error) {
        console.log(error);
        res.status(500).json("server error")
    }
}












