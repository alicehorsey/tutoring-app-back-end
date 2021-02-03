const data = require("../data");

exports.seed = (connection) => {
    return connection
        .insert(data.parentsData)
        .into('parents')
        .returning('*')
        .then((parentRows) => {
            console.log(parentRows)

            return connection
                .insert(data.pupilsData)
                .into('pupils')
                .returning('*')
        })
        .then((pupilRows) => {
            console.log(pupilRows)

            return connection
                .insert(data.creativeTopicsData)
                .into('topics')
                .returning('*')
        })
        .then((topicsRows) => {
            console.log(topicsRows)

            return connection
                .insert(data.readingBooksData)
                .into('reading_books')
                .returning('*')
        })
        .then((readingBooksRows) => {
            console.log(readingBooksRows)

            return connection
                .insert(data.workBooksData)
                .into('work_books')
                .returning('*')
        })
        .then((workBooksRows) => {
            console.log(workBooksRows)
        })
}