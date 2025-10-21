const cloudinary = require('cloudinary').v2;

const connectCloudinary = async () => {
    try {
       cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    // Add this to increase the timeout to, say, 30 seconds (30000ms)
    timeout: 30000 
});
        console.log("cloudinary connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectCloudinary;