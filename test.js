const { execSync } = require("child_process");
const fs = require("fs");

const student = JSON.parse(fs.readFileSync("./student.json", "utf8"));

let passed = 0;

function check(condition, message) {
  if (condition) {
    console.log(`✅ ${message}`);
    passed++;
  } else {
    console.log(`❌ ${message}`);
    process.exitCode = 1;
  }
}

const output = execSync("node hello.js", { encoding: "utf8" }).trim();
check(
  output === "Hello, World!",
  'Activity 1 – Hello World prints "Hello, World!" to the console'
);

check(student.fullName, "Student info (student.json) fullName is filled in");
check(student.studentNumber, "Student info (student.json) studentNumber is filled in");
check(student.studentEmail, "Student info (student.json) studentEmail is filled in");
check(student.personalEmail, "Student info (student.json) personalEmail is filled in");
check(student.githubAccount, "Student info (student.json) githubAccount is filled in");

console.log(`\n✅ ${passed}/6 tests passed`);
