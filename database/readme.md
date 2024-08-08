# Database Interview Questions


## 1. What is a _database management system (DBMS)_, and can you name some examples?

A **Database Management System (DBMS)** serves as an intermediary between users and the database. It facilitates data maintenance, retrieval, and ongoing management, using a structured mechanism to ensure **data integrity, security, and efficiency**.

### Key Features

- **Data Modeling**: Organizes data into logically structured tables and relationships.
- **Data Manipulation**: Allows for CRUD operations (Create, Read, Update, Delete), usually via a query language.
- **Data Integrity**: Enforces referential integrity and ensures consistent data.
- **Security & Access Control**: Regulates user permissions to the data.
- **Data Concurrency**: Manages simultaneous data access by multiple users to avoid conflicts.
- **Backup & Recovery**: Provides mechanisms for data restoration in case of loss or corruption.
- **Data Analysis & Reporting**: Often includes tools for query optimization and report generation.

### Types of DBMS

1. **Relational DBMS (RDBMS)**: Organizes data into tables with predefined structures defined by a schema. SQL (Structured Query Language) is typically used for data operations. Common examples include MySQL, PostgreSQL, and Microsoft SQL Server.

2. **NoSQL DBMS**: Evolved as a response to the limitations of RDBMS, designed for unstructured or semi-structured data and horizontal scalability. Examples include MongoDB for document-oriented storage and Redis for key-value stores.

3. **Cloud-Based DBMS**: Hosted on cloud platforms, these systems provide flexibility and scalability, requiring minimal maintenance from users. Notable examples are Amazon RDS, Google Cloud Bigtable, and Azure Cosmos DB.

4. **NewSQL DBMS**: Combines the benefits of traditional RDBMS with modern needs like scalability. These systems often offer improved performance, designed for big data scenarios. Examples include Google Cloud Spanner and NuoDB.

5. **Object-Oriented DBMS (OODBMS)**: Designed for managing complex, object-based data models. They provide persistence for objects, disentangling the object structure from a relational schema. ODBMS are less popular in current times, but examples include db4o and ObjectStore.

6. **In-memory DBMS**: Maintains data in the system’s memory, enabling rapid access and processing. Examples include Oracle TimesTen and Redis.

7. **Multimodel DBMS**: Can handle multiple kinds of databases, such as key-value stores, document stores, and graph databases. This offers a variety of data models in a single system. ArangoDB is an example of such a system.

8. **Graph DBMS**: Specialized for dealing with interconnected data elements. They are optimized for operations like traversals and pathfinding. Neo4j is a well-known example of this type of DBMS.
<br>

## 2. Explain the _ACID properties_ in the context of databases.

In database management, **ACID** ensures that transactions are processed in a reliable, standardized manner.

### ACID Properties

#### Atomicity

_**Atomicity**_ ensures that all tasks in a transaction are completed or none are. Databases use **transaction logs** to manage atomicity. If a task fails, the transaction log allows the system to recognize the incomplete state and restore to the last known consistent state.

Consider a banking transfer: if the debit is successful but the credit fails, atomicity ensures that the debit is also rolled back.

#### Consistency

_**Consistency**_ requires that a transaction takes the database from one consistent state to another consistent state. It ensures that data integrity rules are not violated. For example, after a transfer, the sum of account balances should remain the same.

#### Isolation

_**Isolation**_ ensures that the operations within concurrent transactions are invisible to each other until they are completed, to protect against potential conflicts and inconsistencies.

Different isolation levels, like **read uncommitted**, **read committed**, **repeatable read**, and **serialize**, define the extent to which transactions are isolated from one another.

#### Durability

_**Durability**_ guarantees that once a transaction is committed, its changes persist, even in the event of a system failure. This is typically achieved through mechanisms such as write-ahead logging and buffer management, which ensure changes are written to disk.

### ACID in Practical Scenarios

1. **Banking Applications**: ACID ensures that monetary transactions are secure and reliable.

2. **Inventory Management**: When goods are purchased, inventory levels are updated consistently, without corruption or errors.

3. **Scheduling Systems**: Activities, such as booking appointments, either take place entirely or not at all, avoiding messy partial bookings.

4. **E-commerce Order Processing**: The entire cycle, from a customer placing an order to its fulfilment, is a cohesive and consistent unit of work.

5. **Messaging Services**: For example, ensuring that a message is sent only after it is completely composed, not mid-way.
<br>

## 3. What are the differences between _SQL_ and _NoSQL_ databases?

**SQL** and **NoSQL** databases vary in several key aspects. Here, I will elaborate on five of them.

### Key Distinctions

- **Data Structure**: SQL databases are table-based, whereas NoSQL databases can be document, key-value, wide-column, or graph-oriented.

- **Schema**: SQL databases are schema-based. They necessitate database schema, and any deviation requires schema modifications. NoSQL databases are either ad-hoc, making each document consistent with one another, or schema-on-read.

- **Querying**: SQL databases employ Structured Query Language to execute queries. NoSQL databases use methods specific to their data model.

- **Scalability**: SQL databases historically have employed vertical scaling or "scaling up" by increasing CPU power, memory, and storage on a single node. However, recent trends show support for horizontal scaling or "scaling out" across multiple nodes. NoSQL databases, by nature, support horizontal scaling more readily, making them "scale-out" architectures.

- **ACID**: Traditional SQL databases often guarantee ACID (Atomicity, Consistency, Isolation, and Durability) compliance. NoSQL databases, especially in eventual consistency models, might trade off immediate consistency for performance and availability.

### Evolution and Adaptation

- **Consistency Models**: SQL often indicates immediate or strict consistency. NoSQL provides a range of consistency models, from eventual consistency to strong consistency.

- **Data Relationships and Transactions**: SQL databases typically enforce data relationships using methods such as foreign keys and support more complex transactional behavior. NoSQL databases might sacrifice some of these features for greater performance.

- **Use Cases and Popularity**: SQL databases are time-tested, especially in cases that need strict consistency or have clear data relationships. NoSQL databases are popular for their flexibility, particularly in rapidly changing or expansive data needs, and within the realm of big data and other modern computing paradigms.

### Domain Adherence

- **Relational Integrity**: SQL databases pride themselves on ensuring referential integrity in relational data.

- **Efficiency in Certain Query Workloads**: SQL databases are frequently favored in scenarios that involve complex querying or multi-table joins because of their optimizer capabilities. NoSQL excels in certain types of queries, like key-value lookups, due to their data models.

