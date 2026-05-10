import { faker } from "@faker-js/faker";

function generateProducts(count = 10) {

    const products = [];

    for(let i = 0; i < count; i++) {
        products.push({
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            category: faker.commerce.department(),
            description: faker.commerce.productDescription(),
            image: faker.image.url(),
            brand: faker.company.name(),
        });
    }

    return products;
}

export default generateProducts;