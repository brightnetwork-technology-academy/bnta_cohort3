## Joining Tables

Although splitting our data across many tables and setting up relationships between them makes it easier to manage, extracting the information becomes more difficult. If we want to find something in a particular table but the only values we have to search by are stored in a different one then a simple `SELECT` query won't work any more. We need to find a way of gathering data from multiple tables at once.

We do this by **joining** tables based on the relationship between them, typically by matching foreign and primary keys. By using different types of join we can find any combination of matching data from either table or both with the results presented in a table which can be manipulated just like any other, although it doesn't persist in the database;

## Joins Across Two Tables

It's pretty common to want to gather information from two different tables at once, both for ease of reading the results and for minimising the number of queries which need to be made. In our example let's say we want to find information about our directors and the movies they were involved with. The `movies` table has a `director_id` which defines the relationship but for the user that information is useless on its own. The link which that foreign key provides can, however, be used to combine the two tables with a query.

We join tables by using the `JOIN` keyword in the query, but there are different types of join available to us. We'll start by using a **left join**, which will take all the information from the first listed table (the "left" table) and pair it with the relevant information from the second (the "right" table). We need to specify in the query how the link is defined using the `ON` keyword, which is where our foreign key comes into play.

```sql
SELECT * FROM directors
LEFT JOIN movies
ON directors.id = movies.director_id;
```

There are a couple of things in the output which may seem unusual. Firstly, one of our directors is included twice. Note the movie details though: they're different in each entry. The table built for us by the join query will include a row for each matched rows from the two input tables. Ridley Scott is associated with two entries in the `movies` table, so has a row for each. The other unusual thing is the row for Steven Spielberg. None of his movies are in our database, but we still need to have a value in every field in his row. Since it can't pull the data from a table, the database manager fills teh empty fields with `NULL` instead.

The result of a join is itself a table, which means we can filter the columns or limit the rows as with any other table. We must take car when selecting columns though, as it may be the case that the same column name is used in both left and right tables. We can specify which table we want to take the column from using dot notation, eg. `movies.title`.

```sql
SELECT directors.name, movies.title FROM DIRECTORS
INNER JOIN movies
ON directors.id = movies.director_id
WHERE movies.duration < 120; 
```

The left join has a partner, the **right join**. When using a left join we end up with `NULL`s in the result because everything is pulled from the left-hand table irrespective of any corresponding entries in the right-hand table. Any entries in the right-hand table without a partner on the left are omitted from the response. With a right join this is reversed, as shown:

```sql
SELECT * FROM directors
RIGHT JOIN movies
ON directors.id = movies.director_id;
```

If we want to avoid having any `NULL`s at all we can use an **inner join**. This is the most common type of join and works in a similar way to the others, only this time any row without a partner in the other table is omitted.

```sql
SELECT * FROM directors
INNER JOIN movies
ON directors.id = movies.director_id;
```


## Joins Across Multiple Tables

We can do more than just filter or order the result of a join. The response to the query is another table, which can in turn be joined to something else. This means that given a value to base a query on we can find information in a seemingly unrelated table, so long as there is a chain of relationships linking them.

Let's say we want to query our database to find which actors have worked on a movie rated 18. We are looking for information about actors so our query will need to include the `actors` table, but we are basing the query on something it doesn't contain. The information we have is stored in the `movies` table in the `rating` column, so a table based on joining these two will contain everything we need to write our query. 

We can't join them directly though, as there is no foreign key in either table linking it to the other. Instead we need to build our table by joining `actors` to something else which can in turn be joined with `movies`. We have just such a table: `castings`. We can start with an inner join from `actors` to `castings`:

```sql
SELECT * FROM actors
INNER JOIN castings
ON actors.id = castings.actor_id;
```

This still doesn't include the column we need to base our query on, but there is a foreign key referencing a table which does. We can extend our query with another join, where the result of our previous join becomes the left table. We still need to use the original table name when referring to a specific column, as the join table is only temporary and so doesn't have a name of its own.

```sql
SELECT * FROM actors
INNER JOIN castings
ON actors.id = castings.actor_id
INNER JOIN movies
ON castings.movie_id = movies.id;
```

Now we have all of the information we need: actor details and movie rating. We can complete our query using a `WHERE` clause to discard the rows we aren't interested in.

```sql
SELECT actors.name, castings.character_name, movies.title FROM actors
INNER JOIN castings
ON actors.id = castings.actor_id
INNER JOIN movies
ON castings.movie_id = movies.id
WHERE movies.rating = '18';
```

## Aliases

When working with complex table names - and lots of them - queries can get quite convoluted. We can add our own shorter references to a table by using the `AS` keyword to create an **alias** for it. Typically we use the first one or two letters of the table name to avoid confusion.

```sql
SELECT a.name, c.character_name, m.title FROM actors AS a
INNER JOIN castings AS c
ON a.id = c.actor_id
INNER JOIN movies AS m
ON c.movie_id = m.id
WHERE movies.rating = '18';
```

We can also add an alias to the columns we select to give them a different name in the output table. This is particularly useful when selecting columns from different tables which share a name.

```sql
SELECT a.name AS actor, c.character_name, m.title AS movie FROM actors AS a
INNER JOIN castings AS c
ON a.id = c.actor_id
INNER JOIN movies AS m
ON c.movie_id = m.id
WHERE movies.rating = '18';
```

There are some constraints on how we can use aliases. They cannot start with a number or include spaces. They can start with a capital letter, but the output will ignore that and print it in lower case regardless. Aliases are generally optional, however in instances where a table is being used more than once in a sequence of joins they are necessary to distinguish between different stages of the join.