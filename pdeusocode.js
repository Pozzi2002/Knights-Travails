//input -> knightMoves([3,3],[4,3])  
//output ->  => You made it in 3 moves!  Here's your path:
    //[3,3]
    //[4,5]
    //[2,4]
    //[4,3]
//Data structure??? 
//1.) Simple array with function   ---NOT
//2.) Linked list, almost binary tree, not left and right, but all possible ways -- NOT
//3.) Objects (Hash-table(Key-value))  --NOT
//NOT, I need a graph - It's another one 
//1.) Edge lists 2.) Adjacency matrices 3.) Adjacency lists  ----  Only one  --YES 

//8 posible ways arr [+-1, +-2] or vice versa [+-2, +-1] 