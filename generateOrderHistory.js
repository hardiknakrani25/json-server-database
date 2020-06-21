var faker = require('faker');

var database = { orders: []};

for (var i = 1; i<= 5; i++) {
    let list = [];
    for (var j = 1; j<= 5; j++) {
        list.push({
             id: j,
            date: faker.date.recent(20),
            value: faker.random.number({min:100, max:999}),
            type: faker.random.arrayElement(['Delivery', 'Takeaway', 'Dine-in']),
        });
    }
  database.orders.push({
    id: i,
        orders: list,
  });
}

console.log(JSON.stringify(database));