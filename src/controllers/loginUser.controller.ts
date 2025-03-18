import { FastifyRequest, FastifyReply } from 'fastify';

export async function loginUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

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
			return reply.send({ error: "Database connection error"});
		}
		const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
		const user = stmt.get(username, password);
		if (user) 
			reply.send({ message: `User logged in successfully: ${username}`});
		else
			reply.send({ error: "Invalid credentials" });
	}
	catch (err) {
		console.log(err);
		return reply.send("login page");
	}
};

// reply with dashboard of logged in user (request the frontend for that page with that user specifics)

// assuming this is a frontend thing
//if (!username || !password) {
//	return reply.send("must fill both fields" }); }