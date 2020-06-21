var faker = require('faker');

var database = { users: []};

for (var i = 1; i<= 5; i++) {
  database.users.push({
    id: i,
    user: {
	    name: faker.name.findName(),
	    email: faker.internet.email(),
    },
    phone: faker.phone.phoneNumber('+9199########'),
    lod: faker.date.recent(20),
    total_revenue: faker.random.number({min:100, max:999}),
    total_orders: faker.random.number(100),
    is_favourite: faker.random.boolean(),
  });
}

console.log(JSON.stringify(database));