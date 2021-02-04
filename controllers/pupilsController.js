const { fetchAllPupils, fetchAllPupilsandParents } = require("../models/pupilsModel")
const pupilsRouter = require("../routes/pupilsRouter")

exports.getAllPupils = (req, res) => {
    fetchAllPupils().then((pupils) => {
        res.status(200).send(pupils)
    })
}

exports.getAllPupilsAndParents = (req, res) => {
    fetchAllPupilsandParents().then((pupilAndParentInfo) => {
        res.status(200).send(pupilAndParentInfo)
    })
}

