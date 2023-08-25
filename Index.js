const User = require("./User");

let a1 = User.createAdmin("Pritish", 21, 'M')
let user1 = a1.createUser("Rossi", 25, 'M')
// let user2 = a1.createUser("Dipti", 23, 'F')
// let user3 = a1.createUser("Sonali", 21, 'F')
// let user4 = a1.createUser("Mimi", 27, 'F')
// console.log(a1);


// console.log(User.allUsers);
//maybe admin id is 1 but u cant get admin since its not stored in list
// console.log(a1.getUser(1));
// console.log(a1.getUser(2));
// console.log(a1.getUser(3));
// a1.updateUser(3, 'name', "prachi" )
// console.log(a1.getUser(3));
// a1.updateUser(3, 'age', 'xyz' )
// console.log(a1.getUser(3));

// console.log(a1.getUser(4));
// a1.deleteUser(4);
// console.log(User.allUsers);

user1.createContact("shubham")
user1.createContact("adarsh")
user1.createContact("nitish")
user1.getAllContact()
// user1.getContact()
// user1.updateContact()
// user1.deleteContact()
