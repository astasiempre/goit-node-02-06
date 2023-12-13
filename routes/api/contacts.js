const express = require("express");

const ctrl = require("../../controllers/contacts");

const {validateBody, isValidId} = require("../../middlewares");
const router = express.Router();

const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAll );

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteContactById);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), ctrl.updateContactById);

router.patch("/:contactId/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContactById);

module.exports = router;
