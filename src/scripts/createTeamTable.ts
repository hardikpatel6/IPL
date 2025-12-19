import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbDocClient } from "../config/dynamoClient"; // LOW-LEVEL DynamoDBClient
import dotenv from "dotenv";
dotenv.config();

async function createTeamMatchTable(tableName: string) {
  const command = new CreateTableCommand({
    TableName: tableName,

    AttributeDefinitions: [
      { AttributeName: "PK", AttributeType: "S" },
      { AttributeName: "SK", AttributeType: "S" }
    ],

    KeySchema: [
      { AttributeName: "PK", KeyType: "HASH" },   // TEAM#
      { AttributeName: "SK", KeyType: "RANGE" }   // SEASON#MATCH#
    ],

    BillingMode: "PAY_PER_REQUEST",
  });

  try {
    await ddbDocClient.send(command);
    console.log(`✅ TeamMatch table '${tableName}' created`);
  } catch (err) {
    console.error("❌ Error creating TeamMatch table:", err);
  }
}

(async () => {
  await createTeamMatchTable(process.env.TABLE_NAME_TEAMS!);
})();
