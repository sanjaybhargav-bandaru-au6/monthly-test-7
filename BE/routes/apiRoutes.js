const {Router} = require("express");
const upload = require("../multer");
const {authorization} = require("../middleware/authorization");
const {register, login, logout} = require("../controllers/userController");
const {addData, getAllPublicPosts} = require("../controllers/dataController");
const router = Router();

// ------------------------User Routes---------------------//
router.get("/", (req,res)=>res.send("this is an api"));
router.post("/register", register);
router.post("/login", login);
router.delete("/logout", authorization, logout);

// -------------------------------Data Routes---------------------//

router.post("/addData", authorization, upload.single("image"), addData);
router.get("/allPublicPosts", getAllPublicPosts);

module.exports = router;
