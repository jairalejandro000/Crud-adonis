'use strict'

const Response = require('@adonisjs/framework/src/Response')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class RangoNumero {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({request , response}, next) {
    const num = request.input('number')
    if(num <= 0 || num>=100){
      return response.status(401).json({menssage: 'error el ingresar el numero, verifique y vuelva a intentar'})
    }
    await next()
  }
}

module.exports = RangoNumero
