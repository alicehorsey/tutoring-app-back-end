const workRouter = require("express").Router()
const { getAllTopics, getAllReadingBooks, getAllWorkBooks } = require('../controllers/workController')

workRouter.route("/topics")
    .get(getAllTopics)

workRouter.route("/reading-books")
    .get(getAllReadingBooks)

workRouter.route("/work-books")
    .get(getAllWorkBooks)


module.exports = workRouter