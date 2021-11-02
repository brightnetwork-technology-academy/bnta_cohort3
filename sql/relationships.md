# Relationships in SQL

SQL databases can handle huge amounts of data, but doing so effectively can be a challenge. The single table approach we have taken so far works when we don't need many columns but can become difficult to manage as the number of fields grows. We can also find ourselves in a position where we are repeating values in a given columnacross many rows, even if all the other values are changing. We also need to consider how to handle collections of values in our tables, as SQL has no concept of a list.

Instead of having a single large table we can break our data down into multiple smaller tables and let the database manager handle the **relationships** between them. This means that instead of repeating the same entries over and over (for example a retailer storing a supplier's details many times for different products) we can have a separate table with no repetition which is referenced from the original table (a `suppliers` table, with each product having a reference to a supplier). We can even add extra tables to keep track of more complex relationships between tables.

## One-To-Many Relationships

We're going to add a second table to our databse to represent `directors`, with each movie having a single director. The directors, on the other hand, can each direct multiple movies. We call this a **one-to-many** relationship: one entry in one table is related to many entries in the other.

This relationship is defined in the code by adding a column to the `movies` table (the **many** side of the relationship) which refers to the `id` property of a row in the `directors` table (the **one** side). The database manager needs to be told that these two columns are linked, which we do by adding **Primary Keys** and **Foreign Keys**.

```sql
-- Drop and re-create movies

DROP TABLE movies;

CREATE TABLE directors (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

CREATE TABLE movies (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	duration INT,
	rating VARCHAR(255),
	director_id INT REFERENCES directors(id)
);


INSERT INTO directors (name) VALUES ('Ridley Scott');
INSERT INTO directors (name) VALUES ('Morten Tyldum');
INSERT INTO directors (name) VALUES ('Jon Favreau');
INSERT INTO directors (name) VALUES ('Steven Spielberg');

INSERT INTO movies (title, duration, rating, director_id) VALUES ('Alien', 117, '18', 1);
INSERT INTO movies (title, duration, rating, director_id) VALUES ('The Imitation Game', 114, '12A', 2);
INSERT INTO movies (title, duration, rating, director_id) VALUES ('Iron Man', 126, '12A', 3);
INSERT INTO movies (title, duration, rating, director_id) VALUES ('The Martian', 144, '12A', 1);
```

`PRIMARY KEY` indicates that the annotated column is the main identifier for that table, which will almost *always* be the `id` column. `REFERENCES` indicates that the column refers to the primary key of a different table, ie. that it is a foreign key. Using keys like this gives us an extra level of protection, as it tells the database manager that in order for us to add an actor to the database there has to be a movie with the given id already there. It also means that we can't delete a movie if there is an actor record which depends on it.

The ordering of our actions is important here - if we try to create `movies` before `directors` then there is nothing for the foreign key to reference and we'll end up with an error. Likewise we need to drop `movies` before `directors` if we ever want to drop our tables or we have movies referencing directors which don't exist (sometimes known as "zombie references").


## Many-To-Many Relationships

Our movies are missing a very important component - a cast. We'll add another table called `actors` to handle this but first we need to think about its relationship with `movies`. As things stand we could manage with another one-to-many relationship (one film has many actors), but we very quickly run into a problem. Let's say we add some more rows to our tables:

```sql
INSERT INTO directors (name) VALUES ('Anthony Russo');

INSERT INTO movies (title, duration, rating, director_id) VALUES ('Avengers: Endgame', 181, '12A', 4);
```

Some of our actors need to be in this movie, but they're already in another one. If we give `actors` a `movie_id` property they can only be in a single movie. We can't flip it and put `actor_id` on `movies` for the same reason, so we can't set up a one-to-many relationship between our tables.

What we now have is a **many-to-many** relationship, which we can represent in our database by adding a **join table**. The rows of a join table will represent the different combinations of movies and actors and so will need two foreign keys, one pointing to the `movies` table and one to `actors`. Although it's doing a specific job this is just another table and so we can add other columns containing any other relevant information (eg. character name), plus an `id` column. 

There is a convention around naming join tables which says that they should be named after the two tables which they connect, in this case `movies_actors`. It's not unusual to see them called something more appropriate though, especially if there is other information included, and that's what we'll do here by creating a table called `castings`.

```sql
-- No need to drop movies this time as we don't need to alter it

CREATE TABLE actors (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

INSERT INTO actors (name) VALUES ('Sigourney Weaver');
INSERT INTO actors (name) VALUES ('Benedict Cumberbatch');
INSERT INTO actors (name) VALUES ('Robert Downey Jr');
INSERT INTO actors (name) VALUES ('Gwyneth Paltrow');
INSERT INTO actors (name) VALUES ('John Boyega');

-- Creating join table

CREATE TABLE castings (
	id SERIAL PRIMARY KEY,
	movie_id INT REFERENCES movies(id),
	actor_id INT REFERENCES actors(id),
	character_name VARCHAR(255)
);

INSERT INTO castings (movie_id, actor_id, character_name) VALUES (1, 1, 'Ripley');
INSERT INTO castings (movie_id, actor_id, character_name) VALUES (2, 2, 'Alan Turing');
INSERT INTO castings (movie_id, actor_id, character_name) VALUES (3, 3, 'Tony Stark');
INSERT INTO castings (movie_id, actor_id, character_name) VALUES (3, 4, 'Pepper Potts');
INSERT INTO castings (movie_id, actor_id, character_name) VALUES (5, 2, 'Dr Strange');
INSERT INTO castings (movie_id, actor_id, character_name) VALUES (5, 3, 'Tony Stark');
INSERT INTO castings (movie_id, actor_id, character_name) VALUES (5, 4, 'Pepper Potts');
```
Now our movies can have multiple actors and an actor can star in multiple movies.

## One-to-One Relationships

There is a third type of relationship which is much less common in day-to-day use but which is still important to know about. There are scenarios where a two pieces of information are related to each other and only each other, for example a username and an associated email address. In practice this can often be handled by additional columns in a table, which is generally more efficient than adding a second table and linking the two. This does happen occasionally though, and is known as a **one-to-one** relationship.

To implement a one-to-one relationship it is necessary for *both* tables to have a foreign key which references the other, for example a `usernames` table with an `email_id` column and an `emails` table with a `username_id` column. In practice this is difficult to implement, at least with the level of security we have with one-to-many or many-to-many relationships. Consider table creation - if each table references the other then regardless of which table we create first we will run into a foreign key violation. We can still have the reference columsn, just without decaring them to be foreign keys. The issue here is that we can now leave zombie references if we delete an entry which is being referenced elsewhere. 

If using an ORM such as Hibernate the issues around creating the tables will be handled there, however adding and updating rows is still a more complicated process than for other relationships.