`


CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

 1* a) Iria excluir a coluna salary da tabela.
    b) Iria alterar a coluna de gender para sex da tabela.
    c) Iria alterar a coluna gender de varchar(6) para varchar(225).
    d) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);



 2- a)
UPDATE Actor SET name = "André Marques" , birth_Date = "1988/12/06" WHERE id = "003";

 b)
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

 c)
UPDATE Actor 
set 
	id = "008",
    name = "Lucas Marques",
    salary = 5000000,
    birth_date = "1988/12/06",
    gender = "male"
WHERE id = 005;

 d) O comando roda normalmente, mas ele não altera a tabela.
UPDATE Actor
 set 
    name = "Mariana Marques",
    salary = 5000000,
    birth_date = "1991/07/12",
    gender = "female"
WHERE id = 150;



 3- a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

 b)
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;




 4- a)
SELECT MAX(salary) FROM Actor;

 b)
SELECT MAX(salary) FROM Actor WHERE gender = "female";

 c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

 d) 
SELECT SUM(salary) FROM Actor;




 5- a) Pelo que entendi, a query retorna o total de linhas de acordo com a característica passada na query. Como temos apenas dois tipos diferentes no gender ele retornou o total de cada tipo.
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

 b)
SELECT id, name FROM Actor ORDER BY name DESC;

 c)
SELECT * FROM Actor ORDER BY salary;

 d)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

 e)
SELECT AVG(salary), gender FROM Actor GROUP BY gender;



DESCRIBE Movies;
SELECT * FROM Movies;
 6- a)
ALTER TABLE Movies ADD playing_limit_date DATE;

 b)
ALTER TABLE Movies CHANGE rating rating FLOAT;

 c)
UPDATE Movies SET playing_limit_date = "2021/12/10" WHERE id = "001";

 d) Ele roda o comando porém sem adicionar nada na tabela.
DELETE FROM Movies WHERE id = "001";
UPDATE Movies SET sinopsis = "Se eu fosse você" WHERE id = "001";




 7- a) 3.
SELECT COUNT(*) FROM Movies WHERE rating > 7.5;

 b) 9.333333333333334.
SELECT AVG(rating) FROM Movies;

 c) 3.
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();

 d) 2.
SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();

 e) 10.
SELECT MAX(rating) FROM Movies;

 f) 8.
SELECT MIN(rating) FROM Movies;




 8- a)
SELECT * FROM Movies ORDER BY title;

 b)
SELECT * FROM Movies ORDER BY title DESC LIMIT 5;

 c) 
SELECT * FROM Movies WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;

 d)
SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;
`