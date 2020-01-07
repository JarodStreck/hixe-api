const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = [
    gql`
        type Query {
            getRace: Race 
            getRaces: [Race] 
            getUserRaces: [Race] 
            createRaceformInfo: [Race]
        }
        type Mutation {
            createRace(race: String): Race
        }
        type Difficulty{
            name: String
        }
        type State{
            name: String
        }
        type Race{
            Id: ID
            name: String
            description: String
            startDate: String
            endDate: String
            formType: String
            meetingHour: String
            heightDifference: Int
            maxParticipant: Int
            state: State
            difficulty: Difficulty
        }
    `
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
module.exports = typeDefs;
