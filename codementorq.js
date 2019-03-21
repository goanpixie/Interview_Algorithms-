//Q:"B,C,A/n1,2,3/n6,5,4"
//A:"A,B,C/n3,2,1/n4,5,6"

function sortCsvColumns(csv_data) {
  let csv_data_split = csv_data.split('\n');
  console.log(csv_data_split);
  console.log(csv_data_split[0].split(',').length);
  let newArr = [];
  for (let i = 0; i < csv_data_split[0].split(',').length; i++) {
    let item = '';
    for (let j = 0; j < csv_data_split.length; j++) {
      item += csv_data_split[j].toLowerCase().split(',')[i] + ' ';
    }
    newArr.push(item);
  }
  newArr.sort();
  let ansArr = [];
  for (let i = 0; i < newArr[0].trim().split(' ').length; i++) {
    let ans = '';
    for (let j = 0; j < newArr.length; j++) {
      ans += newArr[j].trim().split(' ')[i] + ' ';
    }
    let trim = ans.trim().split();
    ansArr.push(...trim);
  }
  console.log('ansArr', ansArr);
  let finalAns = '';
  for (let i = 0; i < ansArr.length; i++) {
    finalAns += ansArr[i].split(/[ ,]+/).join(',');
    if (i !== ansArr.length - 1) {
      finalAns = finalAns + String.raw`\n`;
    }
  }
  console.log('finalAns->', finalAns);
  return finalAns;
}

console.log(
  sortCsvColumns(
    'Adam,Beth,Charles,Danielle,Eric\n3907,17945,10091,10088,10132\n48,2,12,13,12',
  ),
);