- **Ease of Horizontal Scaling**: NoSQL is often the preferred choice in setups requiring high availability and distributed data.
<br>

## 4. Describe a _relational database schema_.

A **Relational Database Schema** is a set of rules that define the structure, constraints, and relationships of data tables in a **Relational Database Management System (RDBMS)**.

### Core Components

1. **Tables**: Central data containers often referred to as "relations."
   - Defined by column names and data types.
2. **Columns**: Attributes or fields, defined by their name, type, and optional constraints.
   - Each column should have a unique name within the table.
   - Common data types include integers, strings, dates, and more.
3. **Rows**: Individual data records, consisting of data based on the table's defined columns.
   - Each row should have a unique identifier, often referred to as a "primary key".

### Key Types

1. **Primary Key (PK)**: A unique identifier for each record within a table. It's often an auto-incrementing integer. Each table should have precisely one primary key. This is Essential designated as “E” in databases.
2. **Foreign Key (FK)**: A field or a group of fields in a table that uniquely identifies a row in another table. Commonly a primary key from another table, these help establish relationships between tables. This term is derived as “F” from Candidate Key in databases

### Relationship Types

1. **One-to-One**: Each record in the first table is related to one and only one record in the second table, and vice versa.
2. **One-to-Many**: A record in the first table can be related to one or more records in the second table, but a record in the second table is related to only one record in the first table.
3. **Many-to-Many**: Records in both tables can be related to multiple records in the other table. This relationship requires a linking table.

### Common Constraints

- **NOT NULL**: Specifying that a column must have a value and cannot be left empty. This is Essential designated as “E” in databases.
- **UNIQUE**: Requires all entries in a column or set of columns to be distinct.
- **CHECK**: Allows for conditional checks to be applied to column data.
- **DEFAULT**: Automatically provides a predetermined value when a new column is created.
- **INDEX**: Optimizes data retrieval by creating an index on the column(s), speeding up relevant queries.

### Code Example: Schema for University Database

Here is the SQL code:

```sql
-- Table for students
CREATE TABLE Students (
  StudentID INTEGER PRIMARY KEY,
  Name TEXT NOT NULL,
  Age INTEGER CHECK (Age >= 18),  
  MajorID INTEGER,
  FOREIGN KEY (MajorID) REFERENCES Majors(MajorID)
);

-- Table for courses
CREATE TABLE Courses (
  CourseID INTEGER PRIMARY KEY,
  Title TEXT NOT NULL,
  Credits INTEGER CHECK (Credits >= 0)
);

-- The table that maps the many-to-many relationship between Students and Courses
CREATE TABLE Enrollments (
  StudentID INTEGER,
  CourseID INTEGER,
  EnrollmentDate DATE DEFAULT CURRENT_DATE,
  PRIMARY KEY (StudentID, CourseID),
  FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
  FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

-- The table that holds the list of possible majors
CREATE TABLE Majors (
  MajorID INTEGER PRIMARY KEY,
  Name TEXT NOT NULL UNIQUE
);
```
<br>

## 5. What is a _primary key_, and why is it important?

A **primary key** is a unique identifier for a table. It ensures each data record in a table is distinct and can be efficiently referenced.

### Core Features

- **Uniqueness**: Every record in a table must have a unique primary key.
- **Non-Null Value**: A primary key field cannot contain null or undefined values.
- **Stability**: Changes to primary key values should be rare, ensuring its reliability as an identifier.

### Benefits

- **Data Integrity**: Ensures accuracy and consistency within the dataset.
- **Data Retrieval**: Helps in efficient data retrieval and can easily reference related data tables through Foreign Keys.
- **Data Normalization**: Aids in organizing data across multiple tables, reducing redundancy and improving data integrity.
- **Table Relationships**: Serves as a basis for establishing multiple types of relationships with other tables (one-to-one, one-to-many, many-to-many).

### RDBMS Requirements


#### MySQL

- **Character Limit**: 1000 characters in total across all the columns defined for a primary key.
- **Restrictions**: Text and blob columns are not permitted in primary keys.
- **Supported Types**: Can use most column types, including integers, strings, and dates.

#### PostgreSQL

- **Character Limit**: 32 characters for the name of the primary key constraint, which defaults to `table_name_pkey`.
- **Supported Types**: Most column types can be defined as primary keys, including UUID.

#### SQL Server

- **Character Limit**: 900 bytes.
- **Restrictions**: Text and image columns are forbidden in primary keys.
- **Supported Types**: The uniqueidentifier data type is commonly used as a primary key.

#### SQLite

- **Character Limit**: No fixed-length requirement.
- **Supported Types**: Most column types, including integers, can be used for primary keys.

#### Oracle Database

- **Character Limit**: The PRIMARY KEY constraint name, combined with the schema name, cannot exceed 30 characters.
- **Supported Types**: Most column data types can be used, including LOB columns.
<br>

## 6. Can you explain what a _foreign key_ is and its role in the database?

A **foreign key** (FK) establishes a relationship between two tables in a relational database.

### Key Attributes

- **Column Type**: The FK column in the child table must have the same data type as the primary key column in the parent table.
- **Referential Integrity**: The FK ensures data consistency by either rejecting the change, setting it to NULL, or cascading the changes.
- **Joining Tables**: Utilizing the foreign key in SQL queries helps combine related data from multiple tables.

**JOIN** statement is the SQL command central to integrating tables through foreign keys:

### Join Types

- **Inner Join**: Matches only the records having related entries in both tables.
- **Outer Join**: Includes records from one table even if there are no related entries in the other table.

### Examples and Code Explanation

Here is the SQL code:

```sql
-- 1. Parent Table Creation
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(100)
);

-- 2. Child Table Creation with Foreign Key
CREATE TABLE books (
    book_id INT PRIMARY KEY,
    book_name VARCHAR(255),
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

-- 3. Data Insertion
INSERT INTO authors (author_id, author_name) VALUES (1, 'J.K. Rowling');

INSERT INTO books (book_id, book_name, author_id) VALUES (1, 'Harry Potter', 1);

-- 4. Select Query for Data Retrieval
SELECT book_name, author_name FROM books 
JOIN authors ON books.author_id = authors.author_id;
```

In this code, `author_id` in the `books` table is a foreign key pointing to the `author_id` in the `authors` table. The `SELECT` statement employs a **JOIN** to unify the related `book` and `author` data.

### Verifying Key Relationships

