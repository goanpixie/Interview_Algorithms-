//Generate random numbers in the given range

function studentData(max, datapoints) {
  let datapointsArray = [];
  for (let i = 0; i < datapoints; i++) {
    let randomNum = Math.floor(Math.random() * Math.floor(max));
    datapointsArray.push(randomNum);
  }
  return datapointsArray;
}
