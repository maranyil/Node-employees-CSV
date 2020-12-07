# Employees-csv

  

You can use node to find specific data in csv. This app turns csv file to json, to be able to find objects using keys.

## Show all data:

Launch the app with `node index.js`. This will show you all the employees data in .json format.

## Show specific employee by id:

Launch the app with `node index.js <employee_id>`. For example, `node index.js 3`, bring the third employee data.

## Show specific data of an employee:

Launch the app with `node index.js <employee_id> <argument_key>`. For example, `node index.js 3 first_name`, bring the first name of the third employee. You can search by `'id', 'first_name', 'last_name', 'email',  'ip_address'`

#####   This exercise is part of Enroute's Rockstars5 program