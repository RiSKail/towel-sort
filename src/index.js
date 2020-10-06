module.exports = function towelSort(matrix) {
  if (matrix == undefined) return [];

  matrix.map(function (item, i) {
    (i % 2 != 0) ? item.reverse() : item;
  });

  return matrix.flat();
};
