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
    getStates: async (_, __, { dataSources }) => {
      return dataSources.raceAPI.getStates();
    },
    getMaterials: async (_, __, { dataSources }) => {
      return dataSources.raceAPI.getMaterials();
    },
    getUsers: async (_, __, { dataSources }) => {
      return dataSources.raceAPI.getUsers();
    }
  },
  Mutation: {
    createRace: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.createRace(args);
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
      return race.getMaterials();
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
