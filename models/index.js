const sequelize = require('sequelize');
const villainsModel = require('./villains');
const connection = new sequelize('villains','villains','villain$', {
    host:'localhost', dialect:'mysql'});
const villains = villainsModel(connection, sequelize);


module.exports = {villains}