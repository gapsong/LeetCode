# Note collection

Just a random collection of notes.

1. Get notes.
2. Get all edge cases.
3. Read carefully.

____
### Dynamic programming:
When to use it? 
If you can split up your problem into almost the same subproblem.
Example: 
How to calculate the sum.
```
howSum(7, [2,3,4])  -> howSum(5, [2,3,4]) -> howSum(3,[2,3,4])....
                    -> howSum(4, [2,3,4]) -> 
                    -> howSum(3, [2,3,4]) -> 
```

Most of the times you are able to draw a tree, which is able to be cut down and have the same problem again.

#### Tricks: 
Don't forget to memoize things to improve the runtime

____

### Sliding window
When to use it?
Mostly in arrays

