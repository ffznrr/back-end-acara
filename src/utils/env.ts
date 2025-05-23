import dotenv from "dotenv";

dotenv.config();

export const DATABASE_UR: string = process.env.DATABASE_URL || "";
export const SECRET: string = process.env.SECRET || "";