- **SYS.TYPE_CATALOG** uses system views for all three types of keys: primary, foreign, and unique. It displays tables with their corresponding keys.
- **INFORMATION_SCHEMA.KEY_COLUMN_USAGE** furnishes comprehensive key information, such as the table containing the keys, as well as the cardinality.

For instance, using SQL SERVER:

```sql
SELECT
  TABLE_NAME, 
  COLUMN_NAME, 
  CONSTRAINT_NAME
FROM 
  INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
WHERE 
  TABLE_NAME = 'books';
```
<br>

## 7. What is _database normalization_, and why do we use it?

**Database normalization** is a set of practices that ensure **data integrity** by minimizing redundancy and dependency within a relational database.

### Advantages of Normalization

1. **Data Consistency**: Reduction in redundancy decreases the risk of inconsistent data.
2. **Improved Maintainability**: With a more structured database, maintenance becomes more straightforward.
3. **Easier Updates**: Normalization usually means fewer records to update.

### Normalization Levels

There are generally six levels of normalization, from 0 to 5 or "BCNF".

#### First Normal Form (1NF)

1. **Unique Primary Keys**: A table should have a unique primary key for each record.
2. **Atomic Values**: Each cell in a table should hold a single value, eliminating multi-valued attributes.

#### Second Normal Form (2NF)

- All requirements of the previous form, as well as:
- Removal of **Partial Dependencies**: Non-primary key columns should depend on the entire primary key.

#### Third Normal Form (3NF)

- All requirements of 2NF, as well as:
- Elimination of **Transitive Dependencies**: Non-primary key columns should not be dependent on other non-primary key columns.

#### Boyce-Codd Normal Form (BCNF)

- A stricter version of 3NF that ensures each determinant is a candidate key.

#### Fourth Normal Form (4NF)

- Deals with multi-valued dependencies.

#### Fifth Normal Form (5NF)

- Also called "Projection-Join Normal Form" and deals with join dependencies.

### Normal Forms and Use-Cases

Most relational databases aim for 3NF, as it typically strikes a good balance between performance and data integrity.

However, it's essential to understand the specific **requirements** of your database and decide on an optimal normalization level accordingly. For instance, reporting databases might not be heavily normalized to improve query performance.
<br>

## 8. What is _denormalization_ and when would you consider it?

**Denormalization** is the process of **reducing normalization** (typically for performance reasons) by introducing **redundant data** into one or more tables. While normalization ensures data integrity, **denormalization** mainly focuses on **improving query performance** by eliminating complex JOIN operations.

### Benefits and Drawbacks

- **CTEs**: With multiple **Common Table Expressions**, maintaining benefits of a normalized schema can be achieved in a denormalized setup, potentially eliminating the drawbacks.
- **Maintainability**: Denormalization can make data harder to manage and keep consistent. 
- **Query Performance**: Queries may become more efficient, as data required from different normalized tables is now available in a single denormalized table.
- **Storage Efficiency**: Queries that access multiple smaller tables require less disk I/O and can fit into the memory more easily than queries accessing a few larger tables.
- **Data Integrity**: Redundant data can lead to inconsistencies if not managed properly.

### Case-by-Case Considerations

**Lookup Tables**: Tables with relatively static data (like Status types or Location information) that are frequently joined with other tables in your system, are strong candidates for denormalization. This can make **frequent lookups** faster.

**Reporting and Analytics**: Systems that are skewed towards **read operations** over write operations benefit from denormalization. When designing systems for reporting or analytics, it's common practice to have dedicated read replicas that are denormalized for improved read performance.

**Partitioning**: In large systems, denormalization can be used to **partition** data across different tables or clusters to distribute load. For example, customer data can be segregated into one cluster, and order data into another, linked via denormalization.

### Code Example: Denormalization and Normalization

Here is the SQL code:

```sql
-- Example of Normalized Tables
Customer Table: 
| ID | Name  | StatusID |
| 1  | John  | 2        |
| 2  | Jane  | 1        |

Status Table:
| StatusID | Description |
| 1        | Pending     |
| 2        | Active      |


-- Querying the Status using JOIN
SELECT c.Name, s.Description AS Status FROM Customer c
JOIN Status s ON c.StatusID = s.StatusID;


-- Denormalized Table
Customer Table (Denormalized):
| ID | Name  | Status   |
| 1  | John  | Active   |
| 2  | Jane  | Pending  |


-- Eliminating JOINs in the Query
SELECT Name, Status FROM Customer;
```
<br>

## 9. Compare and contrast the _DROP_, _DELETE_, and _TRUNCATE_ commands.

Let's look at the three commands - **`DROP`**, **`DELETE`** and **`TRUNCATE`** in terms of their function, operation, speed and recovery.

### DROP Table

The **`DROP TABLE`** statement deletes an **entire table and its structure** from the database.

#### SQL Syntax
```sql
DROP TABLE table_name;
```

#### Transaction Control
- Implicit Commit: The action is immediately committed, and its effects are irreversible.

#### Considerations
- **Irreversible**: Drops the table as a whole; it doesn't delete records row by row.
- **Data Loss**: Any data in the table is permanently removed.

### DELETE from Table

The **`DELETE`** statement operates on individual rows in the table and is reversible.

#### SQL Syntax
```sql
DELETE FROM table_name WHERE condition;
```

#### Transaction Control
- Needs a Transaction: Works within a transaction and needs to be explicitly committed to become permanent.

#### Considerations
- **Precision**: Removes specific rows based on the provided condition.
- **Recoverability**: Data can be undeleted or restored during the transaction if not committed.

### TRUNCATE Table

The **`TRUNCATE TABLE`** statement quickly **removes all rows** from a table, providing both speed and simplicity. It doesn't, however, release allocated storage like `DELETE` does.

#### SQL Syntax
```sql
TRUNCATE TABLE table_name;
```

#### Transaction Control
- Requires Commit: Like `DELETE`, this statement operates within a transaction and requires explicit commitment to finalize its actions.

#### Considerations
- **Efficiency**: Processes significantly faster compared to `DELETE`. Ideal for removing all records and resetting table states in certain applications.
- **No Selective Deletion**: Unlike `DELETE`, it clears all records in the table without regard for specific conditions.
- **Transaction and Recovery**: Upon execution, the data removal can usually be undone or rolled back until a final commit or termination of the transaction. 

### Code Example: Table Cleanup Operations

Here is the PostgreSQL code:

