'use strict'

/*
|--------------------------------------------------------------------------
| DirectionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DirectionSeeder {

  async run () {
    const usersArray = await Factory
  .model('App/Models/Direction')
  .createMany(40)
  }
}

module.exports = DirectionSeeder
