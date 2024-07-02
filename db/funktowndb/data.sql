INSERT INTO user (fName, lName, email, phone, password)
    VALUES (
        'Robert',
        'Morris',
        'morrisrobert696@gmail',
        '6017779311',
        'Test123!'
    );

INSERT INTO artist (alias, origin, active, imgUrl)
    VALUES
        ('Parliment', 'Plainfield NJ', '1968-present', 'ParliamentFunkadelic.jpg'),
        ('Bootsy Collins', 'Cincinnati OH', '1968-present', 'bootsycollins.jpg'),
        ('Jimi Hendrix','Seattle WA', '1962-1970', 'jimihendrix.jpg'),
        ('Slay and the family Stone', 'San Francisco CA','1966-1983', 'slythefamilystone.jpg'),
        ('Curtis Mayfield','Chicago IL', '1965-1999', 'curtismayfield.jpg');


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

INSERT INTO poster (poster, size, imgUrl)
    VALUES
        ('parliment poster', '11x17', 'parlimentfunkposter.jpg'),
        ('Bootsy Collins poster', '11x17', 'bootsycollinsposter.jpg'),
        ('Jimi Hendrix poster', '11x17', 'jimiposter.jpg'),
        ('Sly and the family Stone poster', '11x17', 'slyposter.jpg'),
        ('Curtis Mayfield poster', '11x17', 'curtismayfieldposter.jpg');


INSERT INTO album (title, artist_id, genre_id, label_id, yr_released, price, imgUrl)
    VALUES
        ('Osmium', 1, 7, 3, '1970', '$40.50', 'osmium.jpg'),
        ('Up for the Down Stoke', 1, 2 , 2,'1974', '$35.25', 'upfordown.jpg'),
        ('Chocolate City', 1, 2, 2, '1975', '$27.35', 'chcity.jpg'),
        ('Mothership Connection', 1, 2, 2, '1975', '$30.12', 'mothership.jpg'),
        ('The Clone of Dr. Funkenstein', 1, 2, 2, '1976', '$34.25', 'clone.jpg'),
        ('Funkentelechy vs. the Placebo Syndrome', 1, 2, 2, '1977', '$45.35', 'vs.jpg'),
        ('Motor Booty Affair', 1, 2, 2, '1978', '$32.11', 'motorbooty.jpg'),
        ('Gloryhallastoopid', 1, 2, 2, '1979',
        '$26.25', 'Parglor.jpg'),
        ('Trombipulation', 1, 2, 2, '1980', '$30.00', 'Tromb.jpg'),
        ('Medicaid Fraud Dogg', 1, 1, 6,
        '2018', '$32.00', 'Dogg.jpg'),
        ('Parliaments Greatest hits', 1, 3 , 2, '1984', '$50.00', 'greatesthits.jpg'),
        ('This Boot is made for FonkN', 2, 2, 1, '1979', '$25.00', 'bootsyboots.jpg'),
        ('Whats Bootsy Doin?', 2, 5, 4, '1988', '$30.00', 'bootsydoin.jpg'),
        ('Stretchin Out in Bootsys Rubber Band', 2, 1, 1, '1976', '$22.85', 'Bootsyfirst.jpg'),
        ('Ahh...The name is Bootsy, Baby!!', 2, 1, 1, '1976', '$25.00', 'bootsyfunk.jpg'),
        ('Curtis', 5, 6, 7, '1970', '$30.00', 'Curtis1970.jpg'),
        ('Roots', 5, 6, 7, '1971', '$34.25', 'curtisroots.jpg'),
        ('Super Fly', 5, 4, 7, '1972', '$25.14', 'curtissuperfly.jpg'),
        ('Back to the World', 5, 6, 7, '1973', '$27.25', 'curtisworld.jpg'),
        ('Axis: Bold as Love', 3, 10, 8, '1967', '$42.00', 'jimiaxis.jpg'),
        ('Are you Experienced', 3, 10, 8, '1967', '$45.00', 'jimiyouexpUK.jpg'),
        ('Electric Ladyland', 3, 10, 8, '1968', '$32.00', 'jimielectric.jpg'),
        ('Aint but the One Way', 4, 1, 1, '1982', '$25.00', 'slyaintbut.jpg'),
        ('Dance to the Music', 4, 6, 6, '1968', '$30.00', 'Slydance.jpg'),
        ('Fresh', 4, 2, 6, '1973', '$45.00', 'slyfamstone.jpg'),
        ('Life', 4, 2, 6, '1986', '$33.00', 'Slyfamstonelife.jpg'),
        ('Heard Ya Missed Me, Well Im Back', 4, 8, 6, '1976', '$29.00', 'Slyheard.jpg'),
        ('A Whole New Thing', 4, 8, 6, '1967', '$45.00', 'Slyone.jpg'),
        ('There a Riot Goin on', 4, 8, 6, '1971', '$35.00', 'Slyriot.jpg');

INSERT INTO album_to_genre (album_id, genre_id)
VALUES 
(1,7),
(2,2),
(3,2),
(4,2),
(5,2),
(6,2),
(7,2),
(8,2),
(9,2),
(10,1),
(11,3),
(12,2),
(13,5),
(14,1),
(15,1),
(16,6),
(17,6),
(18,4),
(19,6),
(20,1),
(21,1),
(22,1),
(23,1),
(24,6),
(25,2),
(26,2),
(27,8),
(28,8),
(29,8);