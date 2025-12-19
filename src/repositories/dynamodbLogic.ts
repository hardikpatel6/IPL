import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../config/dynamoClient";
import dotenv from "dotenv";
dotenv.config();

export async function getAllSeasons() {
  try {
    const params = {
      TableName: process.env.TABLE_NAME_SEASON || "IPL_Season_Table",
      FilterExpression: "EntityType = :entity",
      ExpressionAttributeValues: {
        ":entity": "Season",
      },
    };

    const result = await ddbDocClient.send(new ScanCommand(params));
    return result.Items;
  } catch (error) {
    console.error("Error fetching seasons:", error);
    throw new Error("Failed to fetch seasons");
  }
}

export async function getAllTeams() {
  try{
    const params = {
    TableName: process.env.TABLE_NAME_TEAMS || "IPL_Teams_Table",
    FilterExpression: "EntityType = :entity",
    ExpressionAttributeValues: {
      ":entity": "Team",
    },
  };
  const result = await ddbDocClient.send(new ScanCommand(params));
  return result.Items;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw new Error("Failed to fetch teams");
  }
  
}

export async function getAllMatches() {
  try{
    const params = {
    TableName: process.env.TABLE_NAME_MATCHES || "IPL_Matches_Table",
    FilterExpression: "EntityType = :entity",
    ExpressionAttributeValues: {
      ":entity": "Match",
    },
  };

  const result = await ddbDocClient.send(new ScanCommand(params));
  return result.Items;
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw new Error("Failed to fetch matches");
  }
}

export async function getAllPlayers() {
  try{
    const params = {
    TableName: process.env.TABLE_NAME_PLAYER || "IPL_Player_Table",
    FilterExpression: "EntityType = :entity",
    ExpressionAttributeValues: {
      ":entity": "Player",
    },
  };
  const result = await ddbDocClient.send(new ScanCommand(params));
  return result.Items;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw new Error("Failed to fetch players");
  }
}



