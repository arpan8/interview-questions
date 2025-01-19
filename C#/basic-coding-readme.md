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
