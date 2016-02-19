

function getPaths (n) { //get paths from bottom corner of an n x n grid to opposite top corner

  var coordinates = [1,1];
  var total = 0;

  function recurse () {
    if (coordinates[0] === n && coordinates[1] === n) {
      total++;
      return;
    }

    for (var i = 0; i < 2; i++) {
      if (coordinates[i] < n) {
        coordinates[i]++;

        recurse();

        coordinates[i]--;
      }
    }
  }
  recurse();

  return total;
}

console.log(getPaths(3));