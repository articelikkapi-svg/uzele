import { neon } from "@neondatabase/serverless";

const NullishQueryFunction = () => {
  console.error(
    "DATABASE_URL is not set. Current env vars related to database:",
    {
      DATABASE_URL: process.env.DATABASE_URL ? "[SET]" : "[NOT SET]",
      NODE_ENV: process.env.NODE_ENV,
    },
  );
  throw new Error(
    "No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set",
  );
};
NullishQueryFunction.transaction = () => {
  console.error(
    "DATABASE_URL is not set for transaction. Current env vars related to database:",
    {
      DATABASE_URL: process.env.DATABASE_URL ? "[SET]" : "[NOT SET]",
      NODE_ENV: process.env.NODE_ENV,
    },
  );
  throw new Error(
    "No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set",
  );
};

console.log("Database connection status:", {
  DATABASE_URL: process.env.DATABASE_URL ? "[SET]" : "[NOT SET]",
  length: process.env.DATABASE_URL?.length || 0,
});

const sql = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : NullishQueryFunction;

export default sql;
