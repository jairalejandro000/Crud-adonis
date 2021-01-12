'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DirectionsSchema extends Schema {
  up () {
    this.create('directions', (table) => {
      table.increments()
      table.string('country', 20).notNullable()
      table.string('state', 50).notNullable()
      table.string('city', 60).notNullable()
      table.string('street', 80).notNullable()
      table.integer('number', 4).notNullable()
      table.string('reference', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('directions')
  }
}

module.exports = DirectionsSchema