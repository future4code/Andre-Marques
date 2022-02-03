`
1- a) Foreign key é a conexao entre as duas tabelas.

b)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("008", "O filme é muito Bom!", "7.5", "004");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("009", "O filme é muito ruim!", "1.5", "005");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("010", "O filme é muito ruim!", "2.5", "006");

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-andre-vinicius-marques`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)) - Está dizendo que a foreing key falhou, pois nao tem nenhum id compativel.

d) ALTER TABLE Movies DROP COLUMN rating;

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-andre-vinicius-marques`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)) - Nao pode deletar pois o filme em questao tem seu id ligado a uma outra tabela.


2- a) É uma tabela para conectar as duas tabelas com relacao muitos x muitos. Onde se necessita de dois foreing keys, um pra cada tabela.

b)
INSERT INTO MovieCast(movie_id, actor_id) VALUES("004","001")

INSERT INTO MovieCast(movie_id, actor_id) VALUES("005","002")

INSERT INTO MovieCast(movie_id, actor_id) VALUES("006","003")

INSERT INTO MovieCast(movie_id, actor_id) VALUES("007","004")

INSERT INTO MovieCast(movie_id, actor_id) VALUES("008","005")

INSERT INTO MovieCast(movie_id, actor_id) VALUES("009","006")

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-andre-vinicius-marques`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)) - Erro pois a foreign key nao existe

d) Erro porque ele está ligado a outra tabela

3- a) ON é a condicao para ocorrer a acao.

b) SELECT movies.id, rating FROM Movies INNER JOIN Rating ON mvoies.id = ratings.movie_id;
`