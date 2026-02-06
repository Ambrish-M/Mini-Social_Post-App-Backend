import {CloudinaryStorage} from "multer-storage-cloudinary"
import cloudinary from "../config/cloudinary.js"
import multer from "multer";

const storage=new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"mini-social-posts",
        allowed_formats:["jpg","jpeg","png","webp"]
    }
});

const upload=multer({storage})

export default upload;