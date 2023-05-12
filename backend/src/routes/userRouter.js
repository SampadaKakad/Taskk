const express = require("express");
const router = express.Router();

const UserCtrl = require("../controller/userController");


 router.post("/register", UserCtrl.PostRegisterdraft);


router.get("/getdata" , UserCtrl.getAllData);
router.get("/get_specific_user/:id" , UserCtrl.getUserData);

router.put("/update/:id" , UserCtrl.updateStatus);

router.put("/approve/:id" , UserCtrl.approveStatus);
router.post("/submit/:id" , UserCtrl.submitStatus);
router.put("/denied/:id" , UserCtrl.denieStatus);




module.exports = router;
