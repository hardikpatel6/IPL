import { APIGatewayProxyHandler } from "aws-lambda";
import { getAllTeams } from "../repositories/dynamodbLogic";
import { successResponse, errorResponse } from "../utils/response";

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const teams = await getAllTeams();
    return successResponse(teams);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch teams");
  }
};
