//import { FastifyRequest, FastifyReply } from 'fastify';
////import Database from "better-sqlite3";

///**
// * 
// * 	
//	//const stmt = db.prepare("INSERT INTO userTable (name, email, username, password) VALUES (?, ?, ?, ?)");
//	//const result = stmt.run("sarah", "sarah", "sarah", "sarah");
//	//console.log(result);

//	this worked in dbConnector to add user manualy
// */

//export async function registerUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {
//	//const {name, username, email, password} = request.body;
//	//if (!name || !username || !email || !password) {
//	//	return reply.send({error: "All fields are required"});
//	//}
//	try {
//		const db = request.server.db;
//		if (!db) {
//			console.error("Database is not initialized");
//			return reply.send({ error: "Database connection error" });
//		}

//		const stmt = db.prepare("INSERT INTO userTable (name, email, username, password) VALUES (?, ?, ?, ?)");
//		const result = stmt.run("flip", "flip", "flip", "flip");
//		return reply.send({ message: `New user added: flip`, id: result.lastInsertRowid });
//	}
//	catch (err) {
//		console.log(err);
//		return reply.send({ error: "Registration failed" });
//	}
//};
