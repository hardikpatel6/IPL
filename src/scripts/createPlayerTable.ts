import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbDocClient } from "../config/dynamoClient"; // NOTE: low-level client
import dotenv from "dotenv";
dotenv.config();

async function createPlayerTable(tableName: string) {
  const command = new CreateTableCommand({
    TableName: tableName,

    AttributeDefinitions: [
      { AttributeName: "PK", AttributeType: "S" },
      { AttributeName: "SK", AttributeType: "S" }
    ],

    KeySchema: [
      { AttributeName: "PK", KeyType: "HASH" },  // Partition Key
      { AttributeName: "SK", KeyType: "RANGE" }  // Sort Key
    ],

    BillingMode: "PAY_PER_REQUEST",
  });

  await ddbDocClient.send(command);
  console.log(`✅ Table '${tableName}' created`);
}

(async () => {
  await createPlayerTable(process.env.TABLE_NAME_PLAYER!);
})();
