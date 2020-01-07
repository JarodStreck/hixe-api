const resolvers = {
    Query: {
        getRaces: async (_, __, { dataSources }) => {
            console.log("ok")
            return dataSources.raceAPI.getAllRaces();
        }
    },
    Race: {
        state: async (obj, args, context, info) =>
            context.db.state.findByPk(obj.stateId),
        difficulty: async (obj, args, context, info) =>
            context.db.difficulties.findByPk(obj.difficultyId)
    }
};
module.exports = resolvers;
