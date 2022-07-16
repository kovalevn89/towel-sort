module.exports = function towelSort (matrix) {
  return typeof matrix === 'object' ? matrix.map(function(values, index){
    return index % 2 === 0 ? values : values.reverse();
  }).flat(1) : [];
}
