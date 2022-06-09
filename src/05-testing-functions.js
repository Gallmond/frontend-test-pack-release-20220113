const people = [
  { name: 'Bob', age: 29 },
  { name: 'Alice', age: 42 },
  { name: 'Greg', age: 23 },
  { name: 'Jean', age: 50 },
]

/**
 * prevents mutating original object (assuming that's the intent?)
 *
 * @param {object} object Source object.
 * @returns {object} Cloned object.
 */
const simpleClone = (object) => {
  return structuredClone
    ? structuredClone(object)
    : JSON.parse(JSON.stringify(object))
}

const orderAgeDescending = (people) => {
  const _people = simpleClone(people)
  return _people.sort((a, b) => {
    return a.age < b.age ? 1 : -1
  })
}

const orderNameAlphabeticallyAscending = (people) => {
  const _people = simpleClone(people)
  return _people.sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  })
}

const getAges = (people) => {
  const _people = simpleClone(people)
  return _people.map(person => person.age)
}

module.exports = {
  people,
  orderAgeDescending,
  orderNameAlphabeticallyAscending,
  getAges,
}
