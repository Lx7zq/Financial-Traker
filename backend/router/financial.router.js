const FinancialContoller = require("../controllers/financial.controller");
const express = require("express");
const router = express.Router();

router.post(
    "/",
    FinancialContoller.create
);

router.get(
    "/",
    FinancialContoller.findAll
)

router.get("/:Id", 
    FinancialContoller.getById
);


router.get(
    "/user/:userId",
    FinancialContoller.findAllByUserId
)

router.put(
    "/:id",
    FinancialContoller.update
)

router.delete(
    "/:id",
    FinancialContoller.delete
)

module.exports = router;