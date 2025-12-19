import { BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../config/dynamoClient";
import dotenv from "dotenv";
dotenv.config();

const TABLE_NAME = process.env.TABLE_NAME_INNINGS as string;
const BATCH_SIZE = 25;

/* 👉 paste your team data array here */
import { AllMatchesInningsData } from "../data/InningData";

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

async function batchWrite(chunk: any[]) {
  let requestItems: Record<string, any[]> = {
    [TABLE_NAME]: chunk.map(item => ({
      PutRequest: {
        Item: item
      }
    }))
  };

  while (Object.keys(requestItems).length > 0) {
    const command = new BatchWriteCommand({
      RequestItems: requestItems
    });

    const response = await ddbDocClient.send(command);

    requestItems = response.UnprocessedItems ?? {};

    if (Object.keys(requestItems).length > 0) {
      await new Promise(res => setTimeout(res, 500));
    }
  }
}

async function seedInningTable() {
  const chunks = chunkArray(AllMatchesInningsData, BATCH_SIZE);

  for (let i = 0; i < chunks.length; i++) {
    console.log(`Uploading Inning batch ${i + 1}/${chunks.length}`);
    await batchWrite(chunks[i]);
  }

  console.log("✅ Inning table seeded successfully");
}

seedInningTable().catch(console.error); 