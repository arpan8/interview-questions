# Basic coding using c#

### 1. Check a number is even or odd
```c#
using System;

namespace odd_even_checking
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num1 = 10;
            int remainder = num1 % 2;
            string check = remainder == 0 ? "even" : "odd";
            Console.WriteLine($"Reaminder is {remainder}, so it is {check}");
        }
    }
}
```
### 2. Times table of a given number
```c#
using System;

namespace times_table
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = 10;
            for (int i = 1; i <= 10; i++) { 
                Console.WriteLine("{0} * {1} = {2}", i, n, i*n);
            }
        }
    }
}
```
### 3. Fizz buzz problem
```c#
using System;

namespace fizzBuzz
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = 20;
            for (int i = 1; i <= n; i++) {
                if (i % 3 == 0 && i % 5 == 0)
                {
                    Console.WriteLine($"{i} => FizzBuzz");
                }
                else if (i % 3 == 0)
                {
                    Console.WriteLine($"{i} => Fizz");
                }
                else if (i % 5 == 0) {
                    Console.WriteLine($"{i} => Buzz");
                } else
                {
                    Console.WriteLine($"{i} => {i}");
                }
            }
        }
    }
}
```
