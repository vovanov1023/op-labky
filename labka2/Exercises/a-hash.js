'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
  Balabanoid: '+22833767425',
  Groshi: '+8805553535',
  Burak: '+647823195',
  Hazandagon: '+019627385'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