```sql
-- Create a sample table
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  age INT
);

-- Insert sample data
INSERT INTO employees (name, age) VALUES ('Alice', 25), ('Bob', 30), ('Charlie', 28);

-- Display initial content
SELECT * FROM employees;

-- Use DELETE to remove specific rows
DELETE FROM employees WHERE age > 29;
-- Changes not yet applied
SELECT * FROM employees;

-- Use TRUNCATE to remove all rows
TRUNCATE TABLE employees;
-- Changes not yet applied
SELECT * FROM employees;

-- Final commitment to make changes permanent
COMMIT;
-- Now, the table is empty
SELECT * FROM employees;
```
<br>

## 10. What is the difference between a _full join_ and an _inner join_?

**Full joins** and **inner joins** serve different purposes in database management systems and exhibit distinct behavior patterns.

### Inner Join

An inner join finds and combines matching records from both the parent and child tables, based on a specified join condition. Records that don't have a match in either table are excluded from the result.

#### SQL Syntax

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2 ON table1.column_name = table2.column_name;
```

### Full Join

A full join, also known as a **full outer join**, returns all records from both tables and fills in **NULL** values where no match is found in the corresponding table. This type of join is less frequently used compared to the others, as it can potentially generate very large result sets.


#### SQL Syntax

```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2 ON table1.column_name = table2.column_name;
```

## 11. How would you write an _SQL query_ to fetch duplicate records from a table?

Let's look at two common methods for identifying and handling duplicate records in SQL.

### 1. Standard SQL

```sql
SELECT column1, column2, ..., columnN, COUNT(*)
FROM mytable
GROUP BY column1, column2, ..., columnN
HAVING COUNT(*) > 1;
```

### 2. Using **ROW_NUMBER()**

This method can be particularly useful in cases where you also want to keep track of the "duplicate" IDs.

```sql
WITH duplicates AS (
  SELECT *,
         ROW_NUMBER() OVER (PARTITION BY column1, column2, ..., columnN ORDER BY ID) AS rnum
  FROM mytable
)
SELECT * 
FROM duplicates 
WHERE rnum > 1;
```

In both of these methods, `column1, column2, ..., columnN` refer to the column or set of columns you're using to identify duplicates.

### Code Example: Standard SQL

```sql
SELECT name, age, COUNT(*)
FROM mytable
GROUP BY name, age
HAVING COUNT(*) > 1;
```

In this example, we're looking for **duplicate records** based on the "name" and "age" columns from the "mytable".

### Code Example: ROW_NUMBER()

```sql
WITH duplicates AS (
  SELECT *,
         ROW_NUMBER() OVER (PARTITION BY name, age ORDER BY ID) AS rnum
  FROM mytable
)
SELECT * 
FROM duplicates 
WHERE rnum > 1;
```

In this example, we're using **ROW_NUMBER()** to identify records with the same "name" and "age" and keeping track of the **unique** row number for each.
<br>

## 12. What is a _prepared statement_, and why would you use one?

**Prepared Statements** reduce the risk of SQL injection by separating SQL data and commands. They also optimize query execution by allowing **repetitive parameter bindings**.

### Key Advantages

- **Security**: They defend against SQL injection by distinguishing between SQL code and input values.
- **Performance**: Prepared statements can be faster when used repeatedly, as they are parsed and executed in discrete steps.
- **Readability and Maintainability**: Separating the SQL code from the parameters makes it more readable. It can make the code easier to understand, review, and maintain.

### When to Use Prepared Statements

- **Input from Untrusted Sources**: When SQL queries are constructed with data from untrusted sources, prepared statements ensure the data is treated as literal values, preventing SQL injection.
  
- **Repeated Executions**: For queries executed multiple times, using a prepared statement can be more efficient than constructing and executing a new query each time. This is especially relevant in loops or high-volume operations.
<br>

## 13. What is the _N+1 query problem_ and how can you solve it?

**N+1 Query Problem** arises when an object graph is retrieved using a query that results in unnecessary database hits.

For instance, consider a **one-to-many relationship** where each "Order" has many "LineItems". If you fetch all "Orders" and then individually fetch their "LineItems," it leads to multiple query rounds. These excessive queries are inefficient, especially when the number of related items is high.

Let's say, in a more specific case, you fetch:
1. All Orders.
2. Then for each Order, fetch its LineItems.

This corresponds to:

1. **Primary Query**: `SELECT * FROM Orders`.
2. **Secondary Query**: `SELECT * FROM LineItems WHERE order_id = :order_id` (Potentially executed several times based on order count).

Here you have an **N+1 scenario** because the second query is executed "N" times, once for each Order, hence N+1.

### Solutions

#### Use a JOIN Query

By employing a JOIN, you can retrieve related entities in a single query.

- **SQL**
    ```sql
    SELECT o.*, li.*
    FROM Orders o
    JOIN LineItems li ON o.id = li.order_id;
    ```
    
- **ORM**
    ORM tools, like Hibernate, can handle this for you. You might not even know under the hood whether the ORM uses JOIN.

#### Leverage Lazy Loading

Some ORMs are configured to execute extra queries only when a related object is accessed for the first time. This is known as **lazy loading**. It reduces the initial query size, improving efficiency but might lead to an N+1 problem if multiple related entities are accessed.

#### Use Explicit Eager Loading

Modern ORMs often provide mechanisms for **explicitly defining** which related entities to fetch eagerly. This way, you can still benefit from lazy loading while strategically opting for immediate access when needed. In Entity Framework (EF) and Java Persistence API (JPA), for example, you can use annotations like `@ManyToOne` and `@OneToMany` to control lazy/eager loading behavior.

#### Use Data Projection

Instead of loading entire entities, you can **select specific fields** needed for immediate operations. This can be beneficial when you aren't interested in all the entity's properties.

- **SQL**
  ```sql
  SELECT id, name FROM Orders;
  ```

- **ORM**
  With JPA, you can use constructor expressions in JPQL to achieve this:
  ```java
  TypedQuery<OrderSummary> query = em.createQuery(
      "SELECT NEW OrderSummary(o.id, o.name) FROM Order o", OrderSummary.class
  );
  ```

  And in Entity Framework, you can utilize LINQ projections:
  ```csharp
  var orderSummaries = from order in context.Orders
                      select new OrderSummary { Id = order.Id, Name = order.Name };
  ```

#### Implement Paging

When dealing with a **large dataset**, it's often more reasonable to employ **paging** rather than fetching everything at once. A SELECT query can be modified with `OFFSET` and `LIMIT` (in SQL Server and PostgreSQL) or the `ROW_NUMBER()` function (in SQL Server and Oracle) to achieve this neatly.

- **SQL Server and PostgreSQL**
  ```sql
  SELECT * FROM Orders
  ORDER BY id
  OFFSET 0 ROWS
  FETCH NEXT 5 ROWS ONLY;
  ```
<br>

## 14. Explain the function of _GROUP BY_ and _HAVING_ clauses in SQL.

**GROUP BY** and **HAVING** transform, filter, and work together with aggregate functions to enable more complex and nuanced result sets.

### Functions of GROUP BY

- **Aggregation**: Identifies groups and computes aggregate functions (e.g., COUNT, SUM) for each group.
- **Redundancy Reduction**: Collapses redundant data based on the grouped columns to provide a leaner dataset.
- **Column Constraint**: Allows queries to select only aggregated columns, and from the source columns, all non-aggregated ones need to be in the `GROUP BY`, ensuring consistent data representation.

### Functions of HAVING 

- **Group-Wise Filtering**: Applies conditional checks to grouped data.
- **Post-Group Filtering**: Allows filtering based on the results of aggregate functions.
- **Aggregation Assertion**: Validates aggregated values against specific conditions.
- **Comparison with WHERE**: Enables more advanced, aggregate-aware filtering compared to the global, pre-aggregation filtering provided by `WHERE`.

### Code Example: GROUP BY & HAVING

Consider the following relational schema:

```plaintext
EMPLOYEE (ID, Name, DeptID, Salary)
DEPARTMENT (ID, Name)
```

To retrieve department IDs where the average salary is over a certain threshold:

#### SQL Query

```sql
SELECT DeptID
FROM EMPLOYEE
GROUP BY DeptID
HAVING AVG(Salary) > 50000;
```
<br>

## 15. What are _indexes_ and how do they work in databases?

An **index** serves as a data structure in a database system. It enhances the efficiency and speed of data lookup operations by logically ordering the indexed data.

### Index Types

- **B-Tree (Balanced Tree)**: Suited for ranges and equality operations, such as using `WHERE` clauses in SQL.
- **Hash**: Ideal for exact-match lookups, like primary keys.
- **Full-text**: Specifically designed for text searches, often seen in search engines.
- **Bitmap**: Efficient for low-cardinality columns, where there are few distinct values, like gender.

### Data Lookup Using Indexes

- **Ordered Scans**: Possible through B-Tree indexes where data is sorted, aiding range queries.
- **Exact-Match Sequencing**: For Hash and tree-based indexes, this ensures swift exact-value matches.
- **Range Searches**: Supported by B-Trees, they enable operations like finding numbers within a range.

### Best Practices

- **Consider Index Maintenance Overhead**: While indexes speed up reads, they might slow down data modifications like `INSERT`, `UPDATE`, and `DELETE`.
- **Index Tailing**: Place more selective columns first, and follow them with less-discriminatory columns for best results.
- **Index Coverage**: Aim to cover frequently queried columns, but don't go overboard, leading to index bloat.

### Code Example: Index Types in PostgreSQL

Here is the SQL code:

  ```sql
  -- B-Tree Index
  CREATE INDEX idx_btree ON table_name (column_name);

  -- Hash Index
  CREATE INDEX idx_hash ON table_name USING HASH (column_name);
  ```

## 16.  What are joins in SQL and discuss its types? 

A JOIN clause is used to combine rows from two or more tables, based on a related column between them. It is used to merge two tables or retrieve data from there. There are 4 types of joins: inner join left join, right join, and full join.

* Inner join: Inner Join in SQL is the most common type of join. It is used to return all the rows from multiple tables where the join condition is satisfied. 
* Left Join:  Left Join in SQL is used to return all the rows from the left table but only the matching rows from the right table where the join condition is fulfilled.
* Right Join: Right Join in SQL is used to return all the rows from the right table but only the matching rows from the left table where the join condition is fulfilled.
* Full Join: Full join returns all the records when there is a match in any of the tables. Therefore, it returns all the rows from the left-hand side table and all the rows from the right-hand side table.
![alt text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/Joins%20in%20SQL.png)

## 17. Define the primary, foreign, and unique keys, candidate key and the differences between them?

**Primary key:** Is a key that is used to uniquely identify each row or record in the table, it can be a single column or composite pk that contains more than one column

* The primary key doesn't accept null or repeated values
* The purpose of the primary key is to keep the Entity's integrity
* There is only one PK in each table
* Every row must have a unique primary key

**Foreign key:** Is a key that is used to identify, show or describe the relationship between tuples of two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them.

* The purpose of the foreign key is to keep data integrity
* It can contain null values or primary key values

**Unique key:** It's a key that can identify each row in the table as the primary key but it can contain one null value

* Every table can have more than one Unique key

**Candidate key** A table may have more than one combination of columns that could uniquely identify the rows in a table; each combination is a candidate key. During database design you can pick up one of the candidate keys to be the primary key. For example, in the supplier table supplierid and suppliername can be candidate key but you will only pick up supplierid as the primary key.


## 18. What is the difference between BETWEEN and IN operators in SQL?

The SQL **BETWEEN** operator selects values within a given range. It is inclusive of both the ranges, begin and end values are included.  The values can be text, date, numbers, or other

For example, select * from tablename where price BETWEEN 10 and 100;

The **IN** operator is used to select rows in which a certain value exists in a given field. It is used with the WHERE clause to match values in a list.

For example, select COLUMN from tablename where 'USA' in (country);

IN is mainly best for categorical variables(it can be used with Numerical as well) whereas Between is for Numerical Variables
![alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/Betweem%26IN.png)

## 19. Describe the advantages and disadvantages of relational database vs NoSQL databases

**Advantages of Relational Databases:** Ensure data integrity through a defined schema and ACID properties.  Easy to get started with and use for small-scale applications. Lends itself well to vertical scaling.  Uses an almost standard query language, making learning or switching between types of relational databases easy.

**Advantages of NoSQL Databases:** Offers more flexibility in data format and representations, which makes working with Unstructured or semistructured data easier.  Hence, useful when still the data schema or adding new features/functionality rapidly like in a startup environment to scale with horizontal scaling.  Lends itself better to applications that need to be highly available. 

**Disadvantages of Relational Databases:** Data schema needs to be known in advance.  Ale schemas is possible, but frequent changes to the schema for large tables can cause performance issues.  Horizontal scaling is relatively difficult, leading to eventual performance bottlenecks

**Disadvantages of NoSQL Databases:** As outlined by the BASE framework, weaker guarantees of data correctness are made due to the soft-state and eventual consistency property.  Managing consistency can also be difficult due to the lack of a predefined schema that's strictly adhered to. Depending on the type of NoSQL database, it can be challenging for the database to handle its types of complex queries or access patterns.


![Alt_text](https://github.com/youssefHosni/Data-Science-Interview-Questions/blob/main/Figures/ezgif.com-gif-maker.jpg)

## 20. What do you understand by Self Join? Explain using an example

Answer:

Self-join is as its name implies, joining a table to itself on a database, this process may come in handy in a number of cases, such as:

1- comparing the table's rows to themselves:

It's like we have two copies of the same table and join them together on a given condition to reach the required output query.

Ex. If we have a store database with a client's data table holding a bunch of demographics, we could self-join the client's table to get clients who are located in the same city/made a purchase on the same day/etc.

2- querying a table that has hierarchical data:

Meaning, the table has a primary key that has a one-to-many relationship with another foreign key inside the same table, in other words, the table has data that refers to the same table. We could use self-join in order to have a clear look at the data by matching its keys.

Ex. The organizational structure of a company may contain an employee table that has an employee id and his manager id (who is also an employee, hence has an employee id too) in the same table. Using self-join on this table would allow us to reference every employee directly to his manager.

P.S. we would need to take care of duplicates that may occur and consider them in the conditions.

## 21. What is the difference between temporary tables and common table expressions?

Answer:

𝗧𝗲𝗺𝗽𝗼𝗿𝗮𝗿𝘆 𝘁𝗮𝗯𝗹𝗲𝘀 and 𝗖𝗧𝗘s are both used to store intermediate results in MySQL, but there are some key differences between the two:

𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻: A temporary table is a physical table that is created in the database and persists until it is explicitly dropped or the session ends. A CTE is a virtual table that is defined only within the scope of a single SQL statement.

𝗦𝘁𝗼𝗿𝗮𝗴𝗲: Temporary tables are stored in the database and occupy physical disk space. CTEs are not stored on disk and exist only in memory for the duration of the query.

𝗔𝗰𝗰𝗲𝘀𝘀: Temporary tables can be accessed from any session that has the appropriate privileges. CTEs are only accessible within the scope of the query in which they are defined.

𝗟𝗶𝗳𝗲𝘀𝗽𝗮𝗻: Temporary tables persist until they are explicitly dropped or the session ends. CTEs are only available for the duration of the query in which they are defined and are then discarded.

𝗦𝘆𝗻𝘁𝗮𝘅: Temporary tables are created using the CREATE TEMPORARY TABLE statement, while CTEs are defined using the WITH clause.

𝗣𝘂𝗿𝗽𝗼𝘀𝗲: Temporary tables are typically used to store intermediate results that will be used in multiple queries, while CTEs are used to simplify complex queries by breaking them down into smaller, more manageable parts.

In summary, temporary tables are physical tables that persist in the database and can be accessed from any session, while CTEs are virtual tables that exist only within the scope of a single query and are discarded once the query is complete. Both temporary tables and CTEs can be useful tools for simplifying complex queries and storing intermediate results.

## 22. Why use Right Join When Left Join can suffice the requirement?

Answer:
In MySQL, the 𝗥𝗜𝗚𝗛𝗧 𝗝𝗢𝗜𝗡 𝗮𝗻𝗱 𝗟𝗘𝗙𝗧 𝗝𝗢𝗜𝗡 are used to retrieve data from multiple tables by joining them based on a specified condition.

Generally, the 𝗟𝗘𝗙𝗧 𝗝𝗢𝗜𝗡 is used more frequently than the 𝗥𝗜𝗚𝗛𝗧 𝗝𝗢𝗜𝗡 because it returns all the rows from the left table and matching rows from the right table, or NULL values if there is no match.

In most cases, a 𝗟𝗘𝗙𝗧 𝗝𝗢𝗜𝗡 is sufficient to meet the requirement of retrieving all the data from the left table and matching data from the right table.

However, there may be situations where using a 𝗥𝗜𝗚𝗛𝗧 𝗝𝗢𝗜𝗡 is more appropriate.

Here are a few examples:

𝟭. 𝗪𝗵𝗲𝗻 𝘁𝗵𝗲 𝗽𝗿𝗶𝗺𝗮𝗿𝘆 𝘁𝗮𝗯𝗹𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗿𝗶𝗴𝗵𝘁 𝘁𝗮𝗯𝗹𝗲: If the right table contains the primary data that needs to be retrieved, and the left table contains supplementary data, a 𝗥𝗜𝗚𝗛𝗧 𝗝𝗢𝗜𝗡 can be used to retrieve all the data from the right table and matching data from the left table.

𝟮. 𝗪𝗵𝗲𝗻 𝘁𝗵𝗲 𝗾𝘂𝗲𝗿𝘆 𝗻𝗲𝗲𝗱𝘀 𝘁𝗼 𝗯𝗲 𝗼𝗽𝘁𝗶𝗺𝗶𝘇𝗲𝗱: In some cases, a 𝗥𝗜𝗚𝗛𝗧 𝗝𝗢𝗜𝗡 may be more efficient than a 𝗟𝗘𝗙𝗧 𝗝𝗢𝗜𝗡 because the database optimizer can choose the most efficient join order based on the query structure and the available indexes.

𝟯. 𝗪𝗵𝗲𝗻 𝘂𝘀𝗶𝗻𝗴 𝗼𝘂𝘁𝗲𝗿 𝗷𝗼𝗶𝗻𝘀: If the query requires an outer join, a 𝗥𝗜𝗚𝗛𝗧 𝗝𝗢𝗜𝗡 may be used to return all the rows from the right table, including those with no matching rows in the left table.
It's important to note that while a 𝗥𝗜𝗚𝗛𝗧 𝗝𝗢𝗜𝗡 can provide additional functionality in certain cases, it may also make the query more complex and difficult to read. In most cases, a 𝗟𝗘𝗙𝗧 𝗝𝗢𝗜𝗡 is the preferred method for joining tables in MySQL.

## 23: Why Rank skips sequence?

Answers:
In MySQL, the rank function may skip a sequence of numbers when using the `DENSE_RANK()` function or the `RANK()` function, depending on the data and the query. The `DENSE_RANK()` function assigns a unique rank to each distinct value in a result set, whereas the `RANK()` function assigns the same rank to the duplicate values.

Here are some of the reasons why the rank function may skip a sequence in MySQL:

1. 𝗧𝗵𝗲 `𝗗𝗘𝗡𝗦𝗘_𝗥𝗔𝗡𝗞()` function skips ranks when there are ties. For example, if there are two rows with the same values in the ranking column, both will be assigned the same rank, and the next rank will be incremented by 1.

2. 𝗧𝗵𝗲 `𝗥𝗔𝗡𝗞()` function skips ranks when there are gaps between the duplicate values. For example, if there are three rows with the same values in the ranking column, and then the next row has a higher value, the `RANK()` function will skip over the fourth rank.

3. The query may have filtering or grouping clauses that affect the ranking. For example, if a query filters out some rows or groups them by a different column, the ranking may not be sequential.

It's important to note that the ranking function in MySQL behaves differently from the ranking function in other databases, so the same query may produce different results in different database systems.

## 24. How can you increase SQL performance?

Every index increases the time takes to perform INSERTS, UPDATES, and DELETES, so the number of indexes should not be too much. Try to use maximum 4-5 indexes on one table, not more. If you have read-only table, then the number of indexes may be increased.

Keep your indexes as narrow as possible. This reduces the size of the index and reduces the number of reads required to read the index.

Try to create indexes on columns that have integer values rather than character values.

If you create a composite (multi-column) index, the orders of the columns in the key are very important. Try to order the columns in the key as to enhance selectivity, with the most selective columns to the leftmost of the key.

If you want to join several tables, try to create surrogate integer keys for this purpose and create indexes on their columns. Create surrogate integer primary key (identity for example) if your table will not have many insert operations.

Clustered indexes are more preferable than nonclustered, if you need to select by a range of values or you need to sort results set with GROUP BY or ORDER BY. If your application will be performing the same query over and over on the same table, consider creating a covering index on the table.

You can use the SQL Server Profiler Create Trace Wizard with "Identify Scans of Large Tables" trace to determine which tables in your database may need indexes. This trace will show which tables are being scanned by queries instead of using an index.

## 25. What is SQL injection?

It is a Form of attack on a database-driven Web site in which the attacker executes unauthorized SQL commands by taking advantage of insecure code on a system connected to the Internet, bypassing the firewall. SQL injection attacks are used to steal information from a database from which the data would normally not be available and/or to gain access to an organization’s host computers through the computer that is hosting the database.

SQL injection attacks typically are easy to avoid by ensuring that a system has strong input validation.

As name suggest we inject SQL which can be relatively dangerous for the database. Example this is a simple SQL

SELECT email, passwd, login_id, full_name FROM members WHERE email = 'x'

Now somebody does not put “x” as the input but puts “x ; DROP TABLE members;”. So the actual SQL which will execute is:-

SELECT email, passwd, login_id, full_name FROM members WHERE email = ‘x’; DROP TABLE members;

Think what will happen to your database.

## 26. What is an ALIAS command?

ALIAS name can be given to a table or column. This alias name can be referred in WHERE clause to identify the table or column.

Example-. 1 Select st.StudentID, Ex.Result from student st, Exam as Ex where st.studentID = Ex. StudentID

Here, st refers to alias name for student table and Ex refers to alias name for exam table.

## 27. What is CLAUSE?

SQL clause is defined to limit the result set by providing condition to the query. This usually filters some rows from the whole set of records.

Example – Query that has WHERE condition

Query that has HAVING condition.

## 28. What are aggregate and scalar functions?

Aggregate functions are used to evaluate mathematical calculation and return single values. This can be calculated from the columns in a table. Scalar functions return a single value based on the input value.

Example -.

Aggregate – max(), count – Calculated with respect to numeric.

Scalar – UCASE(), NOW() – Calculated with respect to strings.

## 29. Can you join 3 tables together with inner join?

```sql
SELECT <fieldlist> FROM Faculty AS f
INNER JOIN Division AS d ON d.FacultyID = f.FacultyID
INNER JOIN Country AS c ON c.FacultyID = f.FacultyID
INNER JOIN Nationality AS n ON n.FacultyID = f.FacultyID
```

## 30. What is the difference between UNION and UNION ALL?

UNION – returns all distinct rows selected by either query

UNION ALL – returns all rows selected by either query, including all duplicates.

## 31. What is Case Function?

The CASE function lets you evaluate conditions and return a value when the first condition is met (like an IF-THEN-ELSE statement).
```sql
CASE expression
WHEN condition1 THEN result1
WHEN condition2 THEN result2
...
WHEN conditionN THEN resultN
ELSE result
END  
```
## 32. What are different types of statements supported by SQL?

**DDL (Data Definition Language)**: It is used to define the database structure such as tables. It includes three statements such as Create, Alter, and Drop.

**DML (Data Manipulation Language)**: These statements are used to manipulate the data in records. Commonly used DML statements are Select, Insert, Update, and Delete.

***Note: Some people prefer to assign the SELECT statement to a category of its own called: DQL. Data Query Language.***

**DCL (Data Control Language)**: These statements are used to set privileges such as Grant and Revoke database access permission to the specific user. Commands are Grant, Revoke

# Note: Not all database systems support the SELECT TOP clause. MySQL supports the LIMIT clause to select a limited number of records, while Oracle uses FETCH FIRST n ROWS ONLY and ROWNUM.

## SQL questions i used this playground https://www.db-fiddle.com/

## 1. Write a SQL to find the 2nd highest salary?

This create and insert statement can be used in sql playground, to get a table with values.

One can try this queries to check the answer

**MySQL8** used here
```sql
Create table Employees
(
 ID int AUTO_INCREMENT PRIMARY KEY,
 FirstName varchar(50),
 LastName varchar(50),
 Gender varchar(50),
 Salary int
);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Ben', 'Hoskins', 'Male', 70000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Mark', 'Hastings', 'Male', 60000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Steve', 'Pound', 'Male', 45000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Ben', 'Hoskins', 'Male', 70000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Philip', 'Hastings', 'Male', 45000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Mary', 'Lambeth', 'Female', 30000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Valarie', 'Vikings', 'Female', 35000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('John', 'Stanmore', 'Male', 80000);
```

**Approach 1 using limit**
```sql
select salary from Employees order by salary DESC limit 1 offset 1;
```
**Approach 2 using subquery**
```sql
select Max(salary) from Employees where salary < (select Max(salary) from Employees);
```

## 2. Write a SQL to find the nth highest salary?

This create and insert statement can be used in sql playground, to get a table with values.

One can try this queries to check the answer

**MySQL8** used here
```sql
Create table Employees
(
 ID int AUTO_INCREMENT PRIMARY KEY,
 FirstName varchar(50),
 LastName varchar(50),
 Gender varchar(50),
 Salary int
);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Ben', 'Hoskins', 'Male', 70000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Mark', 'Hastings', 'Male', 60000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Steve', 'Pound', 'Male', 45000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Ben', 'Hoskins', 'Male', 70000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Philip', 'Hastings', 'Male', 45000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Mary', 'Lambeth', 'Female', 30000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('Valarie', 'Vikings', 'Female', 35000);

