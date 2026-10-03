'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Balabanoid', phone: '+22833767425' },
  { name: 'Groshi', phone: '+8805553535' },
  { name: 'Burak', phone: '+647823195' },
  { name: 'Hazandagon', phone: '+019627385' },
];

const findPhoneByName = (name) => {
  for (const ent of phonebook) {
    if (ent.name === name) return ent.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
