import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
 const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1

        }
    ]),
    registerUser
)

router.post("/test-upload", upload.single("avatar"), async (req, res) => {
    const { path } = req.file;
    const result = await uploadOnCloudinary(path);
    res.json(result);
  });
  

 export default router