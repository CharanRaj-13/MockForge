import { faker } from "@faker-js/faker";

function generateUsers(count = 10) {
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      username: faker.internet.username(),
      avatar: faker.image.avatar(),
      phone: faker.phone.number(),
      city: faker.location.city(),
      country: faker.location.country(),
      company: faker.company.name(),
    });
  }

  return users;
}

export default generateUsers;