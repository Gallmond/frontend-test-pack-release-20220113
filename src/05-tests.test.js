const {
  people,
  orderAgeDescending,
  orderNameAlphabeticallyAscending,
  getAges,
} = require("./05-testing-functions");

test('can sort by age descending', ()=>{
  const sorted = orderAgeDescending( people );
  expect(sorted[0].age).toBe(50)
  expect(sorted[1].age).toBe(42)
  expect(sorted[2].age).toBe(29)
  expect(sorted[3].age).toBe(23)
})

test('can sort by name alphabetically ascending',  ()=>{
  const sorted = orderNameAlphabeticallyAscending( people );
  expect(sorted[0].name).toBe('Alice')
  expect(sorted[1].name).toBe('Bob')
  expect(sorted[2].name).toBe('Greg')
  expect(sorted[3].name).toBe('Jean')
})

test('can get ages',  ()=>{
  const onlyAges = getAges( people );
  expect(onlyAges[0]).toBe(29)
  expect(onlyAges[1]).toBe(42)
  expect(onlyAges[2]).toBe(23)
  expect(onlyAges[3]).toBe(50)
})
