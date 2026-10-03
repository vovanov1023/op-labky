'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const conObj = {
    name: 'foo'
  };
  let varObj = {
    name: 'bar'
  };
  conObj.name = 'bar';
  varObj.name = 'foo';

  varObj = {
    name: 'foobar'
  };
};

module.exports = { fn };
