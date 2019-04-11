var faker = require('faker');

// console.log(faker);
console.log('====================');
console.log('WELCOME TO MY SHOP !');
console.log('====================');
// var randomName = faker.name.findName();
// var randomEmail = faker.internet.email();
// var randomCard = faker.helpers.createCard();


// Show random Product name and random Price
var productName = faker.commerce.productName();
var randomPrice = faker.commerce.price();
for(var i = 0; i <= 10; i++){
    // console.log(name, price);

    console.log(faker.commerce.productName() + ' ' + faker.commerce.price());
}
// console.log(faker.fake(', '));


// console.log(fakerr(str, num));
