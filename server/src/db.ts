import { Pool } from "pg"

export const pool = new Pool ( {
  host: "db",
  port: 5432,
  user: process.env [ "USER" ] || "youruser",
  password: process.env [ "PASS" ] || "yourpass",
  database: process.env [ "DB" ] || "yourdb",
} )
