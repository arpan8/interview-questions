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


