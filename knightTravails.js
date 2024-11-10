function knightMoves(root, end) {

  if ( root < [0, 0] ||
       root > [7, 7] ||
       end < [0, 0] ||
       end > [7, 7] ) return null;
  if (root == end) return "Ehhay Blya!"
let possibleWay1 = [1, 2];
let possibleWay2 = [-1, 2];
let possibleWay3 = [1, -2];
let possibleWay4 = [1, -2];
}

knightMoves([3,3],[4,3])
//[3,3] -> [4,5] -> [2,4] -> [4,3]