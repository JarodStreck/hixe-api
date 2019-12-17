const { ApolloServer } = require('apollo-server');
const typeDefs = require("./schema.js");
//const { makeExecutableSchema } = require("graphql-tools");
const RaceAPI = require("./datasources/races.js")
const resolvers = require("./resolvers.js");


const dataSources = () => ({
    raceAPI: new RaceAPI,
});



// const schema = makeExecutableSchema({
//     typeDefs: typeDefs,
//     resolvers
// });
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
    dataSources
});
// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

module.exports = {
    dataSources,
    ApolloServer,
    server,
    resolvers,
    typeDefs
};