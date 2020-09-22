const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { describe, it } = require('mocha')
const { villainsList, singleVillain } = require('../mocks/villainsM')
const { getAllVillains, getVillainBySlug, createNewVillain } = require('../../controllers/villains')

chai.use(sinonChai)
const{ expect } = chai

describe('Controllers - villains', () => {
    describe('getAllVillains', () => {
        it('retrieves list of villains from database and calls response.send() with list', async () => {
            const stubbedFindAll = sinon.stub (models.villains, 'findAll' ).returns(villainsList)
            const stubbedSend = sinon.stub()
            const response = { send: stubbedSend }
            
            await getAllVillains({}, response)

            expect(stubbedFindAll).to.have.callCount(1)
            expect(stubbedSend).to.have.been.calledWith(villainsList)
        })
    })

    describe('getVillainBySlug', () => {
        it('retrieves villain associated with provided slug from database and calls response.send with it', async () => {
            const request = { params: { slug: 'gaston' } }
            const stubbedSend = sinon.stub()
            const response = { send: stubbedSend }
            const stubbedFindOne = sinon.stub(models.villains, 'findOne').returns(singleVillain)
            
            await getVillainBySlug(request, response)

            expect(stubbedFindOne).to.have.been.calledWith( { where: { slug: 'gaston'}})
            expect(stubbedSend).to.have.been.calledWith(singleVillain)
        })

        /*it('returns a 404 when no villain is found', async () => {
            const request = { params: { slug: 'not-found' } }
            const stubbedSendStatus = sinon.stub()
            const response = { sendStatus: stubbedSendStatus }
            const stubbedFindOne = sinon.stub(models.villains, 'findOne').returns(null)

            await getVillainBySlug(request, response)

            expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'not-found' } })
            expect(stubbedSendStatus).to.have.been.calledWith(404)
        })
    })*/

    describe('createNewVillain', () => {
        it('accepts and saves new villain details as new villain, returning the saved record with a 201 status', async () => {
            const request = { body: singleVillain }
            const stubbedSend = sinon.stub()
            const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
            const response = { status: stubbedStatus }
            const stubbedCreate = sinon.stub(models.villains, 'create').returns(singleVillain)

            await createNewVillain(request, response)

            expect(stubbedCreate).to.have.been.calledWith(singleVillain)
            expect(stubbedStatus).to.have.been.calledWith(201)
            expect(stubbedStatus).to.have.been.calledWith(singleVillain)
        })
    })
})