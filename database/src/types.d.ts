import { FastifyInstance } from "fastify";
import Database from "better-sqlite3";

declare module "fastify" {
	interface FastifyInstance {
		db: Database;
	}
	interface FastifyRequest {
		server: FastifyInstance;
	  }
};