import pgPromise from 'pg-promise';
import { ConnectionString } from 'connection-string';

export const pgp = pgPromise();

const cnObj = new ConnectionString(process.env.DATABASE_URL);

const cn = {
  host: cnObj.hostname,
  port: cnObj.port,
  database: cnObj.path?.[0],
  user: cnObj.user,
  password: cnObj.password,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

export const db = pgp(cn);