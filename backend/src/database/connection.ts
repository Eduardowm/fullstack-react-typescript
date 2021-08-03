import { createConnection } from "typeorm";
import connectionOptions from "./ormconfig";

export const initializeMongoDB = async (): Promise<void> => {
  try {
    await createConnection(connectionOptions);
  } catch (error) {
    console.error(`[DB ERROR] ${error.message}`);
  }
};
