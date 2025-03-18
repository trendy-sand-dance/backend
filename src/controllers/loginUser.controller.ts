import { FastifyRequest, FastifyReply } from 'fastify';

export async function loginUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	const {username, password} = request.body as {username: string, password: string};
	try {
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error"});
		}
		const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
		const user = stmt.get(username, password);
		if (user) 
			reply.send({ message: `User logged in successfully: ${username}`});
		// after success, go to logged in used profile page + give name + email of that user
		else
			reply.send({ error: "Invalid credentials" });
		// refresh login page?
	}
	catch (err) {
		console.log(err);
		return reply.send("login page");
	}
};
