DROP DATABASE IF EXISTS funkmothership;
CREATE DATABASE funkmothership;
USE funkmothership;

CREATE TABLE user (
    user_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(30) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    password VARCHAR(20) NOT NULL,
     CONSTRAINT pk_user_id PRIMARY KEY (user_id)
);

CREATE TABLE artist (
    artist_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    alias VARCHAR(40),
    origin VARCHAR(40),
    active VARCHAR(40),
    imgUrl VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_artist PRIMARY KEY (artist_id)
);

CREATE TABLE label (
    label_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    label VARCHAR(40),
    founded VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_label PRIMARY KEY (label_id)
);

ALTER TABLE label
DROP COLUMN labels;

ALTER TABLE label ADD column label VARCHAR(60)
after founded;

USE funkmothership;
CREATE TABLE genre (
    genre_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);

CREATE TABLE poster (
    poster_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    poster VARCHAR(40),
    size ENUM('11x17', '18x24', '22x34', '24x36', '27x40'),
    imgUrl VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_poster PRIMARY KEY (poster_id)
);


    
CREATE TABLE album (
    album_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(70),
    artist_id INT UNSIGNED NOT NULL,
    genre_id INT UNSIGNED NOT NULL,
    label_id TINYINT UNSIGNED NOT NULL,
    yr_released YEAR NOT NULL,
    price VARCHAR(10),
    imgUrl VARCHAR(100),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_album PRIMARY KEY (album_id),
    CONSTRAINT fk_artist FOREIGN KEY (artist_id) REFERENCES artist (artist_id),
    CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
    CONSTRAINT fk_label FOREIGN KEY (label_id) REFERENCES label (label_id)
); 

CREATE TABLE album_to_genre (
    album_id INT UNSIGNED NOT NULL,
    genre_id TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_album FOREIGN KEY (album_id) REFERENCES album (album_id),
    CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);







UPDATE album SET imgUrl = NOT NULL;

/*resetting auto increment */
SET @num := 0;
UPDATE my_table SET id = @num := (@num + 1);
ALTER TABLE my_table AUTO_INCREMENT = 1;