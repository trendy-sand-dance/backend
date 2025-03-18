import { FastifyRequest, FastifyReply } from 'fastify';

export async function deleteUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {


	const username = "user1";
	const password = "user1pass";

	// use actual frontend body from client
	//const { username, password } = request.body;

	try {
		console.log("username: " + username);
		console.log("password: " + password);
		
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}
		const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
		const user = stmt.get(username, password);
		if (user)
		{
			const stmt = db.prepare("DELETE FROM userTable WHERE username = ? AND password = ?");
			const result = stmt.run(username, password);
			console.log("User deleted: " + username);
			return reply.send({ message: `User successfully deleted: ${username}` });
		}
		else
			reply.send({ error: "Invalid credentials / non-existent user" });
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "User deletion failed" });
	}
};


// assuming this is a frontend thing
//if (!username || !password) {
//	return reply.send("must fill both fields" }); }