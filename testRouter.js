// const express = require("express");
// const router = express.Router();
// const testing = require("./testSchema");

// router.get("/", async (req, res) => {
//     try {
//       const test = await testing.find();
//       res.json(test);
//     } catch (err) {}
//   });
//   router.get("/:id", async (req, res) => {
//       try {
//         const test = await testing.findById(req.params.id);
//         res.json(test);
//       } catch (err) {
//           res.send('err'+err);
//       }
//     });
//   router.post("/", async (req, res) => {
//     const test = new testing({
//       name: req.body.name
//     });
//     try {
//       const a1= await test.save()
//       res.json(a1)
//     } catch (err) {
//       res.send("Error");
//     }
//   });
  