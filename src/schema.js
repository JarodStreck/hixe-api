const {
    gql
} = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = [
    gql`
        type Query {
            getRace(id: ID): [Race]
            getRaces: [Race]
            getUserRaces: [Race] 
            getMaterials: [Material]
            getDifficulties: Difficulty
            getStates: State
            createRaceformInfo: [Race]
        }

        type Mutation {
            createRace (input: RaceInput): Race
        }
      
        type Difficulty{
            id: ID!
            name: String
        }
        type State{
            id: ID!
            name: String
        }
        type Material{
            id: ID!
            name: String
        }
        type Group{
            name: String
        }
        type User{
            firstname: String
            lastname: String
            group: Group
        }
        input RaceInput{
            name: String
            description: String
            startDate: String
            endDate: String
            formType: String
            meetingHour: String
            meetingLocation: String
            heightDifference: Int
            maxParticipant: Int
            stateId: ID
            difficultyId: ID!
        }

        type Race{
            Id: ID
            name: String
            description: String
            startDate: String
            endDate: String
            formType: String
            meetingHour: String
            meetingLocation: String
            heightDifference: Int
            maxParticipant: Int
            state: State
            difficulty: Difficulty
            materials: [Material]
            participants: [User]
        }
    `
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
module.exports = typeDefs;