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
## 4. Write a SQL query to remove duplicate rows except one?

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
## 5. Write a SQL query to find employees hired in last n months?

This create and insert statement can be used in sql playground, to get a table with values.

One can try this queries to check the answer

**MySQL8** used here

```sql
-- Create table with HireDate column
CREATE TABLE Employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Gender VARCHAR(50),
    Salary INT,
    HireDate DATE
);
-- Insert data with HireDate values
INSERT INTO Employees (FirstName, LastName, Gender, Salary, HireDate) 
VALUES 
('Ben', 'Hoskins', 'Male', 70000, '2023-01-15'),

('Mark', 'Hastings', 'Male', 60000, '2022-12-10'),

('Steve', 'Pound', 'Male', 45000, '2022-11-20'),

('Ben', 'Hoskins', 'Male', 70000, '2023-01-15'),

('Philip', 'Hastings', 'Male', 45000, '2023-03-05'),

('Mary', 'Lambeth', 'Female', 30000, '2023-02-25'),

('Valarie', 'Vikings', 'Female', 35000, '2023-04-10'),

('John', 'Stanmore', 'Male', 80000, '2022-10-01');

```

***Note: It can be said for find the hired employee in  last n months, days, or year the same query willused with little changes***

**For Months**

```sql
SELECT *, TIMESTAMPDIFF(MONTH, HireDate, CURDATE()) as Diff
FROM Employees
WHERE TIMESTAMPDIFF(MONTH, HireDate, CURDATE()) BETWEEN 1 AND 17; --- here 17 can be anything up to n
```
**For Days**

```sql
SELECT *, TIMESTAMPDIFF(DAY, HireDate, CURDATE()) as Diff
FROM Employees
WHERE TIMESTAMPDIFF(DAY, HireDate, CURDATE()) BETWEEN 1 AND 600; --- here 600 can be anything up to n
```
**For years**

```sql
SELECT *, TIMESTAMPDIFF(YEAR, HireDate, CURDATE()) as Diff
FROM Employees
WHERE TIMESTAMPDIFF(YEAR, HireDate, CURDATE()) BETWEEN 0 AND 1; --- here 1 can be anything up to n
```

## 6. Write a SQL query to find rows that contain only numerical data

This create and insert statement can be used in sql playground, to get a table with values.

One can try this queries to check the answer

**MySQL8** used here
```sql
CREATE TABLE TestTable (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Value VARCHAR(50)
);
INSERT INTO TestTable (Value) VALUES ('123');
INSERT INTO TestTable (Value) VALUES ('ABC');
INSERT INTO TestTable (Value) VALUES ('DEF');
INSERT INTO TestTable (Value) VALUES ('901');
INSERT INTO TestTable (Value) VALUES ('JKL');


SELECT Value
FROM TestTable
WHERE IFNULL(CAST(Value AS UNSIGNED), '') = Value;
```
**In SQL server query is more easy**

```sql
SELECT Value 
FROM TestTable 
WHERE ISNUMERIC(Value) = 1
```


<!-- https://www.youtube.com/watch?v=pYMc_hxUfLQ&list=PL6n9fhu94yhXcztdLO7i6mdyaegC8CJwR&index=8 -->

<!-- file:///home/cx119@codelogicx.link/Downloads/TOP%2050%20SQl%20queries%20for%20interview.pdf -->