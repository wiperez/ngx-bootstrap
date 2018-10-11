'use strict';

const execa = require('execa');
const option = process.argv[2];

changeVersion(option);

async function changeVersion(option) {
  console.log(`Updating version`);
  await execa.shell(`find . -maxdepth 1 -name package.json -exec bash -c "npm --prefix \\$(dirname {}) version ${option}" \\;`);
  await execa.shell(`find src -maxdepth 2 -name package.json -exec bash -c "npm --prefix \\$(dirname {}) version ${option}" \\;`);
  await execa.shell(`npm run version.changelog`);
  console.log('completed');
}
