const router = require("express").Router();

router.get("/", (_, res) => {
  res.status(200).json({ status: 200, message: "Index" });
});

module.exports = router;
