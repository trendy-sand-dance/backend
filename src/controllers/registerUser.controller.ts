import { FastifyRequest, FastifyReply } from 'fastify';

export async function registerUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	const { name, username, password, email } = request.body as { name: string, username: string, password: string, email: string };
	try {
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}

		const stmt = db.prepare("INSERT INTO userTable (username, password) VALUES (?, ?, ?, ?)");
		const result = stmt.run(name, username, password, email);
		return reply.send({ message: `New user added: ${name} with username: ${username}`, id: result.lastInsertRowid });
		// return to homepage
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "Registration failed" });
		// refresh registation page
	}
};
