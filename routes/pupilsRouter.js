const pupilsRouter = require("express").Router()
const { getAllPupils, getAllPupilsAndParents } = require('../controllers/pupilsController')

pupilsRouter.route("/")
    .get(getAllPupils)

pupilsRouter.route("/parents")
    .get(getAllPupilsAndParents)



module.exports = pupilsRouter