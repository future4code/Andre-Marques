`
USE `carver-andre-vinicius-marques`;

# 1- a) O varchar é a string do sql e o número entre parênteses é a quantidade máxima de caractéres. A primary key representa uma chave única e que não se repete.
#    b) O comando retorna o banco de dados existente. O comando retorna a tabela existente.
#    c) O comando retorna todos os itens da tabela com seus respectivos campos e restrições.
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;

###################################################################################################

# 2- 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
),
# a)
(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

# b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.141 sec - O que significa que a primary key foi inserida com duplicidade.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Débora Secco",
  500000,
  "1980-10-15", 
  "female"
);

# c) Error Code: 1136. Column count doesn't match value count at row 1	0.140 sec. Q que significa que o número de colunas(parâmetros) não está igual ao que foi declarado.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

# d)Error Code: 1364. Field 'name' doesn't have a default value	0.141 sec. O que significa que campo nome não pode ser NULL.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

# e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.125 sec. O que significa que o campos birth_date está incorreto. No caso falta as aspas.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

# f) Ok.

##############################################################################################################

# 3- 
# a) 
SELECT * from Actor WHERE gender LIKE "female%";

# b)
SELECT salary from Actor WHERE name LIKE "Tony Ramos%";

# c) O resultado foi uma tabela de uma posição com os campos NULL.
SELECT * from Actor WHERE gender = "invalid";

# d)
SELECT id, name, salary from Actor WHERE salary > 500000;

# e) Error Code: 1054. Unknown column 'nome' in 'field list'	0.141 sec. O que significa que a coluna nome é desconhecido, pois a culuna é name.
SELECT id, name from Actor WHERE id = "002";

##############################################################################################################################

# 4- 
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

# a) Está procurando os nomes que se iniciam com A ou J e que tenham um salário superios a 300000.

# b)
SELECT * from Actor WHERE name NOT LIKE "A%" AND salary >350000;

# c) 
SELECT * from Actor WHERE name LIKE "%g%";

# d) 
SELECT * from Actor WHERE (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

###################################################################################################################################

# 5-
# a) Foi criado a tabela de filmes, a qual não poderá ter filmes com os mesmos nomes.
CREATE TABLE Movies (
	id VARCHAR(225) PRIMARY KEY,
    title VARCHAR(225) NOT NULL UNIQUE,
    sinopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating DOUBLE NOT NULL
);

# b)
INSERT INTO Movies(id, title, sinopsis, release_date, rating) VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
), 
(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
), 
(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
    "2017/11/02",
    8
), 
(
	"004",
    "Tropa de Elite",
    "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
    "2007/10/12",
    10
);

# e) Ok.alter

###############################################################################################################################

# 6- 
# a)
SELECT id, title, review from Movies WHERE id = "004";

# b)
SELECT * from Movies WHERE title = "Se Eu Fosse Você";

# c)
SELECT id, title, sinopse from Movies WHERE rating >= 7;

#################################################################################################################################

# 7-
# a) 
SELECT * from Movies WHERE title LIKE "%vida%";

# b)
SELECT * from Movies WHERE sinopsis LIKE "%saber%" OR title LIKE "%saber%";

# c)
SELECT * from Movies WHERE release_date < "2022/01/31";

# d)
SELECT * from Movies WHERE release_date < "2022/01/31" AND (title LIKE "%quer%" OR sinopsis LIKE "%ele%") AND rating > 7;
`