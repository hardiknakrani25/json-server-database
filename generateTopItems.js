var faker = require('faker');

var database = { items: []};

for (var i = 1; i<= 5; i++) {
  database.items.push({
	id: i,
    item: faker.random.arrayElement(['Crispy Kalakand', 'Kesar Pista Phirni', 'Khoya Khurchan Paratha', 'Thandai Mousse', 'Sugar Free Modak']),
    total_views: faker.random.number({min:100, max:999}),
    total_orders: faker.random.number({min:100, max:999}),
    total_revenue: faker.random.number({min:100, max:999}),
  });
}

console.log(JSON.stringify(database));