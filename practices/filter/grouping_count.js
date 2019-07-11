'use strict';

function grouping_count(collection) {
  const countNumber = {'1':0, '2':0, '3':0, '4':0}
  collection.filter(value => {
    countNumber[value + '']++
  })
  return countNumber
}

module.exports = grouping_count;
