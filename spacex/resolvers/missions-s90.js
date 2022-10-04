const faker = require("faker");

module.exports = {
  Mission: {
    owner: () => "nicky",
    email: () => faker.internet.email(),
  },
};
