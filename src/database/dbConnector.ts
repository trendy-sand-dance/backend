import Database from 'better-sqlite3';
import fp from "fastify-plugin";
import fs from 'fs';
import path from 'node:path';
import { FastifyInstance } from 'fastify';

const databasePath = path.join(__dirname, '/database.db');

async function dbConnector(fastify: FastifyInstance): Promise<void> {
	let db;

	if (fs.existsSync(databasePath)) {
		console.log("Database already exists at: ", databasePath);
		db = new Database(databasePath, { verbose: console.log });
	}
	else {
		console.log("Creating new database at: ", databasePath);
		db = new Database(databasePath, { verbose: console.log });

		const query = `
			CREATE TABLE userTable (
				id INTEGER PRIMARY KEY,
				username STRING NOT NULL UNIQUE,
				password STRING NOT NULL,
				email STRING NOT NULL UNIQUE,
				avatar STRING,
				status FALSE
			)
		`;
// status, not null default to 0/false

		db.exec(query);
		console.log("Database created successfully!");
	}
	fastify.decorate("db", db);
	if (db)
		console.log("Database attached to Fastify instance:", fastify.hasDecorator("db"), " = ", fastify.db);

	fastify.addHook("onClose", (fastify, done) => {
		if (db) {
			db.close();
		}
		done();
	});
};

export default fp(dbConnector);