const { DataSource } = require("apollo-datasource");
//const db = require('../utils/connect')

var db = require("../../models");
var Races = db.races;
var Difficulties = db.difficulties;
var States = db.state;
var Materials = db.materials;
var Users = db.users;

class RaceAPI extends DataSource {
  async getAllRaces(args) {
    let filter = {};

    if (args.state || args.creator) {
      filter.include = [];
    }
    if (args.state) {
      filter.include.push({
        model: db.state,
        where: { name: args.state }
      });
    }
    if (args.creator) {
      filter.include.push({
        model: db.users,
        as: "Creator",
        where: { id: args.creator }
      });
    }

    return Races.findAll(filter);
  }
  async getRaceById(id) {
    return Races.findAll({
      where: {
        id: id
      }
    });
  }
  async getDifficulties() {
    return Difficulties.findAll();
  }
  async getStates() {
    return States.findAll();
  }
  async getMaterials() {
    return Materials.findAll();
  }
  async createRace(race) {
    return Races.create({
      name: race.input.name,
      description: race.input.description,
      startDate: race.input.startDate,
      endDate: race.input.endDate,
      formType: race.input.formType,
      meetingHour: race.input.meetingHour,
      meetingLocation: race.input.meetingLocation,
      heightDifference: race.input.heightDifference,
      maxParticipant: race.input.maxParticipant,
      difficultyId: race.input.difficultyId
    });
  }
  async getUsers() {
    return Users.findAll();
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
