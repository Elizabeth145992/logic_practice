const user = {
  id: 1,
  name: "Elizabeth",
  age: 28,
  city: "Yuriria",
  role: "Developer"
};

const { name, role } = user;
console.log('name: ', name);
console.log('role: ', role);

const updatedUser = {...user, city: 'Irapuato'};
console.log('user: ', user);
console.log('updatedUser: ', updatedUser);

const numbers = [10,20,30,40,50];

const [a, b, ...rest] = numbers;
console.log('a: ', a);
console.log('b: ', b);
console.log('rest: ', rest);

function printUser({name, age}){
    console.log('name: ', name);
    console.log('age: ', age);
}

printUser(user);