import { APIGatewayProxyHandler } from "aws-lambda";
import { getAllSeasons } from "../repositories/dynamodbLogic";
import { successResponse, errorResponse } from "../utils/response";

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const seasons = await getAllSeasons();
    return successResponse(seasons);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch seasons");
  }
};
