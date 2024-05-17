const cars = ['Bugatti', 'BMW', 'Range Rover'];
const bikes = ['Yamaha', 'Suzuki', 'BMW', 'Ninja']

// cars.push(bikes) //create a nested array

// x = cars[3][3] //access nested array

const allLuxury = [cars, bikes]

x = allLuxury[1][1]

// concatenation method
x = cars.concat(bikes) //merges the two arrays but not in nested format

// spread operator (...)
x = [...cars, ...bikes] //elements in cars and bikes not the array itself
x = [...cars, bikes] //elements in cars but bikes as an array

// flatten arrays
const arr = [1, ["Ninja", "BMW"], 2, ["Suzuki", "Yamaha"], 8]; //a nested array
// alert(arr)
x = arr.flat();

//Methods on array objects
x = Array.isArray(cars) //checks an array
x = Array.from('12345')

console.log(x)