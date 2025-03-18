import { FastifyRequest, FastifyReply } from 'fastify';

export async function editUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	const username = "user1";
	const newUsername = "user2";
	const password = "user1pass";
	const newPassword = "user2pass";

   // use actual frontend body from client
   //const {name, username, email, password} = request.body;

	try {
		console.log("username: " + username);
		console.log("new username: " + newUsername);
		console.log("password: " + password);
		console.log("new password: " + newPassword);
		
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}
		const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
		const user = stmt.get(username, password);
		if (user)
		{
			const stmt = db.prepare("UPDATE userTable SET username = ?, password = ? WHERE username = ? AND password = ?");
			const result = stmt.run(newUsername, newPassword, username, password);
			if (result.changes > 0) {
				console.log("User edited: " + username);
				return reply.send({ message: `User successfully edited from: ${username} to: ${newUsername}` });
			}
		}
		else {
			return reply.send({ error: "No matching user found or no changes made" });
		}
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "Edit user failed" });
	}
};

// assuming below will be in the frontend?
//if (!username || !newUsername || !password || !newPassword) {
	//	return reply.send({error: "All fields are required"});
	//}