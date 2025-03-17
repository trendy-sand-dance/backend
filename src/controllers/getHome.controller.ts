import { FastifyRequest, FastifyReply } from 'fastify';
import Database from "better-sqlite3";

interface User {
	id: number;
	name: string;
	username: string;
	password: string;
	email: string;
}

export async function getHome(request: FastifyRequest, reply: FastifyReply): Promise<void> {
	
	//const db: Database = request.server.db;
	//const query = `SELECT * FROM userTable`;
	//const userTable: User[] = db.prepare(query).all() as User[];
	//return reply.send({ title: "Home", userTable });
	return reply.send("home page");
};