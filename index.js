const fs = require('fs');
const args = process.argv.slice(2);
const id = args[0];
const arg = args[1];

fs.readFile('employees.csv', 'utf8', function (err, data) {
  if (err) {
    console.log(err.message);
    return;
  }

  let keys = data.split('\n')[0].split(',');

  let employeeObj = data
    .split('\n')
    .slice(1)
    .map((employees) => {
      let res = {};
      keys.forEach((header) => {
        res[header] = employees.split(',')[keys.indexOf(header)];
      });
      return res;
    });

  let idSearch = employeeObj.filter((employees) => {
    return employees.id == id;
  });

  if (args.length < 1) {
    console.log('Employees: \n', employeeObj);
    return;
  }

  if (arg) {
    let employeeObj = idSearch[0];
    if (employeeObj.hasOwnProperty(arg)) {
      console.log(`${arg}: ${employeeObj[arg]}`);
    }
  } else {
    console.log(idSearch);
  }
});