Insert into Employees (FirstName, LastName, Gender, Salary) values ('John', 'Stanmore', 'Male', 80000);
```

**Approach 1 using limit and sub-query**
```sql
select salary from (
select distinct salary
  from Employees
  order by Salary desc
  limit 5 -- here the value can be anything like 1,2,3,4 .... up to n, this limit mainly depicts the nth number 
) as Result
order by salary asc
limit 1;
```
**Approach 2 using limit, sub-query and dense rank**
```sql
select salary 
from (
  select salary,
  DENSE_RANK() OVER (order by salary desc) as ranked_salary
    FROM Employees
) as Result
where ranked_salary = 3 -- here the value can be anything like 1,2,3,4 .... up to n, this limit mainly depicts the nth number
limit 1;
```
**Approach 3 using limit, sub-query, dense rank and CTE(Common Table Expressions)**
```sql
WITH RESULT AS (
    SELECT salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS ranked_salary
    FROM Employees
)
SELECT salary
FROM RESULT
WHERE ranked_salary = 5 -- here the value can be anything like 1,2,3,4 .... up to n, this limit mainly depicts the nth number
LIMIT 1;
```
### Note: Approach do not use
```sql
WITH RESULT AS (
    SELECT salary,
           ROW_NUMBER() OVER (ORDER BY salary DESC) AS ranked_salary
    FROM Employees
)
SELECT salary
FROM RESULT
WHERE ranked_salary = 5
LIMIT 1;

