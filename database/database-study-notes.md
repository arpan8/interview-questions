# Database study notes from Complete SQL and Databases Bootcamp (ZTM course from udemy)

# 📘 Database Fundamentals – Q&A Notes

These are structured notes in a question-answer format derived from the introductory video of a DBMS course. Ideal for quick interview prep and understanding foundational database concepts.

---

### What is a database?  
A database is a **collection of data** and a **method to access and manipulate** that data.

---

### Why is learning about databases important for developers and data professionals?  
Databases are foundational to all tech fields, including **web development**, **machine learning**, and **data engineering**. Understanding how data is stored, accessed, and used helps connect the dots between different technologies.

---

### Which companies are examples of data-driven organizations?  
Companies like **Uber**, **Alibaba**, **Amazon**, **Facebook**, and **Google** are extremely valuable because they collect and use massive amounts of data.

---

### How much data is produced globally per year?  
We produce an estimated **2.5 quintillion bytes of data** every day.

---

### What are the common sources of data in our modern world?  
- Drones and surveillance cameras  
- Location data  
- Mobile phone apps  
- Websites and web pages  
- Autonomous vehicles  

---

### What does it mean when we say more data has been generated in the last 2 years than in all of human history?  
This means we're **capturing and storing** more data than ever before—not that new matter is being created, but that we're logging and utilizing existing signals and interactions digitally.

---

### Why is data considered useless unless captured?  
Like **oil**, data must be **extracted and used** to derive value. Without capturing and storing data, it holds no practical utility.

---

### What is the primary role of a database?  
To **capture**, **store**, and allow us to **query and analyze** data in a structured way.

---

### What is the size of the digital universe in terms of stored data?  
It is estimated to be about **44 zettabytes** of data.

---

### What would happen if we didn’t use databases?  
Without databases, we wouldn’t be able to **store**, **access**, or **analyze** large amounts of data, making applications like **Facebook**, **Google**, or **autonomous cars** impossible to build.

---

### Are databases complex or magical systems?  
No. Databases are just **computers (hardware)** running **software** that handles data storage and manipulation.

---

### What are the two key components of a database system?  
1. **Hardware:** The physical machine (e.g., server, disk drive)  
2. **Software:** The DBMS application that stores and manages the data

---

### Can we create a database on small devices like phones or laptops?  
Yes. Any **device with storage and memory** (e.g., desktops, laptops, mobile phones) can become a database server by installing the appropriate database software.

---

### What are the first steps to working with a database as shown in the course?  
1. **Install database software** on your machine  
2. **Add data** to it  
3. **Query and analyze** the data through practice

---

### 📘 **Lecture Q&A Summary: Wrapping Up Database Concepts**

---

### Is Google Sheets or Excel a type of database?  
Yes. Tools like **Google Sheets or Excel** act as simple databases because they **store** and **allow manipulation** of data through software interfaces.

---

### Can non-digital tools be considered databases?  
Yes. Even **pen and paper** can be viewed as a form of a database, although not digital. It is still a method of storing information.

---

### Why are databases often represented as cylinders in diagrams?  
The cylinder symbolizes **drum memory**, an early data storage device. Despite being outdated, the symbol persists for historical reasons—similar to how a floppy disk still represents the **save** icon.

---

### Are there many different types of databases?  
Yes. There are numerous types of databases, each with **unique features**, **pros and cons**, and **different use cases**, depending on the company or user requirements.

---

### Why don’t we just use spreadsheets like Excel for all data needs?  
Spreadsheets **don’t scale well** with large datasets and lack features like:  
- **Data integrity**  
- **Access control**  
- **Automation capabilities**  
- **Support for terabytes of data**  
- **Complex querying and analysis**

---

### What are some features that databases provide which spreadsheets do not?  
- **Data integrity enforcement**  
- **Multi-user access control**  
- **Data automation and triggers**  
- **Scalability to terabytes or petabytes**  
- **Integration with applications and services**

---

### Why are there so many types of databases?  
Data is used in **different ways by different people and organizations**, requiring databases with **specialized capabilities** for performance, scale, or data structure flexibility.

---

### What is a query in the context of databases?  
A **query** is a **question or request** made to a database to **retrieve, modify, or interact** with data.

---

### What is SQL used for?  
**SQL (Structured Query Language)** is the most common language used to **query**, **insert**, **update**, and **manage** data within relational databases.

---
### What is a DBMS (Database Management System)?  
A DBMS is software that allows us to store, manage, and interact with data in a database. It handles operations like retrieving, inserting, updating, and deleting data.

---

### What is an RDBMS (Relational Database Management System)?  
An RDBMS is a type of DBMS that stores data in a structured, relational format (tables with rows and columns). Examples include PostgreSQL, MySQL, SQLite, Microsoft SQL Server, and Oracle.

---

### What is the difference between a DBMS and an RDBMS?  
An RDBMS is a **specific type** of DBMS that uses **relational models** (i.e., data in related tables). All RDBMS are DBMS, but not all DBMS are relational.

---

### What is SQL (Structured Query Language)?  
SQL is a **query language**, not a full programming language. It allows users to interact with a DBMS by performing operations such as:
- **Create**
- **Read**
- **Update**
- **Delete**  
These are collectively known as **CRUD** operations.

---

### Who uses SQL?  
SQL is used by a wide range of roles including software developers, data engineers, analysts, product managers, and more — anyone who needs to interact with data in relational databases.

---

