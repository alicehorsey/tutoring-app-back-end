DROP DATABASE IF EXISTS tutoring_app_dev;
CREATE DATABASE tutoring_app_dev;

\c tutoring_app_dev;

CREATE TABLE parents (
    parent_id SERIAL PRIMARY KEY,
    parent_forename VARCHAR(255) NOT NULL,
    parent_surname VARCHAR(255) NOT NULL,
    home_address VARCHAR(255) NOT NULL,
    phone_number INT NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    additional_information VARCHAR(255)
)