select salary 
from (
  select salary,
  ROW_NUMBER() OVER (order by salary desc) as ranked_salary
    FROM Employees
) as Result
where ranked_salary = 3
limit 1;
```
**Do not use ROW_NUMBER() for this query, if there are no duplicate data, then only it gives the correct value otherwise result will come wrong**

## 3. Write a SQL query to get the organization hierarchy?

**1. Employee table contains EmployeeID, EmployeeName, ManagerID columns**
**2. If an EmpoyeeId is passed then whole organizational hierarchy should be list down .i.e who is the manager of the employyeId passed, who is the managers of manager and so on.**

This create and insert statement can be used in sql playground, to get a table with values.

One can try this queries to check the answer

**MySQL8** used here

```sql
Create table Employees
(
 EmployeeID int AUTO_INCREMENT PRIMARY KEY,
 EmployeeName varchar(50),
 ManagerID int,
 FOREIGN KEY (ManagerID) REFERENCES Employees(EmployeeID)
);

Insert into Employees (EmployeeName, ManagerID) values ('John', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('Mark', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('Steve', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('Tom', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('Lara', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('Simon', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('David', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('Ben', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('Stacy', NULL);
Insert into Employees (EmployeeName, ManagerID) values ('Sam', NULL);

Update Employees Set ManagerID = 8 Where EmployeeName IN ('Mark', 'Steve', 'Lara');
Update Employees Set ManagerID = 2 Where EmployeeName IN ('Stacy', 'Simon');
Update Employees Set ManagerID = 3 Where EmployeeName IN ('Tom');
Update Employees Set ManagerID = 5 Where EmployeeName IN ('John', 'Sam');
Update Employees Set ManagerID = 4 Where EmployeeName IN ('David');

```

**Approach using self join and recursive CTE**

```sql
WITH RECURSIVE EmployeeCTE AS
(
    SELECT EmployeeId, EmployeeName, ManagerID
    FROM Employees
    WHERE EmployeeId = 7 -- here the employee id can be anything
    
    UNION ALL
    
    SELECT e.EmployeeId, e.EmployeeName, e.ManagerID
    FROM Employees e
    INNER JOIN EmployeeCTE cte
    ON e.EmployeeId = cte.ManagerID
)

SELECT E1.EmployeeName, IFNULL(E2.EmployeeName, 'No Boss') as ManagerName
FROM EmployeeCTE E1
LEFT JOIN EmployeeCTE E2
ON E1.ManagerID = E2.EmployeeId;
```
## 4. Write a query to remove duplicate rows except one?

This create and insert statement can be used in sql playground, to get a table with values.

One can try this queries to check the answer

**MySQL8** used here

```sql
Create table Employees
(
 ID int,
 FirstName varchar(50),
 LastName varchar(50),
 Gender varchar(50),
 Salary int
);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (1, 'Ben', 'Hoskins', 'Male', 70000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (1, 'Ben', 'Hoskins', 'Male', 70000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (1, 'Ben', 'Hoskins', 'Male', 70000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (2, 'Mark', 'Hastings', 'Male', 60000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (2, 'Mark', 'Hastings', 'Male', 60000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (2, 'Mark', 'Hastings', 'Male', 60000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (4, 'Steve', 'Pound', 'Male', 45000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (4, 'Steve', 'Pound', 'Male', 45000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (1, 'Ben', 'Hoskins', 'Male', 70000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (4, 'Steve', 'Pound', 'Male', 45000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (6, 'Valarie', 'Vikings', 'Female', 35000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (5, 'John', 'Stanmore', 'Male', 80000);

Insert into Employees (ID, FirstName, LastName, Gender, Salary) values (5, 'John', 'Stanmore', 'Male', 80000);

```

**Approach using sub query**

```sql
DELETE e
FROM Employees e
JOIN (
    SELECT *
    FROM (
        SELECT *, 
               ROW_NUMBER() OVER (PARTITION BY ID ORDER BY ID ASC) AS RowNums
        FROM Employees
    ) AS EmployeeCTE
    WHERE RowNums  > 1
) AS Duplicates
ON e.ID = Duplicates.ID;
    
SELECT * FROM Employees;
```