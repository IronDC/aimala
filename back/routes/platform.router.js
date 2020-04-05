const express = require("express");
const PlatformModel = require("../models/Platform");
const UserModel = require("../models/User");
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

router.get('/',async (req, res, next) => {
  try{
    const platforms = await PlatformModel.find()
    return res.json(platforms);
  } catch (error) {
    return res.status(500).json({ status: "Platforms Not Found" });
  }
    // .populate('creator')
    // .populate({ path: 'comments', populate: { path: 'author' } })
    // .then((movies) => {
    //   res.json(movies);
    // })
    
});

//CREATE Platform the Aimala DB
router.post("/create", async (req, res, next) => {
  console.log("Adding platform to the Aimala DB");
  const newPlatform = await PlatformModel.create(req.body);
  console.log(`${req.body.name} creado`);
  return res.json({ status: 200, message: "New Platform Created" });
});

// EDITAR PLATAFORMA

router.put("/:id/edit", async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(`Editing Platform`);
    await PlatformModel.findByIdAndUpdate(id,req.body, { new: true} );
    return res.json({ status: "Edited Platform" });
  } catch (error) {
    return res.status(401).json({ status: "Platform Not Found" });
  }
});

// GUARDAR PLATAFORMA EN USER.PLATFORMSOWNED

// router.put("/:id/add", isLoggedIn(), async (req, res, next) => {
//   try {
//     console.log(req.user);
//     const platformid = req.params.id;
//     const userid = req.user.id;
//     console.log(`Adding platform ${platformid} to user ${userid}`);
//     const user = await UserModel.findById(userid);
//     console.log(user);
//     user.platformsOwned.push(platformid);
//     user.save();
//     return res.json({ status: "Added Platform to user" });
//   } catch (error) {
//     return res.status(401).json({ status: "Platform Not Found" });
//   }
// });

// BORRAR JUEGO DE LA BBDD GENERAL

router.delete("/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const platformid = req.params.id;
    console.log(`Platform's id to delete ${platformid}`);
    await PlatformModel.findByIdAndDelete(platformid);
    return res.json({ status: "Platform Deleted" });
  } catch (error) {
    return res.status(401).json({ status: "Platform Not Found" });
  }
});

module.exports = router;