### How does SQL interact with a database?  
SQL communicates with the **DBMS/RDBMS**, which in turn performs the required operations on the data stored in the database.

---

### What is a “database” in practical terms?  
In practice, when someone refers to a “database,” they often mean both:
- The **data storage** layer (where the data is saved)
- The **DBMS software** (like PostgreSQL or MySQL) that manages it

---

### What kinds of data can be stored in a database?  
Virtually anything: user profiles, images, logs, audio files, application metadata, and more.

---

### Is SQL limited to one database engine?  
No. SQL is a **standardized language**, and most RDBMS systems (like MySQL, PostgreSQL, Oracle, etc.) implement SQL in a very similar way. While there are some engine-specific differences, the core language remains portable.

---

### 📘 **Lecture Q&A Summary: What is SQL?**

---

### What is SQL?  
SQL (Structured Query Language) is a programming language used to communicate with databases. It is primarily used to interact with relational databases by sending queries to retrieve, insert, update, or delete data.

---

### What is the purpose of SQL?  
SQL allows users to issue instructions (queries) to a database management system, which returns specific data or modifies the data as requested. The output is the answer to the query, typically in the form of data.

---

### What is a database?  
A database is a structured set of data that is stored in a system. Unlike simple text files or spreadsheets, databases are designed to handle much larger amounts of data, often from big companies like Amazon and Microsoft.

---

### How is data structured in a database?  
Data in a database is structured in a way that allows efficient storage and retrieval. While formats like Notepad or Excel can store data, databases follow specific models that manage data efficiently, especially at scale.

---

### What is a database model?  
A database model defines how data is stored, organized, and related to each other. Throughout the course, different models will be discussed, but the focus will be on relational databases and how they use SQL.

---

### How do we interact with a database using SQL?  
When using SQL, you write **statements** to instruct the database. These statements are called **queries**, and they request specific data from the database or modify the existing data.

---

### What are queries in SQL?  
Queries are instructions or commands written in SQL that ask the database to perform actions such as retrieving, inserting, updating, or deleting data.

---

### 📘 **Lecture Q&A Summary: Understanding SQL Queries**

---

### What is a query in SQL?  
A query in SQL is a question or instruction you ask the database to retrieve or modify data. It's also known as a statement. In SQL, a query is used to interact with databases to get specific answers (data).

---

### What is an example of a basic query?  
An example of a basic query is `SELECT * FROM users;`, which retrieves all information from the "users" table in the database.

---

### What is the purpose of the wildcard `*` in a query?  
The `*` wildcard in a query represents "everything." It is used to select all columns of data from a table.

---

### How can you filter the data in a query?  
You can filter data using the `WHERE` clause. For example, `SELECT name FROM users WHERE role = 'manager';` retrieves the names of users where the role is equal to "manager."

---

### What are the components of a query?  
A query consists of different parts or clauses, including:
- `SELECT`: Specifies which data to retrieve.
- `FROM`: Specifies the table or data source.
- `WHERE`: Filters the data based on a condition.

---

### What is an identifier in SQL?  
An identifier in SQL is the part of the data you are querying. For example, in the query `SELECT name FROM users;`, "name" is the identifier because it's the data field being retrieved.

---

### What is a condition in a SQL query?  
A condition in a query is specified by the `WHERE` clause. For example, in `WHERE role = 'manager';`, the condition is that the role must be equal to "manager" for the data to be returned.

---

### What is an expression in SQL?  
An expression is a part of a condition. For instance, in `role = 'manager'`, the expression is `'manager'`, which is what the role is expected to equal.

---

### How does filtering work in SQL?  
Filtering is done using the `WHERE` clause, which restricts the data returned based on specified conditions. For example, `SELECT name FROM users WHERE role = 'manager';` filters users whose role is "manager."

---

### What is a declarative language in the context of SQL?  
SQL is a declarative language because you define *what* you want (e.g., the data), but not necessarily *how* to get it. The database engine determines the most efficient way to execute the query.

---

# 📘 Database Fundamentals(Revisited) – Q&A Notes

### What is a database?
A **database** is a *structured set of data* designed to scale efficiently, especially for organizations managing large volumes of information.

---

### What existed before databases?
Before databases, we had **file processing systems**, which were the digital successors to **physical filing cabinets** and paper-based records.

---

### What were file processing systems?
File processing systems were **custom-built software solutions** used to manage data using languages like Java or Python.  
They stored data in individual files **without relationships** between datasets.

---

### What were the main limitations of file processing systems?

- No relationships between data: files (e.g., customers, sales) existed independently.
- Data redundancy: the same customer data had to be duplicated in multiple systems.
- Lack of consistency: updates in one place weren’t reflected elsewhere.
- High complexity: developers had to manage hardware, OS, file formats, etc.
- Incompatibility: different systems (e.g., exams, library, students) couldn't communicate due to differing structures.

---

### What is a data model?
A **data model** defines a consistent structure for storing data — typically using *tables with rows and columns*.  
With a common model, different systems can share and understand data seamlessly.

---

### Can you give an example of file processing limitations?
Yes. In a school system:
- The **student**, **exam**, and **library** systems stored data independently.
- If a student borrowed a book for an exam, both systems duplicated the student's data.
- This led to **redundant and inconsistent** data across systems.

---

### What changed with the database-oriented approach?

- Data is centralized in a single system.
- Relationships are explicitly defined (e.g., via foreign keys).
- Systems interact and share data without duplication.
- Improves consistency, maintainability, and scalability.

---
