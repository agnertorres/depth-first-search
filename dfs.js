Array.prototype.contains = function (element) {
  for (var i=0; i < this.length; i++)
    if (element === this[i]) return true;

  return false;
};

var matrix = [[0,1,0,0,0,1,1,0,1,0,0,0],
              [1,0,1,0,1,0,0,0,0,0,0,0],
              [0,1,0,1,0,0,1,0,0,0,0,0],
              [0,0,1,0,0,0,0,0,0,0,0,0],
              [0,1,0,0,0,1,0,0,0,0,0,0],
              [1,0,0,0,1,0,0,1,0,0,0,0],
              [1,0,1,0,0,0,0,0,0,0,0,1],
              [0,0,0,0,0,1,0,0,0,1,0,0],
              [1,0,0,0,0,0,0,0,0,1,1,1],
              [0,0,0,0,0,0,0,1,1,1,0,0],
              [0,0,0,0,0,0,0,0,1,1,0,1],
              [0,0,0,0,0,0,1,0,1,0,1,0]];

var depthFirstSearch = function depthFirstSearch(matrix, start, destiny) {

  var stack = [],
      viewed = [],
      current;

  stack.push(start);

  while (stack.length > 0) {

    current = stack[stack.length-1];
    viewed.push(current);
    var foundNodes = false;

    for (var i=0; i < matrix.length; i++) {

      if (matrix[current][i] == 1) {

        if (i == destiny) {
          viewed.push(i);

          return {
            viewed: viewed,
            start: start,
            destiny: destiny
          };

        } else {

          if (!viewed.contains(i)) {
            if (!stack.contains(i)) {
              foundNodes = true;

              stack.push(i);
              break;
            }
          }
        }
      }
    }

    if (!foundNodes)
      stack.pop();
  }
};

depthFirstSearch(matrix, 0, 6);
