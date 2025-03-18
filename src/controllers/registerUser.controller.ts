import { FastifyRequest, FastifyReply } from 'fastify';

export async function registerUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	 const name = "user";
	 const username = "user1";
	 const email = "user1@mail.com";
	 const password = "user1pass";

	// use actual frontend body from client
	//const {name, username, email, password} = request.body;
	
	try {
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}

		const stmt = db.prepare("INSERT INTO userTable (name, email, username, password) VALUES (?, ?, ?, ?)");
		const result = stmt.run(name, username, email, password);
		return reply.send({ message: `New user added: ${username}`, id: result.lastInsertRowid });
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "Registration failed" });
	}
};


 // if needed for testing
// const name = "user";
// const username = "user1";
// const email = "user1@mail.com";
// const password = "user1pass";

// assuming below will be in the frontend?
//if (!name || !username || !email || !password) {
	//	return reply.send({error: "All fields are required"});
	//}
