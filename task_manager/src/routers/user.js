const express = require("express");
const router = new express.Router();
const multer = require("multer");
const User = require("../models/user");
const auth = require("../middleware/auth");
// const { sendWelcomemail } = require('../emails/account')

router.post("/users", async (req, res) => {
  const user = new User(req.body);
 
  try {
    await user.save();
    // sendWelcomeEmail(user.email, user.name)     // To send email
    // sendWelcomemail(user.email, user.name)
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }

  //    Using promise with .then
  //    user.save().then((data) => {
  //         res.status(201).send(data)
  //    }).catch((error) => {
  //         res.status(400).send(error)
  //    })
});


router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCreadentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Logout route for user from one session
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });

    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// Logout route for user from all session
router.post("/users/logoutall", auth, async (req, res) => {
  try {
    req.user.tokens = [];

    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }

  //   User.find({})
  //     .then((users) => {
  //       res.send(users);
  //     })
  //     .catch((error) => {
  //       res.status(500).send(error);
  //     });
});

// get profile with auth token
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

// // get user by id
// router.get("/users/:id", async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const user = await User.findById(_id);
//     if (!user) {
//       return res.status(404).send("User not found");
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }

//   //   User.findById(_id)
//   //     .then((user) => {
//   //       if (!user) {
//   //         return res.status(404).send("user not found");
//   //       }
//   //       res.send(user);
//   //     })
//   //     .catch((error) => {
//   //       res.status(500).send(error);
//   //     });
// });

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ Error: "Invalid updates" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();

    //   const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //       new: true,
    //       runValidators: true
    //   })

    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.params.id);
    // if (!user) {
    //   return res.status(404).send("User not found");
    // }
    await req.user.remove();
    // sendCancelationEmail(req.user.email, req.user.name)   // To send email
    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Multer configuration
const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
});

// Uploading profile pic route
router.post(
  "/users/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send("Upload success");
  },
  (error, req, res, next) => {
    res.status(400).send({ Error: error.message });
  }
);

// Deleting avatar route
router.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.send();
});

// Get route to retrive avata
router.get('users/:id/avatar', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error("User or avatar not found.");
    }
    res.set('Content-Type', 'image/jpg')
    res.send(user.avatar);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
