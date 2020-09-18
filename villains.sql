create database villains;
CREATE USER 'villains'@'localhost' IDENTIFIED WITH mysql_native_password BY 'villain$';
GRANT ALL ON villains.* TO 'villains'@'localhost';
use villains; 
create table villains (
	name varchar(255), 
	movie varchar(255), 
	slug varchar(255),
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	primary key(slug)
);
insert into villains (name, movie, slug) values 
("Captain Hook", "Peter Pan", "captain-hook"),
("Cruella de Vil", "One Hundred and One Dalmatians", "cruella-de-vil"),
("Gaston", "Beauty and the Beast", "gaston"),
("Hades", "Hercules", "hades"),
("Horned King", "The Black Cauldron", "horned-king"),
("Jafar", "Aladdin", "jafar"),
("Lady Tremaine", "Cinderella", "lady-tremaine"),
("Madame Medusa", "The Rescuers", "madame-medusa"),
("Madam Mim", "The Sword in the Stone", "madam-mim"),
("Maleficent", "Sleeping Beauty", "maleficent"),
("Prince John", "Robin Hood", "prince-john"),
("Sir Hiss", "Robin Hood", "sir-hiss"),
("Queen Grimhilde", "Snow White and the Seven Dwarfs", "queen-grimhilde"),
("Queen of Hearts", "Alice in Wonderland", "queen-of-hearts"),
("Scar", "The Lion King", "scar"),
("Shan Yu", "Mulan", "shan-yu"),
("Shere Khan", "The Jungle Book", "shere-khan"),
("Ursula", "The Little Mermaid", "ursula");
show tables; 
select * from villains;