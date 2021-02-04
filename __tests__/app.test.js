process.env.NODE_ENV = "development";
const app = require("../app");
const request = require("supertest");
const connection = require("../db/connect");


describe("/api", () => {
    afterAll(() => {
        return connection.destroy()
    })
    describe("/pupils", () => {
        test("GET - status 200 - returns an array of all pupils", () => {
            return request(app)
                .get("/api/pupils")
                .expect(200)
                .then(({ body: { pupils } }) => {
                    expect(Array.isArray(pupils)).toBe(true)
                    expect(Object.keys(pupils[0])).toEqual(expect.arrayContaining([
                        "pupil_id",
                        "parent_id",
                        "pupil_forename",
                        "pupil_surname",
                        "starting_date",
                        "dob",
                        "school",
                        "year_group",
                        "handedness",
                        "prelim_information",
                        "pupil_information"
                    ]))
                })
        })
    })
    describe("/pupils-parents", () => {
        test("GET - status 200 - returns an array of all pupils with parents information too", () => {
            return request(app)
                .get("/api/pupils/parents")
                .expect(200)
                .then(({ body: { pupilAndParentInfo } }) => {
                    expect(Array.isArray(pupilAndParentInfo)).toBe(true)
                    expect(Object.keys(pupilAndParentInfo[0])).toEqual(expect.arrayContaining([
                        "parent_id",
                        "parent_forename",
                        "parent_surname",
                        "home_address",
                        "phone_number",
                        "email_address",
                        "parent_information",
                        "pupil_id",
                        "pupil_forename",
                        "pupil_surname",
                        "starting_date",
                        "dob",
                        "school",
                        "year_group",
                        "handedness",
                        "prelim_information",
                        "pupil_information"
                    ]))
                })
        })
    })
    describe("/topics", () => {
        test("GET - status 200 - returns an array of all topics", () => {
            return request(app)
                .get("/api/work/topics")
                .expect(200)
                .then(({ body: { topics } }) => {
                    expect(Array.isArray(topics)).toBe(true)
                    expect(Object.keys(topics[0])).toEqual(expect.arrayContaining([
                        "topic_id",
                        "title"
                    ]))
                })
        })
    })
    describe("/reading-books", () => {
        test("GET - status 200 - returns an array of all reading books", () => {
            return request(app)
                .get("/api/work/reading-books")
                .expect(200)
                .then(({ body: { readingBooks } }) => {
                    expect(Array.isArray(readingBooks)).toBe(true)
                    expect(Object.keys(readingBooks[0])).toEqual(expect.arrayContaining([
                        "reading_book_id",
                        "title",
                        "author",
                        "publisher"
                    ]))
                })
        })
    })
    describe("/work-books", () => {
        test("GET - status 200 - returns an array of all work books", () => {
            return request(app)
                .get("/api/work/work-books")
                .expect(200)
                .then(({ body: { workBooks } }) => {
                    expect(Array.isArray(workBooks)).toBe(true)
                    expect(Object.keys(workBooks[0])).toEqual(expect.arrayContaining([
                        "work_book_id",
                        "title",
                        "publisher"
                    ]))
                })
        })
    })
})