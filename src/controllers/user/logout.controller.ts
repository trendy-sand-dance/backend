import { FastifyRequest, FastifyReply } from 'fastify';

export async function logout(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	// take the data from logged in profile to then select right user to logout
	const { username, password} = request.body as { username: string, password: string };
	const db = request.server.db;
	if (!db)
		return reply.send({ error: "Database connection error" });

	const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
	const user = stmt.get(username, password);
	if (user) {
		const stmt = db.prepare("UPDATE userTable SET status = ? WHERE username = ? AND password = ?");
		const result = stmt.run(0, username, password);
		return reply.send(`${username} logged out`);
		// return to home page
	}
	// return to profile? this shouldnt fail
	return reply.send(`logging out failed..`);
};
