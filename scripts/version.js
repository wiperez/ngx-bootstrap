'use strict';

const execa = require('execa');
const option = process.argv[2];

changeVersion();

async function changeVersion() {
  console.log('Updating version');
  await execa.shell(`find . -maxdepth 3 -name package.json -not -path "*/node_modules/*" -exec bash -c "npm --prefix \\$(dirname {}) version ${option}" \\;`);
  console.log('completed');
}
