import { APIGatewayProxyHandler } from "aws-lambda";
import { getAllMatches } from "../repositories/dynamodbLogic";
import { successResponse, errorResponse } from "../utils/response";

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const matches = await getAllMatches();
    return successResponse(matches);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch matches");
  }
};
