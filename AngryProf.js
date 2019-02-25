// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time () to arrived late ().

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

// Input Format

// The first line of input contains , the number of test cases.

// Each test case consists of two lines.

// The first line has two space-separated integers,  and , the number of students (size of ) and the cancellation threshold.
// The second line contains  space-separated integers () describing the arrival times for each student.


function angryProfessor(k, a) {
  let studentsOnTime = a.filter(num => num <= 0);
  console.log('studentsOnTime-->', studentsOnTime);
  if (studentsOnTime.length >= k) {
    return 'NO';
  } else {
    return 'YES';
  }
}
