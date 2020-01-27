
const { DataSource } = require("apollo-datasource");
//const db = require('../utils/connect')

var db = require('../../models')
var Races = db.races;
var Difficulties = db.difficulties;
var States = db.state;
var Materials = db.materials;
class RaceAPI extends DataSource {
    /*initialize(config) {
        this.context = config.context;

    }*/

    async getAllRaces() {

        // let sql;
        // sql = 'SELECT races.id,races.name,description,startDate,endDate,formType,location,meetingLocation,meetingHour,heightDifference,maxParticipant,states.name as state,difficulties.name AS difficulty FROM races INNER JOIN states ON state_id = states.id INNER JOIN difficulties ON difficulty_id = difficulties.id;'

        // const races = await this.promiseSQLQuery(sql)
        // for (var race of races) {
        //     sql = 'SELECT materials.name,materials.description FROM neededMaterials INNER JOIN materials ON neededMaterials.material_id = materials.id INNER JOIN races ON races.id = neededMaterials.race_id WHERE neededMaterials.race_id = ' + race.id
        //     const materials = await this.promiseSQLQuery(sql)
        //     sql = 'SELECT  firstname,lastname FROM participants INNER JOIN users ON users.id = user_id WHERE race_id =' + race.id;
        //     const participants = await this.promiseSQLQuery(sql)
        //     race.material = materials
        //     race.participants = participants

        // }
        // const races = Races.findAll()
        // races.then((result) => {
        //     console.log(result.get)
        // })
        return Races.findAll()
    }
    async getRaceById(id) {

        return Races.findAll({
            where: {
                id: id
            }
        })
    }
    async getDifficulties() {
        return Difficulties.findAll()
    }
    async getStates() {
        return States.findAll()
    }
    async getMaterials() {
        return Materials.findAll()
    }
    async createRace(race) {
        return Races.create({
            name: race.name,
            description: race.description,
            startDate: race.startDate,
            endDate: race.endDate,
            formType: race.formType,
            meetingHour: race.meetingHour,
            meetingLocation: race.meetingLocation,
            heightDifference: race.heightDifference,
            maxParticipant: race.maxParticipant,
        })
    }

    // async promiseSQLQuery(query) {
    //     return new Promise((resolve, reject) => {
    //         db.query(query, (error, results, fields) => {
    //             if (error) console.log(error);
    //             resolve(JSON.parse(JSON.stringify(results)))
    //         })
    //     })
    // }

}
module.exports = RaceAPI;
