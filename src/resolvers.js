const resolvers = {
    Query: {
        getRaces: async (_, __, { dataSources }) => {
            console.log("ok")
            return dataSources.raceAPI.getAllRaces();
        },
        getRace: async (_, args, { dataSources }) => {
            return dataSources.raceAPI.getRaceById(args.id);
        }
    },
    Mutation: {
        createRace: async (_, args, { dataSources }) => {
            return dataSources.raceAPI.createRace(args);
        }
    },
    Race: {
        async state(race) {
            return race.getState()
        },
        async difficulty(race) {
            return race.getDifficulty()
        },
        // state: async (obj, args, context, info) =>
        //     context.db.state.findByPk(obj.stateId),
        // difficulty: async (obj, args, context, info) =>
        //     context.db.difficulties.findByPk(obj.difficultyId)
    }

};
module.exports = resolvers;
