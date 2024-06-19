INSERT INTO artist (alias, origin, active)
    VALUES
        ('Parliment', 'Plainfield NJ', '1968-present'),
        ('Bootsy Collins', 'Cincinnati OH', '1968-present'),
        ('Jimi Hendrix','Seattle WA', '1962-1970'),
        ('Slay and the family Stone', 'San Francisco CA','1966-1983'),
        ('Curtis Mayfield','Chicago IL', '1965-1999');


INSERT INTO label (founded, label)
    VALUES
        ('1958', 'Warner Bros'),
        ('1973', 'Casablanca'),
        ('1969', 'Invictus'),
        ('1889', 'Columbia'),
        ('1960', 'Reprise'),
        ('1953', 'Epic'),
        ('1968', 'Curtom'),
        ('1960', 'Reprise');



INSERT INTO genre (genre)
    VALUES
        ('Soul'),
        ('Funk'),
        ('p-funk'),
        ('cinematic soul'),
        ('electro funk'),
        ('progressive soul'),
        ('psychedelic soul'),
        ('rock'),
        ('psychedelic funk'),
        ('acid rock');

INSERT INTO poster (poster, size)
    VALUES
        ('parliment poster', '11x17'),
        ('Bootsy Collins poster', '11x17'),
        ('Jimi Hendrix poster', '11x17'),
        ('Sly and the family Stone poster', '11x17'),
        ('Curtis Mayfield poster', '11x17');


INSERT INTO album (title, artist_id, genre_id, label_id, yr_released, price)
    VALUES
        ('Osmium', 1, 7, 3, '1970', '$40.50'),
        ('Up for the Down Stoke', 1, 2 , 2,'1974', '$35.25'),
        ('Chocolate City', 1, 2, 2, '1975', '$27.35'),
        ('Mothership Connection', 1, 2, 2, '1975', '$30.12'),
        ('The Clone of Dr. Funkenstein', 1, 2, 2, '1976', '$34.25'),
        ('Funkentelechy vs. the Placebo Syndrome', 1, 2, 2, '1977', '$45.35'),
        ('Motor Booty Affair', 1, 2, 2, '1978', '$32.11'),
        ('Gloryhallastoopid', 1, 2, 2, '1979',
        '$26.25'),
        ('Trombipulation', 1, 2, 2, '1980', '$30.00'),
        ('Medicaid Fraud Dogg', 1, 1, 6,
        '2018', '$32.00'),
        ('Parliaments Greatest hits', 1, 3 , 2, '1984', '$50.00'),
        ('This Boot is made for FonkN', 2, 2, 1, '1979', '$25.00'),
        ('Whats Bootsy Doin?', 2, 5, 4, '1988', '$30.00'),
        ('Stretchin Out in Bootsys Rubber Band', 2, 1, 1, '1976', '$22.85'),
        ('Ahh...The name is Bootsy, Baby!!', 2, 1, 1, '1976', '$25.00'),
        ('Curtis', 5, 6, 7, '1970', '$30.00'),
        ('Roots', 5, 6, 7, '1971', '$34.25'),
        ('Super Fly', 5, 4, 7, '1972', '$25.14'),
        ('Back to the World', 5, 6, 7, '1973', '$27.25'),
        ('Axis: Bold as Love', 3, 10, 8, '1967', '$42.00'),
        ('Are you Experienced', 3, 10, 8, '1967', '$45.00'),
        ('Electric Ladyland', 3, 10, 8, '1968', '$32.00'),
        ('Aint but the One Way', 4, 1, 1, '1982', '$25.00'),
        ('Dance to the Music', 4, 6, 6, '1968', '$30.00'),
        ('Fresh', 4, 2, 6, '1973', '$45.00'),
        ('Life', 4, 2, 6, '1986', '$33.00'),
        ('Heard Ya Missed Me, Well Im Back', 4, 8, 6, '1976', '$29.00'),
        ('A Whole New Thing', 4, 8, 6, '1967', '$45.00'),
        ('There a Riot Goin on', 4, 8, 6, '1971', '$35.00');

