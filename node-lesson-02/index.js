const student = require("./arrayExport");
student.forEach((student) => {
  if (student.firstName === "John") {
    student.age = 23;
  }
});

student.forEach((student) => {
  console.log(
    `${student.firstName} has the age property ${student.hasOwnProperty(
      "age"
    )} and its value ${student.age}`
  );
});
