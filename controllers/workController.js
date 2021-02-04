const { fetchAllTopics, fetchAllReadingBooks, fetchAllWorkBooks } = require("../models/workModel")
const workRouter = require("../routes/workRouter")

exports.getAllTopics = (req, res) => {
    fetchAllTopics().then((topic) => {
        res.status(200).send(topic)
    })
}

exports.getAllReadingBooks = (req, res) => {
    fetchAllReadingBooks().then((readingBooks) => {
        res.status(200).send(readingBooks)
    })
}

exports.getAllWorkBooks = (req, res) => {
    fetchAllWorkBooks().then((workBooks) => {
        res.status(200).send(workBooks)
    })
}

