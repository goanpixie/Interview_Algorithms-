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

//Promises in order(more effective time wise):

let asyncMap = async function(jobs, callback){
  let Promise_array =[];
    for(let i=0;i<jobs.length;i++){
      let result = new Promise((resolve)=>{
      jobs[i](resolve);
      });
      //push promises to the promise array not results
      Promise_array.push(result);
    }
    console.log("Promise_array", Promise_array);
    //loop through promises and get values
    Promise.all(Promise_array).then(
    results=>{
      return callback(results);
    });
  };
  console.time("t");
  asyncMap(jobs, callback); //["first","second","third"]
  console.timeEnd("t")