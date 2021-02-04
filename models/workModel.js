const connection = require("../db/connect")


exports.fetchAllTopics = () => {

    return connection
        .select("*")
        .from("topics")
        .then((topicsRows) => {
            return { topics: topicsRows }
        })
}

exports.fetchAllReadingBooks = () => {

    return connection
        .select("*")
        .from("reading_books")
        .then((readingBooksRows) => {
            return { readingBooks: readingBooksRows }
        })
}

exports.fetchAllWorkBooks = () => {

    return connection
        .select("*")
        .from("work_books")
        .then((workBooksRows) => {
            return { workBooks: workBooksRows }
        })
}

