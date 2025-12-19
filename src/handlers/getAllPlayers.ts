import { APIGatewayProxyHandler } from "aws-lambda";
import { getAllPlayers } from "../repositories/dynamodbLogic";
import { successResponse, errorResponse } from "../utils/response";

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const players = await getAllPlayers();
    return successResponse(players);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch players");
  }
};
