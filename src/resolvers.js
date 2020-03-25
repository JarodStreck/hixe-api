var db = require("../models");

const resolvers = {
  Query: {
    getRaces: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.getAllRaces(args);
    },
    getRace: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.getRaceById(args.id);
    },
    getDifficulties: async (_, __, { dataSources }) => {
      return dataSources.raceAPI.getDifficulties();
    },
    getStates: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.getStates(args);
    },
    getMaterials: async (_, __, { dataSources }) => {
      return dataSources.raceAPI.getMaterials();
    },
    getUsers: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.getUsers(args);
    },
    getUserRaces: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.getUserRaces(args);
    },
  },
  Mutation: {
    createRace: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.createRace(args);
    },
    login: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.login(args);
    }
  },

  Race: {
    async state(race, args) {
      return race.getState({ where: args });
    },
    async difficulty(race) {
      return race.getDifficulty();
    },
    async materials(race) {
      let materials = await race.getMaterials();
      let materialsCheck = await race.getMaterialCheck();
      let materialObj = materials.map(material => {
        material.check = materialsCheck.map(materialCheck => {
          return materialCheck.id == material.id ? true : false;
        })[0];

        return material;
      });
      return materialObj;
    },
    async participants(race) {
      return race.getUsers();
    },
    async creator(race) {
      return race.getCreator();
    }
    // state: async (obj, args, context, info) =>
    //     context.db.state.findByPk(obj.stateId),
    // difficulty: async (obj, args, context, info) =>
    //     context.db.difficulties.findByPk(obj.difficultyId)
  }
};
module.exports = resolvers;
