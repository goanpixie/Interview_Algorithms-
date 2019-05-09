/**
Implement some function that takes two arguments. The first argument is a collection of tasks that may each return asynchronously and accept their own callback, the second argument a callback to execute after all tasks have returned.
**/

function job1(cb) {
  setTimeout(function() { cb('first'); }, 900);
}
function job2(cb) {
  setTimeout(function() { cb('second'); }, 100);
}
function job3(cb) {
  setTimeout(function() { cb('third'); }, 500);
}

var jobs = [job1, job2, job3];

function callback(results) {
  console.log(results);
}

/*

  implement asyncMap

*/


let asyncMap = async function(jobs, callback){
  const results=[];
  for(let i=0;i<jobs.length;i++){
     let result = await new Promise((resolve)=>{
       jobs[i](resolve)
     })
     results.push(result);
  }
  return callback(results);
}

asyncMap(jobs, callback); // 'first', 'second', 'third'