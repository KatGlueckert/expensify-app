
//object descructuring 
// const person = {
//     name: 'Kat',
//     age: 21,
//     location: {
//         city: 'dallas',
//         temp: 95
//     }
// };

// const {name : firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// };

// const {name : publisherName = 'Self-Publish'} = book.publisher;



// console.log(publisherName);



//array destructuring 

const address = ['1299 S Juniper Street', 'Dallas', 'Texas', '35401'];

const [, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);