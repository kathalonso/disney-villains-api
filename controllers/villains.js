const villains = require('../villains');
const models = require('../models')

const getAllVillains = async (request, response) => {
    const villains = await models.villains.findAll()

    return response.send(villains)
};

const getVillainBySlug = async (request, response) => {
    const { slug } = request.params

    const foundVillain = await villains.findOne( { where: { slug } } )

    return response.send(foundVillain)
};

const createNewVillain = async (request, response) => {
    const { name, movie, slug } = request.body
    if ( !name || !movie || !slug ) {
        return response.status(400).send('Oops! Name, movie, slug is required')
    }
    const newVillain = await models.villains.create({ name, movie, slug, }) 
        return response.status(201).send(newVillain)
};


module.exports = {
    getAllVillains,
    getVillainBySlug,
    createNewVillain,
}