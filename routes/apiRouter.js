const apiRouter = require("express").Router()
const pupilsRouter = require("./pupilsRouter")
const workRouter = require("./workRouter")

apiRouter.use("/pupils", pupilsRouter)
apiRouter.use("/work", workRouter)

module.exports = apiRouter