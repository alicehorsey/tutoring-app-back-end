const data = require("../data");

exports.seed = (connection) => {
    return connection
        .insert(data.parentsData)
        .into('parents')
        .returning('*')
        .then((parentRows) => {
            // console.log(`inserted ${parentRows.length} rows into parents table`)

            return connection
                .insert(data.pupilsData)
                .into('pupils')
                .returning('*')
        })
        .then((pupilRows) => {
            // console.log(`inserted ${pupilRows.length} rows into pupils table`)

            return connection
                .insert(data.creativeTopicsData)
                .into('topics')
                .returning('*')
        })
        .then((topicsRows) => {
            // console.log(`inserted ${topicsRows.length} rows into topics table`)

            return connection
                .insert(data.readingBooksData)
                .into('reading_books')
                .returning('*')
        })
        .then((readingBooksRows) => {
            // console.log(`inserted ${readingBooksRows.length} rows into reading_books table`)

            return connection
                .insert(data.workBooksData)
                .into('work_books')
                .returning('*')
        })
        .then((workBooksRows) => {
            // console.log(`inserted ${workBooksRows.length} rows into work_books table`)
        })
}