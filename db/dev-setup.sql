DROP DATABASE IF EXISTS tutoring_app_dev;
CREATE DATABASE tutoring_app_dev;

\c tutoring_app_dev;

CREATE TABLE parents (
    parent_id SERIAL PRIMARY KEY,
    parent_forename VARCHAR(255) NOT NULL,
    parent_surname VARCHAR(255) NOT NULL,
    home_address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    additional_information VARCHAR(255)
);

CREATE TABLE pupils (
    pupil_id SERIAL PRIMARY KEY,
    parent_id INT REFERENCES parents(parent_id) NOT NULL,
    pupil_forename VARCHAR(255) NOT NULL,
    pupil_surname VARCHAR(255) NOT NULL,
    starting_date DATE,
    dob DATE,
    school VARCHAR(255) NOT NULL,
    year_group INT NOT NULL,
    handedness VARCHAR(255) NOT NULL,
    prelim_information VARCHAR(255),
    pupil_information VARCHAR(255)
);

CREATE TABLE topics (
    topic_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE reading_books (
    reading_book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publisher VARCHAR(255) NOT NULL
);

CREATE TABLE work_books (
    work_book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    publisher VARCHAR(255) NOT NULL
);

CREATE TABLE pupil_to_topics (
    pupil_id INT REFERENCES pupils(pupil_id) NOT NULL, 
    topic_id INT REFERENCES topics(topic_id) NOT NULL,
    completed BOOLEAN
);

CREATE TABLE pupil_to_reading_books (
    pupil_id INT REFERENCES pupils(pupil_id) NOT NULL, 
    reading_book_id INT REFERENCES reading_books(reading_book_id) NOT NULL,
    completed BOOLEAN
);

CREATE TABLE pupil_to_work_books (
    pupil_id INT REFERENCES pupils(pupil_id) NOT NULL, 
    work_book_id INT REFERENCES work_books(work_book_id) NOT NULL,
    completed BOOLEAN
);