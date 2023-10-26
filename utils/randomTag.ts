import { faker } from "@faker-js/faker";

export const tags = Array.from(
  new Set([
    faker.hacker.adjective(),
    faker.hacker.adjective(),
    faker.hacker.adjective(),
    faker.hacker.adjective(),
    faker.hacker.adjective(),
    faker.hacker.adjective(),
    faker.hacker.adjective(),
    faker.hacker.adjective(),
  ])
);

export default function randomTag() {
  return Array.from(
    new Set(
      faker.helpers.arrayElements(tags, {
        min: 2,
        max: tags.length,
      })
    )
  );
}
