'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Direction', (faker) => {
    return {
        country: faker.country(),
        state: faker.state(),
        city: faker.city(),
        street: faker.street(),
        number: faker.integer(),
        reference: faker.string()
    }
})
