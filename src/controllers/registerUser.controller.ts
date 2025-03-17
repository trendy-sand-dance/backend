import { FastifyRequest, FastifyReply } from 'fastify';
import Database from "better-sqlite3";

interface User {
	id: number;
	name: string;
	username: string;
	password: string;
	email: string;
}

export async function registerUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {
	try {
		const db = request.server.db;
		console.log("DB instance: ", db);
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}
		const name = "myName";
		const username = "userName";
		const email = "whatever";
		const password = "1234";

		const query = "INSERT INTO userTable (name, email, username, password) VALUES (?, ?, ?, ?)";
		const stmt = db.prepare(query);
		const result = stmt.run(name, username, email, password);
		console.log("New user created: newUser");
		return reply.send({ message: `New user added: newUser`, id: result.lastInsertRowid });
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "Registration failed" });
	}
};
