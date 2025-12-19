
import { getAllSeasons,getAllTeams,getAllMatches,getAllPlayers } from "../repositories/dynamodbLogic";

export const resolvers = {
  Query: {
    getAllSeasons: async () => {
      return await getAllSeasons();
    },
    getAllTeams: async () => {
      return await getAllTeams();
    },
    getAllMatches: async () => {
      return await getAllMatches();
    },
    getAllPlayers: async () => {
      return await getAllPlayers();
    }
  },
};