# 📘 Introduction to Algorithm Analysis

Before diving into Data Structures and Algorithms (DSA), it's essential to understand how to evaluate the efficiency of algorithms.  
For any given problem, there can be multiple correct solutions using different techniques or data structures.  
Choosing the **most optimal solution** requires a systematic approach to **algorithm analysis**.

---

## 📌 Problem Statement: Sum of First _n_ Natural Numbers

To demonstrate the importance of algorithm analysis, consider the following problem:

> **Given an integer `n`, compute the sum of the first `n` natural numbers.**

### ✅ Sample Input/Output

| Input (`n`) | Output |
|-------------|--------|
| 3           | 6      |
| 5           | 15     |

---

## 💡 Multiple Solutions

Below are three common approaches to solve this problem:

### 1. Using a Mathematical Formula  
```javascript
// Time Complexity: O(1)
function sumN(n) {
  return (n * (n + 1)) / 2;
}
```
### 2. Using a Loop

```javascript
// Time Complexity: O(n)
function sumN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```
### 3. Using Nested Loops

```javascript
// Time Complexity: O(n^2)
function sumN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      total += 1;
    }
  }
  return total;
}

```
## ⚠️ Limitations of Measuring Execution Time

Empirical testing by running the code and measuring execution time is unreliable due to:

- 🖥️ **System Load:** Background processes affect execution time.
- ⚙️ **Hardware Differences:** Fast vs. slow machines lead to inconsistent results.
- 💻 **Language Dependency:** Compiled languages (e.g., C++) perform differently from interpreted ones (e.g., JavaScript).
- 📊 **Input Sensitivity:** Some algorithms perform better with certain input patterns.

---
# 📊 Asymptotic Analysis

## 🔍 What is Asymptotic Analysis?

Asymptotic analysis is the standard approach used in algorithm analysis. It allows us to measure the **order of growth** of an algorithm's running time as a function of the input size.

- Focuses on how the **execution time** grows as input size `n` increases.
- It is **independent** of:
  - Programming language
  - Machine specifications
  - Specific test cases

### Asymptotic Notations
- **Big-O (O)** – Worst-case time
- **Big-Theta (Θ)** – Average-case time
- **Big-Omega (Ω)** – Best-case time

---

## 📐 Why Use Asymptotic Analysis?

- Helps estimate algorithm performance without implementation.
- Enables scalability comparison between algorithms.
- Abstracts away details like:
  - Language
  - Hardware
  - Compiler optimizations

---

## ⚙️ How It Works

### Step 1: Derive Time Complexity as an Algebraic Expression
## 📌 Problem Statement: Sum of First _n_ Natural Numbers

To demonstrate the importance of algorithm analysis, consider the following problem:

> **Given an integer `n`, compute the sum of the first `n` natural numbers.**

### ✅ Sample Input/Output

| Input (`n`) | Output |
|-------------|--------|
| 3           | 6      |
| 5           | 15     |

---

## 💡 Multiple Solutions

Below are three common approaches to solve this problem:

### 1. Using a Mathematical Formula  
```javascript
// Time Complexity: O(1)
function sumN(n) {
  return (n * (n + 1)) / 2;
}
```

- Time complexity: O(1)
- Time expression: T(n) = c1

### 2. Using a Loop

```javascript
// Time Complexity: O(n)
function sumN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```
- Time complexity: O(n)
- Time expression: T(n) = c2 * n + c3
- Note: Even T(n) = c2 * (n - 5) + c3 simplifies to linear form: C * n + K
### 3. Using Nested Loops

```javascript
// Time Complexity: O(n^2)
function sumN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      total += 1;
    }
  }
  return total;
}

```
- Inner loop runs ~n(n+1)/2 times
- Time complexity: O(n²)
- Time expression: T(n) = (n²)/2 + n/2 + c

