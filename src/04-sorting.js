const people = [
  { name: "Bob", age: 29 },
  { name: "Alice", age: 42 },
  { name: "Greg", age: 23 },
  { name: "Jean", age: 50 },
];

const orderAgeDescending = ( people ) => {
  return people.sort((a, b) => {
    return a.age < b.age ? 1 : -1;
  })
}

const orderNameAlphabeticallyAscending = ( people ) => {
  return people.sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  })
}

const getAges = ( people ) => {
  return people.map(person => person.age)
}

console.log('people', people);
console.log('orderAgeDescending(people)', orderAgeDescending(people));
console.log('orderNameAlphabeticallyAscending(people)', orderNameAlphabeticallyAscending(people));
console.log('getAges(people)', getAges(people));

