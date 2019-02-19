//SuperMarket Queue:
//

let queueTime = function(n, queue) {
  let arrQueue = [];
  for (let i = 0; i < n; i++) {
    arrQueue.push(0);
  }
  console.log(arrQueue);
  for (let j = 0; j < queue.length; j++) {
    arrQueue[0] += queue[j];
    console.log(arrQueue);
    arrQueue.sort(function(a, b) {
      return a - b;
    });
  }
  return arrQueue[arrQueue.length - 1];
};
