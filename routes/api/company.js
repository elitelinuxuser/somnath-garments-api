const express = require("express");
const router = express.Router();
const Company = require("../../models/Company");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");

router.get("/all", auth, async (req, res) => {
  Company.find({}).then(company => {
    return res.json(company);
  });
});

router.post("/add", admin, async (req, res) => {
  const companyDetails = req.body;
  console.log(companyDetails);
  const company = new Company(companyDetails);
  company.save((err, result) => {
    if (err) console.log(err);
    else res.json(result);
  });
});

module.exports = router;
