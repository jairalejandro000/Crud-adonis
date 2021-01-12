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
        const validation = await validate(request.all(), rules)
        if (validation.fails()){
            return response.status(401).json({ message: 'error en la validacion'})}
        else {
            const {country, state, city, street, number, reference} = request.all()
        const d = Direction.create({
            country, state, city, street, number, reference})
        return response.status(201).json({ message: 'direccion agregada correctamente'})}
    }

    async update ({ params, request, response }) {   
        const rules = {
            country: 'required',
            state: 'required',
            city: 'required',
            street: 'required',
            number: 'required',
            reference: 'required'}
            const validation = await validate(request.all(), rules)
            if (validation.fails()){
                return response.status(401).json({ message: 'error en la validacion'})}
            else {
                const country = request.input('country')
                const state = request.input('state')
                const city = request.input('city')
                const street = request.input('street')
                const number = request.input('number')
                const reference = request.input('reference')
        let d = await Direction.find(params.id)
        d.country = country
        d.state = state
        d.city = city
        d.street = street
        d.number = number
        d.reference = reference
        await d.save()
        return response.json({message: 'direccion actualizada', d})
            }
    }
    
    async destroy ({ params, response }) {
        Direction.find(params.id).delete()
        return response.json({message: 'direccion eliminada', d})
    } 
}

module.exports = DirectionController
