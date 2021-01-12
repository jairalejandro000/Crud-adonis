'use strict'
const Direction = use('App/Models/Direction')
const { validate } = use('Validator')
class DirectionController {
    async create ({ request, response }) {
        const rules = {
            country: 'required',
            state: 'required',
            city: 'required',
            street: 'required',
            number: 'required',
            reference: 'required'}
            try{
        const validation = await validate(request.all(), rules)
        if (validation.fails()){
            return response.status(401).json({ message: 'error en la validacion'})}
        else {
            const {country, state, city, street, number, reference} = request.all()
        const d = Direction.create({
            country, state, city, street, number, reference})
        return response.status(201).json({ message: 'direccion agregada correctamente', d})}}
        catch(error) {
            return response.status(401).send();
          }
    }
}

module.exports = DirectionController
